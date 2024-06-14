'use client'
import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import TestCalendar from '@/components/TestCalendar';

import dynamic from 'next/dynamic';

const ClientCalendar1 = dynamic(() => import('@/components/TestCalendar'), { ssr: false })

const ClientCalendar2 = dynamic(() => import('@/components/TestCalendar'))

export default function Booking() {

  const [show, setShow] = useState(false)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      {/* only load at the client side */}
      <ClientCalendar1 />

      {show && <ClientCalendar2 />}
      <button onClick={() => setShow(!show)}>toggle</button>

    </LocalizationProvider>
  )
}
