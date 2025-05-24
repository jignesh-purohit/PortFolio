"use client"

import { useRef, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Shield, ServerCrash, Bug } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Internship() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    if (sectionRef.current && headingRef.current && timelineRef.current) {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
      
      // Timeline animation with staggered cards
      gsap.fromTo(
        timelineRef.current.children,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.6,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  return (
    <section 
      id="internship" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-muted/50"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Professional <span className="text-chart-2">Experience</span>
        </h2>
        
        <div 
          ref={timelineRef}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border"></div>
          
          {/* Internship card */}
          <div className="relative mb-12 md:ml-auto md:mr-auto md:w-1/2 md:pl-8 md:pr-0 pl-12">
            <div className="absolute left-0 md:left-0 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-chart-2 border-4 border-background flex items-center justify-center z-10">
              <Shield className="h-4 w-4 text-background" />
            </div>
            
            <Card className="overflow-hidden border border-border bg-card shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="bg-chart-2 p-4 text-white">
                  <h3 className="text-xl font-semibold">Cyber Security Intern</h3>
                  <p className="text-white/90">Hactify</p>
                  <p className="text-sm text-white/80">February 2025 - March 2025</p>
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground">
                    During my internship at Hactify, I worked on various cybersecurity projects focusing on vulnerability assessment and penetration testing.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                      <p>Identified 25+ vulnerabilities across 10+ simulated labs</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <ServerCrash className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                      <p>Utilized tools such as Burp Suite, Nmap, and Metasploit</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Bug className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                      <p>Focused on reconnaissance, exploitation, and OWASP Top 10 vulnerabilities</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}