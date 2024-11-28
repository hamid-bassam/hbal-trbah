/* eslint-disable react/no-unescaped-entities */
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { JoinAdventureForm } from "./JoinAdventureForm"

export function Hero() {
  return (
    <section className="container py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Hbal Trbah – Du zéro à 1 million
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Découvrez comment transformer votre vie financière et atteindre vos objectifs avec notre communauté grandissante.
        </p>
      </div>

      <Card className="mx-auto max-w-md" id="signup-form">
        <CardHeader>
          <CardTitle>Rejoignez l'aventure</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
            <Button type="submit" className="w-full">
              S'inscrire maintenant
            </Button>
          </form> */}
          <JoinAdventureForm />
        </CardContent>
      </Card>
    </section>
  )
}

