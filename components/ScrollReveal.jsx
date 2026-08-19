"use client"

import { useEffect, useState, useRef } from "react"

export function ScrollReveal({ children, offset = 0, className, delay = 150 }) {
  const [isActive, setIsActive] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsActive(true)
          }, delay)
          observer.disconnect()
        }
      },
      {
        rootMargin: `0px 0px -${Math.max(0, offset)}px 0px`,
        threshold: 0.05,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [offset, delay])

  return (
    <div ref={elementRef} className={className}>
      {children(isActive)}
    </div>
  )
}
