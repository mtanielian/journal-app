import { useForm } from "react-hook-form";
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (form) => {
    console.log(form)
  }

  return (
    <Grid container spacing={2} sx={{mt: 5 , justifyContent: "center", alignItems: 'center'}}>
      <Grid item xs={3} textAlign='center'>
        <Typography variant="h6" component='h6'>LOGIN</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} mt={2}>
            <TextField 
              type='text'
              fullWidth
              label='Email'
              { ...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField 
              type='password'
              fullWidth
              label='Password'
              { ...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: '+7 characters' }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <Button
              variant='outlined'
              fullWidth
              type="submit" 
            >Login</Button>
          </Grid>
        </form>
        <Button fullWidth variant="contained" sx={{mt:4, textAlign: "center"}} startIcon={ <GoogleIcon /> }>
          <Typography variant="subtitle2">Sign in with google</Typography>
        </Button>

        <Grid item xs={12} mt={2} textAlign='end'>
          <Button variant="text" onClick={ () => navigate("/auth/register") }>Sing Up</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LoginPage