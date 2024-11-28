/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToForm = () => {
    const form = document.getElementById("signup-form")
    form?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Hbal Trbah
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-lg font-medium hover:text-primary">
            Accueil
          </Link>
          <Link href="/blog" className="text-lg font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Action Button */}
        <Button
          onClick={scrollToForm}
          className="hidden md:inline-block bg-primary text-primary-foreground"
        >
          Rejoindre l'aventure
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="/" className="text-lg font-medium hover:text-primary">
              Accueil
            </Link>
            <Link href="/blog" className="text-lg font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="text-lg font-medium hover:text-primary">
              Contact
            </Link>
            <Button
              onClick={scrollToForm}
              className="mt-4 bg-primary text-primary-foreground"
            >
              Rejoindre l'aventure
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
