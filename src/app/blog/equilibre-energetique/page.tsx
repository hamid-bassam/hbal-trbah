/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Droplet, Flame, Heart, Moon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import energyBalanceCover from "../../../assets/images/energy-balance-coverr.webp";
import { EnergyBalanceGraphCard } from "../../_components/EnergyBalanceGraph";

export const metadata: Metadata = {
  title: "Optimisez Votre Équilibre Énergétique | Hbal Trbah",
  description:
    "Explorez les secrets de l'équilibre énergétique et apprenez à harmoniser vos apports et dépenses pour maximiser votre vitalité.",
  keywords: "équilibre énergétique, santé, nutrition, sommeil, activité physique, bien-être",
};

export default function EnergyBalancePage() {
  return (
    <article className="container max-w-4xl py-12 mx-auto">
      <header className="space-y-4 text-center mb-12">
        <div className="flex justify-center gap-2 mb-6">
          <Badge variant="secondary">Santé</Badge>
          <Badge variant="secondary">Bien-être</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Optimisez Votre Équilibre Énergétique pour une Vie Plus Harmonieuse
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Flame className="h-4 w-4" />
          <span>Temps de lecture : 6 minutes</span>
        </div>
      </header>

      <ScrollArea className="space-y-12">
        <Image
          src={energyBalanceCover}
          alt="Équilibre énergétique"
          width={800}
          height={450}
          className="rounded-lg mb-12"
        />

        {/* Introduction */}
        <section className="prose prose-gray dark:prose-invert max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Pourquoi l’Équilibre Énergétique est-il Essentiel ?
          </h2>
          <p>
            L’équilibre énergétique n’est pas seulement une notion scientifique. C’est un pilier de notre bien-être
            quotidien, influençant directement notre vitalité, notre humeur et notre productivité. Imaginez votre corps
            comme une batterie : si vous consommez plus d’énergie que vous n’en produisez, vous vous épuisez. Si vous
            accumulez trop sans l’utiliser, vous risquez la stagnation ou même des problèmes de santé.
          </p>
          <p>
            Dans cet article, découvrez comment gérer efficacement cet équilibre, en apprenant à harmoniser vos apports
            et dépenses énergétiques pour maximiser votre potentiel.
          </p>
        </section>

        {/* Les Piliers de l'Équilibre Énergétique */}
        <section className="grid gap-8 md:grid-cols-2">
          {/* Alimentation */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Droplet className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">1. L’Alimentation</h2>
                <p className="mb-4">
                  Une alimentation équilibrée fournit l’énergie nécessaire sans excès :
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Glucides complexes :</strong> Libération d’énergie progressive (avoine, patates douces).
                  </li>
                  <li>
                    <strong>Protéines maigres :</strong> Régénération musculaire (poisson, œufs, légumineuses).
                  </li>
                  <li>
                    <strong>Lipides sains :</strong> Fonction cérébrale optimale (avocats, noix, huile d’olive).
                  </li>
                  <li>
                    <strong>Hydratation :</strong> Indispensable pour transporter les nutriments et maintenir les
                    fonctions corporelles.
                  </li>
                </ul>
                <p>
                  <strong>Astuce :</strong> Privilégiez les aliments riches en nutriments et évitez les calories vides
                  (sodas, sucreries).
                </p>
              </div>
            </div>
          </Card>

          {/* Activité physique */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Heart className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">2. L’Activité Physique</h2>
                <p className="mb-4">
                  L’exercice régulier équilibre la balance énergétique en augmentant les dépenses :
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Cardio :</strong> Brûle les graisses et booste l’endurance.
                  </li>
                  <li>
                    <strong>Renforcement musculaire :</strong> Augmente le métabolisme de repos.
                  </li>
                  <li>
                    <strong>Activités douces :</strong> Réduisent le stress tout en favorisant l’oxygénation (yoga,
                    marche).
                  </li>
                </ul>
                <p>
                  <strong>Exemple :</strong> Une simple marche de 20 minutes après les repas améliore la digestion et
                  l’utilisation des glucides.
                </p>
              </div>
            </div>
          </Card>

          {/* Sommeil */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Moon className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">3. Le Sommeil</h2>
                <p className="mb-4">
                  Pendant le sommeil, votre corps :
                </p>
                <ul className="list-disc pl-6">
                  <li>Répare les tissus.</li>
                  <li>Régule les hormones (insuline, leptine).</li>
                  <li>Recharge les réserves énergétiques.</li>
                </ul>
                <p>
                  <strong>Conseils pratiques :</strong>
                </p>
                <ul className="list-disc pl-6">
                  <li>Dormez 7-8 heures par nuit.</li>
                  <li>Évitez la lumière bleue des écrans avant de dormir.</li>
                  <li>Maintenez une température ambiante optimale (18-20°C).</li>
                </ul>
              </div>
            </div>
          </Card>
          <EnergyBalanceGraphCard /> {/* Graphique */}
        </section>


        {/* Conclusion */}
        <section className="mt-16 bg-muted p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            L’équilibre énergétique est bien plus qu’une simple gestion des calories. C’est un art de vivre qui vous
            permet de maximiser votre vitalité tout en minimisant le stress. En prenant soin de vos apports, en bougeant
            régulièrement, et en écoutant votre corps, vous pouvez atteindre un état d’harmonie durable.
          </p>
          <p className="italic font-semibold">
            "L’équilibre énergétique, c’est apprendre à danser avec la vie, en alternant les moments d’action et ceux de
            pause. Chaque geste, chaque choix compte."
          </p>
        </section>
      </ScrollArea>
    </article>
  );
}
