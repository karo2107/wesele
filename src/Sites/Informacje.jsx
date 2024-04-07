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
import Castle from "../GraphicAssets/Castle.png";
import Gospoda from "../GraphicAssets/Gospoda.png";
import Breakfast from "../GraphicAssets/Breakfast.png";
import Photo from "../GraphicAssets/Photo.png";
import line from "../GraphicAssets/info.svg";
import bear from "../GraphicAssets/bear.png";
import car from "../GraphicAssets/car.png";
import meat from "../GraphicAssets/Meat.png";
const pathname = window.location.pathname;
const splitString = pathname.split("/");
const a = "Karolina i Kuba";

const info = [
  //   {
  //     TITLE: "Ślub na Zamku w Wiśniczu",
  //     GMAP: "https://maps.app.goo.gl/JY8oEdJcqwiZi6A88",
  //     DETAILS:
  //     <div><b>Planujemy dokonać ceremonii ślubu na Zamku w Wiśniczu</b> </div>,
  //     DETAILS2: <div><p><b>O obiekcie:</b> Więcej informacji wkrótce</p></div>,
  //     DETAILS3:
  //     <div><p><b>Planowane wydarzenia:</b> Więcej informacji wkrótce</p></div>,
  //   DETAILS4:
  //   <div><p><b>Ubiór:</b> Proponujemy ubrać się ciepło, buty na wysokim obcasie nie są wskazane</p></div>,
  //   IMG: Castle,
  // },

 
  {
    TITLE: "Dojazd",
    GMAP: "https://maps.app.goo.gl/DdzdhLUfRdBYnjyw8",
    DETAILS:
      "Przy lokalu znajduje się bezpłatny parking dla samochodów osobowych.",
    DETAILS2:
      "Jest możliwość dojazdu komunikacją miejską (najlepiej pociąg z Krakowa do Bochni + telefon do nas).",
    DETAILS3:
      "Planujemy wynająć kierowców do rozwożenia gości do domów po imprezie.",
    DETAILS4: "Gospoda znajudje się 5 min od zjadu 'Bochnia' z autostrady A4",
    IMG: car,
  },
  {
    TITLE: "Wesele w Gospodzie nad Rabą",
    GMAP: "http://hotelnadraba.pl/",
    DETAILS:
      "Zameldowanie w Hotelu nad Rabą 31.12.2024 od 14.00 (do potwierdzenia) ",
    DETAILS2: "Parking na miejscu",
    DETAILS3: "Wymeldowanie 01.01.2025 do 14.00 (do potwierdzenia)",
    DETAILS4: "Więcej informacji wkrótce",
    IMG: Gospoda,
  },
  {
    TITLE: "Dzieci",
    GMAP: "http://hotelnadraba.pl/",
    DETAILS:
      "Ze względu na charakter imprezy prosimy, w miarę mozliwości, o pozostawienie swoich pociech w domu.",
    DETAILS2: "",
    DETAILS3: "Jeżeli nie jest to możliwe, prosimy o kontakt.",
    DETAILS4: "",
    IMG: bear,
  },
  {
    TITLE: "Preferencje dietetyczne",
    GMAP: "http://hotelnadraba.pl/wp-content/uploads/2022/12/Menu-weselne-v2.pdf",
    DETAILS:
      "Gospoda słynie z pysznych dań mięsnych i jarskich, prosimy o informacje dotyczącą alergii pokarmowych i wyboru dań miesnych lub wegetariańskich. ",
    DETAILS2: "",
    DETAILS3: "",
    DETAILS4: "",
    IMG: meat,
  },

  {
    TITLE: "Śniadanie w Gospodzie nad Rabą",
    GMAP: "https://maps.app.goo.gl/5nZGqpYyXNdWHNck8",
    DETAILS: (
      <div>
        Dnia pierwszego stycznia zapraszamy do gospody na śniadanie noworoczne,
        około godziny 10 rano.
      </div>
    ),
    DETAILS2: <div></div>,
    DETAILS3: <div> </div>,
    DETAILS4: "",
    IMG: Breakfast,
  }, 
  {
    TITLE: "Dodatkowe informacje",
    GMAP: "http://hotelnadraba.pl/",
    DETAILS: (
      <div>
        Szanowni Goście,
       
        <br />
        będzie nam niezmiernie miło jeżeli zamiast bukietu kwiatów obdarujecie
        nas butelką wytrawnego (czerwonego) wina. <br></br>
        <br />
      </div>
    ),
    DETAILS2: "",
    DETAILS3: "",
    DETAILS4:
      "",
    IMG: "",
  },
  {
    TITLE: "Wasze zdjęcia",
    GMAP: "https://drive.google.com/drive/folders/1kuC6IveYLcKHbMZt1-vQ-KaAwTOhRvw8?usp=sharing",
    DETAILS:
      "Prosimy o uploadowanie Waszych zdjęć z wydarzenia pod powyższym linkiem",
    IMG: Photo,
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
    fontFamily: ["Italianno"].join(","),
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
          <Card sx={{ borderRadius: 10 }}>
            <CardContent>
              <img src={data.IMG} width="50%" />
              <Typography
                // align="justify"
                id={data.TITLE}
                variant="h4"
                component="h4"
              >
                {data.TITLE}
              </Typography>
              <Button variant="outlined" href={data.GMAP} id={data.GMAP}>
                Więcej informacji
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
          </Card>
          <br />
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
        <Nav /> <div className="blankspace" />
        <Typography
          // align="justify"
          id={1}
          variant="h2"
          component="h2"
        >
          <br />
          Ważne informacje <br />
          
          <img src={line} width="50%" />
          <br />
        
        </Typography>
        <Typography
          // align="justify"
          id={1}
          variant="h5"
          component="h5"
        >
          Szanowni Goście,
        <br />
        Do wesela jeszcze dużo czasu i nie wszystko zostało ustalone. 
        <br/>Będziemy,
        na bierząco, dzielić się z Wami informacjami dotyczącymi organizacji
        wydarzenia.
          <br />
          Poniżej znajdziecie aktualne pomocne informacje.
          
        
        </Typography>
        
        {items}
        <div className="blankspace" />
      </div>
    </ThemeProvider>
  );
};

export default Write;
