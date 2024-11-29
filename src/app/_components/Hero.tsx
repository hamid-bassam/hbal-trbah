/* eslint-disable react/no-unescaped-entities */
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { JoinAdventureForm } from "./JoinAdventureForm"

export function Hero() {
  return (
    <section className="container py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Hbal Trbah – De zéro à 6 zéros
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
          <JoinAdventureForm />
        </CardContent>
      </Card>
    </section>
  )
}

