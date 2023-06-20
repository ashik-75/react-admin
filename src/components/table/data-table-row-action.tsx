import { Copy, Edit, MoreHorizontal, Star } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function DataTableRowAction() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={"ghost"}>
            <MoreHorizontal className="icon" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Copy className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
            <span>Make a Copy</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Edit className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Star className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
            <span>favourite</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DataTableRowAction;
