import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export function SetTableSize({
  setPageSize,
}: {
  setPageSize: (n: number) => void;
}) {
  return (
    <Select
      defaultValue="10"
      onValueChange={(value) => setPageSize(Number(value))}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Page Size" />
      </SelectTrigger>
      <SelectContent>
        {[10, 20, 30].map((size) => (
          <SelectItem key={size} value={`${size}`}>
            {size}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
