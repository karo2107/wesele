import db from "../firebase.config";
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/database";
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  collectionRef,
} from "firebase/firestore";
import QRCode from "react-qr-code";
import generatePDF, { Options, Resolution } from "react-to-pdf";
import page1cie from "../GraphicAssets/page1cie.svg";
import page1ciebez from "../GraphicAssets/page1bez.svg";
import page1was from "../GraphicAssets/page1was.svg";
import page2 from "../GraphicAssets/page2.svg";
import page1ang from "../GraphicAssets/page1you.svg";
import page2ang from "../GraphicAssets/4ang.png";
import { VerticalAlignCenter } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import NavAdmin from "./NavAdmin";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Write = () => {
  const [info, setInfo] = useState([]);
  const [name, setName] = React.useState("");
  const [obecnosc, setObecnosc] = React.useState("");
  const [guestobecnosc, setGuestobecnosc] = React.useState("");
  const [guest, setGuest] = React.useState("");
  const [food, setFood] = React.useState("");
  const [foodguest, setFoodguest] = React.useState("");
  const [invite, setInvite] = React.useState("");
  const [id, setId] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [przedrostek, setPrzedrostek] = React.useState("");
  // const [loggedin, setLoggedin] = useState();
  const [pass, setPass] = useState();
  const [print, setPrint] = useState('list');
  const [guests, setGuests] = useState();
  const [table, setTable] = useState();
  const [wyslanoWiadomosc, setwyslanoWiadomosc] = React.useState(false);
  const [obecnosctowarzysza, setObecnosctowarzysza] = React.useState(false);
  const [search, setSearch] = useState();
  const options = {
    filename: print,
    resolution: 3,
    page: {
      // margin: 20,
      format: "A5",
    },
  };

  const login = () => {
    localStorage.setItem("pass", pass);
    window.location.reload(false);
  };
  let loggedin = localStorage.getItem("pass");
  const Fetchdata = async () => {
    await db
      .collection("goscie")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };
  useEffect(() => {
    setTimeout(() => {
      Fetchdata();
    }, 1); //miliseconds
  }, []);

  const getTargetElement = () => document.getElementById(print);
  const downloadPdf = () => {
    generatePDF(getTargetElement, options);
  };
  const pdfs = info.map((data) => {
    if (data.OBECNOSC=="Tak")
    return (<div className="winietki">
      <Grid  container spacing={0}>
         <Grid item xs={6}>
        <Typography
          sx={{
            fontSize: 83,
            fontStyle: "oblique",
            fontWeight: 50,
            letterSpacing: 6,
            // color: "grey",
          }}
          // fontFamily='"Great Vibes"'
          fontFamily="Whisper"
          // variant="h2"
          align="center"
        >  <hr/><br /> <br />
          {data.NAME}
          <br />
        </Typography>
        </Grid>
         <Grid item xs={6}>
        <Typography
          sx={{
            fontSize: 83,
            fontStyle: "oblique",
            fontWeight: 50,
            letterSpacing: 6,
            // color: "grey",
          }}
          // fontFamily='"Great Vibes"'
          fontFamily="Whisper"
          // variant="h2"
          align="center"
        > 
          <hr/> <br /> <br />
          {data.GUEST}
          <br />
        </Typography>
        </Grid>
        <br/> <br/> <br/>
        <hr/>
      </Grid></div>
    );
  });
  const [expanded, setExpanded] = React.useState(false);

  if (loggedin == "Sylwester2024") {
    return (
      <div>
        {/* <Box sx={{ justifyContent: "center", alignItems: "center" }}>
          <div>
            <NavAdmin />

            <hr />
          </div>
          <Button onClick={downloadPdf}> Download PDF</Button> <br />
        </Box> */}
        <div id="list">{pdfs}</div>
      </div>
    );
  } else
    return (
      <Container>
        <Card>
          <input
            type="password"
            placeholder="haslo"
            onChange={(e) => setPass(e.target.value)}
          />
          <Button className="red" onClick={login}>
            Zaloguj
          </Button>
        </Card>
      </Container>
    );
};

export default Write;
