import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Grid from '@mui/material/Grid';

const pages = ['Harmonogram', 'Zespol', 'Specjalizacje', 'Aktualnosci', 'Kontakt', 'EN'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="sticky" color="secondary">
    {/* <AppBar position="static" color="secondary"> */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KMT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                  
                key={page}
                onClick={handleCloseNavMenu}
                href={page}
                sx={{ my: .5, color: 'black', display: 'flex' }}
              >
                {page}
              </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KMT
          </Typography>





          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Grid container spacing={1}>
          <Grid item xs={4}>
              <Button
                href="/Jakub Kozubek"
                sx={{ my: .5, color: 'white', display: 'flex' }}
              >
                radca Jakub Kozubek +48 123123123
              </Button></Grid>
              <Grid item xs={4}>
              <Button
                href="/Jan Matusiak"
                sx={{ my: .5, color: 'white', display: 'flex' }}
              >
                radca Jan Matusiak +48 123123123
              </Button></Grid>
              <Grid item xs={4}>
              <Button
                href="/Maciej Truszkiewicz"
                sx={{ my: .5, color: 'white', display: 'flex' }}
              >
                adwokat Maciej Truszkiewicz +48 123123123
              </Button></Grid>
            {pages.map((page) => (
                 <Grid item xs={2}> 
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={page}
                sx={{ my: .5, color: 'white', display: 'flex' }}
              >
                {page}
              </Button></Grid>
            ))}
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;