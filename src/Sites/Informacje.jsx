import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Nav from "./nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const pathname = window.location.pathname;
const splitString = pathname.split("/");
const a = "Karolina i Kuba";

const info = [
  {
    TITLE: "Ślub na Zamku w Wiśniczu",
    GMAP: "https://maps.app.goo.gl/JY8oEdJcqwiZi6A88",
    DETAILS:
    <div><b>Ślub zostnie potwierdzony pózniej</b> </div>,
    DETAILS2: <div><p><b>O obiekcie:</b> Więcej informacji wkrótce</p></div>,
    DETAILS3:
    <div><p><b>Planowane wydarzenia:</b> Więcej informacji wkrótce</p></div>,
  DETAILS4:
  <div><p><b>Ubiór:</b> Proponujemy ubrać się ciepło, buty na wysokim obcasie nie są wskazane</p></div>,
  },
  {
    TITLE: "Wesele w Gospodzie nad Rabą",
    GMAP: "https://maps.app.goo.gl/5nZGqpYyXNdWHNck8",
    DETAILS:
      "Więcej informacji wkrótce",
    DETAILS2: "Więcej informacji wkrótce",
    DETAILS3:
      "Więcej informacji wkrótce",
    DETAILS4:
      "Więcej informacji wkrótce",
  },
  {
    TITLE: "Śniadanie w Gospodzie nad Rabą",
    GMAP: "https://maps.app.goo.gl/5nZGqpYyXNdWHNck8",
    DETAILS:
    <div><p><b>Dojazd:</b> Więcej informacji wkrótce</p></div>,
    DETAILS2: <div><p><b>O obiekcie:</b> Więcej informacji wkrótce</p></div>,
    DETAILS3:
    <div><p><b>Planowane wydarzenia:</b> Więcej informacji wkrótce</p></div>,
  DETAILS4:"Więcej informacji wkrótce"
  },
  {
    TITLE: "Wasze zdjęcia",
    GMAP: "https://drive.google.com/drive/folders/1kuC6IveYLcKHbMZt1-vQ-KaAwTOhRvw8?usp=sharing",
    DETAILS:"Prosimy o uploadowanie Waszych zdjęć z uroczystości i przyjęcia pod powyszym linkiem",
  },
];
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
  },
  shadows: ["none"],
  typography: {
    fontFamily: ['Italianno'].join(","),
    textTransform: "none",
    button: {
      textTransform: "none",
    },
  },
});
const Write = () => {
  // const [info, setInfo] = useState([]);
  // const [title, setTitle] = useState();
  // const [loggedin, setLoggedin] = useState();
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setTitle(-1);
  // const [pageloaded, setPageloaded] = useState(false);

  useEffect(() => {
    // const Fetchdata = async () => {
    //   await db
    //     .collection({ a })
    //     .document("HARMONOGRAM")
    //     .collection("HARMONOGRAM")
    //     .orderBy("GMAP", "desc")
    //     .get()
    //     .then((querySnapshot) => {
    //       querySnapshot.forEach((element) => {
    //         var data = element.data();
    //         setInfo((arr) => [...arr, data]);
    //       });
    //     });
    // };
    // Fetchdata();
    AOS.init({
      duration: 2000,
    });
  }, []);

  const items = info.map((data) => {
    return (
      <div>
        <Container
          data-aos="fade-down"
          maxWidth="md"
          sx={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <Card sx={{}}>
            <CardContent>
              {" "}
              <Typography
                // align="justify"
                id={data.TITLE}
                variant="h4"
                component="h4"
              >
                {data.TITLE}
              </Typography>
              <Button variant="outlined" href={data.GMAP} id={data.GMAP}>
                Link
              </Button>
              <Typography
                align="justify"
                gutterBottom
                variant="h5"
                component="h5"
              >
                {data.DETAILS}
              </Typography>
              <Typography
                align="justify"
                gutterBottom
                variant="h5"
                component="h5"
              >
                {data.DETAILS2}
              </Typography>
              <Typography
                align="justify"
                gutterBottom
                variant="h5"
                component="h5"
              >
                {data.DETAILS3}
              </Typography>
              <Typography
                align="justify"
                gutterBottom
                variant="h5"
                component="h5"
              >
                {data.DETAILS4}
              </Typography>
            </CardContent>
            <hr />
          </Card>
        </Container>
        <Helmet>
          <title>{a}</title>
          <meta name="description" content="wesele" />
          <meta name="keywords" content="wesela" />
          {/* <link
            rel="canonical"
            href={`https://kmtlegal.pl/Aktualnosci/${data.URL}`}
          /> */}
        </Helmet>
      </div>
    );
  });

  return (
    <ThemeProvider theme={theme}>
    <div sx={{ minHeight: "100vh" }}>
      <Nav />
      <Typography
        // align="justify"
        id={1}
        variant="h2"
        component="h2"
      >
        <br />
        Wazne informacje <br />
        <br />
      </Typography>
      {items}
      <br />
      <br />
      <br />
      <br />
      <br />
    </div></ThemeProvider>
  );
};

export default Write;
