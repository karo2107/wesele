//TUTAJ DAC INFORMACJE O TYM CO OFERUJEMY I CO TO DAJEM

import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactPlayer from "react-player/lazy";
import Iframe from "react-iframe";
import { browserName, CustomView } from "react-device-detect";

import { Helmet } from "react-helmet";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://cholujdesign.com/">
        CholujDesign S.C.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff7961",
      main: "#A97900",
      dark: "#ba000d",
      contrastText: "#fff",
    },
    secondary: {
      light: "#4b688b",
      main: "#1b222e",
      dark: "#001834",
      contrastText: "#fff",
    },
  },

  typography: {
    fontFamily: ["Cardo"],
    textTransform: 'none',
    button: {
      textTransform: 'none' 
    }
  },
});

export default function Album() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const videoParentRef = useRef();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>
        {/* desktop */}
        <CustomView condition={browserName === "Chrome"}>
          <div className="player-wrapper">
            <ReactPlayer
              ref={videoParentRef}
              playsinline={true}
              className="react-player"
              url="https://www.youtube.com/watch?v=PeBJaU_vzUw-U"
              width="100%"
              height="100%"
              volume={0}
              muted={true}
              // playsInline={true}
              playing={true}
              loop={true}
              controls={false}
              pip={true}
              playbackRate={1}
            />
          </div>
        </CustomView>
        {/* <img className="bgPic" width="100%" /> */}
        <div className="" data-aos="zoom-in">
        
         
          <br/> <br/>
          <div className="bgHome">
          <Container sx={{ py: 0 }} maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} sx={{ pb: 10 }}></Grid>
              <Grid item xs={12} sm={6} sx={{ pb: 10 }}></Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 5 }}>
                <Box
                  sx={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 5,
                  }}
                >
                  <Typography
                    component="h4"
                    variant="h4"
                    align="left"
                    color="white"
                    gutterBottom
                  >
                    Architektura, wnętrza, CGI
                  </Typography>
                  <Typography variant="h6" align="justify" color="white" paragraph>
                    Oferujemy usługi w zakresie projektowania architektury,
                    architektury wnętrz, animacji, wizualizacji, modelowania 3D
                    oraz projektowania stron internetowych. Współpracujemy z
                    deweloperami w pełnym zakresie, pozwala to na
                    zaprezentowanie klientowi spoistego designu począwszy od
                    proponowanego budynku, poprzez sposób jego zaprezentowania
                    kończąc na projekcie strony.
                  </Typography>
                </Box>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 5 }}>
                <Box
                  sx={{
                    backgroundImage: `url(https://svgsilh.com/svg/2409580-ffffff.svg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 15,
                    minHeight: "50vh",
                  }}
                />
              </Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 5 }}>
                <Typography
                  component="h4"
                  variant="h4"
                  align="center"
                  color="white"
                  gutterBottom
                >
                  Nasze Manifesto
                </Typography>
                <Typography variant="h6" align="justify" color="white" paragraph>
                  Skupiamy się w pierwszej kolejności nad potrzebami i
                  oczekiwaniami naszych klientów, każdy projekt jest analizowany
                  indywidualnie.
                  <br />
                  Motywem przewodnim w naszej pracy jest oddziaływanie światła
                  naturalnego oraz sztucznego na kolorystykę, fakturę bryly
                  budynku, geometrię wnętrza oraz powiazanie projektu z naturą.
                  <br />
                  Duzy nacisk kładziemy na percepcję użytkownika w projektowanym
                  obiekcie. Projektowanie przestrzenne doświadcza się poprzez
                  wicej niż tylko jeden zmysł.
                </Typography>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 11 }}>
                <Box
                  sx={{
                    backgroundImage: `url(https://svgsilh.com/svg/1559455-ffffff.svg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 11,
                    minHeight: "50vh",
                  }}
                />
              </Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 11 }}>
                <Typography
                  component="h4"
                  variant="h4"
                  align="center"
                  color="white"
                  gutterBottom
                >
                  Publikacje, Współpraca
                </Typography>
                <Typography variant="h6" align="justify" color="white" paragraph>
                  Nasza praca została nie tylko doceniona przez naszych
                  klientów, ale również przez prasę architektoniczną.
                  <br />
                  Wspólpracujemy z projektantami z Polski, Anglii, USA,
                  Holandii.
                  <br />
                  W zależności od skali i specyfikacji projektu powiększamy nasz
                  zespół, pozwala to nam na oferowanie wysokiej jakości usług.
                  <br />
                  <a href="https://www.homify.nl/ideabooks/9077119/ontdek-een-simpele-keukentransformatie">
                    <Typography
                      variant="h6"
                      align="center"
                      color="white"
                      paragraph
                    >
                      link
                    </Typography>
                  </a>
                </Typography>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 11 }}>
                <Box
                  sx={{
                    backgroundImage: `url(https://svgsilh.com/svg/312122-ffffff.svg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 11,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
          <Helmet>
          <title>Home</title>
          <meta name="description" content="CHD pracownia architektoniczna" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1617360547704-3da8b5363369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          <link
            rel="canonical"
            href="https://cholujdesign.com/CHD"
          />
        </Helmet>
        </div>
        </div>

        {/* mobile&tablet */}
        <div className="homeMobile">
          <Box
            sx={{
              // backgroundImage: `url(https://drive.google.com/uc?export=view&id=10oapHpS9XICtTtT21Uehn90kbCga7-eL)`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              minHeight: "85vh",
              alignItems: "center",
              py: 0,
              display: { md: "none", lg: "none", xl: "none" },
            }}
          >
            <Container data-aos="zoom-in" maxWidth="xs">
            <br/><br/><br/><br/>
              <Button variant="contained" href="/ONas">
                <Typography
                  component="h3"
                  variant="h3"
                  align="center"
                  color="white"
                >
                  CHD
                </Typography>
              </Button>
              <Typography
                component="h3"
                variant="h3"
                align="center"
                color="primary"
                gutterBottom
              >
                Architekci
              </Typography>
              {/* <Typography variant="h5" align="center" color="white" paragraph>
              adw.jan kowalski
              <br />
              adw.jan kowalski
            </Typography> */}
              <Stack
                sx={{ pt: 5 }}
                direction="column"
                spacing={2}
                justifyContent="center"
              >
                <Button href="tel:+48509446074" variant="contained">
                  +48 509 446 704
                </Button>
                <Button href="mailto:biuro@cholujdesign.pl" variant="contained">
                  biuro@cholujdesign.pl
                </Button>
                <Button
                  variant="contained"
                  href="https://goo.gl/maps/CfisLfUTRzM1tD6fA"
                >
                  Rynek Główny 43
                </Button>
                <Button
                  variant="contained"
                  href="/Certyfikaty"
                  color="secondary"
                >
                  Wykonujemy certyfikaty energetyczne!
                </Button>
              
              </Stack>
            </Container>
          </Box>
        </div>
        <div className="bgHome">
          <Container sx={{ py: 0 }} maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} sx={{ pb: 10 }}></Grid>
              <Grid item xs={12} sm={6} sx={{ pb: 10 }}></Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 5 }}>
                <Box
                  sx={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 5,
                  }}
                >
                  <Typography
                    component="h4"
                    variant="h4"
                    align="left"
                    color="white"
                    gutterBottom
                  >
                    Architektura, wnętrza, CGI
                  </Typography>
                  <Typography variant="h6" align="justify" color="white" paragraph>
                    Oferujemy usługi w zakresie projektowania architektury,
                    architektury wnętrz, animacji, wizualizacji, modelowania 3D
                    oraz projektowania stron internetowych. Współpracujemy z
                    deweloperami w pełnym zakresie, pozwala to na
                    zaprezentowanie klientowi spoistego designu począwszy od
                    proponowanego budynku, poprzez sposób jego zaprezentowania
                    kończąc na projekcie strony.
                  </Typography>
                </Box>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 5 }}>
                <Box
                  sx={{
                    backgroundImage: `url(https://svgsilh.com/svg/2409580-ffffff.svg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 15,
                    minHeight: "50vh",
                  }}
                />
              </Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 5 }}>
                <Typography
                  component="h4"
                  variant="h4"
                  align="center"
                  color="white"
                  gutterBottom
                >
                  Nasze Manifesto
                </Typography>
                <Typography variant="h6" align="justify" color="white" paragraph>
                  Skupiamy się w pierwszej kolejności nad potrzebami i
                  oczekiwaniami naszych klientów, każdy projekt jest analizowany
                  indywidualnie.
                  <br />
                  Motywem przewodnim w naszej pracy jest oddziaływanie światła
                  naturalnego oraz sztucznego na kolorystykę, fakturę bryly
                  budynku, geometrię wnętrza oraz powiazanie projektu z naturą.
                  <br />
                  Duzy nacisk kładziemy na percepcję użytkownika w projektowanym
                  obiekcie. Projektowanie przestrzenne doświadcza się poprzez
                  wicej niż tylko jeden zmysł.
                </Typography>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 11 }}>
                <Box
                  sx={{
                    backgroundImage: `url(https://svgsilh.com/svg/1559455-ffffff.svg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 11,
                    minHeight: "50vh",
                  }}
                />
              </Grid>

              <Grid data-aos="zoom-in" item xs={12} sm={12} sx={{ pb: 11 }}>
                <Typography
                  component="h4"
                  variant="h4"
                  align="center"
                  color="white"
                  gutterBottom
                >
                  Publikacje, Współpraca
                </Typography>
                <Typography variant="h6" align="justify" color="white" paragraph>
                  Nasza praca została nie tylko doceniona przez naszych
                  klientów, ale również przez prasę architektoniczną.
                  <br />
                  Wspólpracujemy z projektantami z Polski, Anglii, USA,
                  Holandii.
                  <br />
                  W zależności od skali i specyfikacji projektu powiększamy nasz
                  zespół, pozwala to nam na oferowanie wysokiej jakości usług.
                  <br />
                  <a href="https://www.homify.nl/ideabooks/9077119/ontdek-een-simpele-keukentransformatie">
                    <Typography
                      variant="h6"
                      align="center"
                      color="white"
                      paragraph
                    >
                      link
                    </Typography>
                  </a>
                </Typography>
              </Grid>
              <Grid data-aos="zoom-out" item xs={12} sm={12} sx={{ pb: 11 }}>
                <Box
                  sx={{
                    backgroundImage: `url(https://svgsilh.com/svg/312122-ffffff.svg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    alignItems: "center",
                    py: 11,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
          <Helmet>
          <title>Home</title>
          <meta name="description" content="CHD pracownia architektoniczna" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1617360547704-3da8b5363369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          <link
            rel="canonical"
            href="https://cholujdesign.com/CHD"
          />
        </Helmet>
        </div>
      </main>
    </ThemeProvider>
  );
}
