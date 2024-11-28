import { NextResponse } from "next/server"
import prisma from "../../../lib/prisma"


export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "L'adresse email est requise." }, { status: 400 })
    }

    // Vérifiez si l'email existe déjà
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    })

    if (existingSubscriber) {
      return NextResponse.json({ error: "Cet email est déjà inscrit." }, { status: 400 })
    }

    // Ajoutez l'email à la base de données
    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email },
    })

    return NextResponse.json({ message: "Inscription réussie", data: subscriber })
  } catch (error) {
    console.error("Erreur API:", error)
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 })
  }
}
