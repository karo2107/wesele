import db from "../firebase.config";
import React, { useState, useEffect } from "react";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/database";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
import Castle from "../GraphicAssets/Castle.png";
import Gospoda from "../GraphicAssets/Gospoda.png";
import Drinks from "../GraphicAssets/Drinks.png";
import Wedding from "../GraphicAssets/Wedding.png";
import Food from "../GraphicAssets/Food.png";
import line from "../GraphicAssets/timetable.svg";
import Dance from "../GraphicAssets/Dance.png";
import Fireworks from "../GraphicAssets/Fireworks.png";
import Breakfast from "../GraphicAssets/Breakfast.png";
import { BreakfastDining } from "@mui/icons-material";


const pathname = window.location.pathname;
const splitString = pathname.split("/");
const a = "Karolina i Kuba";
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
const info = [
  {
    TITLE: "❶ Recepcja przed ślubem",
    DATE: "⏲ 14:30 🗓 31/12/2024",
    DETAILS:"Więcej szegółów wrótce",
    IMG: Castle,
    LOCATION: "⛫ Zamek w Wiśniczu",
  },
  {
    TITLE: "❷ Ceremonia ślubu",
    DATE: "⏲ 15:30 🗓 31/12/2024",
    DETAILS:"Więcej szegółów wrótce",
    IMG: Wedding,
    LOCATION: "⛫ Zamek w Wiśniczu",
  },
  {
    TITLE: "❸ Przyjazd do Gospody nad Rabą",
    DATE: "⏲ 16:30 🗓 31/12/2024",
    DETAILS:"Więcej szegółów wrótce",
    IMG: Gospoda,
    LOCATION: "⚐ Gospoda nad Rabą",
  },
  {
    TITLE: "❹ Toast",
    DATE: "⏲ 17:00 🗓 31/12/2024",
    DETAILS:"Więcej szegółów wrótce",
    IMG: Drinks,
    LOCATION: "Gospoda nad Rabą",
  },
  {
    TITLE: "❹ Pierwszy ciepły posiłek",
    DATE: "⏲ 17:00 🗓 31/12/2024",
    DETAILS:"Więcej szegółów wrótce",
    IMG: Food,
    LOCATION: "Gospoda nad Rabą",
  },

  {
    TITLE: "❹ Wesele",
    DATE: "⏲ 17:00 🗓 31/12/2024",
    DETAILS:"Więcej szegółów wrótce",
    IMG: Dance,
    LOCATION: "Gospoda nad Rabą",
  },
  {
    TITLE: "❺ Fajerwerki",
    DATE: "⏲ 24:00 🗓 31/12/2024",
    DETAILS:"Więcej szegółów wrótce",
    IMG: Fireworks,
    LOCATION: "Gospoda nad Rabą",
  },
  {
    TITLE: "❻ Śniadanie noworoczne",
    DATE: "⏲ 10:00 🗓 01/01/2025",
    DETAILS:"Więcej szegółów wrótce",
    IMG: Breakfast,
    LOCATION: "Gospoda nad Rabą",
  },
];

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
    //     .orderBy("DATE", "desc")
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
          <Card sx={{borderRadius:9}}>
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
              <img src={data.IMG} width="50%"/>
              <Typography gutterBottom variant="h5" component="h5">
                {data.DATE}
                <br/>
                {data.LOCATION}
              </Typography>
              <Typography
                // align="justify"
                id={data.DETAILS}
                variant="p"
                component="p"
              >
                {data.DETAILS}
              </Typography>
            </CardContent>
           
          </Card>
        </Container>
        <br/>
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

  return (<ThemeProvider theme={theme}>
    <div sx={{ minHeight: "100vh" }}>
      <Nav /> <div className="blankspace"/>
      <Typography
        // align="justify"
        id={1}
        variant="h2"
        component="h2"
      >
        <br />
        Harmonogram <br />
        <img src={line} width="50%"/>
        <br /><br />
      </Typography>
      {items}
      <div className="blankspace"/>
    </div></ThemeProvider>
  );
};

export default Write;
