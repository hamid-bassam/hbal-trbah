/* eslint-disable react/no-unescaped-entities */

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AlertCircle, ArrowUpRight, BookOpen, Clock, EyeOff, ShieldCheck, Target } from "lucide-react";

import zeroExcusesCover from "../../../assets/images/blog/covers/zero_excuses_cover.png";
import { MotionArticleCard } from "../../_components/MotionArticleCard";
import { MotionHero } from "../../_components/MotionHero";
import { MotionImage } from "../../_components/MotionImage";

export const metadata = {
  title: "Surmonter les Obstacles : Une Quête sans Excuse ni Justification | Hbal Trbah",
  description:
    "Découvrez comment transformer les obstacles en opportunités et dépasser les limites imposées par les excuses et les justifications. Un guide pratique et inspirant pour agir avec résilience et discipline.",
  keywords: "surmonter les obstacles, résilience, discipline, motivation, excuses, persévérance, croissance personnelle",
};

export default function ZeroExcusesPage() {
  return (
    <article className="container max-w-4xl py-12 mx-auto">
      <MotionHero>

        <header className="space-y-4 text-center mb-12">
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="secondary">Développement Personnelle</Badge>
            <Badge variant="secondary">Motivation</Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Surmonter les Obstacles : Une Quête sans Excuse ni Justification
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span>Temps de lecture : 10 minutes</span>
          </div>
        </header>
      </MotionHero>

      <div className="flex flex-col space-y-12" >
        <MotionImage src={zeroExcusesCover} alt="Équilibre énergétique" width={800} height={450} className="rounded-lg mb-12" />

        <section className="prose prose-gray dark:prose-invert max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6">Introduction</h2>
          <p className="font-mono">

            Dans le parcours de la vie, les obstacles ne sont pas des anomalies ;
            ils sont la norme. Ce qui distingue les réussites extraordinaires des tentatives avortées,
            c’est une attitude implacable face à l’adversité.
            Nous sommes tous confrontés à des défis qui testent notre détermination,
            mais trop souvent, nous tombons dans le piège des excuses et des justifications.
            Pour avancer, il faut adopter une mentalité qui transcende les limitations et embrasser
            l’idée que chaque barrière est une opportunité d’évoluer.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <MotionArticleCard>
            <Card className="p-6 h-full">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Les Excuses : Des Pièges pour l’Esprit</h2>

                  <p className="">
                    « Je n’ai pas le temps. » « Ce n’est pas le bon moment. » « Les circonstances sont contre moi. »
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Ces phrases semblent inoffensives, mais elles ont le pouvoir de saboter vos ambitions. Les excuses sont des
                    barrières auto-imposées qui nous maintiennent dans une zone de confort. Pourtant, la vérité est simple : le
                    moment parfait n’existe pas. Attendre les conditions idéales, c’est choisir l’inaction.
                  </p>
                  {/* Personal Story Section */}

                  <p className="text-muted-foreground mt-4">
                    Je me souviens d’une période difficile de ma vie où les obstacles semblaient insurmontables. Une fois, lors
                    d’un projet important, tout semblait aller de travers : des délais interminables, des échecs techniques, et
                    une équipe démotivée. J’étais à deux doigts d’abandonner.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Mais une phrase simple m’a aidé à changer de perspective : <span className="font-bold text-gray-900">
                      « Concentre-toi sur la solution, pas sur le problème. »
                    </span> Ce moment m’a appris que chaque excuse pouvait être transformée en action constructive si je le
                    choisissais.
                  </p>
                </div>
              </div>
            </Card>
          </MotionArticleCard>
          <MotionArticleCard>

            <Card className="p-6 h-full">
              <div className="flex items-start gap-4">
                <ArrowUpRight className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Transformer les Obstacles en Tremplins</h2>

                  <p className="text-muted-foreground">
                    Chaque obstacle est une opportunité d’apprendre, de grandir et de devenir plus résilient. Par exemple, je me rappelle d’un défi où je devais diriger un projet tout en formant une nouvelle recrue dans des délais très serrés. Plutôt que de voir ce double objectif comme un fardeau, j’ai utilisé cette expérience pour affiner ma capacité à prioriser et à déléguer efficacement. Ce qui semblait être une contrainte est devenu une chance de développer des compétences cruciales. Plutôt que de voir les barrières comme des fins, considérez-les comme des points de pivot. Un échec dans un domaine peut ouvrir la voie à une réussite ailleurs. En adoptant une perspective axée sur la solution, chaque obstacle devient une étape vers le succès.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Une autre fois, alors que je préparais une présentation cruciale pour un client, tout semblait m’échapper. Mon ordinateur a planté, les fichiers semblaient irrécupérables, et je n’avais plus que quelques heures pour me préparer. Ce jour-là, j’ai appris l’importance de garder mon calme. J’ai réassemblé mes idées, réorganisé mes priorités et livré une présentation qui, à ma grande surprise, a été applaudie pour sa clarté et sa force.                </p>
                </div>
              </div>
            </Card>
          </MotionArticleCard>
          <MotionArticleCard>

            <Card className="p-6 h-full">
              <div className="flex items-start gap-4">
                <EyeOff className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Se Débarrasser de la Tentation de se Justifier</h2>

                  <p className="text-muted-foreground">
                    Il est naturel de vouloir expliquer nos choix aux autres,
                    mais se justifier peut être une perte d’énergie. Quand vous vous justifiez,
                    vous validez implicitement l’idée que vous devez une explication. En réalité,
                    vos actions parlent pour vous. Au lieu de perdre du temps à prouver pourquoi
                    vous échouez ou pourquoi vous ne pouvez pas avancer,
                    concentrez-vous sur le travail à accomplir.
                    L’action est la meilleure réponse à toute critique ou doute.
                  </p>
                </div>
              </div>
            </Card>
          </MotionArticleCard>
          <MotionArticleCard>

            <Card className="p-6 h-full">
              <div className="flex items-start gap-4">
                <Target className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">La Discipline comme Arme Secrète</h2>

                  <p className="text-muted-foreground">
                    Ceux qui réussissent ne sont pas toujours les plus talentueux, mais ils sont souvent les plus disciplinés. La discipline vous permet de rester concentré, même lorsque les résultats ne sont pas immédiats. Elle vous aide à ignorer les distractions, à refuser de vous plaindre et à continuer à avancer. Rappelez-vous : ce n’est pas la motivation qui vous fait atteindre vos objectifs, c’est l’engagement constant.
                  </p>
                </div>
              </div>
            </Card>
          </MotionArticleCard>
          <MotionArticleCard>
            <Card className="p-6 h-full">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Choisir la Résilience</h2>

                  <p className="text-muted-foreground">
                    La résilience est l’état d’esprit qui vous permet de rebondir après chaque chute.
                    Comme le dit si bien Nelson Mandela :
                    <br />
                    <span className="font-bold text-gray-900">

                      « Je ne perds jamais. Soit je gagne, soit j’apprends. »
                    </span>
                    <br />

                    Cette philosophie montre que chaque épreuve est une leçon et non une fin en soi.
                    Cultiver la résilience implique de vous entourer de personnes positives,
                    de chercher des solutions au lieu de vous apitoyer et de célébrer chaque victoire,
                    aussi petite soit-elle. Plus vous renforcez votre capacité à vous relever,
                    plus il devient difficile pour les obstacles de vous arrêter.
                  </p>
                </div>
              </div>
            </Card>
          </MotionArticleCard>
          <MotionArticleCard>
            <Card className="p-6 h-full">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Agir Maintenant, Sans Attendre</h2>

                  <p className="text-muted-foreground">
                    La plus grande épreuve n’est pas le chemin à parcourir, mais le choix d’avancer.
                    Il n’y aura jamais de moment parfait pour commencer,
                    mais chaque moment est parfait pour agir. Lorsque vous ressentez la peur,
                    c’est un signe que vous êtes sur le point de franchir une étape importante.
                    Prenez des mesures, même petites, car chaque pas compte.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Je repense souvent à ces jours où j’avais peur de commencer un projet par crainte de l’échec.
                    Mais à chaque fois, c’est l’action elle-même qui m’a libéré de cette peur. Un pas à la fois,
                    un effort à la fois, les montagnes deviennent des collines.
                  </p>
                </div>
              </div>
            </Card>
          </MotionArticleCard>




        </section>
        <MotionArticleCard>
          <section className="mt-12 bg-muted p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Les barrières ne sont que des étapes sur le chemin de votre réussite. Ne laissez pas les excuses ou la peur de l’échec dicter votre avenir. En rejetant les justifications et en embrassant l’action, vous transformez l’impossible en possible. Votre quête est unique et mérite votre dévouement total. Alors, avancez sans regarder en arrière
            </p>
            <p className="italic font-semibold">
              🚀 "les limites ne sont que des illusions."
            </p>
            <p className="italic font-semibold mt-4">
              🔥"Live it up or give it up !"
            </p>
          </section>
        </MotionArticleCard>
      </div>
    </article>
  );
}
