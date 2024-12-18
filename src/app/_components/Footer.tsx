/* eslint-disable react/no-unescaped-entities */
import { Instagram, Linkedin } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Liens vers les réseaux sociaux */}
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/reel/DC284CDKzez/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/hamid-bassam-802334207/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          {/* Navigation interne */}
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Link
              href="/terms"
              className="hover:underline"
            >
              Conditions d'Utilisation
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:underline"
            >
              Politique de Confidentialité
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Hbal Trbah. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
