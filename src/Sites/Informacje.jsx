import db from "../firebase.config";
import React, { useState, useEffect } from "react";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/database";
import {Link} from "react-router-dom";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import AOS from "aos";
import "aos/dist/aos.css";
import {Helmet} from "react-helmet";
import Nav from "./nav";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Write = () => {
  const [info, setInfo] = useState([]);
  const [date, setDate] = useState();
  const [p1, setP1] = useState();
  const [p2, setP2] = useState();
  const [p3, setP3] = useState();
  const [p4, setP4] = useState();
  const [p5, setP5] = useState();
  const [summary, setSummary] = useState();
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [picture, setPicture] = useState();
  const [specjalizacja, setSpecjalizacja] = useState();
  // const [loggedin, setLoggedin] = useState();
  const [pass, setPass] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setTitle(-1);
  const [pageloaded, setPageloaded] = useState(false);



  useEffect(() => {
    const Fetchdata = async () => {
      await db
        .collection("wesela")
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
        <Grid
         data-aos="fade-down"
        sx={{
          my:5,
          display: {
            xs: "block",
            sm: "block",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
        container
        spacing={5}
        alignItems=""
      >
        <Grid item  xs={0} md={0} lg={2}/>
        <Grid item key={data.PICTURE} xs={12} md={3} lg={3}>
          <a href={`/Aktualnosci/${data.URL}`}>

          
          <img
            width="100%"
            src={data.PICTURE}
            // src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="KMT"
          /></a>
        </Grid>
        <Grid sx={{p:1}} item key={data.TITLE} xs={12} md={9} lg={5}>
          <Typography
            align="justify"
            id={data.TITLE}
            variant="h4"
            component="h1"
          >
            {data.TITLE}
          </Typography>

          <Typography
            align="justify"
            id={data.AUTHOR}
            variant="p"
            component="h4"
          >
            Autor:<a href={data.AUTHOR}> {data.AUTHOR}</a>
            
            
            <br/> Dzień publikacji:  {data.DATE}<br/> Dotyczy specjalizacji:{" "}
            <a href="/Specjalizacje"> {data.SPECJALIZACJA}</a>
             <hr />
          </Typography>
          <Typography
            align="justify"
            id={data.SUMMARY}
            variant="p"
            component="p"
          >
            {data.SUMMARY}
          </Typography>
          <br/>
          {/* <Link to={`/Aktualnosci/${data.TITLE}`}>przeczytaj</Link> */}
          <Button
            value={data.TITLE}
            variant="outlined"
            node="a"
            href={`/Aktualnosci/${data.URL}`}
            // onClick={(e) => setTitle(e.target.value)}
            sx={{p:1}}
          >
            Przeczytaj
          </Button>

        </Grid>
        <Grid item  xs={0} md={0} lg={2}/>
        </Grid>
        
        <Helmet>
          <title>
         KMT Aktualnosci
          </title>
          <meta name="description" content="KMT wesela, KMT aktualnosci"
          />
              <meta name="keywords" content="KMT, Kozubek Matusiak Truszkiewicz Adwokaci i Radcowie Prawni spółka cywilna, KMT Kozubek Matusiak Truszkiewicz, KMT Legal, KMT Kozubek Matusiak Truszkiewicz
    Jan Matusiak, KMT, Aktualnosci prawne, wesela"/>
          <link rel="canonical" href={`https://kmtlegal.pl/Aktualnosci/${data.URL}`}/>
        </Helmet>
      </div>
    );
  });

  return (
    <div sx={{minHeight:"100vh"}}>
  <Nav />
      
        {items}
     
    </div>
  );
};

export default Write;
