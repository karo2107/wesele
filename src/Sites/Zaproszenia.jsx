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
import NavAdmin from "./NavAdmin"
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
  const [print, setPrint] = useState();
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

  const updateDATA = async () => {
    const ref = doc(db, "goscie", id);
    await setDoc(
      ref,
      {
        ID: id,
        NAME: name,
        OBECNOSC: obecnosc,
        GUEST: guest,
        GUESTOBECNOSC: guestobecnosc,
        FOOD: food,
        FOODGUEST: foodguest,
        EMAIL: email,
        PHONE: phone,
        MSG: msg,
        INVITE: invite,
        TABLE: table,
      },
      { merge: true }
    );

    window.location.reload(false);
  };

  const searchSpace = (event) => {
    let keyword = event.target.value;
    setSearch(keyword)
    ;
  };
  const deleteDATA = async () => {
    await deleteDoc(doc(db, "goscie", id));
    window.location.reload(false);
  };

  const getTargetElement = () => document.getElementById(print);
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
            Zmiany zapisane!
          </Alert>
        ) : null}
      </div>
    );
  };
  const downloadPdf = () => {
    generatePDF(getTargetElement, options);
  };

  function Dlpdf({ person }) {
    generatePDF(document.getElementById(person), options);
  }

  const pdfs = info.map((data) => {
    if (data.PRZEDROSTEK == "Dear") {
      return (
        <Container>
          <div id={data.ID}>
            <div className="" title="Zaproszenia">
              <Box sx={{ alignContent: "flex-end", height: "1600px" }}>
                <Typography
                  sx={{
                    fontSize: 80,
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
                  {data.PRZEDROSTEK},
                  <br />
                  {data.INVITE}
                </Typography>{" "}
                <img width="90%" src={page1ang}></img>
              </Box>
            </div>

            <div className="a5" title="Zaproszenia">
              <br />
              <br />
              <QRCode value={"weselekarolinyikuby.info/" + `${data.ID})`} />
              <img width="84%" src={page2ang} />
            </div>
          </div>
          <hr />
        </Container>
      );
    } else if (data.PRZEDROSTEK == "Drodzy") {
      return (
        <Container>
          <div id={data.ID}>
            <div className="" title="Zaproszenia">
              <Box sx={{ alignContent: "flex-end", height: "1600px" }}>
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
                  {data.PRZEDROSTEK},
                  <br />
                  {data.INVITE}
                  <br />
                </Typography>{" "}
                <img width="90%" src={page1was}></img>
              </Box>
            </div>

            <div className="a5" title="Zaproszenia">
              <br />
              <br />
              <QRCode value={"weselekarolinyikuby.info/" + `${data.ID})`} />
              <img width="84%" src={page2} />
            </div>
          </div>
          <hr />
        </Container>
      );
    } else if (data.GUEST == "brak") {
      return (
        <Container>
          <div id={data.ID}>
            <div className="" title="Zaproszenia">
              <Box sx={{ alignContent: "flex-end", height: "1600px" }}>
                <Typography
                  sx={{
                    fontSize: 80,
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
                  {data.PRZEDROSTEK},
                  <br />
                  {data.INVITE}
                </Typography>{" "}
                <img width="90%" src={page1ciebez}></img>
              </Box>
            </div>

            <div className="a5" title="Zaproszenia">
              <br />
              <br />
              <QRCode value={"weselekarolinyikuby.info/" + `${data.ID})`} />
              <img width="84%" src={page2} />
            </div>
          </div>
          <hr />
        </Container>
      );
    } else {
      return (
        <Container>
          <div id={data.ID}>
            <div className="" title="Zaproszenia">
              <Box sx={{ alignContent: "flex-end", height: "1600px" }}>
                <Typography
                  sx={{
                    fontSize: 80,
                    fontStyle: "",
                    fontWeight: 400,
                    letterSpacing: 12,
                  }}
                  // fontFamily='"Great Vibes"'
                  fontFamily="Whisper"
                  // variant="h2"
                  align="center"
                >
                  {data.PRZEDROSTEK},
                  <br />
                  {data.INVITE}
                  {/* <br/>
              {data.PRZEDROSTEK},
              <br />
              {data.NAME}
              <br />
              {data.GUEST}
              <br/> */}
                </Typography>{" "}
                <img width="90%" src={page1cie}></img>
              </Box>
            </div>

            <div className="a5" title="Zaproszenia">
              <br />
              <br />
              <QRCode value={"weselekarolinyikuby.info/" + `${data.ID})`} />
              <img width="84%" src={page2} />
            </div>
          </div>
          <hr />
        </Container>
      );
    }
  });
const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const items = info
  .filter((data) => {
    if (search == null) return data;
    else if (
      data.NAME.toLowerCase().includes(search.toLowerCase()) ||
      data.GUEST
        .toLowerCase()
        .includes(search.toLowerCase()) 
   
    ) {
      return data;
    }
  })
  .map((data) => {
    return (
      <Grid container>
    <Button onClick={(e) => setPrint(data.ID)}> load PDF</Button> <br />
          <Button onClick={downloadPdf}> Download PDF</Button> <br />
         <Grid item xs={12} sm={12} md={5}>
          <Typography align="left">
            gość: <br />
            <b>{data.NAME}</b>
          </Typography>
          <br />
          <Typography align="left">będzie: {data.OBECNOSC}</Typography>
          <br />
          <Typography align="left">dieta: {data.FOOD}</Typography>
        </Grid> 

         <Grid item xs={12} sm={12} md={2}>
          <Typography align="left">
            osoba towarzysząca:
            <br /> <b>{data.GUEST}</b>
          </Typography>
          <br />
          <Typography align="left">będzie: {data.GUESTOBECNOSC}</Typography>
          <br />
          <Typography align="left">dieta: {data.FOODGUEST}</Typography>
        </Grid> 

        <Grid item xs={12} sm={12} md={2}>
          <Typography align="left">email: {data.EMAIL}</Typography>
          <br />
          <Typography align="left">telefon: {data.PHONE}</Typography>
          <br />
          <Typography align="left">wiadomość: {data.MSG}</Typography>
        </Grid> 
        <Grid item xs={12} sm={12} md={12}>
          <Typography align="center">
            Zaproszenie: {data.PRZEDROSTEK}, {data.INVITE}
          </Typography>
          <hr />
        </Grid>
      </Grid>

    
    );
  });
  if (loggedin == "Sylwester2024") {
    return (
      <Box sx={{ justifyContent: 'center', alignItems: 'center'  }}>
        <div>
        <NavAdmin/>
          <div>Ilosc Gosci: {2 * info.length - 7}</div>
         
          <hr />
        </div>
        <input
                className="input"
                type="text"
                placeholder="Wyszukaj"
                onChange={(e) => searchSpace(e)}
              />
              <br/><br/>
        <Box sx={{ justifyContent: 'center', alignItems: 'center'  }}>
        
          {items}
    </Box>
        {pdfs}
      </Box>
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
