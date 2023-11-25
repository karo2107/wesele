import db from "../firebase.config";
import React, { useState, useEffect } from "react";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/database";
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

const pathname = window.location.pathname;
const splitString = pathname.split("/");
const a = splitString[1];

const Write = () => {
  const [info, setInfo] = useState([]);
  const [title, setTitle] = useState();
  // const [loggedin, setLoggedin] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setTitle(-1);
  const [pageloaded, setPageloaded] = useState(false);

  useEffect(() => {
    const Fetchdata = async () => {
      await db
        .collection({ a })
        .document("HARMONOGRAM")
        .collection("HARMONOGRAM")
        .orderBy("DATE", "desc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            var data = element.data();
            setInfo((arr) => [...arr, data]);
          });
        });
    };
    Fetchdata();
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
                variant="h4"
                component="h4"
              >
                {data.TITLE}
              </Typography>
              <Typography gutterBottom variant="h5" component="h5">
                Dzień : {data.DATE}
                <br />
                Godzina : <br />
              </Typography>
              <Typography
                align="justify"
                id={data.DETAILS}
                variant="p"
                component="p"
              >
                {data.DETAILS}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">Lokalizacja</Button>
              {data.LOCATION}
            </CardActions>
          </Card>
          <hr />
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
    <div sx={{ minHeight: "100vh" }}>
    <Nav />

      {items}
    </div>
  );
};

export default Write;
