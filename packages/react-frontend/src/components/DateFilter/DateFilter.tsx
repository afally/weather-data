import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface StartDateProps {
  start: Date | null;
  end: Date | null;
  onStartDateSelect: (date: Date | null) => void;
  onEndDateSelect: (date: Date | null) => void;
}

function DateFilter({
  start,
  end,
  onStartDateSelect,
  onEndDateSelect,
}: StartDateProps) {
  const handleStartChange = (date: Date | null) => {
    onStartDateSelect(date);
  };

  const handleEndChange = (date: Date | null) => {
    onEndDateSelect(date);
  };
  return (
    <div style={{ marginBottom: "1.5%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Start date"
            value={start}
            onChange={handleStartChange}
          />
          <DatePicker label="End date" value={end} onChange={handleEndChange} />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default DateFilter;
