import { NavLink } from 'react-router-dom'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'
import { useContext } from 'react';
import { UiContext } from '../../contexts/UiContext';

const NavBar = () => {
  const { toggleMenu } = useContext(UiContext)
  
  return (
    <AppBar>
      <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleMenu}
          >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>JournalApp</Typography>
        <Box className="fadeIn" ml={20}>
          <NavLink 
            to="/marvel"
            className={ ({ isActive }) => isActive && 'activeLink' }
          >
            <Button sx={{color: 'white'}}>
              Marvel
            </Button>
          </NavLink>
          <NavLink 
            to="/dc"
            className={ ({ isActive }) => isActive && 'activeLink' }
          >
          <Button sx={{color: 'white'}}>DC</Button>
          </NavLink>
          <NavLink 
            to="/search"
            className={ ({ isActive }) => isActive && 'activeLink' }
          >
            <Button sx={{color: 'white'}}>Buscar</Button>                   
          </NavLink>
        </Box>
        <Box flex={ 1 } />
        <Button sx={{color: 'white'}}>
            Logout
        </Button> 
      </Toolbar>
    </AppBar>
  )
}

export default NavBar