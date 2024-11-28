import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import prisma from "./prisma"

export const { auth, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GithubProvider({
    clientId: process.env.AUTH_GITHUB_ID,
    clientSecret: process.env.AUTH_GITHUB_SECRET,
  })],
})