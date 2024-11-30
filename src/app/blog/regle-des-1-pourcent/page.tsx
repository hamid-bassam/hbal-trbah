/* eslint-disable react/no-unescaped-entities */

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, LineChart, TrendingUp } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import onePercent from "../../../assets/images/one_percent_rule_graph.png";

export const metadata: Metadata = {
  title: "La Règle des 1% : Comment Les Petites Actions Changent Tout | Hbal Trbah",
  description:
    "Découvrez la règle des 1% expliquée dans Atomic Habits. Apprenez à améliorer votre vie de façon exponentielle grâce à de petites actions quotidiennes.",
  keywords: "règle des 1%, atomic habits, productivité, amélioration personnelle, habitudes, bien-être",
};

export default function OnePercentRulePage() {
  return (
    <article className="container max-w-4xl py-12 mx-auto">
      <header className="space-y-4 text-center mb-12">
        <div className="flex justify-center gap-2 mb-6">
          <Badge variant="secondary">Productivité</Badge>
          <Badge variant="secondary">Développement Personnel</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          La Règle des 1% : Transformez Votre Vie Petit à Petit
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Temps de lecture : 4 minutes</span>
        </div>
      </header>

      <ScrollArea className="space-y-12">
        <section className="prose prose-gray dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground mb-12">
            Imaginez devenir juste 1% meilleur chaque jour. Une petite amélioration à peine perceptible, mais cumulée
            sur un an, elle peut littéralement transformer votre vie. Ce concept, popularisé par James Clear dans
            <em>{" Atomic Habits"}</em>, repose sur une vérité simple : les grands changements naissent des petites actions.
          </p>
          <p className="lead text-xl text-muted-foreground mb-12">
            Moi, aujoudh'ui j'ai lu une page de plus de mon livre, j'ai pris plus de temps pour manger plus de légumes et poissons, j'ai passé plus de temps avec la famille, j'ai passé moins de temps à réfléchir dans le vide avant de prendre ma douche froide, une minute de plus pendant la douche, puis une heure de plus en temps de focus ! ce n'est pas grand chose mais c'est un bon début et j'en suis fier! l'important n'est pas juste de lire mais de faire !!! Et vous, quel etait votre extra-bonus aujourd'hui ?
          </p>

          <Image src={onePercent.src} alt="La Règle des 1%" width={800} height={450} className="rounded-lg" />

          <div className="bg-muted p-4 rounded-lg border-l-4 border-primary mb-12">
            <p className="italic">
              "Le succès n'est pas le résultat de grands efforts ponctuels, mais de petites actions répétées
              quotidiennement."
            </p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">1. L’Impact Exponentiel</h2>
                <p>
                  Si vous améliorez votre performance ou votre habitude de 1% chaque jour, vous serez
                  **37 fois meilleur** en un an. À l’inverse, si vous baissez de 1% chaque jour, vous serez
                  proche de zéro au bout de 365 jours.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <LineChart className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Les Petites Victoires</h2>
                <p>
                  En vous concentrant sur de petites actions, vous accumulez des victoires quotidiennes qui renforcent
                  votre confiance et votre motivation. Chaque pas compte, même si vous ne voyez pas immédiatement
                  les résultats.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Applications Pratiques de la Règle des 1%
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Productivité</h3>
                  <ul className="list-disc pl-6">
                    <li>Ajoutez 5 minutes de focus à votre journée.</li>
                    <li>Planifiez une tâche de plus chaque matin.</li>
                    <li>Éliminez une distraction par semaine.</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Santé</h3>
                  <ul className="list-disc pl-6">
                    <li>Buvez un verre d'eau supplémentaire chaque jour.</li>
                    <li>Ajoutez un légume de plus à vos repas.</li>
                    <li>Faites 10 minutes d'exercice quotidien.</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Développement Personnel</h3>
                  <ul className="list-disc pl-6">
                    <li>Lisez une page de plus chaque jour.</li>
                    <li>Apprenez un mot d'une langue étrangère quotidiennement.</li>
                    <li>Méditez une minute de plus chaque semaine.</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Relations</h3>
                  <ul className="list-disc pl-6">
                    <li>Faites un compliment sincère chaque jour.</li>
                    <li>Envoyez un message à un ami ou proche.</li>
                    <li>Ajoutez 5 minutes à vos moments en famille.</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mt-16 bg-muted p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            La règle des 1% prouve que les petits efforts quotidiens mènent à des transformations majeures.
            Pas besoin de révolutionner votre vie du jour au lendemain. Faites simplement un pas, et tenez bon.
            C’est tout ce qui compte.
          </p>
          {/* <Button size="lg">
            Commencez Votre Transformation Aujourd’hui
          </Button> */}
        </section>
      </ScrollArea>
    </article>
  );
}
