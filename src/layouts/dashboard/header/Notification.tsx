import { faker } from "@faker-js/faker";
import { Menu, Transition } from "@headlessui/react";
import { set, sub } from "date-fns";
import { Bell, Clock } from "lucide-react";
import { Fragment, useState } from "react";
import { fToNow } from "../../../utils/formatDate";

// -----------------------------------------------------------
const NOTIFICATIONS = [
  {
    id: faker.string.uuid(),
    title: "Your order is placed",
    description: "waiting for shipping",
    avatar: faker.image.avatar(),
    type: "order_placed",
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.string.uuid(),
    title: faker.person.fullName(),
    description: "answered to your comment on the Minimal",
    avatar: faker.image.avatar(),
    type: "friend_interactive",
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.string.uuid(),
    title: "You have new message",
    description: "5 unread messages",
    avatar: faker.image.avatar(),
    type: "chat_message",
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.string.uuid(),
    title: "You have new mail",
    description: "sent from Guido Padberg",
    avatar: faker.image.avatar(),
    type: "mail",
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.string.uuid(),
    title: "Delivery processing",
    description: "Your order is being shipped",
    avatar: faker.image.avatar(),
    type: "order_shipped",
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
];

// -------------------------------------------------------------------

function Notification() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  return (
    <div>
      <Menu>
        <Menu.Button>
          <Bell className="h-6 w-6" />
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
          <Menu.Items className="absolute right-5 mt-2 w-[400px] origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="border-b border-dashed px-1 py-1 ">
              <Menu.Item>
                {() => (
                  <button
                    className={` group flex w-full flex-col items-start rounded-md px-2 py-2 text-sm`}
                  >
                    <h4 className="font-bold">Notifications</h4>

                    <p className="text-zinc-700">You have 0 unread messages</p>
                  </button>
                )}
              </Menu.Item>
            </div>
            {notifications.map((notification) => (
              <Menu.Item key={notification.id}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-zinc-100" : ""
                    } group flex w-full cursor-pointer items-center space-x-2 p-4 text-sm text-gray-900`}
                  >
                    <div>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={notification.avatar || ""}
                        alt=""
                      />
                    </div>
                    <div>
                      <div>
                        <span className="mr-2 shrink-0 font-bold">
                          {notification.title}
                        </span>
                        <span className="text-zinc-500">
                          {notification.description}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <Clock className="h-4 w-4 text-zinc-400" />
                        </span>

                        <span className="text-sm text-zinc-500">
                          {fToNow(notification.createdAt)}
                        </span>
                      </div>
                    </div>
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Notification;
