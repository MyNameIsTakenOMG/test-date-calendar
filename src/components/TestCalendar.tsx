'use client'
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function TestCalendar() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label="Controlled calendar">
        <DateCalendar value={value} onChange={handleDateChange} />
      </DemoItem>
    </LocalizationProvider>
  );
}
