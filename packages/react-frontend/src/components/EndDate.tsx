import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface EndDateProps {
  value: Date | null;
  onDateSelect: (date: Date | null) => void;
}

function EndDate({ value, onDateSelect }: EndDateProps) {
  const handleChange = (date: Date | null) => {
    onDateSelect(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label="End date" value={value} onChange={handleChange} />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default EndDate;
