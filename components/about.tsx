"use client"

import { Database, WavesIcon as FlutterWave, Monitor, Server } from "lucide-react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      title: "Flutter Developer",
      icon: "/flutter.png",
      stack: ["Firebase", "SQLite", "Hive", "Provider", "BLoC", "Local Notifications"],
    },
    {
      title: "Back End Developer",
      icon: Database,
      stack: ["Node.js", "Express", "Firebase", "Postman", "MongoDB", "REST Api"],
    },
    {
      title: "Front End Developer",
      icon: Monitor,
      stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Figma"],
    },
  ]

  return (
    <section id="about" ref={ref} className="w-full flex justify-center px-4">
      <div className="w-full max-w-6xl py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h2>
        <p className="text-gray-600 dark:text-gray-100 mb-16 max-w-3xl mx-auto text-center leading-relaxed">
          I'm an Intermediate Flutter and Web Developer passionate about building innovative solutions and solving
          real-world problems. With a strong focus on clean design and functionality, I'm dedicated to creating
          impactful digital experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-gray-900/50 bg-white dark:bg-gray-900">
                <div className="mb-4">
                  {typeof skill.icon === "string" ? (
                    <Image src={skill.icon} width={24} height={24} alt={`${skill.title} icon`} className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                  ) : (
                    <skill.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                  )}
                </div>
                <h3 className="font-medium mb-4 text-gray-900 dark:text-white group-hover:text-gray-900">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
