"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from "sonner"

export function NewsletterSubscriberForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        toast(
          "Merci ! ",
          {

            description: "Vous êtes inscrit à notre newsletter.",
            action: {
              label: "Fermer",
              onClick: () => { },
            },
          })

        setEmail("") // Réinitialise le champ email
      } else {
        const data = await res.json()
        console.log("data", data)
        toast(
          "Erreur",
          {
            description: "Une erreur est survenue. Veuillez réessayer.",
            action: {
              label: "Fermer",
              onClick: () => { },
            },
          })
      }
    } catch (error) {
      console.log(error)
      toast(
        "Erreur réseau",
        {
          description: "Impossible d'envoyer les données.",
          action: {
            label: "Fermer",
            onClick: () => { },
          },
        })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Votre adresse email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Envoi..." : "S'abonner"}
      </Button>
    </form>
  )
}
