/* eslint-disable react/no-unescaped-entities */
export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Conditions d'Utilisation</h1>

      <section className="space-y-8 text-gray-700">
        <p>
          Bienvenue sur <strong>Hbal Trbah</strong> ! En utilisant notre plateforme, vous acceptez les conditions
          générales suivantes. Veuillez les lire attentivement.
        </p>

        <h2 className="text-2xl font-semibold">1. Présentation de Hbal Trbah</h2>
        <p>
          Hbal Trbah est une plateforme dédiée à la gestion du temps, des activités et au développement personnel,
          conçue pour vous aider à optimiser votre quotidien et atteindre vos objectifs ambitieux.
        </p>

        <h2 className="text-2xl font-semibold">2. Accès et utilisation</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Inscription : Certaines fonctionnalités nécessitent une authentification via Google ou GitHub.</li>
          <li>Utilisation responsable : Vous vous engagez à ne pas utiliser la plateforme à des fins illégales.</li>
          <li>
            Accès aux services : Hbal Trbah est disponible sur une base <em>“telle quelle”</em> sans garantie
            continue.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Contenu utilisateur</h2>
        <p>
          Vous êtes propriétaire des informations saisies sur la plateforme. En utilisant nos services, vous nous
          accordez le droit d’utiliser ces données pour le bon fonctionnement des fonctionnalités proposées.
        </p>

        <h2 className="text-2xl font-semibold">4. Modification des conditions</h2>
        <p>
          Les présentes conditions peuvent être modifiées pour s’adapter aux évolutions de la plateforme. Vous serez
          informé des mises à jour importantes.
        </p>
      </section>

      <footer className="mt-12 text-sm text-center text-gray-500">
        Si vous avez des questions, contactez-nous à{" "}
        <a href="mailto:hamid.bassam.147@gmail.com" className="text-blue-500 hover:underline">
          hamid.bassam.147@gmail.com
        </a>
      </footer>
    </div>
  );
}
