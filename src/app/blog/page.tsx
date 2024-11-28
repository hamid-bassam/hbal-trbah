/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { NewsletterSubscriberForm } from "../_components/NewsLetterSubscriberForm"

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
    date: "28 Nov 2024"
  },
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

const categories = [
  "Santé",
  "Productivité",
  "Développement Personnel",
  "Finances",
  "Lifestyle"
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles
              .filter(article => article.isPopular)
              .map(article => (
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
          </div>
        </section>

        {/* All Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tous les Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map(article => (
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

