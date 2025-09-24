"use client"
import { useEffect, useRef, useState } from "react"

const videos = [
  "/videos/reel1.mp4",
  "/videos/reel2.mp4",
  "/videos/reel3.mp4",
]

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0)
  const mobileVideoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const desktopVideoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % videos.length)
    }, 9000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Handle mobile videos
    mobileVideoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === current) {
        video.play()
      } else {
        video.pause()
        video.currentTime = 0
      }
    })

    // Handle desktop videos
    desktopVideoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === current) {
        video.play()
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [current])

  return (
    <section className="py-16 bg-gradient-to-b">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-8 font-exo2">
          Our Work in Motion
        </h2>
        <p className="text-center text-neutral-200 max-w-2xl mx-auto mb-12 font-titillium">
          Experience our creative process through dynamic video content that showcases our design expertise.
        </p>
        
        {/* Mobile: Single video carousel */}
        <div className="block md:hidden">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {videos.map((src, i) => (
                <div key={i} className="w-full flex-shrink-0 flex justify-center">
                  <video
                    ref={el => { mobileVideoRefs.current[i] = el }}
                    src={src}
                    className="w-full max-w-sm h-[500px] object-cover rounded-xl shadow-lg"
                    muted
                    loop
                    playsInline
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Desktop: Three videos at once */}
        <div className="hidden md:flex justify-center items-center gap-6 px-4">
          {videos.map((src, i) => {
            const isCurrent = i === current
            const isPrev = (current - 1 + videos.length) % videos.length === i
            const isNext = (current + 1) % videos.length === i
            
            return (
              <div 
                key={i} 
                className={`transition-all duration-700 ${
                  isCurrent 
                    ? 'scale-100 opacity-100 z-10' 
                    : 'scale-75 opacity-50 z-0'
                } ${isPrev ? '-rotate-6' : ''} ${isNext ? 'rotate-6' : ''}`}
                style={{ 
                  order: isCurrent ? 2 : isPrev ? 1 : 3
                }}
              >
                <video
                  ref={el => { desktopVideoRefs.current[i] = el }}
                  src={src}
                  className={`rounded-xl shadow-lg ${
                    isCurrent ? 'w-80 h-[500px]' : 'w-64 h-[400px]'
                  } object-cover cursor-pointer`}
                  muted
                  loop
                  playsInline
                  onClick={() => setCurrent(i)}
                />
              </div>
            )
          })}
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === current ? 'bg-red-600' : 'bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
