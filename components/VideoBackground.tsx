// Drop your compressed video files into /public/video/
// Name them: bg.webm and bg.mp4
// The browser will pick webm first (smaller), falling back to mp4.

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Uncomment once you have video files in /public/video/ */}
      {/*
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/bg.webm" type="video/webm" />
        <source src="/video/bg.mp4"  type="video/mp4" />
      </video>
      */}

      {/* Placeholder gradient shown until you add a real video */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #111 50%, #080808 100%)',
        }}
      />

      {/* Dark overlay on top of video — keep this even after adding video */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 60%, rgba(200,169,126,0.04) 0%, transparent 60%)',
        }}
      />
    </div>
  )
}
