import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Internship } from '@/components/sections/internship';
import { Projects } from '@/components/sections/projects';
import { Certifications } from '@/components/sections/certifications';
import { Skills } from '@/components/sections/skills';
import { Contact } from '@/components/sections/contact';
import { ScrollProvider } from '@/components/scroll-provider';

export default function Home() {
  return (
    <ScrollProvider>
      <div className="w-full">
        <Hero />
        <About />
        <Internship />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </div>
    </ScrollProvider>
  );
}