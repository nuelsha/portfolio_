"use client"

import { useState } from "react"
import { Twitter, Mail, Github, MessageCircle } from "lucide-react"
import { useInView } from "react-intersection-observer"

export function Contact() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialLinks = [
    {
      id: "twitter",
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/Nuel46924906?t=Q08wA9fFaDXk76wcs3-sSg&s=09",
      color: "hover:text-[#1DA1F2]",
    },
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nuelsha",
      color: "hover:text-[#333]",
    },
    {
      id: "telegram",
      icon: MessageCircle,
      label: "Telegram",
      href: "https://t.me/nuelsha",
      color: "hover:text-[#0088cc]",
    },
    {
      id: "email",
      icon: Mail,
      label: "Email",
      href: "mailto:mezemirnuel@gmail.com",
      color: "hover:text-[#EA4335]",
    },
  ]

  return (
    <section id="contact" ref={ref} className="w-full flex justify-center px-4 min-h-[50vh] items-center">
      <div
        className={`w-full max-w-4xl py-24 text-center transform transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Want to chat? Feel free to reach out through any of these platforms. I'm always excited to connect and discuss
          new opportunities!
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 rounded-full border border-gray-200 dark:border-gray-800 
                transition-all duration-300 hover:scale-110 hover:border-transparent 
                hover:shadow-lg hover:shadow-gray-200/20 dark:hover:shadow-gray-800/20 
                ${hoveredIcon === social.id ? "bg-gray-50 dark:bg-gray-900" : ""}`}
              onMouseEnter={() => setHoveredIcon(social.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <social.icon
                className={`w-6 h-6 text-gray-600 dark:text-gray-400 transition-all duration-300 
                  group-hover:scale-110 ${social.color}`}
              />
              <span
                className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-600 
                  dark:text-gray-400 opacity-0 transform translate-y-2 transition-all duration-300 whitespace-nowrap
                  ${hoveredIcon === social.id ? "opacity-100 translate-y-0" : ""}`}
              >
                {social.label}
              </span>
            </a>
          ))}
        </div>
        <div className="relative px-4">
          <div
            className={`text-gray-600 dark:text-gray-400 transform transition-all duration-500 
              ${hoveredIcon ? "opacity-100" : "opacity-80"}`}
          >
            <span className="block sm:inline">or send me a direct message at </span>
            <a
              href="mailto:mezemirnuel@gmail.com"
              className="text-gray-900 dark:text-white font-medium hover:underline underline-offset-4"
            >
              mezemirnuel@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

