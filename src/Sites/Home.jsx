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
import ReactDOM from "react-dom";
import Snowfall from "react-snowfall";
import { Helmet } from "react-helmet";
import bg from "./home.png";
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
    fontFamily: ["Italianno"].join(","),
    textTransform: "none",
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

  const a = "Karolina i Kuba";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <main>
        <Box
          sx={{
            // backgroundImage:
            //   "url('https://images.unsplash.com/photo-1543721241-adfe6a33fd2e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundImage:`url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <Snowfall />
          <Container
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
            maxWidth="md"
            sx={{
              height: "100vh",
            }}
          >
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <br /> <br /> <br /> <br />
            </Box>
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems=""
              spacing={{ xs: 1, sm: 2, md: 8, lg: 14 }}
              sx={{display: { xs: 'none', sm: 'flex',fontStyle:'italic' }}}
            >
              <Typography />
              
              

              <Typography
                sx={{ fontStyle: "oblique", color: "black" }}
                component="h3"
                variant="h3"
              >
                
                 Drodzy Goście!<br/> Zapraszamy Was na nasze wesele.
                
                
              </Typography>
              <Typography
                component="h4"
                variant="h4"
                align="right"
                color="black"
                gutterBottom
                sx={{ fontStyle: "italic" }}
              >
                {a}
              </Typography>
            </Stack>{" "}
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems=""
              spacing={{ xs: 3, sm: 2, md: 8, lg: 14 }}
              sx={{display: { xs: 'flex', sm: 'none',fontStyle:'italic' }}}
            >
              <Typography />
              <Typography />

              <Typography
                sx={{ fontStyle: "oblique", color: "black" }}
                component="h5"
                variant="h5"
              >
                Drodzy Goście!<br/> Zapraszamy Was na nasze wesele.
              </Typography>
              <Typography
                component="h6"
                variant="h6"
                align="right"
                color="black"
                gutterBottom
                sx={{ fontStyle: "italic" }}
              >
                {a}
              </Typography>
            </Stack>{" "}
         
          </Container>
        </Box>
        <Box
        sx={{backgroundColor:"white"}}
        >
          <Container maxWidth="md">
            <Typography
              sx={{ fontStyle: "italic", color: "" }}
              component="h4"
              variant="h5"
            >
              <br />
              <br />
              <b>Szanowni Rodzice, Krewni, Bliscy i Przyjaciele!</b>
              <br />
              <br />
            </Typography>
            <Typography
              align="justify"
              sx={{ fontStyle: "italic", color: "" }}
              component="h6"
              variant="h6"
            >
              Z ogromną radością pragniemy Was zaprosić na nasz ślub i wesele.
              To wyjątkowe wydarzenie odbędzie się w ostatnią noc roku, 31
              grudnia 2024 roku, w malowniczym zakątku, Gospodzie nad Rabą i
              (mamy nadzieję) na Zamku w Wiśniczu. Prosimy o zarezerwowanie tego
              wyjątkowego dnia w Waszym kalendarzu i dołączenie do zabawy.
              Będziemy razem witać Nowy Rok w świetnym towarzystwie! Szczegóły
              dotyczące karty dań, planu wesela oraz ceremonii ślubnej będziemy
              stopniowo udostępniać, a wszystkie informacje zostaną podane do
              wiadomości przed wakacjami. Bądźcie pewni, że pracujemy nad
              stworzeniem niezapomnianego wydarzenia, a na koniec wieczoru
              planujemy wybuchową zabawę, która dostarczy Wam mnóstwo radości i
              niezapomnianych chwil. Liczymy, że razem z nami stworzycie
              magiczną atmosferę tego wyjątkowego dnia. Z niecierpliwością
              czekamy na wspólną zabawę!
              <br />
              <br />
              Z serdecznymi pozdrowieniami,
              <br />
              <br />
              Karolina i Kuba
              <br />
              <br />
            </Typography>
          </Container>{" "}
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
