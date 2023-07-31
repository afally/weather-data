import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface StartDateProps {
  value: Date | null;
  onDateSelect: (date: Date | null) => void;
}

function StartDate({ value, onDateSelect }: StartDateProps) {
  const handleChange = (date: Date | null) => {
    onDateSelect(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label="Start date" value={value} onChange={handleChange} />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default StartDate;
