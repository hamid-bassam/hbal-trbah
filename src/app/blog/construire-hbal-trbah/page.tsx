/* eslint-disable react/no-unescaped-entities */
export default function BlogArticle() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Construire une Plateforme en 4 Heures : De l'Achat du Domaine au Déploiement
      </h1>

      <p className="text-lg mb-6">
        Vous pensez qu'il est impossible de créer une plateforme en un temps record ?
        Aujourd'hui, nous avons prouvé que vous pouvez transformer une idée en réalité en
        seulement 4 heures. Voici un guide détaillé de notre parcours, du choix du domaine
        au déploiement en production.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Étape 1 : Achat du Domaine</h2>
      <p className="mb-6">
        La première étape était de choisir un nom de domaine qui reflète notre vision. Nous
        avons opté pour <strong>hbaltrbah.com</strong>, un nom unique et mémorable. L'achat
        du domaine a été rapide et facile via <strong>Hostinger</strong>.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Étape 2 : Initialisation du Projet</h2>
      <p className="mb-6">
        Une fois le domaine acheté, nous avons initialisé le projet en utilisant{" "}
        <strong>Next.js</strong>, un framework idéal pour les applications web modernes. Pour
        le design, nous avons utilisé <strong>Tailwind CSS</strong>, ce qui nous a permis de
        créer des interfaces rapidement.
      </p>

      <pre className="bg-gray-800 text-white p-4 rounded-md mb-6">
        <code>
          {`npx create-next-app@latest hbal-trbah-app
cd hbal-trbah-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Étape 3 : Configuration de la Base de Données</h2>
      <p className="mb-6">
        Nous avons configuré notre base de données avec <strong>Supabase</strong>, une
        solution rapide et évolutive. Pour gérer les données des utilisateurs et des abonnés
        à la newsletter, nous avons utilisé <strong>Prisma</strong> pour modéliser notre
        base.
      </p>

      <pre className="bg-gray-800 text-white p-4 rounded-md mb-6">
        <code>
          {`model Subscriber {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}

model NewsletterSubscriber {
  id        String   @id @default(cuid())
  email     String   @unique
  createdAt DateTime @default(now())
}`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Étape 4 : Construction des Composants UI</h2>
      <p className="mb-6">
        Nous avons créé deux formulaires principaux :
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>
          <strong>Rejoindre l'aventure :</strong> Collecte le nom complet et l'email, avec un
          feedback utilisateur grâce à des <strong>toasts</strong>.
        </li>
        <li>
          <strong>Newsletter :</strong> Un formulaire minimaliste pour collecter uniquement
          les emails.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Étape 5 : Déploiement</h2>
      <p className="mb-6">
        Une fois les fonctionnalités principales en place, nous avons déployé l'application
        sur <strong>Vercel</strong>, une plateforme idéale pour les projets basés sur{" "}
        <strong>Next.js</strong>. L'intégration avec GitHub a permis un déploiement
        automatisé et sans friction.
      </p>

      <p className="mb-6">
        Voici l'URL de la plateforme déployée :{" "}
        <a
          href="https://hbal-trbah.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          https://hbal-trbah.vercel.app
        </a>
      </p>

      <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
      <p className="mb-6">
        En seulement 4 heures, nous avons prouvé qu’il est possible de construire une
        plateforme complète, fonctionnelle, et déployée en production. Avec les bons outils
        et une stratégie claire, vous pouvez transformer une idée en réalité rapidement.
      </p>

      <p className="text-lg font-semibold">
        Alors, prêt à construire votre propre plateforme en une journée ?
      </p>
    </div>
  )
}
