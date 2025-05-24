"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ScrollContextType = {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

const ScrollContext = createContext<ScrollContextType>({
  activeSection: 'hero',
  scrollToSection: () => {},
})

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Get all section elements
      const sections = document.querySelectorAll('section[id]')
      
      // Find the current section based on scroll position
      let currentSection = 'hero'
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id
        }
      })
      
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    
    // Call once on mount to set initial active section
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for header height
        behavior: 'smooth',
      })
    }
  }

  return (
    <ScrollContext.Provider value={{ activeSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () => useContext(ScrollContext)