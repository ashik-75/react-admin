import { faker } from "@faker-js/faker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

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
      <ProfileDropDown />
    </div>
  );
}

export default Account;

function ProfileDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img
          src={faker.image.avatar()}
          className="h-10 w-10 rounded-full"
          alt=""
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <div>
            <h1 className="font-medium">Alex Moore</h1>
            <p className="text-zinc-500">pixelian.cc</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {MENU_OPTIONS.map((menu) => (
          <DropdownMenuItem key={menu.label}>
            <label className="dark:text-white">{menu.label}</label>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <p className="font-medium text-rose-500">Logout</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
