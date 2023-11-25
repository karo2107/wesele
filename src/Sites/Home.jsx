import React, { useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Nav from "./nav";
import AOS from "aos";
import "aos/dist/aos.css";
import RestoreIcon from "@mui/icons-material/Restore";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import ReactPlayer from "react-player/lazy";
import { browserName, CustomView } from "react-device-detect";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InfoIcon from "@mui/icons-material/Info";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";



import { Helmet } from "react-helmet";

const theme = createTheme({
  palette: {
    primary: {
      light: "#825b07",
      main: "#825b07",
      dark: "#825b07",
      contrastText: "#000",
    },
    secondary: {
      light: "#022911",
      main: "#022911",
      dark: "#022911",
      contrastText: "#fff",
    },
    third: {
      light: "#000000",
      main: "#000000",
      dark: "#000000",
      contrastText: "#000000",
    },
    fourth: {
      light: "FF0000",
      main: "FF0000",
      dark: "FF0000",
      contrastText: "#000",
    },
  },
  shadows: ["none"],
  typography: {
    fontFamily: ["Tangerine"].join(","),
    button: {
      textTransform: "none",
    },
  },
});
const href = window.location.href;
const names = [
  "Przedsiębiorców",
  "Inwestorów",
  "Start-upów",
  "Programistów",
  "Deweloperów",
];

export default function Album() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [newName, setnewName] = useState("");
  const [index, setIndex] = useState(0);

  const shuffle = useCallback(() => {
    setIndex((prevIndex) => prevIndex + 1);

    setnewName(names[index]);
  }, []);
  if (index > 4) {
    setIndex(0);
  }
  useEffect(() => {
    const interval = setInterval(shuffle, 1500);
    return () => clearInterval(interval);
  }, [shuffle]);
  const pathname = window.location.pathname;
  const splitString = pathname.split("/");
  const a = splitString[1];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <main>
        <Box
          sx={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <Container
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
            maxWidth="md"
            sx={{
              height: "100vh",
            }}
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              spacing={{ xs: 1, sm: 2, md: 8, lg: 14 }}
            ><Typography/>
              <Typography/>
              <Typography
                component="h2"
                variant="h2"
                align="center"
                color=""
                gutterBottom
              >
                {a}
              </Typography>
              <Typography component="h3" variant="h3">
                Z przyjemnością zapraszają
                
              </Typography>
              <Typography component="h2" variant="h2">
                Do Gospody<br />dnia 31 grudnia 2024 roku
              </Typography>
            </Stack>{" "}
          </Container>
        </Box>
      </main>{" "}
      <Helmet>
        <title>{a}</title>
        <meta name="description" content={a} />
        <meta name="keywords" content="Wesele" />
        <link rel="canonical" href={href} />
      </Helmet>
    </ThemeProvider>
  );
}
