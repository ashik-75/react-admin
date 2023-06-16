import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const LANGS = [
  {
    value: "en",
    label: "English",
    icon: "/assets/icons/ic_flag_en.svg",
  },
  {
    value: "de",
    label: "German",
    icon: "/assets/icons/ic_flag_de.svg",
  },
  {
    value: "fr",
    label: "French",
    icon: "/assets/icons/ic_flag_fr.svg",
  },
];

function LanguageGroup() {
  return (
    <div>
      <div className=" w-56 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="w-10 h-10 rounded overflow-hidden">
              <img
                src="/assets/icons/ic_flag_en.svg"
                className="object-cover"
                alt=""
              />
            </Menu.Button>
          </div>
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
              {LANGS.map((lang) => (
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group space-x-2 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <img src={lang.icon} alt="" />
                        <label htmlFor="">{lang.label}</label>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default LanguageGroup;
