"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
}

export function BlurText({ text, className, delay = 0 }: BlurTextProps) {
  const [isBlurred, setIsBlurred] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span className={cn("transition-all duration-1000", isBlurred ? "blur-md" : "blur-0", className)}>{text}.</span>
  )
}
