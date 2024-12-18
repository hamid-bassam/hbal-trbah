export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Politique de Confidentialité</h1>

      <section className="space-y-8 text-gray-700">
        <p>
          Votre confidentialité est importante pour nous. Voici comment nous collectons, utilisons et protégeons vos
          informations.
        </p>

        <h2 className="text-2xl font-semibold">1. Informations collectées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Compte utilisateur :</strong> Nom, email et photo de profil (via Google/GitHub Auth).
          </li>
          <li>
            <strong>Activités et objectifs :</strong> Les données saisies pour suivre vos activités.
          </li>
          <li>
            <strong>Données analytiques :</strong> Utilisation de la plateforme pour améliorer nos services.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">2. Utilisation des données</h2>
        <p>
          Vos données sont utilisées pour personnaliser votre expérience, analyser vos progrès et améliorer nos
          services. Nous ne vendons pas vos informations à des tiers.
        </p>

        <h2 className="text-2xl font-semibold">3. Stockage et sécurité</h2>
        <p>
          Vos données sont stockées de manière sécurisée dans notre base de données avec des mesures de protection
          appropriées.
        </p>

        <h2 className="text-2xl font-semibold">4. Vos droits</h2>
        <p>
          Vous pouvez accéder, modifier ou supprimer vos données à tout moment. Pour exercer vos droits, contactez-nous
          à{" "}
          <a href="mailto:hamid.bassam.147@gmail.com" className="text-blue-500 hover:underline">
            hamid.bassam.147@gmail.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold">5. Cookies</h2>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience utilisateur. Vous pouvez gérer vos préférences via
          votre navigateur.
        </p>
      </section>

      <footer className="mt-12 text-sm text-center text-gray-500">
        Pour toute question, contactez-nous à{" "}
        <a href="mailto:hamid.bassam.147@gmail.com" className="text-blue-500 hover:underline">
          hamid.bassam.147@gmail.com
        </a>
        .
      </footer>
    </div>
  );
}
