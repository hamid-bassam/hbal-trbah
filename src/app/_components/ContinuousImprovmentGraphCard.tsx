/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import continuousImprovementGraph from "../../assets/images/continuous_improvment_graph.webp";

export const ContinuousImprovementGraphCard = () => {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">L'Importance du Recul et de l'Amélioration Continue</h2>
          <p className="text-muted-foreground mb-4">
            Un effort constant avec une réflexion stratégique peut transformer des résultats ordinaires en succès
            extraordinaires. Ce graphique illustre comment prendre du recul et ajuster ses actions conduit à des
            progrès exponentiels.
          </p>
          <div className="relative w-full h-64 rounded-lg overflow-hidden border border-muted">
            <Image
              src={continuousImprovementGraph.src}
              alt="Graphique de l'importance du recul et de l'amélioration continue"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            🚀 Chaque étape d'amélioration est une opportunité pour affiner votre stratégie et accélérer vos progrès.
            Prenez le temps d'analyser et de planifier pour maximiser votre impact.
          </p>
          <Badge variant="secondary" className="mt-4">
            Stratégie et Productivité
          </Badge>
        </div>
      </div>
    </Card>
  );
};
