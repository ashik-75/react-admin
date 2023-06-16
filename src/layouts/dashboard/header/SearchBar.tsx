import { Dialog, Transition } from "@headlessui/react";
import { Search } from "lucide-react";
import { Fragment, useState } from "react";

function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full p-3 hover:bg-zinc-50"
      >
        <Search className="icon" />
      </button>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-5" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex  justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all sm:max-w-md">
                  <form className="flex items-center">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search ..."
                        className="w-full outline-none"
                      />
                    </div>
                    <button className="rounded bg-blue-600 px-3 py-1 text-white">
                      Search
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default SearchBar;
