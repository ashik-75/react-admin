import { NavLink } from "react-router-dom";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { cn } from "../../../utils/cn";
import { navsData } from "./navsData";

export function DesktopMenu() {
  return (
    <div className="relative p-5">
      <div className="my-10 flex items-center gap-5">
        <img className="h-10 w-10 rounded-lg" src={`/icon.png`} alt="" />

        <span>Pixelian</span>
      </div>
      <ScrollArea className="h-[calc(100vh-200px)] max-w-[280px] lg:max-w-none">
        {/* Menus */}
        <ul className="space-y-5">
          {navsData.map((nav) => {
            const Icon = nav.icon;
            return (
              <NavLink
                to={`${nav.path}`}
                className={({ isActive }) =>
                  cn(
                    `flex items-center gap-4 rounded px-2 py-2 opacity-70`,
                    isActive && "font-bold opacity-100"
                  )
                }
              >
                <span>
                  <Icon className="h-3.5 w-3.5 text-foreground" />
                </span>

                <span className="text-sm">{nav.title}</span>
              </NavLink>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}
