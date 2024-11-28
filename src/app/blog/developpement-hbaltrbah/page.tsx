/* eslint-disable react/no-unescaped-entities */

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle2, Clock, Code2, Database, Globe, Palette, Rocket } from 'lucide-react'
import { Metadata } from "next"
import { Alert, AlertDescription } from "../../../components/ui/alert"

export const metadata: Metadata = {
  title: "Construire une Plateforme en 4 Heures | Guide Complet",
  description: "Découvrez comment créer une plateforme web complète en seulement 4 heures avec Next.js, Vercel, Prisma et Supabase. Guide étape par étape pour un développement web rapide et efficace.",
  keywords: "Next.js, Vercel, Prisma, Supabase, développement web rapide, création plateforme, déploiement rapide"
}

export default function BuildPlatformPage() {
  return (
    <article className="container max-w-4xl py-12 mx-auto">
      <header className="space-y-4 text-center mb-12">
        <div className="flex justify-center gap-2 mb-6">
          <Badge variant="secondary">Tutorial</Badge>
          <Badge variant="secondary">4 heures</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Construire une Plateforme en 4 Heures : De l'Achat du Domaine au Déploiement
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Temps de lecture : 10 minutes</span>
        </div>
      </header>

      <ScrollArea className="space-y-12">
        <section className="prose prose-gray dark:prose-invert max-w-none">
          <div className="lead text-xl text-muted-foreground mb-12">
            <p>
              Vous pensez qu'il faut des semaines pour créer une plateforme web fonctionnelle ?
              Détrompez-vous ! Grâce aux outils modernes comme Next.js, Vercel, Prisma et Supabase,
              il est possible de passer de l'idée au déploiement en seulement quelques heures.
              Découvrez comment transformer votre vision en réalité en un temps record.
            </p>
          </div>

          <Alert className="mb-8">
            <Clock className="h-4 w-4" />
            <AlertDescription>
              Planning suggéré : Domaine (30min) → Setup (30min) → Base de données (1h) →
              UI (1h30) → Déploiement (30min)
            </AlertDescription>
          </Alert>

          <div className="grid gap-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Globe className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Achat du Domaine et Configuration DNS</h2>
                  <p className="mb-4">
                    Commencez par sécuriser votre domaine sur Vercel Domains. L'avantage ?
                    La configuration DNS est automatique et vous bénéficiez d'un SSL gratuit.
                    Plus besoin de jongler entre différents fournisseurs, tout est intégré !
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-mono text-sm">
                      # Prix approximatif : 20€/an
                      # Temps estimé : 30 minutes
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Code2 className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Initialisation du Projet avec Next.js</h2>
                  <p className="mb-4">
                    Next.js 14 avec son App Router révolutionne la façon dont nous construisons des
                    applications web. En quelques commandes, vous avez un projet optimisé et prêt pour
                    la production.
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <pre className="font-mono text-sm">
                      npx create-next-app@latest mon-projet --typescript --tailwind --use-npm
                    </pre>
                  </div>
                  <p>
                    L'utilisation de TypeScript et Tailwind CSS dès le départ vous fait gagner un
                    temps précieux sur la configuration et le styling.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Database className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Mise en Place de la Base de Données</h2>
                  <p className="mb-4">
                    Supabase + Prisma : le duo gagnant pour une base de données performante et
                    type-safe. Supabase offre une interface visuelle intuitive, tandis que Prisma
                    garantit la sécurité type de vos requêtes.
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <pre className="font-mono text-sm">
                      npm install @prisma/client prisma
                      npx prisma init
                    </pre>
                  </div>
                  <p>
                    L'auto-complétion et la validation en temps réel de Prisma accélèrent
                    considérablement le développement de votre backend.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Palette className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Construction de l'Interface Utilisateur</h2>
                  <p className="mb-4">
                    Tailwind CSS combiné à shadcn/ui vous permet de créer une interface élégante
                    et responsive en un temps record. Pas besoin d'être un expert en design !
                  </p>
                  <div className="space-y-4">
                    <p>Points clés pour une UI rapide et efficace :</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Utilisez des composants préfabriqués de shadcn/ui</li>
                      <li>Adaptez les couleurs avec les variables CSS de Tailwind</li>
                      <li>Pensez mobile-first pour un responsive naturel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Rocket className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Déploiement sur Vercel</h2>
                  <p className="mb-4">
                    Le déploiement sur Vercel est aussi simple qu'un push Git. Avec l'intégration
                    continue, chaque modification est automatiquement déployée en production.
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <pre className="font-mono text-sm">
                      git push origin main # Vercel s'occupe du reste !
                    </pre>
                  </div>
                  <p>
                    Bonus : Les analytics intégrés vous donnent immédiatement des insights sur
                    les performances de votre application.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Résultat Final
            </h2>
            <p className="mb-4">
              En seulement 4 heures, vous avez créé une plateforme web moderne avec :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Un domaine personnalisé sécurisé</li>
              <li>Une application Next.js performante</li>
              <li>Une base de données type-safe avec Prisma</li>
              <li>Une UI responsive et élégante</li>
              <li>Un déploiement automatisé sur Vercel</li>
            </ul>
            <p className="font-semibold">
              N'attendez plus ! Avec les bons outils et une approche structurée, vous pouvez
              transformer votre idée en réalité en quelques heures seulement. Le développement
              web moderne n'a jamais été aussi accessible et rapide.
            </p>
          </div>
        </section>
      </ScrollArea>
    </article>
  )
}

