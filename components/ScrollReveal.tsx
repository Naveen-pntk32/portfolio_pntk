"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"

interface ScrollRevealProps {
  children: (isActive: boolean) => React.ReactNode
  offset?: number
  className?: string
  delay?: number
}

export function ScrollReveal({ children, offset = 0, className, delay = 300 }: ScrollRevealProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
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
        rootMargin: `-${offset}px`,
      }
    )

    const element = document.querySelector(`.${className?.split(" ")[0]}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [offset, className, delay])

  return <div className={className}>{children(isActive)}</div>
} 