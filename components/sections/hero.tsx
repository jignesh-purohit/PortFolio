"use client"

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Shield, Terminal } from 'lucide-react'
import { useScroll } from '@/components/scroll-provider'
import gsap from 'gsap'

export function Hero() {
  const { scrollToSection } = useScroll()
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && titleRef.current && subtitleRef.current && ctaRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      
      tl.fromTo(titleRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(subtitleRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 }, 
        "-=0.4"
      )
      .fromTo(ctaRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 }, 
        "-=0.4"
      )
    }
  }, [])

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2">Jignesh Purohit</span>
          </h1>
          
          <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground mb-8">
            Cyber Security Student & Ethical Hacker
            <span className="inline-flex items-center ml-3 px-3 py-1 text-sm font-medium rounded-full bg-chart-2/10 text-chart-2">
              <Shield className="h-4 w-4 mr-1" />
              CEH v13 Certified
            </span>
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="group"
              onClick={() => scrollToSection('about')}
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
              <Terminal className="ml-2 h-4 w-4 transition-opacity opacity-70 group-hover:opacity-100" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => scrollToSection('about')}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}