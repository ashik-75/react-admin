import { Column } from "@tanstack/react-table";
import { Check, LucideIcon, PlusCircle } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import { Separator } from "../../../components/ui/separator";
import { cn } from "../../../utils/cn";

interface DataTableFacetedFilter<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: LucideIcon;
  }[];
}

function DataTableFacedFilter<TData, TValue>({
  title,
  options,
  column,
}: DataTableFacetedFilter<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string);

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size={"sm"}
            variant={"outline"}
            className="h-8 space-x-2 border-dashed"
          >
            <PlusCircle className="mr-2 h-3.5 w-3.5" />
            <span>{title}</span>

            {selectedValues.size > 0 && (
              <>
                <Separator orientation="vertical" />
                <Badge className="lg:hidden" variant={"outline"}>
                  {selectedValues.size}
                </Badge>
                <div className="hiddem space-x-1 lg:flex">
                  {selectedValues.size > 2 ? (
                    <Badge variant={"secondary"} className="rounded-sm">
                      {selectedValues.size}
                    </Badge>
                  ) : (
                    options
                      .filter((option) => selectedValues.has(option.value))
                      .map((option) => {
                        return (
                          <Badge variant={"outline"} className="rounded-sm">
                            {option.label}
                          </Badge>
                        );
                      })
                  )}
                </div>
              </>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent align="start" className="w-[200px] p-0">
          <Command>
            <CommandInput
              className="mb-1 h-7 border-0 focus:border-0 focus:ring-0 "
              placeholder={title}
            />
            <CommandList>
              <CommandEmpty>No result found!</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selectedValues.has(option.value);

                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => {
                        if (isSelected) {
                          selectedValues.delete(option.value);
                        } else {
                          selectedValues.add(option.value);
                        }

                        const filtersValues = Array.from(selectedValues);

                        column?.setFilterValue(
                          filtersValues.length ? filtersValues : undefined
                        );
                      }}
                      className="item-center flex"
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible"
                        )}
                      >
                        <Check className={cn("h-4 w-4")} />
                      </div>
                      <div className="flex w-full justify-between">
                        <div className="flex">
                          {option.icon && (
                            <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                          )}
                          <span>{option.label}</span>
                        </div>
                        <span>{facets?.get(option.value)}</span>
                      </div>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DataTableFacedFilter;
