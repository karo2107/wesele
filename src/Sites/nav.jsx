import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const pathname = window.location.pathname;
  const splitString = pathname.split("/");
  // const a = splitString[1];
  const a = "Karolina i Kuba";
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static"
      sx={{color:"white"}}
      >
        <Toolbar>
          <Typography
          sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
          variant="h4" component="div" >
            {a}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
           
          >
            <MenuIcon />
          </IconButton> 
          
         
             <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Zaloguj' : 'Wyloguj'}
        />
      </FormGroup>
      {auth && (
            <div>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}

          <Typography sx={{px:2, display: { xs: 'none', sm: 'none', md: 'block' } }}>
            Harmonogram
          </Typography>
          <Typography sx={{px:2, display: { xs: 'none', sm: 'none', md: 'block' } }}>
            Lokalziacja
          </Typography>
          <Typography sx={{px:2, display: { xs: 'none', sm: 'none', md: 'block' } }}>
            Harmonogram
          </Typography>

       
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}