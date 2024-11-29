/* eslint-disable react/no-unescaped-entities */

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Brain, CheckCircle2, Clock, Dumbbell, Heart, Shield } from "lucide-react"
import { Metadata } from "next"
import YouTubeEmbed from "../../_components/YoutubeEmbed"

export const metadata: Metadata = {
  title: "Transformez Votre Corps et Votre Esprit : Les 5 Habitudes Qui Allongent Votre Vie | Hbal Trbah",
  description: "Adoptez ces 5 habitudes saines (arrêter de fumer, ne pas boire, bien manger, bien dormir et faire de l’exercice) pour régénérer votre corps, booster votre énergie et réduire drastiquement les effets du vieillissement.",
  keywords: "longévité, habitudes saines, santé, bien-être, arrêter de fumer, ne pas boire, alimentation saine, exercice, sommeil, Hbal Trbah"
}

export default function HealthyHabitsPage() {
  return (
    <article className="container max-w-4xl py-12 mx-auto">
      <header className="space-y-4 text-center mb-12">
        <div className="flex justify-center gap-2 mb-6">
          <Badge variant="secondary">Santé</Badge>
          <Badge variant="secondary">Longévité</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Transformez Votre Corps et Votre Esprit : Les 5 Habitudes Qui Allongent Votre Vie
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Temps de lecture : 10 minutes</span>
        </div>
      </header>

      <ScrollArea className="space-y-12">

        <section className="prose prose-gray dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground mb-12">
            Imaginez votre corps comme une voiture. Si vous en prenez soin, elle peut durer des décennies. Sinon, les
            dommages s'accumulent et elle finit par s'effondrer. Votre corps fonctionne de la même manière : il a besoin
            d’un entretien régulier pour continuer à performer. Voici les cinq habitudes qui peuvent littéralement
            transformer votre vie, en régénérant votre corps et en ralentissant le vieillissement.
          </p>

          <YouTubeEmbed url="https://www.youtube.com/watch?v=gou0_ZHL0J4&t=3259s" className="md:h-[500px]" />


          {/* <Card className="p-6">
            <div className="flex items-start gap-4">
              <Brain className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Inspiré par Rand Hindi, CEO de Zama</h2>
                <p>
                  Cet article est inspiré par une interview captivante de <strong>Rand Hindi</strong>, CEO de <strong>Zama</strong>,
                  une entreprise valorisée à plus de 73 millions de dollars, spécialisée dans la sécurité des données grâce au
                  chiffrement homomorphe. Lors de cette interview, un passage en particulier m'a marqué :
                </p>
                <p>
                  À partir de la <strong>minute 54:22</strong>, il explique comment cinq habitudes simples mais puissantes
                  peuvent transformer notre corps et prolonger notre vie de façon spectaculaire. Ces habitudes, souvent
                  considérées comme banales, ont un potentiel immense lorsqu'elles sont adoptées pleinement.
                </p>
                <p>
                  Ce qui m’a choqué, c’est l’idée que même après 40 ans, en adoptant ces habitudes, le corps peut se régénérer
                  au point de retrouver une vitalité comparable à celle d’un jeune adulte. C’est pourquoi j’ai décidé de partager
                  ces informations avec vous, car elles pourraient littéralement changer votre façon de voir le monde et de
                  prendre soin de vous.
                </p>
                <p>
                  Je vous recommande vivement de regarder cette interview <a href="https://www.youtube.com/watch?v=gou0_ZHL0J4&t=3259s" className="text-primary font-semibold hover:underline" target="_blank">ici</a>.
                  Pour le passage sur ce thème précis, rendez-vous directement à la <strong>minute 54:22</strong>.
                  Vous ne verrez plus jamais votre corps de la même façon !
                </p>
              </div>
            </div>
          </Card> */}

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Brain className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Inspiré par Rand Hindi, CEO de Zama</h2>

                <p className="mb-4">
                  Cet article s’inspire d’une interview marquante de <strong>Rand Hindi</strong>, CEO de
                  <strong>Zama</strong>, une entreprise valorisée à plus de <strong>73 millions de dollars</strong>, spécialisée dans la sécurité des données grâce au chiffrement homomorphe.
                </p>

                <p className="mb-4">
                  Lors de cette interview, un passage m’a particulièrement frappé : à partir de la <strong>minute 54:22</strong>,
                  il explique comment cinq habitudes simples mais puissantes peuvent non seulement transformer notre santé, mais également
                  prolonger notre vie de manière spectaculaire.
                </p>

                <blockquote className="bg-muted p-4 rounded-lg border-l-4 border-primary">
                  <p className="italic">
                    "Même après 40 ans, en adoptant ces habitudes, le corps peut se régénérer au point de retrouver une vitalité
                    comparable à celle d’un jeune adulte."
                  </p>
                </blockquote>

                <p className="mt-4 mb-4">
                  Ce qui m’a choqué, c’est la simplicité et l’accessibilité de ces conseils, souvent sous-estimés.
                  J’ai ressenti l’urgence de les partager avec vous, car ils pourraient littéralement changer votre manière de
                  voir votre santé et de prendre soin de vous.
                </p>

                <span className="mb-4">
                  Je vous invite à découvrir cette interview complète, qui propose une vision fascinante sur le monde de la deepTech, et qui dévoile des vérités qui vont changer votre manière de voir le monde. à ce
                  <Badge variant="secondary"><a href="https://www.youtube.com/watch?v=gou0_ZHL0J4&t=3259s" className="text-primary font-semibold hover:underline" target="_blank">
                    lien
                  </a>
                  </Badge>
                </span>
              </div>
            </div>
          </Card>



          <div className="grid gap-8 mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Ne Pas Fumer</h2>
                  <p>
                    Fumer expose vos poumons à des toxines qui détruisent les alvéoles, ces petites poches responsables
                    de l'échange d'oxygène. Résultat ? Moins d’oxygène pour vos organes, plus de risques de maladies
                    cardiovasculaires, de cancers, et une peau vieillie prématurément.
                  </p>
                  <p>
                    La bonne nouvelle ? Arrêter de fumer, même après des années, déclenche une régénération : vos poumons
                    commencent à se nettoyer, votre risque de cancer diminue progressivement, et votre énergie revient.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Heart className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Ne Pas Consommer d'Alcool</h2>
                  <p>
                    L’alcool est toxique pour le foie, mais ses effets vont bien au-delà : il perturbe le système nerveux,
                    favorise l’épilepsie et altère la mémoire. En excès, il accélère le vieillissement de vos cellules
                    en générant des radicaux libres.
                  </p>
                  <p>
                    Réduire ou arrêter l’alcool permet à votre foie de se régénérer. En quelques semaines, vos enzymes
                    hépatiques reviennent à un niveau normal, votre digestion s’améliore, et votre cerveau fonctionne
                    mieux.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Brain className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Manger Sain</h2>
                  <p>
                    Une alimentation équilibrée fournit au corps les nutriments nécessaires pour réparer ses cellules.
                    Les vitamines, minéraux et antioxydants aident à combattre les inflammations et les dommages
                    oxydatifs responsables du vieillissement.
                  </p>
                  <p>
                    Une alimentation saine réduit également les risques de diabète, d’obésité et de maladies
                    cardiovasculaires. Privilégiez les légumes verts, les fruits colorés, les protéines maigres, et les
                    graisses saines comme l’huile d’olive ou les noix.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Bien Dormir</h2>
                  <p>
                    Le sommeil est la période où votre corps se régénère. Pendant que vous dormez, votre cerveau
                    élimine les toxines, vos muscles se réparent, et votre système immunitaire se renforce.
                  </p>
                  <p>
                    Un sommeil de qualité améliore également la mémoire, réduit le stress, et régule vos hormones,
                    empêchant ainsi une prise de poids inutile ou des déséquilibres émotionnels.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Dumbbell className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Faire de l'Exercice</h2>
                  <p>
                    L’exercice régulier maintient vos muscles et vos os solides, améliore la circulation sanguine et aide
                    votre cœur à rester jeune. Il stimule également la production d’endorphines, les "hormones du
                    bonheur", réduisant ainsi le stress.
                  </p>
                  <p>
                    Même 30 minutes de marche rapide par jour peuvent prolonger votre espérance de vie et ralentir les
                    effets du vieillissement.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Pourquoi Ces Habitudes Transforment Votre Corps
            </h2>
            <p className="mb-4">
              En adoptant ces cinq habitudes, vous permettez à votre corps de se régénérer, réduisez les inflammations,
              et créez un environnement optimal pour un vieillissement sain. Des études montrent que ces changements
              peuvent prolonger votre vie de 12 à 14 ans, tout en améliorant votre qualité de vie.
            </p>
            <p className="font-semibold">
              Prenez soin de vous. Vous êtes la meilleure "machine" que vous posséderez jamais.
            </p>
          </div>
        </section>
      </ScrollArea>
    </article>
  )
}
