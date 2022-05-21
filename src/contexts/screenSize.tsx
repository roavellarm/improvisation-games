import { useState, useEffect, useMemo } from 'react'

const getScreenSize = () => ({ width: window.innerWidth, height: window.innerHeight })

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState(getScreenSize())

  const handleResize = () => setScreenSize(getScreenSize())

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = useMemo(() => screenSize.width <= 800, [screenSize.width])

  return { ...screenSize, isMobile }
}
