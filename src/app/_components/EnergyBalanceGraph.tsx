/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import energyBalanceGraph from "../../assets/images/blog/graphs/energy-output.png";

export const EnergyBalanceGraphCard = () => {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">
            Équilibre Énergétique : Un Graphique Inspirant
          </h2>
          <p className="text-muted-foreground mb-4">
            Voici une représentation visuelle de l'importance de maintenir un équilibre énergétique optimal pour maximiser votre bien-être et vos performances.
          </p>
          <div className="relative w-full h-64 rounded-lg overflow-hidden border border-muted">
            <Image
              src={energyBalanceGraph.src}
              alt="Graphique de l'équilibre énergétique"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Ce graphique compare les niveaux d'énergie consommée et dépensée,
            mettant en lumière l'importance de trouver un équilibre pour une
            vie saine et productive.
          </p>
          <Badge variant="secondary" className="mt-4">
            Bien-être & Vitalité
          </Badge>
        </div>
      </div>
    </Card>
  );
};
