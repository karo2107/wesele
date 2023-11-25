import React, { useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import TextField from "@mui/material/TextField";
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
  "Gospoda pod Rabą",
  "Kawiarnia Gehanowska",
  "123",
  "3212",
  "123123",
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
      <main>
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
          >
            <Typography />
            <Typography />
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color=""
              gutterBottom
            >
              Wesela.com
            </Typography>
            <Typography component="h3" variant="h3">
              Gotowe strony internetowe dla Twojego wesela!
            </Typography>
            <Typography component="h2" variant="h2">
             <a href="/moreinfo">Dowiedz się więcej, jak to działą</a> 
             
              {/* współpracujące z nami domy weselne
              <br />
              {names} */}
             
              <hr/>
              <TextField
                sx={{ px: 2 }}
                margin="normal"
                required
                fullWidth
                id="text"
                label="znajdz wesele po nazwie lokalu lub dacie"
                name="text"
                autoComplete=""
                autoFocus
                variant="standard"
                // multiline
                // rows={1}
              />
            </Typography>
          </Stack>{" "}
        </Container>
      </main>
      <Helmet>
        <title>{a}</title>
        <meta name="description" content={a} />
        <meta name="keywords" content="Wesele" />
        <link rel="canonical" href={href} />
      </Helmet>
    </ThemeProvider>
  );
}
