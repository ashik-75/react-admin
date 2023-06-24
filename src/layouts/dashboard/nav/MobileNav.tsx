import { Menu } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../components/ui/sheet";
import { cn } from "../../../utils/cn";
import { navsData } from "./navsData";

export function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="md:hidden  ">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Button variant={"ghost"}>
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent className="max-w-[280px]" side={"left"}>
          <MobileLink
            href="/dashboard"
            onOpenChange={setOpen}
            className="my-10 block"
          >
            <div className="flex items-center gap-2">
              <img
                src={"/assets/images/avatars/avatar_8.jpg"}
                className="h-10 w-10 rounded"
                alt=""
              />
              <h1 className="font-medium">Pixelian</h1>
            </div>
          </MobileLink>
          <ul className="space-y-5">
            {navsData.map((nav) => {
              const Icon = nav.icon;
              return (
                <li key={nav.path}>
                  <MobileLink
                    className="flex items-center gap-2 rounded text-lg opacity-60"
                    href={nav.path}
                    onOpenChange={setOpen}
                  >
                    <Icon className="h-3.5 w-3.5 text-muted-foreground" />

                    <span className="text-sm">{nav.title}</span>
                  </MobileLink>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}

interface MobileLinkProps {
  href: string;
  className: string;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

function MobileLink({
  href,
  className,
  children,
  onOpenChange,
}: MobileLinkProps) {
  return (
    <NavLink
      onClick={() => onOpenChange(false)}
      className={({ isActive }) =>
        cn(className, isActive && "font-bold opacity-100")
      }
      to={href}
    >
      {children}
    </NavLink>
  );
}
