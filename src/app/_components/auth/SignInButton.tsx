"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { Button } from "../../../components/ui/button";

interface SignInButtonProps extends React.ComponentProps<typeof Button> {
  provider?: string; // Default to Google
  callbackUrl?: string; // Redirection après connexion
  label?: string; // Texte affiché
  className?: string; // Classe CSS
}

export const SignInButton: React.FC<SignInButtonProps> = ({
  provider = "google",
  callbackUrl = "/",
  label = "Se connecter",
  className,
  asChild,
  ...props

}) => {

  return (
    <Button
      asChild={asChild}
      onClick={() => signIn(provider, { callbackUrl })}
      className={`bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition ${className ?? ""}`}
      {...props}
    >
      {asChild ? props.children : label}
    </Button >
  );

};
