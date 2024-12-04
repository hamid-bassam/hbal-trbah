/* eslint-disable react/no-unescaped-entities */
"use client"

import { JoinAdventureForm } from "@/app/_components/JoinAdventureForm"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import clsx from "clsx"

export function JoinAdventureButton(props: { className?: string, onClick?: () => void }) {
  // const [isOpen, setIsOpen] = useState(false)

  // const handleOpenChange = (open: boolean) => {
  //   setIsOpen(open)
  //   // Gestion du scroll lock
  //   if (open) {
  //     document.body.removeAttribute("data-scroll-locked") // Désactive le scroll
  //     console.log("Désactive le scroll")
  //   }
  //   props.onClick?.();
  // }
  return (


    <Dialog
      onOpenChange={props.onClick}
    >
      <DialogTrigger asChild>
        <Button
          className={clsx("hidden md:inline-block bg-primary text-primary-foreground", props.className)}
          onClick={props.onClick}>
          Rejoindre l'aventure
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} >
        <DialogHeader>
          <DialogTitle>Inscrivez-vous pour rejoindre l'aventure</DialogTitle>
        </DialogHeader>
        <JoinAdventureForm />
      </DialogContent>

    </Dialog>
  )
}
