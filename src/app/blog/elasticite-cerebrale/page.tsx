/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, BrainCog, Dumbbell, Lightbulb } from "lucide-react";
import { Metadata } from "next";
// import Image from "next/image";
// import elasticityImage from "../../../assets/images/elasticityImage.webp";
import { ElasticityComparisonCard } from "../../_components/ElasticityComparisonCard";

export const metadata: Metadata = {
  title: "L'Élasticité Cérébrale : Développer son Potentiel Mental | Hbal Trbah",
  description:
    "Découvrez comment entraîner votre cerveau pour apprendre, créer et s'adapter avec plus d'efficacité. Explorez des méthodes concrètes pour développer votre potentiel cognitif.",
  keywords: "élasticité cérébrale, neuroplasticité, développement personnel, productivité, apprentissage",
};

export default function ElasticityPage() {
  return (
    <article className="container max-w-4xl py-12 mx-auto">
      <header className="space-y-4 text-center mb-12">
        <div className="flex justify-center gap-2 mb-6">
          <Badge variant="secondary">Développement Personnel</Badge>
          <Badge variant="secondary">Neurosciences</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          L'Élasticité Cérébrale : Développez Votre Potentiel Mental
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Lightbulb className="h-4 w-4" />
          <span>Temps de lecture : 5 minutes</span>
        </div>
      </header>

      <ScrollArea className="space-y-12">
        {/* <Image
          src={elasticityImage}
          alt="Illustration sur l'élasticité cérébrale"
          width={800}
          height={450}
          className="rounded-lg mb-12"
        /> */}

        <section className="prose prose-gray dark:prose-invert max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6">Introduction : Pourquoi Exploiter son Potentiel Mental ?</h2>
          <p>
            Imaginez votre cerveau comme un muscle : plus vous l’exercez, plus il devient puissant. Ce concept, connu sous le nom d’élasticité cérébrale, désigne la capacité du cerveau à apprendre, à s’adapter et à se transformer à tout âge. Cet article vous montre comment développer cette élasticité et exploiter vos capacités latentes.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <BrainCog className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Qu’est-ce que l’Élasticité Cérébrale ?</h2>
                <ul className="list-disc pl-6">
                  <li><strong>Définition :</strong> La capacité du cerveau à former de nouvelles connexions neuronales, même à l’âge adulte.</li>
                  <li><strong>Pourquoi est-ce important ?</strong> Améliore la créativité, renforce la mémoire et accélère l’apprentissage.</li>
                </ul>
                <p className="mt-4">
                  📖 Fait scientifique : Le cerveau humain peut continuer à évoluer et à se remodeler tout au long de la vie grâce à des exercices cognitifs.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Dumbbell className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Les Méthodes pour Développer l’Élasticité Cérébrale</h2>
                <ul className="list-disc pl-6">
                  <li><strong>Apprenez une nouvelle compétence :</strong> Un instrument de musique, un sport, ou une activité artistique.</li>
                  <li><strong>Changez votre routine :</strong> Essayez un chemin différent pour aller au travail ou changez de main dominante pour certaines tâches.</li>
                  <li><strong>Stimulez votre esprit :</strong> Jeux cognitifs comme les puzzles ou les échecs.</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Book className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">3. L’Importance des Muscles Énergétiques</h2>
                <ul className="list-disc pl-6">
                  <li><strong>Faites des pauses régulières :</strong> Réduisez la fatigue mentale.</li>
                  <li><strong>Pratiquez la pleine conscience :</strong> Calmez l’esprit pour mieux se concentrer.</li>
                  <li><strong>Fixez des objectifs clairs :</strong> Priorisez pour ne pas gaspiller votre énergie mentale.</li>
                </ul>
              </div>
            </div>
          </Card>
          <ElasticityComparisonCard />
        </section>

        <section className="mt-12 bg-muted p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            L’élasticité cérébrale est une faculté que chacun peut développer à tout âge. Le succès n’est pas un don, mais une discipline. Commencez aujourd’hui, car chaque petit effort contribue à une transformation durable.
          </p>
          <p className="italic font-semibold">🌟 "La seule limite à votre potentiel est celle que vous vous imposez."</p>
        </section>
      </ScrollArea>
    </article>
  );
}
