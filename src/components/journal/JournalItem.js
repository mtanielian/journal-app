import { InfoOutlined, DeleteOutlined } from "@mui/icons-material"
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Tooltip } from "@mui/material"

const JournalItem = ({ event, onEdit = () => {}, onDelete = () => {} }) => {
  const { id, date, time, imgUrl, title, description } = event
  return (
    <ListItem button
      secondaryAction={
        <Tooltip title={`${date} ${time}`}>
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
      <ListItemText 
        onClick={() => onEdit(id)}
        primary={title} 
        secondary={description} 
      />
      <Tooltip title='Delete Event' onClick={() => onDelete(id)}>
        <IconButton aria-label="comment">
          <DeleteOutlined />
        </IconButton>
      </Tooltip>
    </ListItem>
  )
}

export default JournalItem