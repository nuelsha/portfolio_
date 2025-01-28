"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Globe, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useInView } from "react-intersection-observer"

interface Project {
  title: string
  date: string
  description: string
  image: string
  stack: string[]
  links: {
    website?: string
    source?: string
  }
}

const projects: Project[] = [
  
  
  {
    title: "Coffee and Tea Automation Client",
    date: "November 2024",
    description: "A client-side application for automating coffee and tea ordering systems. Built with React and Vite, it features a streamlined user interface and state management for seamless operations.",
    image: "/coffee.jpg",
    stack: ["React", "Vite", "Redux", "CSS", "JavaScript"],
    links: {
      website: "#",
      source: "https://github.com/nuelsha/Coffee_And_Tea_Automation-Client",
    },
  },
  {
    title: "Vehicle Monitoring App",
    date: "January 2025",
    description: "A Flutter-based application designed to monitor and track vehicle performance, usage, and location. It integrates multiple platforms and provides features such as real-time tracking, analytics, and notifications for maintenance schedules.",
    image: "/car.jpg",
    stack: ["Flutter", "Firebase", "Dart", "Google Maps API", ],
    links: {
      website: "#",
      source: "https://github.com/nuelsha/Vehicle-Monitoring-App",
    },
  },
  {
    title: "Supply On Campus",
    date: "January 2025",
    description: "A student-driven marketplace platform that enables campus students to buy and sell goods, access tutoring services, and order food with dorm delivery options. The platform fosters community and promotes safety on campus.",
    image: "/image.png",
    stack: ["Flutter", "Firebase", "Dart", "Stripe API", "Google Maps API"],
    links: {
      website: "#",
      source: "https://github.com/nuelsha/supply-on-campus",
    },
  },

]

export function Projects() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="project" className="w-full flex justify-center px-4" ref={sectionRef}>
      <div className="w-full max-w-6xl py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Check out my latest work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my
            favorites.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card hoverable ${inView ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden rounded-md mb-4 group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.links.website && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 hover:bg-white hover:text-black backdrop-blur-sm"
                      >
                        <Globe className="h-4 w-4" />
                      </Button>
                    )}
                    {project.links.source && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 hover:bg-white hover:text-black backdrop-blur-sm"
                        asChild
                      >
                        <a href={project.links.source} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.date}</p>
              <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary hover:bg-secondary/80">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
