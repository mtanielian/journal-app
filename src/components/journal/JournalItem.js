import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"

const JournalItem = () => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 75, height: 75 }}
        image="https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Titulo del Evento
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            descripcion del evento lalalallalalalal lalalla lalalala jojojo jojjoj lalalal lalalal 
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default JournalItem