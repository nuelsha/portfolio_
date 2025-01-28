"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, Info, Code, MessageCircle } from "lucide-react"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(sectionId)
  }

  const navigationItems = [
    { href: "home", label: "Home", icon: Home },
    { href: "about", label: "About Me", icon: Info },
    { href: "project", label: "Project", icon: Code },
    { href: "contact", label: "Contact Me", icon: MessageCircle },
  ]

  return (
    <div className="w-full flex justify-center py-4 sticky top-0 z-50 animate-navbar">
      <nav className="flex items-center justify-between nav-blur rounded-full px-6 py-2 shadow-sm w-full max-w-xs">
        <div className="flex gap-4">
          {navigationItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={`#${href}`}
              onClick={(e) => scrollToSection(e, href)}
              className={cn(
                "p-2 rounded-full relative flex items-center justify-center transition-all duration-300 group",
                activeSection === href
                  ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{label}</span>
              {activeSection === href && (
                <span className="absolute -top-1 right-0 w-2 h-2 bg-gray-900 dark:bg-white rounded-full" />
              )}
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white 
                text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity 
                pointer-events-none whitespace-nowrap"
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </div>
  )
}

