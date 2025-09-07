"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useState, useEffect } from "react"

import Hero1 from "@/assets/Hero1.jpg"
import Hero2 from "@/assets/Hero2.jpg"
import Hero3 from "@/assets/Hero3.jpg"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
  })

  // Autoplay plugin
  useEffect(() => {
    const slider = instanceRef.current
    if (!slider) return

    let timeout: NodeJS.Timeout
    let mouseOver = false

    function clearNextTimeout() {
      clearTimeout(timeout)
    }
    function nextTimeout() {
      clearTimeout(timeout)
      if (mouseOver) return
      timeout = setTimeout(() => {
        if (slider) slider.next()
      }, 4000) // 4s per slide
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true
        clearNextTimeout()
      })
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false
        nextTimeout()
      })
      nextTimeout()
    })
    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)

    return () => clearTimeout(timeout)
  }, [instanceRef])

  return (
    <div className="bg-neutral-900 min-h-screen h-screen flex items-center">
      <div className="relative isolate px-0 pt-0 lg:px-0 w-full h-screen">
        {/* Background gradient top */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-red-700 to-neutral-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        {/* Carousel */}
        <div className="w-full h-screen">
          <div
            ref={sliderRef}
            className="keen-slider relative h-screen w-full overflow-hidden rounded-none"
          >
            {[Hero1, Hero2, Hero3].map((img, i) => (
              <div key={i} className="keen-slider__slide relative h-screen w-full">
                <Image
                  src={img}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => instanceRef.current?.moveToIdx(i)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === i
                    ? "bg-white dark:bg-gray-800"
                    : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Controls */}
          <button
            type="button"
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => instanceRef.current?.next()}
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        {/* Background gradient bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-red-700 to-neutral-900 opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
