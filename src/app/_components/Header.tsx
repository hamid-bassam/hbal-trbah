/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import { JoinAdventureButton } from "./JoinAdventureButton"
import { MobileNavigation } from "./MobileNavigation"

export function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen)
  // }

  // const scrollToForm = () => {
  //   const form = document.getElementById("signup-form")
  //   form?.scrollIntoView({ behavior: "smooth" })
  // }

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
          <JoinAdventureButton />
        </nav>

        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button> */}

        {/* Action Button */}
        <MobileNavigation />
      </div>

      {/* Mobile Navigation */}
      {/* {isMenuOpen && (
        <div className="md:hidden bg-background">
          <nav className="flex flex-col space-y-2 p-4">
            <Link onClick={toggleMenu} href="/" className="text-lg font-medium hover:text-primary">
              Accueil
            </Link>
            <Link onClick={toggleMenu} href="/blog" className="text-lg font-medium hover:text-primary">
              Blog
            </Link>
            <Link onClick={toggleMenu} href="/contact" className="text-lg font-medium hover:text-primary">
              Contact
            </Link>
            <JoinAdventureButton className="inline-block mb-2" />
          </nav>
        </div>
      )} */}
    </header>
  )
}
