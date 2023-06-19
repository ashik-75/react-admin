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
          src="/assets/images/avatars/avatar_1.jpg"
          className="h-10 w-10 rounded-full"
          alt=""
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {MENU_OPTIONS.map((menu) => (
          <>
            <DropdownMenuItem key={menu.label} className="px-1 py-1 ">
              <div key={menu.label}>
                <button
                  className={`group flex w-full cursor-pointer items-center space-x-2 rounded-md px-2 py-2 text-sm text-gray-900`}
                >
                  <img src={menu.icon} alt="" />
                  <label htmlFor="">{menu.label}</label>
                </button>
              </div>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
