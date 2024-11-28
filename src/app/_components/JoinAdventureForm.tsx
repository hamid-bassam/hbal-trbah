"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from "sonner"


export function JoinAdventureForm() {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast(
          "Merci ! ",
          {

            description: "Vous avez été inscrit avec succès.",
            action: {
              label: "Fermer",
              onClick: () => { },
            },
          })
        setFormData({ name: "", email: "" }) // Reset form
      } else {
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        placeholder="Nom complet"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Envoi en cours..." : "S'inscrire"}
      </Button>
    </form>
  )
}
