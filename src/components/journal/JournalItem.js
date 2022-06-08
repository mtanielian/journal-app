import { InfoOutlined } from "@mui/icons-material"
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Tooltip } from "@mui/material"

const JournalItem = () => {
  return (
    <ListItem button
      secondaryAction={
        <Tooltip title="Fecha del evento">
          <IconButton aria-label="comment">
            <InfoOutlined />
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemAvatar>
        <Avatar
          alt="Profile Picture"  
          variant="square"
          src='https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg'
        />
      </ListItemAvatar>
      <ListItemText primary='Titulo' secondary='descripcion del evento en el calendario lalalal lalalala lalalla lalallaa' />
    </ListItem>
  )
}

export default JournalItem