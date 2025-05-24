import Link from 'next/link'
import { Button } from './ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Jignesh Purohit. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild size="icon" variant="ghost">
              <Link href="https://github.com/jignesh-purohit" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="icon" variant="ghost">
              <Link href="https://linkedin.com/in/jignesh-purohit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="icon" variant="ghost">
              <Link href="mailto:jjigpurohit47@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}