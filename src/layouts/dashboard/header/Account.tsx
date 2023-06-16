import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
  },
  {
    label: "Settings",
    icon: "eva:settings-2-fill",
  },
];

function Account() {
  return (
    <div>
      <Menu>
        <Menu.Button>
          <img
            src="/assets/images/avatars/avatar_1.jpg"
            className="w-10 h-10 rounded-full"
            alt=""
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 border-b border-dashed ">
              <Menu.Item>
                {() => (
                  <button
                    className={` group w-full rounded-md flex flex-col items-start px-2 py-2 text-sm`}
                  >
                    <h4 className="font-bold">Sara Jones</h4>
                    <p className="text-zinc-700">flemingo@gmail.com</p>
                  </button>
                )}
              </Menu.Item>
            </div>
            {MENU_OPTIONS.map((menu) => (
              <div className="px-1 py-1 ">
                <Menu.Item key={menu.label}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-zinc-200" : ""
                      } group space-x-2 text-gray-900 cursor-pointer flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <img src={menu.icon} alt="" />
                      <label htmlFor="">{menu.label}</label>
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))}

            <div className="px-1 py-1 border-t border-dashed ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-zinc-100" : ""
                    } group space-x-2 flex text-gray-900 w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <label htmlFor="">Logout</label>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Account;
