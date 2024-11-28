// Assurez-vous que prisma est configuré
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Nom et email requis." }, { status: 400 })
    }

    // Enregistrez les données dans la base de données
    const result = await prisma.subscriber.create({
      data: {
        name,
        email,
      },
    })

    return NextResponse.json({ message: "Inscription réussie", data: result })
  } catch (error) {
    console.error("Erreur API:", error)
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 })
  }
}
