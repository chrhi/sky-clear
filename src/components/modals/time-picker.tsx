"use client";

import { useState } from "react";
import { CalendarIcon, Clock } from "lucide-react";
import { format, isBefore, startOfToday } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TimePickerProps {
  setTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
  time: Date | undefined;
}

export default function TimePicker({ setTime, time }: TimePickerProps) {
  const [date, setDate] = useState<Date | undefined>(time);
  const [hour, setHour] = useState<string>("12");
  const [open, setOpen] = useState<boolean>(false);

  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const handleSave = () => {
    if (date) {
      const newDate = new Date(date);
      newDate.setHours(parseInt(hour), 0, 0, 0);
      setTime(newDate);
    }
    setOpen(false);
  };

  const today = startOfToday();

  const disableDate = (date: Date) => {
    return isBefore(date, today);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {time ? format(time, "PPP p") : <span>Schedule time</span>}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select publish date and time</DialogTitle>
          <DialogDescription>
            Choose when you want to publish your post
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4 flex flex-col items-center justify-center w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={disableDate}
            initialFocus
            className="rounded-md border"
          />
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <Select value={hour} onValueChange={setHour}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select hour" />
              </SelectTrigger>
              <SelectContent>
                {hours.map((h) => (
                  <SelectItem key={h} value={h}>
                    {h}:00
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleSave} className="w-full">
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
