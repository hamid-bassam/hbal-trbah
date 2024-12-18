'use client'
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

// Replace these images with actual assets
import featureImage2 from "@/assets/images/time-forge/feature-goals.webp";
import featureImage3 from "@/assets/images/time-forge/feature-kpis.webp";
import featureImage1 from "@/assets/images/time-forge/feature-reporting.webp";
import heroImage from "@/assets/images/time-forge/hero1.webp";
import { motion } from "framer-motion";
import { SignInButton } from "../_components/auth/SignInButton";

export default function DARLandingPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center space-y-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold sm:text-5xl tracking-tight">
            Gagne du temps, maximise ton énergie
          </h1>
          <p className="text-lg text-muted-foreground">
            "Le temps est la seule ressource universelle. Gagne du temps, évolue
            dans ta gestion et atteins tes objectifs !"
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <SignInButton label="Commencer maintenant !" provider="google" callbackUrl="/time-forge-app/daily-reporting" />

            <Button variant="outline" asChild>
              <Link href="#features">En savoir plus</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-4xl"
        >
          <Image
            src={heroImage}
            alt="Gestion du temps"
            className="rounded-lg shadow-lg"
            priority
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="space-y-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Fonctionnalités Clés
          </h2>
          <p className="text-muted-foreground">
            Un outil pensé pour optimiser votre quotidien.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-muted p-6 rounded-lg shadow-lg space-y-4 text-center"
          >
            <Image
              src={featureImage1}
              alt="Daily Reporting"
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold">Daily Reporting</h3>
            <p className="text-muted-foreground">
              Suivez vos activités quotidiennes et analysez vos priorités.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-muted p-6 rounded-lg shadow-lg space-y-4 text-center"
          >
            <Image
              src={featureImage2}
              alt="Objectifs Temporaire"
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold">Objectifs Temporaire</h3>
            <p className="text-muted-foreground">
              Fixez des objectifs d’activité adaptés à vos ambitions.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-muted p-6 rounded-lg shadow-lg space-y-4 text-center"
          >
            <Image
              src={featureImage3}
              alt="KPIs Visuels"
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold">KPIs Visuels</h3>
            <p className="text-muted-foreground">
              Visualisez vos progrès avec des graphiques modernes et interactifs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">
            Prêt à transformer votre gestion du temps ?
          </h2>

          <SignInButton label="Commencer maintenant !" provider="google" callbackUrl="/time-forge-app/daily-reporting" size="lg" />

        </motion.div>
      </section>
    </div>
  );
}
