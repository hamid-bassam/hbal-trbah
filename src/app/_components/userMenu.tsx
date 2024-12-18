"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

import { usePathname } from "next/navigation"; // Importer useRouter  

export const UserMenu: React.FC = () => {
  const { data: session } = useSession();
  const url = usePathname();


  if (!session) {
    // Redirection dynamique en fonction de la route actuelle

    const callbackUrl =
      url.startsWith("/time-forge-app") && url !== "/time-forge-app"
        ? "/time-forge-app/daily-reporting" // Rediriger vers daily-reporting pour TimeForge
        : url; // Sinon, rediriger vers la page actuelle

    return (
      <Button onClick={() => signIn("google", { callbackUrl })} className="w-fit">
        Se connecter
      </Button>
    );
  }
  const { user } = session;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.image || "/default-avatar.png"} alt={user?.name || "Avatar"} />
          <AvatarFallback>{user?.name?.charAt(0).toUpperCase() || "?"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <span className="font-medium">Bonjour, {user?.name}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
          <LogOut className="h-4 w-4 mr-2" />
          Déconnexion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
