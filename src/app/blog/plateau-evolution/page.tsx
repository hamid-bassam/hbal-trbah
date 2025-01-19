/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChartNoAxesColumnDecreasing, CircleHelp, Lightbulb, TrendingUp } from "lucide-react";
import { Metadata } from "next";

import Image from "next/image";
import plateauCover from "../../../assets/images/blog/covers/plateau-couverture.webp";
import { PlateauEvolutionGraphCard } from "../../_components/PlateauEvolutionGraphCard";


export const metadata: Metadata = {
  title: "Le Plateau de l'Évolution et la Persévérance | Hbal Trbah",
  description:
    "Découvrez comment surmonter le plateau de l'évolution et transformer une phase de stagnation en opportunité de croissance. Astuces pratiques pour persévérer et réussir.",
  keywords: "plateau de l'évolution, persévérance, croissance personnelle, motivation, discipline",
};

export default function PlateauEvolutionPage() {
  return (
    <article className="container max-w-4xl py-12 mx-auto">
      <header className="space-y-4 text-center mb-12">
        <div className="flex justify-center gap-2 mb-6">
          <Badge variant="secondary">Développement Personnelle</Badge>
          <Badge variant="secondary">Motivation</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Le Plateau de l'Évolution et la Persévérance
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Lightbulb className="h-4 w-4" />
          <span>Temps de lecture : 4 minutes</span>
        </div>
      </header>

      <ScrollArea className="space-y-12">
        <Image
          src={plateauCover}
          alt="Équilibre énergétique"
          width={800}
          height={450}
          className="rounded-lg mb-12"
        />
        <section className="prose prose-gray dark:prose-invert max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6">Introduction</h2>
          <p>
            Dans tout processus de croissance, il arrive un moment où les
            efforts semblent ne plus porter leurs fruits. Cette phase, appelée
            "plateau de l'évolution", met à l'épreuve votre patience et votre
            détermination. Elle est pourtant essentielle pour progresser.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <ChartNoAxesColumnDecreasing className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Qu'est-ce que le Plateau de l'Évolution ?</h2>
                <ul className="list-disc pl-6">
                  <li>
                    Une période de stagnation apparente malgré des efforts constants.
                  </li>
                  <li>
                    Courante dans l'apprentissage, le sport, ou la carrière.
                  </li>
                  <li>
                    Bien qu'elle semble décourageante, elle prépare souvent de
                    grandes percées.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <CircleHelp className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Pourquoi survient-il ?</h2>
                <ul className="list-disc pl-6">
                  <li>
                    Adaptation cognitive ou physique à un nouveau défi.
                  </li>
                  <li>
                    Nécessité de consolider des compétences acquises.
                  </li>
                  <li>
                    Surcharge mentale ou objectifs mal définis.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">3. Comment le Traverser ?</h2>
                <ul className="list-disc pl-6">
                  <li>
                    Redéfinissez vos objectifs en micro-objectifs pour plus de
                    clarté.
                  </li>
                  <li>
                    Changez de stratégie pour stimuler votre progression.
                  </li>
                  <li>
                    Faites preuve de discipline et célébrez les petites victoires.
                  </li>
                  <li>
                    Acceptez cette phase comme une opportunité de réflexion.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          <PlateauEvolutionGraphCard /> {/* Graphique */}
        </section>

        <section className="mt-12 bg-muted p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Le plateau de l'évolution est une étape naturelle de toute
            progression. Persévérez, adaptez-vous, et chaque plateau deviendra
            une rampe de lancement vers vos plus grandes réalisations.
          </p>
          <p className="italic font-semibold">
            🌟 "C’est souvent juste après le plateau que les grandes percées surviennent."
          </p>
        </section>
      </ScrollArea>
    </article>
  );
}
