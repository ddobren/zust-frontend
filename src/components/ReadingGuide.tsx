import { useEffect, useState } from 'react'

type ReadingGuideProps = {
  isActive: boolean
}

function ReadingGuide({ isActive }: ReadingGuideProps) {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    if (!isActive) {
      setPosition(0)
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      setPosition(event.clientY - 15)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isActive])

  return (
    <div
      id="readingGuideElement"
      className="reading-guide-element"
      style={{
        display: isActive ? 'block' : 'none',
        top: `${position}px`,
      }}
    ></div>
  )
}

export default ReadingGuide
