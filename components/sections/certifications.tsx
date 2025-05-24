"use client"

import { useRef, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Calendar, Clock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    if (sectionRef.current && headingRef.current && cardsRef.current) {
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
      
      // Cards staggered animation
      gsap.fromTo(
        cardsRef.current.children,
        { 
          y: 50, 
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.7,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  const certifications = [
    {
      title: "Certified Ethical Hacker (CEH) v13",
      issuer: "EC-Council",
      date: "2025",
      validity: "2025–2028",
      score: "96.8/100",
      icon: "award",
      color: "chart-2"
    },
    {
      title: "CCNA v7",
      issuer: "Cisco",
      date: "2025",
      validity: "2025–2028",
      score: null,
      icon: "network",
      color: "chart-1"
    },
    {
      title: "Qualys Vulnerability Management",
      issuer: "Qualys",
      date: "2025",
      validity: "2025–2028",
      score: null,
      icon: "shield",
      color: "chart-5"
    }
  ]

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-muted/50"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-chart-2">Certifications</span>
        </h2>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className={`bg-${cert.color}/10 p-6 flex justify-between items-start`}>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <CertificationIcon name={cert.icon} color={cert.color} />
                </div>
                
                <div className="p-6 space-y-3">
                  {cert.score && (
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                        Score: {cert.score}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Valid: {cert.validity}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Custom icon component based on name
function CertificationIcon({ name, color }: { name: string, color: string }) {
  const getIcon = () => {
    switch(name) {
      case "award":
        return <Award className="h-8 w-8" />;
      case "network":
        return <NetworkIcon className="h-8 w-8" />;
      case "shield":
        return <Shield className="h-8 w-8" />;
      default:
        return <Award className="h-8 w-8" />;
    }
  }
  
  return (
    <div className={`p-2 rounded-full bg-${color} text-white`}>
      {getIcon()}
    </div>
  )
}

// Network icon
function NetworkIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}

// Shield icon
function Shield(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}