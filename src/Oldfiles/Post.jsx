import db from "./firebase.config";
import React, { useState, useEffect, useLocation } from "react";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/database";
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  onSnapshot,
  collection,
  query,
  whereEqualTo,
  where,
} from "firebase/firestore";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import NavPc from "./navPc";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Helmet } from "react-helmet";
import Jakub from "./renders/Jakub.webp";
import Jan from "./renders/Jan.webp";
import Maciej from "./renders/Maciej.webp";

import logo from "./svg/kmt-z-zielony-czerwony.svg";

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

const Post = () => {
  const [info, setInfo] = useState([]);
  const [date, setDate] = useState();
  const [p1, setP1] = useState();
  const [p2, setP2] = useState();
  const [p3, setP3] = useState();
  const [p4, setP4] = useState();
  const [p5, setP5] = useState();
  const [p6, setP6] = useState();
  const [h1, setH1] = useState();
  const [h2, setH2] = useState();
  const [h3, setH3] = useState();
  const [h4, setH4] = useState();
  const [h5, setH5] = useState();
  const [h6, setH6] = useState();
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


  const pathname = window.location.pathname;
  const splitString = pathname.split("/");
  const a = splitString[1];
  const id = splitString[2]
  useEffect(() => {
    const Fetchdata = async () => {
      await db
        .collection({a})
        .where("ID", "==", id)
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
      <Box sx={{ maxWidth: "lg" }}>
        <Typography id={data.TITLE} variant="h3" component="h1">
          {data.TITLE}
        </Typography>
        <Typography id={data.SUMMARY} sx={{ py: 0 }}>
          <Typography variant="p" component="p" sx={{ py: 0 }}>
            Dzień publikacji: {data.DATE}
          </Typography>
          <Typography id={data.AUTHOR} variant="p" component="p">
            Autor: <Link to={`/${data.AUTHOR}`}>{data.AUTHOR}</Link>
          </Typography>
          <Typography variant="p" component="p" sx={{ py: 0 }}>
            Dotyczy specjalizacji:{" "}
            <a href="/Specjalizacje">{data.SPECJALIZACJA}</a>
            <hr />
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H1}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P1}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H2}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P2}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H3}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P3}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H4}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P4}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H5}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P5}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H6}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P6}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H7}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P7}
          </Typography><Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H8}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P8}
          </Typography><Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H9}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P9}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H10}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P10}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H11}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P11}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H12}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P12}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H13}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P13}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H14}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P14}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H15}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P15}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H16}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P16}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H17}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P17}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H18}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P18}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H19}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P19}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H20}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P20}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H21}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P21}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H22}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P22}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H23}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P23}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H24}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P24}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H25}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P25}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H26}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P26}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H27}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P27}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H28}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P28}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H29}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.P29}
          </Typography>
          <Typography
            align="justify"
            variant="h4"
            component="h4"
            sx={{ py: 0 }}
          >
            {data.H30}
          </Typography>
          <Typography
            align="justify"
            variant="h6"
            component="h4"
            sx={{ py: 0.1 }}
          >
            {data.P30}
          </Typography>
        </Typography>
        <br />
        <Container maxWidth="sm">
          <div>
            {(() => {
              switch (data.AUTHOR) {
                case "Jan Matusiak":
                  return (
                    <div>
                      <Typography
                        align="center"
                        variant="h6"
                        component="h4"
                        sx={{ py: 0 }}
                      >
                        Masz pytanie dotyczące powyższego zagadnienia?
                        <br /> Zachęcam do kontaktu z naszym zespołem.
                        <br />
                        <br />
                        <Button
                          href="mailto:j.matusiak@kmtlegal.pl"
                          color="third"
                          variant="outlined"
                        >
                          j.matusiak@kmtlegal.pl
                        </Button>
                        <br />
                        <br />{" "}
                        <Button
                          href="tel:+48690720320"
                          color="third"
                          variant="outlined"
                        >
                          +48690720320
                        </Button>
                        <br />
                      </Typography>
                      <a href="/Jan Matusiak">
                        <br />
                        <img className="picBG" src={Jan} width="50%" alt="" />
                      </a>
                      <br />
                      <br />
                    </div>
                  );
                case "Jakub Kozubek":
                  return (
                    <div>
                      <Typography
                        align="center"
                        variant="h6"
                        component="h4"
                        sx={{ py: 0 }}
                      >
                        Masz pytanie dotyczące powyższego zagadnienia?
                        <br /> Zachęcam do kontaktu z naszym zespołem.
                        <br />
                        <br />
                        <Button
                          href="mailto:j.kozubek@kmtlegal.pl"
                          color="third"
                          variant="outlined"
                        >
                          j.kozubek@kmtlegal.pl
                        </Button>
                        <br />
                        <br />
                        <Button
                          href="tel:+48690720320"
                          color="third"
                          variant="outlined"
                        >
                          +48690720320
                        </Button>
                        <br />
                      </Typography>
                      <a href="/Jakub Kozubek">
                        <br />
                        <img className="picBG" src={Jakub} width="50%" alt="" />
                      </a>
                      <br />
                      <br />
                    </div>
                  );
                case "Maciej Truszkiewicz":
                  return (
                    <div>
                      <Typography
                        align="center"
                        variant="h6"
                        component="h4"
                        sx={{ py: 0 }}
                      >
                        Masz pytanie dotyczące powyższego zagadnienia?
                        <br /> Zachęcam do kontaktu z naszym zespołem.
                        <br />
                        <br />
                        <Button
                          href="mailto:m.truszkiewicz@kmtlegal.pl"
                          color="third"
                          variant="outlined"
                        >
                          m.truszkiewicz@kmtlegal.pl
                        </Button>
                        <br /> <br />{" "}
                        <Button
                          href="tel:+48690720320"
                          color="third"
                          variant="outlined"
                        >
                          +48690720320
                        </Button>
                        <br />
                      </Typography>
                      <a href="/Maciej Truszkiewicz">
                        <br />
                        <img
                          className="picBG"
                          src={Maciej}
                          width="50%"
                          alt=""
                        />
                      </a>
                      <br />
                      <br />
                    </div>
                  );

                case "KMT":
                  return (
                    <div>
                      <Typography
                        align="center"
                        variant="h6"
                        component="h4"
                        sx={{ py: 0 }}
                      >
                        Masz pytanie dotyczące powyższego zagadnienia?
                        <br /> Zachęcamy do kontaktu z naszym zespołem.
                        <br />
                        <br />
                        <Button
                          href="mailto:biuro@kmtlegal.pl"
                          color="third"
                          variant="outlined"
                        >
                          biuro@kmtlegal.pl
                        </Button>
                        <br />
                        <br />{" "}
                        <Button
                          href="tel:+48690720320"
                          color="third"
                          variant="outlined"
                        >
                          +48690720320
                        </Button>
                        <br />
                      </Typography>
                      <a href="/KMT">
                        <br />
                        <img className="picBG" src={logo} width="50%" alt="" />
                      </a>
                      <br />
                      <br />
                    </div>
                  );
                default:
                  return (
                    <div>
                      <Typography
                        align="center"
                        variant="h6"
                        component="h4"
                        sx={{ py: 0 }}
                      >
                        Masz pytanie dotyczące powyższego zagadnienia?
                        <br /> Zachęcamy do kontaktu z naszym zespołem.
                        <br />
                        <br />
                        <Button
                          href="mailto:biuro@kmtlegal.pl"
                          color="third"
                          variant="outlined"
                        >
                          biuro@kmtlegal.pl
                        </Button>
                        <br /> <br />
                        <Button
                          href="tel:+48690720320"
                          color="third"
                          variant="outlined"
                        >
                          +48690720320
                        </Button>
                        <br />
                      </Typography>
                      <a href="/KMT">
                        <br />
                        <img className="picBG" src={logo} width="50%" alt="" />
                      </a>
                      <br />
                      <br />
                    </div>
                  );
              }
            })()}
          </div>
        </Container>
        <br />
        <Link to="/Aktualnosci">Powrót do aktualności</Link>
        <br />
        <br />
        <br />
        <Helmet>
          <title>{data.TITLE}</title>
          <meta name="description" content={data.SUMMARY.slice(0, 100)} />
          <meta property="og:image" content={data.PICTURE} />
          <link
            rel="canonical"
            href={`https://kmtlegal.pl/Aktualnosci/${data.URL}`}
          />
        </Helmet>
      </Box>
    );
  });

  return (
    <div>
      <NavPc />
      <Container sx={{ minHeight: "100vh" }}> {items}</Container>
    </div>
  );
};

export default Post;
