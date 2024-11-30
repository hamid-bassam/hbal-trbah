/* eslint-disable react/no-unescaped-entities */

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export interface Article {
  id: number;
  title: string;
  slug: string;
  summary: string;
  image: string;
  category: string;
  isPopular: boolean;
  date: string;
  readTime: string;
}

interface ArticleOfTheDayProps {
  article: Article;
  children?: ReactNode
}

export const ArticleOfTheDay = ({ article, children }: ArticleOfTheDayProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Calendar className="h-6 w-6" />
        Article du Jour
      </h2>
      <Card className="flex flex-col md:flex-row lg:flex-row gap-6">
        <Image
          src={article.image}
          alt={article.title}
          width={600}
          height={300}
          className="rounded-lg object-cover lg:w-1/2"
        />
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline">{article.category}</Badge>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">
            <Link href={`/blog/${article.slug}`} className="hover:underline">
              {article.title}
            </Link>
          </h3>
          <p className="text-muted-foreground mb-6">{article.summary}</p>
          {children}
          <div className="flex mt-auto">
            <Button variant="default" asChild className="ml-auto">
              <Link href={`/blog/${article.slug}`}>
                Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};


