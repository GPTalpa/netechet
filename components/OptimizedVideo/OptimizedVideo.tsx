interface IOptimizedVideo {
  videoName: string;
}

export default function OptimizedVideo({ videoName }: IOptimizedVideo) {
  return (
    <video
      width="100%"
      height="auto"
      controls
      preload="none"
      poster={`/video/${videoName}.webp`}
      playsInline
    >
      <source src={`/video/${videoName}.webm`} type="video/webm" />
      <source src={`/video/${videoName}.mp4`} type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  );
}
