import { useEffect, useRef, useState } from 'react';

const VIDEO_URL = 'https://media.promptsites.co/assets/2ebba8bedd6fed53.mp4';
const MAX_FRAME_WIDTH = 960;
const PLAYBACK_FPS = 30;

type VideoWithRVFC = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: () => void) => number;
  cancelVideoFrameCallback?: (id: number) => void;
};

export function BoomerangVideoBg() {
  const videoRef = useRef<VideoWithRVFC>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLCanvasElement[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;
    const frames = framesRef.current;

    const captureFrame = () => {
      if (!video.videoWidth || !video.videoHeight) return;
      const scale = Math.min(1, MAX_FRAME_WIDTH / video.videoWidth);
      const w = Math.max(1, Math.round(video.videoWidth * scale));
      const h = Math.max(1, Math.round(video.videoHeight * scale));
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      const ctx = c.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, w, h);
      frames.push(c);
    };

    let intervalId: number | undefined;
    let rvcId: number | undefined;

    const onFrame = () => {
      if (cancelled || video.ended) return;
      captureFrame();
      rvcId = video.requestVideoFrameCallback?.(onFrame);
    };

    if (video.requestVideoFrameCallback) {
      rvcId = video.requestVideoFrameCallback(onFrame);
    } else {
      intervalId = window.setInterval(() => {
        if (!cancelled && !video.ended && !video.paused) {
          captureFrame();
        }
      }, 1000 / 60);
    }

    const onEnded = () => setReady(true);
    video.addEventListener('ended', onEnded);

    return () => {
      cancelled = true;
      video.removeEventListener('ended', onEnded);
      if (intervalId !== undefined) window.clearInterval(intervalId);
      if (rvcId !== undefined) video.cancelVideoFrameCallback?.(rvcId);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const frames = framesRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || frames.length === 0) return;

    canvas.width = frames[0].width;
    canvas.height = frames[0].height;

    let raf = 0;
    let idx = 0;
    let dir = 1;
    let last = -1;
    const frameMs = 1000 / PLAYBACK_FPS;

    const tick = (t: number) => {
      if (last < 0 || t - last >= frameMs) {
        last = t;
        ctx.drawImage(frames[idx], 0, 0);
        if (frames.length > 1) {
          idx += dir;
          if (idx >= frames.length) {
            idx = frames.length - 2;
            dir = -1;
          } else if (idx < 0) {
            idx = 1;
            dir = 1;
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ready]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        crossOrigin="anonymous"
        className="w-full h-full object-cover"
        style={{ display: ready ? 'none' : 'block' }}
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{ display: ready ? 'block' : 'none' }}
      />
    </div>
  );
}
