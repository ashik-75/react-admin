import { faker } from "@faker-js/faker";
import { set, sub } from "date-fns";
import { BellRing, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
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
  const [notifications] = useState(NOTIFICATIONS);
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"ghost"}>
          <BellRing className="h-5 w-5 text-muted-foreground" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`group flex w-full cursor-pointer items-start space-x-2 border-b p-1 pb-2 text-sm text-gray-900`}
          >
            <div className="h-8 w-8 shrink-0">
              <img
                className=" rounded-full object-cover"
                src={notification.avatar || ""}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div>
                <span className="mr-2 shrink-0 font-medium dark:text-white">
                  {notification.title}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  {notification.description}
                </span>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <span>
                  <Clock className="h-4 w-4 text-zinc-400" />
                </span>

                <span className="text-xs text-zinc-500">
                  {fToNow(notification.createdAt)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}

export default Notification;
