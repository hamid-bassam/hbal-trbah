/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Coins, MessageCircleWarning, ShieldCheck } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import cryptoImage from "../../../assets/images/blog/covers/cryptoImage.webp";
import { ShitcoinsVolatilityCard } from "../../_components/ShitcoinsVolatilityCard";

export const metadata: Metadata = {
  title: "Altcoins, Shitcoins et Mème Coins : Naviguer dans le Monde des Cryptos Volatiles",
  description: "Un guide éducatif et inspirant pour éviter les pièges du marché des cryptomonnaies volatiles et investir intelligemment.",
  keywords: "cryptomonnaies, altcoins, shitcoins, mème coins, investissement, blockchain, trading, finance",
};

export default function CryptoGuidePage() {
  return (
    <article className="container max-w-4xl py-12 mx-auto">
      <header className="space-y-4 text-center mb-12">
        <div className="flex justify-center gap-2 mb-6">
          <Badge variant="secondary">Finance</Badge>
          <Badge variant="secondary">Cryptomonnaies</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Altcoins, Shitcoins et Mème Coins : Comprendre les Risques et Opportunités
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          <span>Temps de lecture : 6 minutes</span>
        </div>
      </header>

      <ScrollArea className="space-y-12">
        <Image
          src={cryptoImage}
          alt="Monde des Cryptomonnaies"
          width={800}
          height={450}
          className="rounded-lg mb-12"
        />

        <section className="prose prose-gray dark:prose-invert max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6">Introduction: Cryptos, un Eldorado ou un Mirage ?</h2>
          <p>
            Le marché des cryptomonnaies fascine par son potentiel de gains rapides et spectaculaires. Mais derrière les rêves de richesse,<span className="bg-destructive/80 text-muted rounded-lg rounded-r-none pl-2">{"il y a une réalité brutale : plus de 90% des nouveaux investisseurs "}</span> <span className="font-bold bg-destructive/80 text-muted"> {"perdent"}</span> <span className="bg-destructive/80 text-muted rounded-lg rounded-l-none pr-2">leur argent dans des "shitcoins" ou des projets sans réelle valeur.</span> Cet article vise à éclairer les novices et les jeunes investisseurs sur les risques de ce monde fascinant, mais impitoyable.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Coins className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Qu’est-ce qu’un Altcoin, un Shitcoin et un Mème Coin ?</h2>
                <ul className="list-disc pl-6">
                  <li><strong>Altcoin :</strong> Toute crypto-monnaie alternative au Bitcoin, souvent conçue pour résoudre un problème spécifique (exemple : Ethereum pour les smart contracts).</li>
                  <li><strong>Shitcoin :</strong> Une monnaie sans utilité réelle ni projet sérieux, créée pour profiter de l’engouement et manipuler les investisseurs.</li>
                  <li><strong>Mème Coin :</strong> Une crypto humoristique ou communautaire (exemple : Dogecoin), qui peut exploser en valeur grâce à un effet viral, mais reste extrêmement risquée.</li>
                </ul>
                <p className="mt-4">
                  📉 Fait important : La majorité des "shitcoins" et "mème coins" finissent par perdre toute leur valeur en quelques mois.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <MessageCircleWarning className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Les Dangers d’un Marché Volatile</h2>
                <ul className="list-disc pl-6">
                  <li><strong>FOMO (Fear of Missing Out) :</strong> Beaucoup investissent par peur de manquer une opportunité, sans analyse sérieuse.</li>
                  <li><strong>Manipulation :</strong> Des "pumps and dumps" orchestrés par des créateurs malveillants font monter les prix artificiellement pour ensuite tout revendre.</li>
                  <li><strong>Absence de régulation :</strong> Contrairement aux marchés traditionnels, il y a peu de protections pour les investisseurs.</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">3. Comment Investir de Manière Intelligente ?</h2>
                <ul className="list-disc pl-6">
                  <li><strong>Éduquez-vous avant tout :</strong> Comprenez la technologie blockchain et lisez les "whitepapers" des projets.</li>
                  <li><strong>Évitez les promesses de gains rapides :</strong> Si c’est trop beau pour être vrai, c’est probablement une arnaque.</li>
                  <li><strong>Diversifiez vos investissements :</strong> Ne mettez jamais tout votre capital dans une seule crypto.</li>
                  <li><strong>Choisissez des projets solides :</strong> Recherchez des cryptos avec une communauté active, des cas d’usage réels et une équipe crédible.</li>
                </ul>
              </div>
            </div>
          </Card>
          <ShitcoinsVolatilityCard />
        </section>


        <section className="mt-12 bg-muted p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Les cryptos ne sont pas un jeu, mais un terrain complexe qui demande du temps, de la patience et des connaissances. N’investissez que ce que vous êtes prêt à perdre, et rappelez-vous que le succès vient avec la discipline, pas avec les paris impulsifs.
          </p>
          <p className="italic font-semibold">💡 Citation inspirante : "Ce n'est pas le vent qui décide de ta direction, mais l’orientation de tes voiles."</p>
        </section>
      </ScrollArea>
    </article>
  );
}
