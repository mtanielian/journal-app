import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { save } from '../../actions/eventActions'
import { Button, CardMedia, Divider, Grid, Typography, TextField } from '@mui/material'
import Swal from 'sweetalert2';




const JournalPage = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.events)
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const today = new Date()
 

  const onSubmit = async (form) => {
    try {
      dispatch(save(form))
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Taks saved',
        showConfirmButton: false,
        timer: 2500
      })
      reset()
    } catch (error) {
      alert('error saving event, please try again')
      console.log(error)
    }
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
        <Grid container>
          <Grid item xs={6} mt={2} sx={{paddingRight: 2}}>
            <TextField
              fullWidth 
              type='date'
              defaultValue={dayjs(today).format('YYYY-MM-DD')}
              label='Date Event'
              {...register('date', {
                required: 'Date is required'
              })}
              error={!!errors.date}
              helperText={errors.date?.message}
            />
          </Grid>
          <Grid item xs={6}  mt={2}>
            <TextField 
              fullWidth 
              type='time'
              defaultValue={dayjs(today).format('HH:mm')}
              label="Time Event"
              {...register('time', {
                required: 'Time is required'
              })}
              error={!!errors.time}
              helperText={errors.time?.message}
            />
          </Grid>
        </Grid>
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
            disabled={loading}
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