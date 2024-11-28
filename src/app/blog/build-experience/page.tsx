/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Code, Rocket, Server, TrendingUp, Zap } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Construire une Plateforme Complète en 4 Heures | Hbal Trbah",
  description:
    "Un retour d'expérience sur la construction de la plateforme Hbal Trbah : outils modernes, défis techniques et solutions rapides, du nom de domaine au déploiement.",
  keywords:
    "développement web, Next.js, Vercel, Prisma, Supabase, Tailwind CSS, plateforme en 4 heures, Hbal Trbah"
}

export default function BuildExperiencePage() {
  return (
    <article className="container max-w-4xl py-12 mx-auto">
      <header className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Construire une Plateforme Complète en 4 Heures
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Plongée dans le processus de création d'une application de zéro à déploiement en 4
          heures chrono. Découvrez les outils, les défis et les solutions qui ont marqué la
          construction de <strong>Hbal Trbah</strong>.
        </p>
      </header>

      <ScrollArea className="space-y-12">
        <section className="prose prose-gray dark:prose-invert max-w-none">
          <p className="lead">
            Une idée. 4 heures. Un objectif clair : créer une plateforme fonctionnelle
            accessible au public. Avec une approche méthodique, des outils modernes et
            quelques imprévus, nous avons bâti <strong>Hbal Trbah</strong>, une plateforme qui
            incarne à la fois rapidité, efficacité et ambition.
          </p>

          <div className="grid gap-8 mt-12">
            {/* Étape 1 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Rocket className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Étape 1 : Achat et Configuration du Domaine</h2>
                  <p>
                    Nous avons commencé par définir l'identité de la plateforme. Le nom
                    <strong> Hbal Trbah</strong> s'est imposé comme une évidence. Il fallait
                    ensuite trouver un domaine disponible et le configurer rapidement.
                  </p>
                  <p>
                    <strong>Outils :</strong> Hostinger pour l'achat du domaine et Vercel pour
                    le pointage DNS.
                  </p>
                  <p className="text-muted-foreground italic">
                    "Trouver un nom qui marque est le premier pas vers une identité forte."
                  </p>
                </div>
              </div>
            </Card>

            {/* Étape 2 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Code className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Étape 2 : Initialisation du Projet</h2>
                  <p>
                    Une fois le domaine en place, nous avons initialisé un projet avec{" "}
                    <strong>Next.js</strong>. L'objectif était de structurer rapidement le
                    projet et de choisir des outils flexibles :
                  </p>
                  <ul className="list-disc ml-6">
                    <li>
                      **Next.js** pour sa capacité à gérer les routes et API internes.
                    </li>
                    <li>
                      **Tailwind CSS** pour un design rapide, avec des composants UI simples.
                    </li>
                    <li>
                      **Prisma** et **Supabase** pour la gestion de la base de données.
                    </li>
                  </ul>
                  <pre className="bg-gray-800 text-white p-4 rounded-md mt-4">
                    <code>
                      {`npx create-next-app@latest
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init`}
                    </code>
                  </pre>
                </div>
              </div>
            </Card>

            {/* Étape 3 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Server className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Étape 3 : Configuration de la Base de Données</h2>
                  <p>
                    Nous avons défini deux modèles dans <strong>Prisma</strong> :
                  </p>
                  <ul className="list-disc ml-6">
                    <li>
                      <strong>Subscriber :</strong> Pour le formulaire principal.
                    </li>
                    <li>
                      <strong>NewsletterSubscriber :</strong> Pour les emails.
                    </li>
                  </ul>
                  <p>
                    La connexion à <strong>Supabase</strong> a posé quelques défis en raison
                    d'erreurs liées aux variables d'environnement et au cache de Vercel, mais
                    ces obstacles ont été surmontés en ajoutant <code>prisma generate</code>
                    dans le processus de build.
                  </p>
                </div>
              </div>
            </Card>

            {/* Étape 4 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Zap className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Étape 4 : Conception de l'Interface</h2>
                  <p>
                    Nous avons développé deux formulaires clés :
                  </p>
                  <ul className="list-disc ml-6">
                    <li>
                      **Rejoindre l'aventure :** Collecte le nom complet et l'email, avec des
                      toasts pour la confirmation.
                    </li>
                    <li>
                      **Newsletter :** Un formulaire rapide et minimaliste.
                    </li>
                  </ul>
                  <p>
                    La simplicité était notre priorité. L'utilisation de{" "}
                    <strong>ShadCN UI</strong> a permis de concevoir rapidement des
                    composants élégants.
                  </p>
                </div>
              </div>
            </Card>

            {/* Étape 5 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Étape 5 : Déploiement et Résultat Final</h2>
                  <p>
                    Avec le projet prêt, nous avons déployé sur <strong>Vercel</strong>. Le
                    processus a nécessité quelques ajustements mineurs, mais l'intégration
                    avec GitHub a grandement simplifié le déploiement continu.
                  </p>
                  <p>
                    <strong>Résultat final :</strong>{" "}
                    <a
                      href="https://www.hbaltrbah.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      hbaltrbah.com
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Leçons et Prochaines Étapes</h2>
            <p>
              Construire une plateforme en 4 heures demande des compromis, mais cela prouve
              que des outils modernes permettent de lancer rapidement des projets solides.
            </p>
            <ul className="list-disc ml-6">
              <li>Ajout d'un tableau de bord pour gérer les utilisateurs ? </li>
              <li>Création de statistiques pour analyser l'engagement ?</li>
              <li>Développement d'une interface multilingue ?</li>
            </ul>
          </div>
        </section>
      </ScrollArea>
    </article>
  )
}
