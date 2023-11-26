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
    TITLE: "Przystawki i powitalny drink na zamku",
    TIME: "14:30",
    DETAILS: "przystawki, prossecco, Więcej informacji wkrótce",
  },
  {
    TITLE: "Pierwszy ciepły posiłek w gospodzie",
    TIME: "17:00",
    DETAILS: "Więcej informacji wkrótce",
  },
  {
    TITLE: "Tort",
    TIME: "19:00",
    DETAILS: "Więcej informacji wkrótce",
  },
  {
    TITLE: "Drugi ciepły posiłek",
    TIME: "21:30",
    DETAILS: "Więcej informacji wkrótce",
  },
  {
    TITLE: "Trzeci ciepły posiłek",
    TIME: "23:00",
    DETAILS: "Więcej informacji wkrótce",
  },
  
  {
    TITLE: "Śniadanie",
    TIME: "10:00",
    DETAILS: "Więcej informacji wkrótce",
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
    //     .orderBy("TIME", "desc")
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
                align="justify"
                id={data.TITLE}
                variant="h5"
                component="h5"
              >
                {data.TITLE}
              </Typography>
              <Typography
                align="justify"
                id={data.TIME}
                variant="h5"
                component="h5"
              >
                {data.TIME}
              </Typography>
              <Typography
                align="justify"
                gutterBottom
                variant="h6"
                component="h6"
              >
                {data.DETAILS}
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
        Karta dań <br />
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
