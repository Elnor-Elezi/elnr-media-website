import useSound from 'use-sound'
import { useState, createContext, useContext } from 'react'

// You would replace these with actual paths to tiny audio clips
// Using empty strings or data URIs to avoid 404s if files don't exist yet
const HOVER_SOUND = 'data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'
const CLICK_SOUND = 'data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'

const SoundContext = createContext()

export function SoundProvider({ children }) {
  const [isMuted, setIsMuted] = useState(false)
  
  const [playHover] = useSound(HOVER_SOUND, { volume: 0.1, soundEnabled: !isMuted })
  const [playClick] = useSound(CLICK_SOUND, { volume: 0.2, soundEnabled: !isMuted })

  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <SoundContext.Provider value={{ playHover, playClick, isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  )
}

export const useUIFeedback = () => useContext(SoundContext)
