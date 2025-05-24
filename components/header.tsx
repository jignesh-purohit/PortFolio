"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import { ShieldCheck, Menu, X } from 'lucide-react'
import { useScroll } from './scroll-provider'
import { cn } from '@/lib/utils'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollToSection, activeSection } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: 'hero', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'internship', label: 'Experience' },
    { href: 'projects', label: 'Projects' },
    { href: 'certifications', label: 'Certifications' },
    { href: 'skills', label: 'Skills' },
    { href: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 font-bold text-xl"
          onClick={() => scrollToSection('hero')}
        >
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span>Jignesh Purohit</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "text-sm",
                    activeSection === item.href ? "text-primary font-medium" : "text-muted-foreground"
                  )}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-background z-30 md:hidden">
          <nav className="container mx-auto px-4 py-8">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start text-lg py-4",
                      activeSection === item.href ? "text-primary font-medium" : "text-muted-foreground"
                    )}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}