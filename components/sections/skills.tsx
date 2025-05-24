"use client"

import { useRef, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Shield, BarChart4, Terminal, Workflow, Users } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    if (sectionRef.current && headingRef.current && tabsRef.current) {
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
      
      // Tabs animation
      gsap.fromTo(
        tabsRef.current,
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
    }
  }, [])

  // Animated progress bar component with GSAP
  const AnimatedProgress = ({ value, label }: { value: number, label: string }) => {
    const progressRef = useRef<HTMLDivElement>(null)
    const progressBarRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
      if (progressRef.current) {
        const animation = gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          {
            scaleX: value/100,
            duration: 1.5,
            ease: "power2.out",
            paused: true
          }
        )
        
        ScrollTrigger.create({
          trigger: progressRef.current,
          start: "top 85%",
          onEnter: () => animation.play(),
          onLeaveBack: () => animation.reverse(),
        })
      }
    }, [value])
    
    return (
      <div ref={progressRef} className="space-y-1.5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-sm text-muted-foreground">{value}%</p>
        </div>
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
          <div 
            ref={progressBarRef}
            className="h-full bg-chart-2 rounded-full origin-left"
            style={{ transform: 'scaleX(0)' }}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Technical <span className="text-chart-2">Skills</span>
        </h2>
        
        <div 
          ref={tabsRef}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
              <TabsTrigger value="technical" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden md:inline">Security</span>
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                <span className="hidden md:inline">Tools</span>
              </TabsTrigger>
              <TabsTrigger value="programming" className="flex items-center gap-2">
                <BarChart4 className="h-4 w-4" />
                <span className="hidden md:inline">Programming</span>
              </TabsTrigger>
              <TabsTrigger value="methodologies" className="flex items-center gap-2">
                <Workflow className="h-4 w-4" />
                <span className="hidden md:inline">Methodologies</span>
              </TabsTrigger>
              <TabsTrigger value="soft" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden md:inline">Soft Skills</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Security Techniques</h3>
                    <div className="space-y-4">
                      <AnimatedProgress value={95} label="Reconnaissance & Footprinting" />
                      <AnimatedProgress value={90} label="Network Scanning & Enumeration" />
                      <AnimatedProgress value={85} label="Vulnerability Assessment" />
                      <AnimatedProgress value={80} label="Malware Analysis" />
                      <AnimatedProgress value={88} label="Risk Analysis" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Specific Skills</h3>
                    <div className="space-y-4">
                      <AnimatedProgress value={92} label="DNS, WHOIS Enumeration" />
                      <AnimatedProgress value={88} label="Static/Dynamic Analysis" />
                      <AnimatedProgress value={85} label="Web App Penetration Testing" />
                      <AnimatedProgress value={82} label="Network Traffic Analysis" />
                      <AnimatedProgress value={80} label="Social Engineering Assessment" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Security Tools</h3>
                    <div className="space-y-4">
                      <AnimatedProgress value={95} label="Kali Linux" />
                      <AnimatedProgress value={92} label="Burp Suite" />
                      <AnimatedProgress value={90} label="Nmap" />
                      <AnimatedProgress value={88} label="Wireshark" />
                      <AnimatedProgress value={85} label="Metasploit" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Other Tools</h3>
                    <div className="space-y-4">
                      <AnimatedProgress value={88} label="Hydra" />
                      <AnimatedProgress value={85} label="Hashcat" />
                      <AnimatedProgress value={82} label="Nessus" />
                      <AnimatedProgress value={80} label="Netcat" />
                      <AnimatedProgress value={75} label="OSINT Tools" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="programming" className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Programming Languages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <AnimatedProgress value={85} label="Bash Scripting" />
                      <AnimatedProgress value={75} label="Python" />
                      <AnimatedProgress value={70} label="Java (Basic)" />
                    </div>
                    <div className="space-y-4">
                      <AnimatedProgress value={65} label="SQL" />
                      <AnimatedProgress value={60} label="HTML/CSS" />
                      <AnimatedProgress value={55} label="JavaScript" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="methodologies" className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Security Methodologies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <AnimatedProgress value={95} label="OWASP Top 10" />
                      <AnimatedProgress value={90} label="Penetration Testing" />
                      <AnimatedProgress value={85} label="Vulnerability Assessment" />
                    </div>
                    <div className="space-y-4">
                      <AnimatedProgress value={80} label="Secure SDLC" />
                      <AnimatedProgress value={75} label="ISO 27001" />
                      <AnimatedProgress value={70} label="NIST Framework" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="soft" className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Soft Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <AnimatedProgress value={95} label="Curiosity & Learning" />
                      <AnimatedProgress value={90} label="Problem Solving" />
                      <AnimatedProgress value={88} label="Analytical Thinking" />
                    </div>
                    <div className="space-y-4">
                      <AnimatedProgress value={85} label="Time Management" />
                      <AnimatedProgress value={90} label="Teamwork" />
                      <AnimatedProgress value={85} label="Communication" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}