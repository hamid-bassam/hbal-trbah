import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export function Blog() {
  return (
    <section className="container py-24 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Derniers articles
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Découvrez nos conseils et astuces pour atteindre vos objectifs financiers.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Douche froide</CardTitle>
          <CardDescription>Publié le 28 novembre 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Découvrez comment la pratique de la douche froide peut améliorer votre discipline et votre résilience mentale,
            des qualités essentielles pour réussir dans le monde des affaires.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">
            <Link href={"/blog/douche-froide"}>
              Lire plus
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}

