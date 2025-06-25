"use client"

import { useRef, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Cpu, Brain, Download } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    if (sectionRef.current && headingRef.current && contentRef.current && cardsRef.current) {
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
      
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
      
      // Cards staggered animation
      gsap.fromTo(
        cardsRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/cv/jignesh_soc.pdf'
    link.download = 'Jignesh_Purohit_CV.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            About <span className="text-chart-2">Me</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div 
              ref={contentRef}
              className="flex-1 space-y-4"
            >
              <p className="text-lg text-muted-foreground">
                I'm a <span className="font-medium text-foreground">Cyber Security B.Tech student</span> at Parul University (2022–2026) with a CGPA of 7.96/10, passionate about ethical hacking, system security, and staying ahead of emerging cyber threats.
              </p>
              <p className="text-lg text-muted-foreground">
                As a <span className="font-medium text-foreground">CEH v13 Certified</span> professional with a score of 96.8/100, I have hands-on experience with tools like Burp Suite, Nmap, Metasploit, and Nessus.
              </p>
              <p className="text-lg text-muted-foreground">
                I specialize in web application security, vulnerability assessment, and participate regularly in Capture The Flag (CTF) competitions to sharpen my skills.
              </p>
              
              <div className="flex gap-4 pt-4">
                <Button 
                  variant="outline" 
                  className="gap-2 hover:bg-chart-2/10 hover:text-chart-2 hover:border-chart-2/50 transition-all"
                  onClick={handleDownloadCV}
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 relative">
              <div className="aspect-square relative rounded-xl overflow-hidden border border-border shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
                  alt="Jignesh Purohit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div 
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <Card className="border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-chart-2/10 text-chart-2 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">B.Tech in Cyber Security at Parul University (2022–2026)</p>
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Specialization</h3>
                <p className="text-muted-foreground">Web App Security, Vulnerability Assessment, CTF Competitions</p>
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-chart-4/10 text-chart-4 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Approach</h3>
                <p className="text-muted-foreground">Analytical thinking, continuous learning, and staying ahead of emerging threats</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
