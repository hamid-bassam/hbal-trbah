"use client"

import { JoinAdventureButton } from "@/app/_components/JoinAdventureButton"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { UserMenu } from "./userMenu"

export function MobileNavigation(props: { open?: boolean }) {
  const [isSheetOpen, setIsSheetOpen] = useState(props.open ?? false)
  return (
    <div className="md:hidden">
      <Sheet open={isSheetOpen} onOpenChange={() => setIsSheetOpen(!isSheetOpen)}>
        {/* Trigger Button */}
        <SheetTrigger asChild>
          <Button onClick={() => setIsSheetOpen(true)} variant="ghost" aria-label="Toggle Menu">
            {/* Icone Burger */}
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        {/* Navigation Content */}
        <SheetContent aria-describedby={undefined} side="left" className="bg-background p-4 h-full flex flex-col">
          <SheetTitle>Menu</SheetTitle>
          {/* <SheetHeader>
            <h2 className="text-xl font-bold">Menu</h2>
          </SheetHeader> */}
          <nav className="flex flex-col space-y-2 mt-4 flex-grow">
            <Link onClick={() => setIsSheetOpen(false)} href="/" className="text-lg font-medium hover:text-primary">
              Accueil
            </Link>
            <Link onClick={() => setIsSheetOpen(false)} href="/blog" className="text-lg font-medium hover:text-primary">
              Blog
            </Link>
            <Link onClick={() => setIsSheetOpen(false)} href="/contact" className="text-lg font-medium hover:text-primary">
              Contact
            </Link>
            {/* CTA */}
            <JoinAdventureButton className="mt-4 block" />

            {/* Separator */}
            <div className="border-t border-muted my-4"></div>
            {/* UserMenu */}
          </nav>
          <div className="mt-auto">
            <UserMenu />
          </div>

        </SheetContent>
      </Sheet>
    </div>
  )
}
