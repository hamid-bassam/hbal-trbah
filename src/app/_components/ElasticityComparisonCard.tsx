/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import elastic_vs_linear_graph from "../../assets/images/blog/graphs/elastic_vs_linear_divergence.png";

export const ElasticityComparisonCard = () => {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Comparaison : Courbes Linéaire et Élastique</h2>
          <p className="text-muted-foreground mb-4">
            Découvrez comment la progression élastique dépasse de façon exponentielle une progression linéaire classique. Ce graphique démontre l'impact cumulatif des petites améliorations continues.
          </p>
          <div className="relative w-full h-64 rounded-lg overflow-hidden border border-muted">
            <Image
              src={elastic_vs_linear_graph.src}
              alt="Comparaison entre progression linéaire et élastique"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            📈 La courbe élastique illustre le potentiel exponentiel des efforts quotidiens continus, tandis que la courbe linéaire montre les limites d'une approche stagnante. Adoptez une mentalité axée sur l'amélioration continue pour atteindre de nouveaux sommets.
          </p>
          <Badge variant="secondary" className="mt-4">
            Développement Personnel
          </Badge>
        </div>
      </div>
    </Card>
  );
};
