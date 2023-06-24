import { Search } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../components/ui/sheet";

function SearchBar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"}>
            <Search className="h-4 w-4 text-muted-foreground" />
          </Button>
        </SheetTrigger>

        <SheetContent side={"top"} className="pt-10">
          <Input placeholder="search anything ...." />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SearchBar;
