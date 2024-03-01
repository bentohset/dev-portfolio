"use client";
import { AboutSection } from '@/features/about';
import { ExperienceSection } from '@/features/experience';
import { Hero } from '@/features/hero';
import { ProjectSection } from '@/features/projects';

// TODO: add a custom loader with my icon

// TODO: threejs
export default function Home() {
  return (
    <main className='w-full h-full'>
      <Hero />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
    </main>
  );
}
