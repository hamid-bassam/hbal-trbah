'use client'

import { motion } from 'framer-motion'
import { Facebook, Github, Instagram, Linkedin, Mail, TwitterIcon as TikTok, Twitch, Twitter } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  { name: 'Email', icon: Mail, href: 'mailto:contact@example.com', color: 'bg-red-500' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'bg-pink-500' },
  { name: 'TikTok', icon: TikTok, href: 'https://tiktok.com', color: 'bg-black' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'bg-blue-600' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'bg-blue-400' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'bg-blue-700' },
  { name: 'Twitch', icon: Twitch, href: 'https://twitch.tv', color: 'bg-purple-600' },
  { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'bg-gray-800' },
]

export default function ContactComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* bg-gradient-to-br w-full from-primary/20 to-secondary/20  */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Contactez-nous</h1>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((link) => (
            // index,
            <motion.div key={link.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={link.href}
                className={`flex items-center justify-center p-4 rounded-lg ${link.color} text-white transition-transform duration-200 ease-in-out transform hover:rotate-3`}
              >
                <link.icon className="w-6 h-6 mr-2" />
                <span className="font-medium">{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

