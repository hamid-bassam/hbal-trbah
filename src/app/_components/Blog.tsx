import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { ArrowRight, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import cold from "../../assets/images/cold.webp"
import dev from "../../assets/images/dev.webp"
import longevity from "../../assets/images/longevity.webp"
import { Badge } from "../../components/ui/badge"
import { Separator } from "../../components/ui/separator"
const articles = [
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
    id: 2,
    title: "Construire une Plateforme Complète en 4 Heures",
    slug: "developpement-hbaltrbah",
    summary: "Plongez dans les coulisses de la création de Hbal Trbah, une plateforme complète construite en un temps record. Découvrez les outils, défis, et solutions utilisés.",
    image: dev, // Remplacez par l'URL de votre image
    category: "Technologie",
    isPopular: true,
    date: "27 Nov 2024",
    readTime: "10 min"
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


]
export function Blog() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Tous les Articles</h2>
      <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3">
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
  )
}

