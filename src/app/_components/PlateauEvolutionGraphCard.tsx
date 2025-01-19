/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import plateauEvolutionGraph from "../../assets/images/blog/graphs/plateau-intermediaire.png";

export const PlateauEvolutionGraphCard = () => {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">
            Le Plateau de l'Évolution : Persévérance et Percée
          </h2>
          <p className="text-muted-foreground mb-4">
            Découvrez comment traverser la stagnation temporaire dans votre progression et atteindre une percée significative grâce à la persévérance et à une stratégie réfléchie.
          </p>
          <div className="relative w-full rounded-lg overflow-hidden border border-muted">
            <Image
              src={plateauEvolutionGraph.src}
              alt="Graphique représentant le plateau de l'évolution"
              height={400}
              width={600}
              // fill
              // style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Ce graphique met en lumière les phases typiques de l'apprentissage d'une nouvelle langue : une montée initiale, un plateau, puis une percée. Gardez confiance et ajustez vos efforts pour surmonter cette étape naturelle.
          </p>

        </div>
      </div>
    </Card>
  );
};
