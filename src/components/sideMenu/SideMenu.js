import { useContext } from "react"
import { Avatar, Divider, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Toolbar, Tooltip } from "@mui/material"
import { AddBoxOutlined, CalendarMonth, InfoOutlined } from '@mui/icons-material';
import { Box } from "@mui/system";
import { UiContext } from '../../contexts/UiContext';

const SideMenu = () => {
  const { menuOpen, toggleMenu } = useContext(UiContext)

  return (
    <Drawer
      anchor='left'
      open={menuOpen}
      onClose={toggleMenu}
    >
      <Box
        sx={{ width: 350 }}
        role="presentation"
      >
      <Toolbar />
      <Divider />
      <List sx={{mb:2}}>
        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddBoxOutlined />
              </ListItemIcon>
              <ListItemText primary='New Event' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText primary='Calendar' />
            </ListItemButton>
          </ListItem>
        
      </List>
      <Divider>Last Events</Divider>
      <List>
      
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => 
      (<ListItem button key={e} 
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
        </ListItem>)
      )}
      </List>
    </Box>
    </Drawer>
  )
}

export default SideMenu