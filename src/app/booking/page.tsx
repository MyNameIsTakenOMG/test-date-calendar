'use client'
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TestCalendar from '@/components/TestCalendar';
export default function Booking() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TestCalendar />
    </LocalizationProvider>
  )
}
