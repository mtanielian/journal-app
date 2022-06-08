import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button, CardMedia, Divider, Grid, Typography, TextField } from '@mui/material';


const JournalPage = () => {
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography pt={5} variant='h4' component='h4'>New Event</Typography>
      <Divider />
      <Grid container xs={12} spacing={2} sx={{mt: 2 }}>
      <Grid item xs={8}>
        <Grid item xs={12}>
            <TextField
              label='Title'
              fullWidth
              />
          </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container xs={12}  >
          <Grid item xs={6} mt={2} sx={{paddingRight: 2}}>
            <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>
          <Grid item xs={6}  mt={2}>
            <TimePicker
              label="Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>
          </Grid>
        </LocalizationProvider>
        <Grid item xs={12} mt={2}>
          <TextField
            label='Description'
            fullWidth
            multiline
            rows={8}
            maxRows={20}
          />
        </Grid>
        <Grid container xs={12} mt={2}>
            <Grid item xs={6} sx={{paddingRight: 2}}>
            <Button
            variant='outlined'
            color='error'
            fullWidth
            >Cancel</Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant='outlined'
            fullWidth
            >Save</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} pl={5}>
        <CardMedia
          component="img"
          image='https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg' 
          
        />
      </Grid>
      </Grid>
    </>
  );
}

export default JournalPage