import { useContext } from "react"
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import { AddBoxOutlined, CalendarMonth } from '@mui/icons-material';
import { Box } from "@mui/system";
import { UiContext } from '../../contexts/UiContext';
import JournalItem from "../journal/JournalItem";

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
        <JournalItem key={e} />
      )}
      </List>
    </Box>
    </Drawer>
  )
}

export default SideMenu