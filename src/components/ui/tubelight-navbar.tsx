"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const isClickScrolling = useRef(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll-based active tab detection
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return

      const scrollY = window.scrollY + window.innerHeight / 3

      let currentSection = items[0].name
      for (const item of items) {
        const id = item.url.replace('#', '')
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          currentSection = item.name
        }
      }
      setActiveTab(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const handleClick = (item: NavItem) => {
    setActiveTab(item.name)
    isClickScrolling.current = true
    const element = document.querySelector(item.url)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => { isClickScrolling.current = false }, 1000)
    } else {
      isClickScrolling.current = false
    }
  }

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        className
      )}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-1 bg-card/90 backdrop-blur-xl border border-border py-2 px-2 rounded-full shadow-lg"
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300",
                "text-muted-foreground hover:text-foreground",
                isActive && "text-foreground"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon className="w-4 h-4" />
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30
                  }}
                >
                  {/* Solid background */}
                  <div className="absolute inset-0 bg-secondary rounded-full" />
                  {/* Top highlight line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-foreground/20" />
                </motion.div>
              )}
            </button>
          )
        })}
      </motion.div>
    </div>
  )
}

export default NavBar
