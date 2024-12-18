import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./prisma";

export const { auth, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GithubProvider({
    clientId: process.env.AUTH_GITHUB_ID,
    clientSecret: process.env.AUTH_GITHUB_SECRET,
  }),
  GoogleProvider({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
    authorization: {
      params: { scope: "openid email profile" }
    }
  }),
  ],
  session: {
    strategy: "jwt", // Utilisation de JWT pour les sessions
  },
  callbacks: {
    async session({ session, token }) {
      // Enrichissement des informations utilisateur
      if (token?.sub) {
        session.user.id = token.sub;
        session.user.name = token.name || session.user.name;
        session.user.email = token.email || session.user.email;
        session.user.image = token.picture || session.user.image;
      }
      return session;
    },
  },
  // callbacks: {
  //   async session({ session, token }) {
  //     if (token) {
  //       if (token.sub) {
  //         session.user.id = token.sub;
  //       }
  //     }
  //     return session;
  //   },
  // },
  secret: process.env.AUTH_SECRET, // Ajoutez une clé secrète
})