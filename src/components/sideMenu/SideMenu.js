import { useContext } from "react"
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import { AddBoxOutlined, CalendarMonth } from '@mui/icons-material';
import { Box } from "@mui/system";
import { UiContext } from '../../contexts/UiContext';
import JournalItem from "../journal/JournalItem";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const SideMenu = () => {
  const { menuOpen, toggleMenu } = useContext(UiContext)
  const { events } = useSelector(state => state.events)

  const onDelete = async (id) => {

    const response = await Swal.fire({
      title: 'Do you want to save the changes?',
      showCancelButton: true,
      confirmButtonText: 'Delete',      
    })
    console.log(response)
  }

  const onEdit = (id) => {
    console.log('edit: ', id)
  }

  
  return (
    <Drawer
      anchor='left'
      open={menuOpen}
      onClose={toggleMenu}
    >
      <Box
        sx={{ width: 450 }}
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
      {events.map(e => 
        <JournalItem 
          key={e.id} event={e} 
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
      </List>
    </Box>
    </Drawer>
  )
}

export default SideMenu