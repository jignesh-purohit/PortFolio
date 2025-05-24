"use client"

import { useRef, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    if (sectionRef.current && headingRef.current && formRef.current && infoRef.current) {
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
      
      // Form animation
      gsap.fromTo(
        formRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
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
      
      // Info animation
      gsap.fromTo(
        infoRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset()
      }
    }, 1500)
  }

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Get In <span className="text-chart-2">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div ref={formRef}>
            <Card>
              <CardContent className="p-6">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      rows={5}
                      required
                      className="resize-none bg-background"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div ref={infoRef}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-chart-2/10 p-3 rounded-full text-chart-2">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:jjigpurohit47@gmail.com" 
                        className="text-muted-foreground hover:text-chart-2 transition-colors"
                      >
                        jjigpurohit47@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a 
                        href="tel:+916353426082" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 6353426082
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-chart-4/10 p-3 rounded-full text-chart-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        Parul University, Vadodara, Gujarat, India
                      </p>
                    </div>
                  </div>
                  
                  <hr className="border-border" />
                  
                  <div>
                    <p className="font-medium mb-3">Social Profiles</p>
                    <div className="flex gap-3">
                      <Button asChild variant="outline" size="icon" className="h-10 w-10 rounded-full">
                        <a 
                          href="https://github.com/jignesh-purohit" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="GitHub Profile"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="icon" className="h-10 w-10 rounded-full">
                        <a 
                          href="https://linkedin.com/in/jignesh-purohit" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
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