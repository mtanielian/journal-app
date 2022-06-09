import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button, CardMedia, Divider, Grid, Typography, TextField } from '@mui/material';


const JournalPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const onSubmit = (form) => {
    console.log(form)
  }

  return (
    <>
      <Typography pt={5} variant='h4' component='h4'>New Event</Typography>
      <Divider />
      <Grid container spacing={2} sx={{mt: 2 }}>
      <Grid item xs={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12}>
            <TextField
              label='Title'
              fullWidth
              {...register('title', {
                required: 'Title is required',
                minLength: { value: '5', message: '+5 characters' }
              })}
              error={!!errors.title}
              helperText={errors.title?.message}
              />
          </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container>
          <Grid item xs={6} mt={2} sx={{paddingRight: 2}}>
            <MobileDatePicker
              label="Date Event"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  fullWidth 
                  {...params} 
                  {...register('date', {
                    required: 'Date is required'
                  })}
                  error={!!errors.date}
                  helperText={errors.date?.message}
                />
              
              )}
            />
          </Grid>
          <Grid item xs={6}  mt={2}>
            <TimePicker
              label="Time Event"
              value={value}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField 
                  fullWidth 
                  {...params} 
                  {...register('time', {
                    required: 'Time is required'
                  })}
                  error={!!errors.time}
                  helperText={errors.time?.message}
                />
              
              )}
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
            {...register('description',{
              required: 'Description is required',
              minLength: { value: 10, message: '+10 characters'},
              maxLength: { value: 1000, message: 'Max characters reach'}
            })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        </Grid>
        <Grid container mt={2}>
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
            type='submit'
            >Save</Button>
          </Grid>
        </Grid>
      </form>
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