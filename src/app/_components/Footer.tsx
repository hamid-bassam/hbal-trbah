import { Instagram, Linkedin } from 'lucide-react'
// InstagramIcon as TiktokIcon } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
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
            {/* <Link
              href="https://tiktok.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiktokIcon className="h-6 w-6" />
              <span className="sr-only">TikTok</span>
            </Link> */}
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
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hbal Trbah. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

