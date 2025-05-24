"use client"

import { useRef, useEffect } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Dna as Dns } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    if (sectionRef.current && headingRef.current && projectsRef.current) {
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
      
      // Projects staggered animation
      gsap.fromTo(
        projectsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.6,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-chart-2">Projects</span>
        </h2>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {/* DNS Enumeration Tool */}
          <Card className="overflow-hidden border border-border hover:shadow-md transition-all h-full flex flex-col">
            <div className="h-48 bg-gradient-to-br from-chart-2/20 to-primary/10 flex items-center justify-center">
              <Dns className="h-16 w-16 text-chart-2" />
            </div>
            <CardContent className="p-6 flex-1">
              <h3 className="text-xl font-bold mb-2">DNS Enumeration Tool</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                <span className="px-2 py-1 bg-chart-2/10 text-chart-2 text-xs rounded-full">Cybersecurity</span>
                <span className="px-2 py-1 bg-chart-5/10 text-chart-5 text-xs rounded-full">Automation</span>
              </div>
              <p className="text-muted-foreground mb-4">
                A Python-based automation tool for DNS record queries (A, MX, NS, TXT, SOA) with reverse DNS lookup capability.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-chart-2/20 p-1 mt-0.5">
                    <CheckIcon className="h-3 w-3 text-chart-2" />
                  </span>
                  Automates ~80% of DNS information gathering for penetration testing
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-chart-2/20 p-1 mt-0.5">
                    <CheckIcon className="h-3 w-3 text-chart-2" />
                  </span>
                  Streamlines reconnaissance phase of security assessments
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-chart-2/20 p-1 mt-0.5">
                    <CheckIcon className="h-3 w-3 text-chart-2" />
                  </span>
                  Command-line interface with detailed reporting features
                </li>
              </ul>
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto">
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button variant="default" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Button>
              </div>
            </CardFooter>
          </Card>
          
          {/* Placeholder for future projects - you can add more as they are completed */}
          <Card className="overflow-hidden border border-border/50 hover:border-border hover:shadow-md transition-all h-full flex flex-col bg-muted/30">
            <div className="h-48 bg-gradient-to-br from-primary/5 to-chart-5/5 flex items-center justify-center">
              <div className="text-muted-foreground/70 border-2 border-dashed border-muted-foreground/20 rounded-xl h-20 w-40 flex items-center justify-center">
                <span>Coming Soon</span>
              </div>
            </div>
            <CardContent className="p-6 flex-1">
              <h3 className="text-xl font-bold mb-2 text-muted-foreground/70">Future Project</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-muted text-muted-foreground/70 text-xs rounded-full">Web Security</span>
                <span className="px-2 py-1 bg-muted text-muted-foreground/70 text-xs rounded-full">Penetration Testing</span>
              </div>
              <p className="text-muted-foreground/70">
                More cybersecurity projects coming soon. Check back later for updates on my latest work.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border border-border/50 hover:border-border hover:shadow-md transition-all h-full flex flex-col bg-muted/30">
            <div className="h-48 bg-gradient-to-br from-primary/5 to-chart-5/5 flex items-center justify-center">
              <div className="text-muted-foreground/70 border-2 border-dashed border-muted-foreground/20 rounded-xl h-20 w-40 flex items-center justify-center">
                <span>Coming Soon</span>
              </div>
            </div>
            <CardContent className="p-6 flex-1">
              <h3 className="text-xl font-bold mb-2 text-muted-foreground/70">Future Project</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-muted text-muted-foreground/70 text-xs rounded-full">Malware Analysis</span>
                <span className="px-2 py-1 bg-muted text-muted-foreground/70 text-xs rounded-full">Network Security</span>
              </div>
              <p className="text-muted-foreground/70">
                More cybersecurity projects coming soon. Check back later for updates on my latest work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Small utility icon component
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}