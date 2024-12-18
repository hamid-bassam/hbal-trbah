// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../lib/auth"; // Importation de l'authentification NextAuth

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Liste des routes publiques (accès libre)
  const publicRoutes = ["/", "/blog", "/contact", "/api/newsletter", "api/join", "/privacy-policy", "/terms", "/time-forge-app"];

  // Si la route est publique, laisser passer la requête
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Récupération de la session via NextAuth
  const session = await auth();

  // Protection des routes : Redirection si l'utilisateur n'est pas authentifié
  if (!session && pathname.startsWith("/time-forge-app/")) {
    const loginUrl = new URL("/", req.nextUrl.origin); // Redirige vers la page d'accueil ou de connexion
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname); // Redirige après connexion
    return NextResponse.redirect(loginUrl);
  }

  // Si authentifié, laisser passer
  return NextResponse.next();
}

// Appliquer le middleware uniquement sur certaines routes
export const config = {
  matcher: ["/time-forge-app/:path*", "/api/:path*"],
};
