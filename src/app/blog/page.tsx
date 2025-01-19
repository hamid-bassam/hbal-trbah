/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Calendar, Sparkles, TrendingUp } from 'lucide-react'
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import cold from "../../assets/images/blog/covers/cold.webp"
import cryptoImage from "../../assets/images/blog/covers/cryptoImage.webp"
import dev from "../../assets/images/blog/covers/dev.webp"
import elasticityImage from "../../assets/images/blog/covers/elasticityImage.webp"
import energyBalanceCoverImage from "../../assets/images/blog/covers/energy-balance-coverr.webp"
import longevity from "../../assets/images/blog/covers/longevity.webp"
import one_percent from "../../assets/images/blog/covers/one-percent-cover.webp"
import plateauCover from "../../assets/images/blog/covers/plateau-couverture.webp"
import recul_cover from "../../assets/images/blog/covers/recul_couverture.webp"
import zeroExcusesCover from "../../assets/images/blog/covers/zero_excuses_cover.png"
import elastic_vs_linear_divergence from "../../assets/images/blog/graphs/elastic_vs_linear_divergence.png"
import energyBalanceGraph from "../../assets/images/blog/graphs/energy-balance-graph.webp"
import plateau_graph from "../../assets/images/blog/graphs/plateau-intermediaire.png"
import recul_attach from "../../assets/images/blog/graphs/recul_attach.webp"



import { Separator } from "../../components/ui/separator"
import { Article, ArticleOfTheDay } from "../_components/ArtcileOfTheDay"
import { NewsletterSubscriberForm } from "../_components/NewsLetterSubscriberForm"

export const metadata: Metadata = {
  title: "Blog - Articles Inspirants | Hbal Trbah",
  description: "Explorez nos articles inspirants et enrichissants sur le développement personnel et le bien-être. Découvrez des conseils pratiques, des astuces, et des ressources pour améliorer votre quotidien.",
  keywords: "blog, articles inspirants, conseils pratiques, actualités, bien-être, ressources utiles, inspiration quotidienne, lifestyle, découvertes"
}

const articles = [
  {
    id: 10,
    title: "Surmonter les Obstacles : Une Quête sans Excuse ni Justification",
    slug: "zero-excuses",
    summary: "Dépasser les excuses et transformer les épreuves en tremplins pour avancer avec clarté et détermination. Un partage sincère d'outils et d'histoires pour agir avec résilience et discipline.",
    image: zeroExcusesCover, // Placez l'image dans le dossier public
    category: "Développement Personnel",
    isPopular: false,
    date: "19 Jan 2025",
    readTime: "10 min",
  },
  {
    id: 9,
    title: "Le Plateau de l'Évolution et la Persévérance",
    slug: "plateau-evolution",
    summary: "Découvrez comment surmonter le plateau de l'évolution et transformer une phase de stagnation en opportunité de croissance.",
    image: plateauCover, // Placez l'image dans le dossier public
    category: "Croissance Personnelle",
    isPopular: false,
    date: "07 Jan 2025",
    readTime: "4 min",
    attachement: plateau_graph,
  },
  {
    id: 8,
    title: "L'Importance du Recul et de l'Amélioration Continue",
    slug: "recul-et-amelioration-continue",
    summary: "Découvrez pourquoi le recul et l'amélioration continue sont des piliers pour progresser dans un monde en mouvement constant. Apprenez à intégrer ces concepts dans votre quotidien.",
    image: recul_cover, // L'image de couverture sera générée ensuite
    category: "Développement personnel",
    isPopular: true,
    date: "12 Déc 2024",
    readTime: "6 min",
    attachement: recul_attach,
  },
  {
    id: 7,
    title: "L’Équilibre Énergétique : La Clé d’une Vie Sereine et Productive",
    slug: "equilibre-energetique",
    summary: "Explorez comment équilibrer vos dépenses et apports énergétiques pour une santé optimale et une meilleure productivité.",
    image: energyBalanceCoverImage, // L'image de couverture sera générée ensuite
    category: "Bien-être",
    isPopular: true,
    date: "02 Déc 2024",
    readTime: "6 min",
    attachement: energyBalanceGraph,
  },
  {
    id: 6,
    title: "L'Élasticité Cérébrale : Développer son Potentiel Mental",
    slug: "elasticite-cerebrale",
    summary: "Découvrez comment entraîner votre cerveau pour apprendre, créer et s'adapter avec plus d'efficacité. Explorez des méthodes concrètes pour développer votre potentiel cognitif.",
    image: elasticityImage, // Assurez-vous de placer l'image dans le dossier public
    category: "Développement Personnel",
    isPopular: true,
    date: "01 Déc 2024",
    readTime: "5 min",
    attachement: elastic_vs_linear_divergence,
  },
  {
    id: 5,
    title: "La Réalité des Shitcoins : Entre Volatilité et Illusions",
    slug: "realite-shitcoins-volatilite",
    summary: "Découvrez pourquoi la majorité des shitcoins perdent leur valeur en quelques mois. Cet article éducatif met en lumière les risques liés à ces cryptomonnaies et comment éviter les pièges d’un marché volatil.",
    image: cryptoImage, // Importez l'image du graphe généré dans votre projet
    category: "Cryptomonnaies",
    isPopular: true,
    date: "30 Nov 2024",
    readTime: "5 min"
  },
  {
    id: 4,
    title: "La Règle des 1% : Transformez Votre Vie Petit à Petit",
    slug: "regle-des-1-pourcent",
    summary: "Découvrez comment appliquer la règle des 1% pour améliorer votre vie de façon exponentielle grâce à de petites actions quotidiennes. Inspiré par Atomic Habits, ce concept montre que chaque petit pas compte.",
    image: one_percent, // Importez l'image du graphe généré dans votre projet
    category: "Productivité",
    isPopular: true,
    date: "29 Nov 2024",
    readTime: "4 min"
  },
  {
    id: 3,
    title: "Transformez Votre Corps et Votre Esprit : Les 5 Habitudes Qui Allongent Votre Vie",
    slug: "transformer-corps-et-esprit",
    summary: "Découvrez comment 5 habitudes simples (ne pas fumer, ne pas boire, bien manger, bien dormir, faire de l'exercice) peuvent régénérer votre corps, booster votre énergie et réduire drastiquement les effets du vieillissement.",
    image: longevity, // Assurez-vous d'importer l'image correspondante dans votre projet
    category: "Santé",
    isPopular: true,
    date: "28 Nov 2024",
    readTime: "8 min"
  },
  {
    id: 1,
    title: "Les Bienfaits de la Douche Froide",
    slug: "douche-froide",
    summary: "Améliorez votre santé mentale et physique grâce à une simple habitude quotidienne. Découvrez les avantages et comment vous y mettre.",
    image: cold,
    category: "Santé",
    isPopular: true,
    date: "26 Nov 2024",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Construire une Plateforme Complète en 4 Heures",
    slug: "developpement-hbaltrbah",
    summary: "Plongez dans les coulisses de la création de Hbal Trbah, une plateforme complète construite en un temps record. Découvrez les outils, défis, et solutions utilisés.",
    image: dev, // Remplacez par l'URL de votre image
    category: "Technologie",
    isPopular: true,
    date: "27 Nov 2024",
    readTime: "10 min"
  }
  // {
  //   id: 2,
  //   title: "5 Habitudes Pour Booster Votre Productivité",
  //   slug: "habitudes-productivite",
  //   summary: "Maximisez votre efficacité quotidienne avec ces techniques éprouvées. Des conseils simples mais puissants pour transformer votre routine.",
  //   image: "/placeholder.svg",
  //   category: "Productivité",
  //   isPopular: true,
  //   date: "25 Nov 2024"
  // },
  // {
  //   id: 3,
  //   title: "Comment Développer un Mental d'Acier",
  //   slug: "mental-acier",
  //   summary: "Renforcez votre résilience mentale et apprenez à surmonter tous les obstacles. Des exercices pratiques pour une mentalité plus forte.",
  //   image: "/placeholder.svg",
  //   category: "Développement Personnel",
  //   isPopular: false,
  //   date: "22 Nov 2024"
  // }
]
const upcomingArticles = [

  {
    title: "La Règle des 1% de Atomic Habits",
    teaser: "Découvrez comment de petits changements quotidiens peuvent avoir un impact monumental sur vos objectifs à long terme.",
    category: "Développement personnel",
    releaseDate: "Novembre 2024"
  },
  {
    title: "La Puissance du Time Blocking",
    teaser: "Apprenez à organiser votre journée comme les plus grands leaders et maximisez votre productivité.",
    category: "Productivité",
    releaseDate: "bientôt"
  },
  {
    title: "Le Pouvoir des Micro-Habitudes",
    teaser: "Comment introduire des routines simples pour créer des résultats extraordinaires.",
    category: "Habitudes",
    releaseDate: "bientôt"
  },
  {
    title: "Réduire le Stress grâce à la Respiration",
    teaser: "Des techniques simples mais puissantes pour garder votre calme en toutes circonstances.",
    category: "Bien-être",
    releaseDate: "bientôt"
  },
  {
    title: "L’Art de Dire Non",
    teaser: "Établissez vos priorités en apprenant à poser des limites pour un meilleur équilibre de vie.",
    category: "Gestion du temps",
    releaseDate: "bientôt"
  },
  {
    title: "Le Secret des Entrepreneurs à Succès",
    teaser: "Un article révolutionnaire qui dévoilera les habitudes cachées des plus grands entrepreneurs. Préparez-vous à être surpris...",
    category: "Entrepreneuriat",
    releaseDate: "2025"
  },
  {
    title: "Méditation et Performance",
    teaser: "Comment 10 minutes de méditation peuvent transformer votre productivité ? La réponse bientôt dans cet article exclusif.",
    category: "Bien-être",
    releaseDate: "2025"
  },
]

const categories = [
  "Santé",
  "Productivité",
  "Développement Personnel",
  "Innovation",
  "Finances",
  "Lifestyle",
  "Musique",
  "Technologie",
  "Bien-être",
  "Marketing",
  "Time Management",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-12">
        {/* Hero Section */}
        <section className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Bienvenue sur notre Blog
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Découvrez une collection d'articles inspirants pour vous guider, vous informer et vous motiver.
            Que vous soyez à la recherche de conseils pratiques ou d'idées innovantes, notre blog est votre
            destination privilégiée.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                {category}
              </Badge>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6" />
            Articles Populaires
          </h2>
          {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles
              .filter(article => article.isPopular)
              .map(article => (
                <Card key={article.id} className="flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={article.image.src}
                      alt={article.title}
                      width={600}
                      height={300}
                      className="rounded-t-lg object-cover h-48"
                    />
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <Badge className="mb-2">{article.category}</Badge>
                    <CardTitle className="text-xl mb-2">
                      <Link href={`/blog/${article.slug}`} className="hover:underline">
                        {article.title}
                      </Link>
                    </CardTitle>
                    <p className="text-muted-foreground">{article.summary}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${article.slug}`}>
                          Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div> */}
          <div className="flex flex-col items-center justify-center bg-secondary text-secondary-foreground py-16 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-center">Un espace pour l'excellence</h2>
            <p className="text-lg mb-2 text-center max-w-[600px]">
              Découvrez les articles les mieux notés par nos lecteurs. Ici, nous mettons en avant les contenus les plus inspirants, informatifs et appréciés.
              Revenez bientôt pour explorer cette section remplie de pépites !
            </p>
            {/* <div className="flex justify-center gap-4">
               <Button variant="default" className="px-6 py-3">
                Découvrir les articles populaires
              </Button>
             <Button variant="outline" className="px-6 py-3">
                Voir tous les articles
              </Button> 
            </div> */}
          </div>
        </section>

        {/* article du jour  */}
        <ArticleOfTheDay article={articles[0] as unknown as Article} >
          {articles[0].attachement ? <Image src={articles[0].attachement.src} alt="La Règle des 1%" width={800} height={450} className="rounded-lg mb-4" /> : null}
        </ArticleOfTheDay>
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            Article du Jour</h2>
          {articles.length > 0 && (
            <Card className="flex flex-col md:flex-row lg:flex-row gap-6">
              <Image
                src={articles[0].image} // Choisissez l'article du jour (ici, le premier)
                alt={articles[0].title}
                width={600}
                height={300}
                className="rounded-lg object-cover lg:w-1/2"
              />
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">{articles[0].category}</Badge>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  <Link href={`/blog/${articles[0].slug}`} className="hover:underline">
                    {articles[0].title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-6">{articles[0].summary}</p>
                <div className="flex mt-auto">
                  <Button variant="default" asChild className="ml-auto ">
                    <Link href={`/blog/${articles[0].slug}`}>
                      Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </section> */}




        {/* All Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tous les Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(1).map(article => (
              <Card key={article.id} className="flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={300}
                    className="rounded-t-lg object-cover h-48"
                  />
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{article.category}</Badge>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    <Link href={`/blog/${article.slug}`} className="hover:underline">
                      {article.title}
                    </Link>
                  </CardTitle>
                  <p className="text-muted-foreground">{article.summary}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${article.slug}`}>
                        Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Articles */}

        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">À Venir</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingArticles.map((article, index) => (
              <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -z-10 transition-opacity opacity-0 group-hover:opacity-100" />
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-4">
                    {article.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {article.teaser}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Sortie prévue : {article.releaseDate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-muted rounded-lg p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">Ne manquez aucun article !</h2>
            <p className="text-muted-foreground">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles et conseils directement
              dans votre boîte mail.
            </p>
            {/* <form className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1"
              />
              <Button type="submit">S'abonner</Button>
            </form> */}
            <NewsletterSubscriberForm />
          </div>
        </section>
      </main>
    </div>
  )
}

