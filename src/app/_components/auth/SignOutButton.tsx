"use client";

import { signOut } from "next-auth/react";
import { Button } from "../../../components/ui/button";

interface SignOutButtonProps {
  callbackUrl?: string; // Redirection après déconnexion
  className?: string;
}

export const SignOutButton: React.FC<SignOutButtonProps> = ({
  callbackUrl = "/",
  className = "",
}) => {
  return (
    <Button
      onClick={() => signOut({ callbackUrl })}
      className={`bg-destructive text-white px-4 py-2 rounded-md hover:bg-destructive/90 transition ${className}`}
    >
      Se déconnecter
    </Button>
  );
};
