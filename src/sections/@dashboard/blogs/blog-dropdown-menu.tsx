import { Eye, MoreHorizontal, Pen, Trash } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

function BlogDropdownMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={"ghost"}>
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem className="space-x-2">
            <Eye className="h-3.5 w-3.5" />
            <span>View</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="space-x-2">
            <Pen className="h-3.5 w-3.5" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="space-x-2">
            <Trash className="h-3.5 w-3.5" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default BlogDropdownMenu;
