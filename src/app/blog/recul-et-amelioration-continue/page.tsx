/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BarChart, Clock } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import coverImage from "../../../assets/images/recul_couverture.webp";
import { ContinuousImprovementGraphCard } from "../../_components/ContinuousImprovmentGraphCard";


export const metadata: Metadata = {
  title: "L'Importance du Recul et de l'Amélioration Continue | Hbal Trbah",
  description:
    "Découvrez pourquoi le recul et l'amélioration continue sont des piliers pour progresser dans un monde en mouvement constant. Apprenez à intégrer ces concepts dans votre quotidien.",
  keywords:
    "recul, amélioration continue, développement personnel, productivité, optimisation, réflexion stratégique",
};

export default function ReculPage() {
  return (
    <article className="container max-w-4xl py-12 mx-auto">
      <header className="space-y-4 text-center mb-12">
        <div className="flex justify-center gap-2 mb-6">
          <Badge variant="secondary">Développement Personnel</Badge>
          <Badge variant="secondary">Productivité</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          L'Importance du Recul et de l'Amélioration Continue
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Temps de lecture : 5 minutes</span>
        </div>
      </header>

      <ScrollArea className="space-y-12">
        <Image
          src={coverImage.src}
          alt="Recul et Amélioration Continue"
          width={800}
          height={450}
          className="rounded-lg mb-12"
        />

        <section className="prose prose-gray dark:prose-invert max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6">Pourquoi Prendre du Recul ?</h2>
          <p>
            Dans un monde qui valorise la vitesse et l'immédiateté, le recul est
            souvent perçu comme un luxe. Pourtant, il est essentiel pour
            comprendre nos actions et mieux orienter nos efforts.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Perspective :</strong> Comprendre les situations sous un
              nouvel angle.
            </li>
            <li>
              <strong>Énergie :</strong> Réduire la surcharge mentale pour mieux
              se concentrer.
            </li>
            <li>
              <strong>Priorisation :</strong> Identifier ce qui compte
              réellement.
            </li>
          </ul>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <BarChart className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Amélioration Continue</h2>
                <p>
                  Adoptez une démarche d’amélioration continue pour transformer
                  vos petites actions en grandes réussites :
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Faites une évaluation régulière de vos progrès et ajustez
                    vos actions.
                  </li>
                  <li>
                    Adoptez la règle des 1% : améliorez-vous un peu chaque jour.
                  </li>
                  <li>
                    Célébrez vos petites victoires pour rester motivé.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          <ContinuousImprovementGraphCard />
        </section>

        <section className="mt-16 bg-muted p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Le recul et l’amélioration continue sont les clés d’une croissance
            durable. Prenez un moment pour réfléchir aujourd’hui, car chaque pas
            compte dans votre progression.
          </p>
          <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
            "Ce n'est pas la vitesse à laquelle vous progressez qui compte, mais votre capacité à corriger votre trajectoire à chaque étape."
          </pre>
        </section>
      </ScrollArea>
    </article>
  );
}
