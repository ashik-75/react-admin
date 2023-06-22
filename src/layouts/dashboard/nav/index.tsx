import { faker } from "@faker-js/faker";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../../utils/cn";
import { navsData } from "./navsData";

function Navbar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <div className="sticky left-0 top-0 hidden h-screen w-[280px] border-r border-dashed bg-white dark:bg-slate-950 xl:block">
      <div className="h-screen space-y-10 overflow-y-scroll scrollbar-hide">
        <RenderNav />

        <MobileNav open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Navbar;

function RenderNav() {
  return (
    <div className="space-y-10 p-5">
      {/* User */}
      <div className="flex items-center gap-4 rounded-lg bg-zinc-100 px-4 py-2 shadow-sm dark:bg-slate-900">
        <img
          className="h-10 w-10 rounded-full"
          src={faker.image.urlLoremFlickr({
            category: "people",
            width: 100,
            height: 100,
          })}
          alt=""
        />
        <h1 className=" font-semibold">Fransis Jonex</h1>
      </div>

      {/* Menus */}
      <ul className="space-y-5">
        {navsData.map((nav) => {
          const Icon = nav.icon;
          return (
            <NavLink
              to={`${nav.path}`}
              className={({ isActive }) =>
                cn(
                  `flex items-center gap-4 rounded px-2 py-2`,
                  isActive && "bg-zinc-100 dark:bg-slate-900"
                )
              }
            >
              <span>
                <Icon />
              </span>

              <span>{nav.title}</span>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-[280px]">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <RenderNav />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
