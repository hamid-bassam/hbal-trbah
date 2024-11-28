/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, BookOpen, Calendar, Sparkles, TrendingUp } from 'lucide-react'
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { NewsletterSubscriberForm } from "../../_components/NewsLetterSubscriberForm"

export const metadata: Metadata = {
  title: "Blog - Articles Inspirants | Hbal Trbah",
  description: "Explorez nos articles inspirants et enrichissants sur le développement personnel et le bien-être. Découvrez des conseils pratiques, des astuces, et des ressources pour améliorer votre quotidien.",
  keywords: "blog, articles inspirants, conseils pratiques, actualités, bien-être, ressources utiles, inspiration quotidienne, lifestyle, découvertes"
}

const articles = [
  {
    id: 1,
    title: "Les Bienfaits de la Douche Froide",
    slug: "douche-froide",
    summary: "Améliorez votre santé mentale et physique grâce à une simple habitude quotidienne. Découvrez les avantages et comment vous y mettre.",
    image: "/placeholder.svg",
    category: "Santé",
    isPopular: true,
    date: "26 Nov 2024",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Construire une Plateforme Complète en 4 Heures",
    slug: "developpement-hbaltrbah",
    summary: "Plongez dans les coulisses de la création de Hbal Trbah, une plateforme complète construite en un temps record. Découvrez les outils, défis, et solutions utilisés.",
    image: "/placeholder.svg",
    category: "Technologie",
    isPopular: true,
    date: "27 Nov 2024",
    readTime: "12 min"
  }
]

const upcomingArticles = [
  {
    title: "Le Secret des Entrepreneurs à Succès",
    teaser: "Un article révolutionnaire qui dévoilera les habitudes cachées des plus grands entrepreneurs. Préparez-vous à être surpris...",
    category: "Entrepreneuriat",
    releaseDate: "Décembre 2024"
  },
  {
    title: "Méditation et Performance",
    teaser: "Comment 10 minutes de méditation peuvent transformer votre productivité ? La réponse bientôt dans cet article exclusif.",
    category: "Bien-être",
    releaseDate: "Décembre 2024"
  }
]

const categories = [
  "Santé",
  "Productivité",
  "Développement Personnel",
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
        <section className="relative text-center space-y-6 mb-20 py-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl" />
          <Badge className="inline-flex text-sm" variant="secondary">
            Notre Blog
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Explorez, Apprenez, Évoluez
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Découvrez une collection d'articles soigneusement rédigés pour vous inspirer
            et vous guider vers vos objectifs.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-20">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground cursor-pointer"
              >
                {category}
              </Badge>
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

        {/* Popular Articles */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Articles Populaires</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {articles
              .filter(article => article.isPopular)
              .map(article => (
                <Card
                  key={article.id}
                  className="group flex flex-col overflow-hidden transition-all hover:shadow-lg"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={600}
                        height={300}
                        className="rounded-t-lg object-cover h-48 transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
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
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </CardTitle>
                    <p className="text-muted-foreground">{article.summary}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <Button variant="ghost" size="sm" className="group/button">
                        <Link href={`/blog/${article.slug}`} className="flex items-center">
                          Lire la suite
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative rounded-3xl p-12 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-bold">Restez Inspiré</h2>
            <p className="text-muted-foreground text-lg">
              Rejoignez notre communauté et recevez en avant-première nos articles,
              conseils exclusifs et actualités directement dans votre boîte mail.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSubscriberForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

