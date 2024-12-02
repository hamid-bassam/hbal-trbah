/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TrendingDown } from "lucide-react";
import Image from "next/image";
import shitcoins_volatility_graph from "../../assets/images/shitcoins_volatility_graph.png";

export const ShitcoinsVolatilityCard = () => {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <TrendingDown className="h-8 w-8 text-primary flex-shrink-0" />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">La Volatilité des Shitcoins</h2>
          <p className="text-muted-foreground mb-4">
            Voici un aperçu graphique de la manière dont la majorité des shitcoins perdent leur valeur en seulement quelques mois.
          </p>
          <div className="relative w-full h-64 rounded-lg overflow-hidden border border-muted">
            <Image
              src={shitcoins_volatility_graph.src}
              alt="Graphique de volatilité des shitcoins"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            ⚠️ Ce graphique illustre la tendance générale des shitcoins à s'effondrer après une brève période de spéculation intense. Investissez prudemment.
          </p>
          <Badge variant="secondary" className="mt-4">
            Éducation Financière
          </Badge>
        </div>
      </div>
    </Card>
  );
}
