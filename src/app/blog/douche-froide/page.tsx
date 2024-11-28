/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BoneIcon as Blood, Brain, Dumbbell, Heart, Shield, Zap } from 'lucide-react'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Les Bienfaits de la Douche Froide | Hbal Trbah",
  description: "Découvrez pourquoi les douches froides peuvent transformer votre santé mentale et physique. Améliorez votre circulation, boostez votre énergie et réduisez le stress grâce à cette habitude simple mais puissante.",
  keywords: "douches froides, santé mentale, circulation sanguine, réduction du stress, récupération musculaire, bien-être, résilience mentale, système immunitaire, Hbal Trbah"
}

export default function DoucheFroidePage() {
  return (
    <article className="container max-w-4xl py-12 mx-auto">
      <header className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Les Bienfaits de la Douche Froide : Améliorez Votre Santé Physique et Mentale
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Découvrez comment une simple habitude quotidienne peut révolutionner votre bien-être physique et mental,
          en stimulant votre énergie et en renforçant votre résilience.
        </p>
      </header>

      <ScrollArea className="space-y-12">
        <section className="prose prose-gray dark:prose-invert max-w-none">
          <p className="lead">
            Dans notre quête perpétuelle de bien-être et de performance, nous négligeons souvent les solutions les plus
            simples et les plus naturelles. La douche froide, pratique ancestrale adoptée par de nombreuses cultures,
            s'impose aujourd'hui comme une habitude transformatrice accessible à tous. Découvrons ensemble pourquoi
            cette pratique quotidienne peut devenir votre meilleur allié pour une santé optimale.
          </p>

          <div className="grid gap-8 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Blood className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Amélioration de la Circulation Sanguine</h2>
                  <p>
                    L'exposition à l'eau froide provoque une vasoconstriction immédiate suivie d'une vasodilatation,
                    créant un véritable "exercice" pour vos vaisseaux sanguins. Cette gymnastique vasculaire améliore
                    significativement la santé cardiovasculaire et optimise l'oxygénation des tissus. Des études montrent
                    que les pratiquants réguliers constatent une amélioration notable de leur circulation périphérique
                    dès les premières semaines.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Renforcement du Système Immunitaire</h2>
                  <p>
                    Les recherches démontrent que l'exposition régulière à l'eau froide stimule la production de globules
                    blancs, renforçant ainsi nos défenses naturelles. Cette augmentation de l'activité immunitaire nous
                    protège plus efficacement contre les infections courantes et améliore notre résistance générale aux
                    maladies. Les adeptes rapportent une diminution significative des rhumes et autres infections
                    saisonnières.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Brain className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Réduction du Stress et de l'Anxiété</h2>
                  <p>
                    La douche froide déclenche la libération d'endorphines, nos "hormones du bonheur" naturelles, tout
                    en réduisant les niveaux de cortisol, l'hormone du stress. Cette régulation hormonale agit comme un
                    anti-stress naturel, améliorant significativement notre équilibre émotionnel et notre bien-être mental
                    quotidien.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Zap className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Boost de l'Adrénaline</h2>
                  <p>
                    L'immersion dans l'eau froide provoque une décharge d'adrénaline naturelle, augmentant instantanément
                    notre niveau d'énergie et notre concentration. Cette stimulation naturelle améliore nos performances
                    cognitives et notre productivité tout au long de la journée, sans les effets secondaires des
                    stimulants artificiels.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Dumbbell className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Récupération Musculaire Améliorée</h2>
                  <p>
                    Les athlètes de haut niveau intègrent régulièrement les douches froides dans leur routine de
                    récupération. L'eau froide agit comme un anti-inflammatoire naturel, réduisant les courbatures et
                    accélérant la récupération après l'effort. Cette pratique permet une meilleure régénération
                    musculaire et une reprise plus rapide de l'entraînement.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Heart className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Développement de la Résilience Mentale</h2>
                  <p>
                    Affronter l'eau froide chaque matin développe un véritable mental d'acier. Cette pratique nous
                    apprend à sortir de notre zone de confort et à surmonter nos appréhensions. La discipline requise
                    pour maintenir cette habitude renforce notre détermination et notre capacité à faire face aux défis
                    quotidiens.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p>
              La douche froide représente bien plus qu'une simple habitude de bien-être : c'est un véritable catalyseur
              de transformation personnelle. Commencez progressivement, peut-être par 30 secondes d'eau froide à la fin
              de votre douche habituelle, et augmentez graduellement la durée. Rappelez-vous que chaque exposition à
              l'eau froide est une victoire sur vous-même et un pas de plus vers une meilleure version de vous.
            </p>
            <p className="mt-4 font-semibold">
              "La force ne vient pas de vos capacités physiques, mais de votre volonté indomptable."
              Commencez dès demain, et découvrez par vous-même le pouvoir transformateur de cette pratique millénaire.
            </p>
          </div>
        </section>
      </ScrollArea>
    </article>
  )
}

