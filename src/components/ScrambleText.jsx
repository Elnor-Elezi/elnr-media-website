import { useState, useEffect } from 'react'

export default function ScrambleText({ text, speed = 30, delay = 0, className = "" }) {
  const [displayText, setDisplayText] = useState("")
  const chars = "!<>-_\\\\/[]{}—=+*^?#________"

  useEffect(() => {
    let timeoutId
    let intervalId
    let iteration = 0

    const scramble = () => {
      intervalId = setInterval(() => {
        setDisplayText((prev) => {
          return text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index]
              }
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join("")
        })
        
        if (iteration >= text.length) {
          clearInterval(intervalId)
        }
        
        iteration += 1 / 3 // controls how fast it resolves
      }, speed)
    }

    timeoutId = setTimeout(() => {
      scramble()
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, speed, delay])

  return <span className={className}>{displayText}</span>
}
