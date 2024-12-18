/* eslint-disable react/no-unescaped-entities */
"use client";

import { signIn } from "next-auth/react";
import { Button } from "../../../components/ui/button";

interface SignUpButtonProps {
  provider?: string;
  callbackUrl?: string;
  className?: string;
}

export const SignUpButton: React.FC<SignUpButtonProps> = ({
  provider = "google",
  callbackUrl = "/",
  className = "",
}) => {
  return (
    <Button
      onClick={() => signIn(provider, { callbackUrl })}
      className={`bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 transition ${className}`}
    >
      S'inscrire
    </Button>
  );
};
