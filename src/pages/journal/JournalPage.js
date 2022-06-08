import { DatePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { TextField } from "@mui/material";
import { useState } from "react";

const JournalPage = () => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <h1>hola</h1>
      <DatePicker 
        label='Fecha del Evento'
        renderInput={ pros => <TextField {...pros} /> }
        value={date}
        onChange={ value => setDate(value)}
        orientation="landscape"
        variant="static"
      />
      
      <TimePicker
        label='Hora del Evento'
        renderInput={ pros => <TextField {...pros} /> }
        value={time}
        onChange={ value => setTime(value)}
        orientation="landscape"
        variant="static"
      />

    </LocalizationProvider>
  );

}

export default JournalPage