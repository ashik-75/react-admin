import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

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
      <LanguageDropdown />
    </div>
  );
}

export default LanguageGroup;

function LanguageDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img
          src="/assets/icons/ic_flag_en.svg"
          className="object-cover"
          alt=""
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3">
        {LANGS.map((lang) => (
          <DropdownMenuItem className="space-x-4">
            <img src={lang.icon} alt="" />
            <label htmlFor="">{lang.label}</label>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
