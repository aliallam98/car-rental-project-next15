import { useState } from "react";
import { ActivityFilter } from "../types/activity";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface FilterBarProps {
  onFilterChange: (filter: ActivityFilter) => void;
}

export function ActivitiesHeader({ onFilterChange }: FilterBarProps) {
  const [filter, setFilter] = useState<ActivityFilter>({
    type: "all",
    status: "all",
    dateRange: [null, null],
  });

  const handleFilterChange = (key: keyof ActivityFilter, value: any) => {
    const newFilter = { ...filter, [key]: value };
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-[280px] justify-start text-left font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {filter.dateRange[0] ? (
              filter.dateRange[1] ? (
                <>
                  {format(filter.dateRange[0], "LLL dd, y")} -{" "}
                  {format(filter.dateRange[1], "LLL dd, y")}
                </>
              ) : (
                format(filter.dateRange[0], "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            selected={filter.dateRange}
            onSelect={(range) => handleFilterChange("dateRange", range)}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Select onValueChange={(value) => handleFilterChange("type", value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Activity Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="reservation">Reservation</SelectItem>
          <SelectItem value="return">Return</SelectItem>
          <SelectItem value="maintenance">Maintenance</SelectItem>
          <SelectItem value="payment">Payment</SelectItem>
          <SelectItem value="category">Category</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilterChange("status", value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
