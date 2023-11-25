import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import "aos/dist/aos.css";
import RestoreIcon from "@mui/icons-material/Restore";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BottomNavigation from "@mui/material/BottomNavigation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InfoIcon from "@mui/icons-material/Info";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import logo from "./svg/kmt-z-zielony-czerwony.svg";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pathname = window.location.pathname;
  const splitString = pathname.split("/");
  const a = splitString[1];

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <main>
        <Container maxWidth="l">
          <Grid sx={{ py: 0, }} container spacing={1}>
            <Grid item xs={1}>
              <Button
                sx={{
                  m: 0.2,
                  pt: 1.5,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
                // startIcon={<InfoIcon />}
                size="large"
                color="secondary"
                variant=""
                href={`/${a}/home`}
              >
                {a}
              </Button>
            </Grid>

            <Grid items xs={11}>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
                justifyContent="flex-end"
                alignItems="right"
              >
                <Button
                  sx={{ mx: 0.2, mt: 2 }}
                  // startIcon={<InfoIcon />}
                  size="large"
                  color="secondary"
                  variant=""
                  href={`/${a}/Harmonogram`}
                >
                  <Typography
                    component="h6"
                    variant="h6"
                    align="center"
                    color=""
                    sx={{fontWeight:900 }}
                  >
                    Harmonogram
                  </Typography>
                </Button>
                <Button
                  sx={{ mx: 0.2, mt: 2 }}
                  // startIcon={<InfoIcon />}
                  size="large"
                  color="secondary"
                  variant=""
                  href={`/${a}/Obecnosc`}
  
                >
                  <Typography
                    component="h6"
                    variant="h6"
                    align="center"
                    color=""
                    sx={{fontWeight:900 }}
                  >
                    Obecność
                    
                  </Typography>
                </Button>
                <Button
                  sx={{ mx: 0.2, mt: 2 }}
                  // startIcon={<InfoIcon />}
                  size="large"
                  color="secondary"
                  variant=""
                  href={`/${a}/Informacje`}
                >
                  <Typography
                    component="h6"
                    variant="h6"
                    align="center"
                    color=""
                    sx={{fontWeight:900 }}
                  >
                    Informacje
                  </Typography>
                </Button>
                <Button
                  sx={{ mx: 0.2, mt: 2 }}
                  // startIcon={<InfoIcon />}
                  size="large"
                  color="secondary"
                  variant=""
                  href="/Specjalizacje"
                >
                  <Typography
                    component="h6"
                    variant="h6"
                    align="center"
                    color=""
                    sx={{fontWeight:900 }}
                  >
                    ??
                  </Typography>
                </Button>
                <Button
                  sx={{ mx: 0.2, mt: 2 }}
                  // startIcon={<InfoIcon />}
                  size="large"
                  color="secondary"
                  variant=""
                  href="/Kontakt"
                >
                  <Typography
                    component="h6"
                    variant="h6"
                    align="center"
                    color=""
                    sx={{fontWeight:900 }}
                  >
                    Kontakt
                  </Typography>
                </Button>

                {/* <Button
                    sx={{ m: 0.2 }}
                    startIcon={<GTranslateIcon />}
                    color="secondary"
                    variant="contained"
                    href="/Specjalizacje"
                  >
                    en
                  </Button> */}
                <Button
                  sx={{ m: 0.2, mt: 3 }}
                  size="large"
                  color="secondary"
                  variant=""
                  href="https://www.linkedin.com/company/kmt-kozubek-matusiak-truszkiewicz/about/"
                  target="_blank"
                >
                  <Typography
                    component="h6"
                    variant="h6"
                    align="center"
                    color=""
                    sx={{fontWeight:900 }}
                  >
                    <LinkedInIcon />
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
