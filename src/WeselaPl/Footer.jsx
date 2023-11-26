import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Iframe from "react-iframe";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Alert from "@mui/material/Alert";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      <br />
      Strona wykorzystuje pliki cookies. W ramach naszej witryny stosujemy pliki
      cookies w celu świadczenia Państwu usług na najwyższym poziomie, w tym w
      sposób dostosowany do indywidualnych potrzeb. Korzystanie z witryny bez
      zmiany ustawień dotyczących cookies oznacza, że będą one zamieszczane w
      Państwa urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie
      zmiany ustawień dotyczących cookies.
      <br />
      <Link color="inherit" href="/cookies">
        Naciśnij po więcej szczegółów o Polityce Prywatności i Cookies.
      </Link>{" "}
      <br />
      <Link color="inherit" href="/AML-RODO">
        Naciśnij po więcej szczegółów o AML-RODO.
      </Link>{" "}
      <hr />
      {
        "Copyright © Choluj Design s.c."
      }{" "}
      {new Date().getFullYear()}
      <br />
      <Link color="inherit" href="https://cholujdesign.com/">
        Wykonanie strony: CholujDesign S.C.
      </Link>{" "}
      {"."}
    </Typography>
  );
}

function refreshPage() {
  window.location.reload(false);
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
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
  },
  shadows: ["none"],
  typography: {
    fontFamily: ["Lato"].join(","),
    textTransform: "none",
    button: {
      textTransform: "none",
    },
  },
});

export default function App() {
  const [wyslanoWiadomosc, setwyslanoWiadomosc] = React.useState(false);
  const [validated, setValidated] = React.useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6kxdm78",
        "template_m6wdswk",
        e.target,
        "mx4eNYcU6K_qE927r"
      )
      .then(
        (result) => {
          console.log(result.text);
          setwyslanoWiadomosc(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  
  const Wyslano = () => {
    return (
      <div>
        {wyslanoWiadomosc ? (
          <Alert
            sx
            // action={
            //   <Button onClick={refreshPage} color="inherit" size="small">
            //     X
            //   </Button>
            // }
          >
            Wiadomość wysłana!
          </Alert>
        ) : null}
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Footer */}
        <Box sx={{ bgcolor: "", mt: 0, p: 0 }} component="footer">
          <Grid container spacing={0}>
            <Grid
              item
              key="24"
              xs={12}
              sm={12}
              md={12}
              // data-aos="fade-left"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.9055229738274!2d20.428885776124673!3d49.99438072009741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47163adbf08d3fe3%3A0x664a1887373fc727!2sHotel%20i%20Restauracja%20-%20Gospoda%20nad%20Rab%C4%85!5e0!3m2!1spl!2spl!4v1700909761700!5m2!1spl!2spl" 
                width="100%"
                height="490px"
                id="myId"
                className="iframe"
                //display="block"
                // display="initial"
                position="relative"
              />{" "}
            </Grid>
            <Grid
              item
              key="324"
              xs={12}
              sm={6}
              md={6}
              data-aos="fade-left"
              sx={{
                height: "100%",
                align: "left",
                alignItems: "left",
                pl: 2,
                // display: "flex-end",
                // flexDirection: "row",
              }}
            >
              <Typography align="left" color="" component="h1" variant="h5">
                <br />
               
                <br />
                {/* <Button
                    size="large"
                    href="https://goo.gl/maps/PiQzy4NwX1Y7FHC9A"
                    color="secondary"
                    variant=""
                  > */}
                Wesele Karoliny i Kuby
                {/* </Button> */}
                <br />
                <br />
                <div className="samllText" align="left">
                Hotel i Restauracja - Gospoda nad Rabą
                <br/>
                Proszowska 121, 
                 32-700 Bochnia
                  <Button
                    size="large"
                    href="https://maps.app.goo.gl/5nZGqpYyXNdWHNck8"
                    color="secondary"
                    variant=""
                    sx={{
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    {" "}
                    <AddLocationAltIcon />
                  </Button>
                  <br />
                  Karolina: +48697020997
                  <Button
                    size="large"
                    href="tel:+48697020997"
                    color="secondary"
                    variant=""
                    sx={{
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    <CallIcon />
                  </Button>
                  <br />
                  Kuba: +48518048983
                  <Button
                    size="large"
                    href="tel:+48518048983"
                    color="secondary"
                    variant=""
                    sx={{
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    <CallIcon />
                  </Button>
                  <br />
                  weselekarolinykuby@gmail.com
                  <Button
                    size="large"
                    href="mailto:weselekarolinykuby@gmail.com"
                    color="secondary"
                    variant=""
                    sx={{
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    <EmailIcon />
                  </Button>
                  <br /> <br />
                
                </div>
                {/* <Button
                  onClick={navigator.clipboard.writeText("Kozubek Matusiak Truszkiewicz Adwokaci i Radcowie Prawni spółka cywilna ul. Piwna 15/3,30-527 Kraków, Polska  NIP: 9452267798, REGON: 524238078, mBank 51 1140 2004 0000 3702 8332 4753")}
                  size="small"
                  color="secondary"
                  variant=""
                >
                  Skopiuj
                </Button> */}
                <br />
              </Typography>
            </Grid>
            <Grid
              item
              key="34"
              xs={12}
              sm={6}
              md={6}
              data-aos="fade-left"
              sx={{
                height: "100%",
                display: "flex-end",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  marginTop: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{}} component="form" onSubmit={sendEmail} noValidate={validated}>
                  <br />
                  <Typography color="" component="h2" variant="h5">
                    Formularz kontaktowy
                  </Typography>

                  <Grid container spacing={2} sx={{ p: 2 }}>
                    <Grid
                      item
                      key="2f4"
                      xs={12}
                      sm={12}
                      md={6}
                      data-aos="fade-up"
                    >
                      <TextField
                        margin="normal"
                        
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="from_email"
                        autoComplete="email"
                      />
                    </Grid>{" "}
                    <Grid
                      item
                      key="2f4"
                      xs={12}
                      sm={12}
                      md={6}
                      data-aos="fade-up"
                    >
                      <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="name"
                        label="Imię i nazwisko "
                        name="from_name"
                        autoComplete="name"
                      />
                    </Grid>{" "}
                   
                    <Grid
                      item
                      key="2ff4"
                      xs={12}
                      sm={12}
                      md={12}
                      data-aos="fade-up"
                    >
                      <TextField
                        multiline
                        margin="normal"
                        required
                        fullWidth
                        name="message"
                        label="Wiadomość"
                        type="text"
                        id="text"
                        rows={4}
                      />
                      * Pola obowiązkowe.
                      <br />
                      <Wyslano />
                      <Button
                        
                        type="submit"
                        color="secondary"
                        variant="contained"
                        large
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Wyślij wiadomość
                      </Button>
                      <br />
                      <p className="samllText" align="justify">
                        Administratorem danych osobowych są Karolina Madej i Jakub Chołuj
                        Więcej informacji na temat przetwarzania danych
                        osobowych znajduje się w Polityce Prywatności i Cookies,
                        do których link znajduje się poniżej.
                      </p>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <br />
        </Box>
        <Box sx={{ backgroundColor: "black" }}>
          <br />
          <br />
          <Copyright />
          <br />
          <br />
        </Box>

        {/* End footer */}
      </main>
    </ThemeProvider>
  );
}
