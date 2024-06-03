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

  const createDATA = async () => {
    const ref = doc(db, "goscie", id);
    await setDoc(ref, {
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
      PRZEDROSTEK: przedrostek,
      INVITE: invite,
      TABLE: "",
    });
    window.location.reload(false);
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

  const items = info.map((data) => {
    return (
      <Grid container>
        <Card 
        // sx={{ maxWidth: 345 }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {data.TABLE}
              </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <Button>tel</Button>
            //     <Button>email</Button>
            //   </IconButton>
            // }
            title={data.NAME}
            subheader={data.GUEST}
          />
          <CardMedia>
            {/* // component="img"
        // height="194"
        // image="/static/images/cards/paella.jpg"
        // alt="Paella dish"
      /> */}
            {/* <QRCode value={"weselekarolinyikuby.info/" + `${data.ID})`} /> */}
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <ul>
                <li>
                  Obecność - {data.NAME}: {data.OBECNOSC}
                </li>
                <li>
                  Obecność - {data.GUEST}: {data.GUESTOBECNOSC}
                </li>
                <li>
                  Preferencje dietetyczne - {data.NAME}: {data.FOOD}
                </li>
                <li>
                  Preferencje dietetyczne - {data.GUEST}: {data.FOODGUEST}
                </li>
                <li>
                  Wiadomość - {data.GUEST}: {data.FOODGUEST}
                </li>
              </ul>
          
          <Button onClick={(e) => setPrint(data.ID)}> load PDF</Button> <br />
          <Button onClick={downloadPdf}> Download PDF</Button> <br />
          <IconButton href={"tel:"+{phone}} aria-label="phone">tel</IconButton>
            <br />
            <IconButton href={"mailto:"+{email}} aria-label="e-mail">e-mail</IconButton>
            <br />
     
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            
            <ExpandMore
              expand={ data.ID == expanded}
              onClick={(e) => {
                setExpanded(data.ID);
                setId(data.ID);
                setName(data.NAME);
                setGuest(data.GUEST);
                setFoodguest(data.FOODGUEST);
                setFood(data.FOOD);
                setMsg(data.MSG);
                setPhone(data.PHONE);
                setEmail(data.EMAIL);
                setTable(data.TABLE);
              }}
              aria-expanded={expanded}
              aria-label="show more"
            >
              Wprowadz zmiany
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={ data.ID == expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Grid item xs={12} sm={12} md={12} lg={12} elevation={6}>
                <div>
                  <h2>Wprowadz zmiany i zapisz.</h2>
                  <br />
                  <br />
                  Imię i nazwisko gościa
                  <TextField
                    fullWidth
                    placeholder={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br />
                  <br />
                  Imię i nazwisko osoby towarzyszącej
                  <TextField
                    fullWidth
                    placeholder={guest}
                    onChange={(e) => setGuest(e.target.value)}
                  />
                  <br />
                  <br />
                  przedrotek (np. Drogi, Droga, Drodzy)
                  <TextField
                    fullWidth
                    placeholder={przedrostek}
                    onChange={(e) => setPrzedrostek(e.target.value)}
                  />
                  <br />
                  <br />
                  Zwrot na zaproszeniu (np. Agato, Agatko, Agato Kowalska)
                  <TextField
                    fullWidth
                    placeholder={invite}
                    onChange={(e) => setInvite(e.target.value)}
                  />
                  <br />
                  <br />
                  Obecność:
                  <br />
                  {data.NAME}
                  <Select
                    labelId="Obecność"
                    id="demo-simple-select"
                    placeholder="Tak / nie / jeszcze nie wiem"
                    label="Tak / nie / jeszcze nie wiem"
                    onChange={(e) => setObecnosc(e.target.value)}
                  >
                    <MenuItem value={"Tak"}>Tak</MenuItem>
                    <MenuItem value={"Nie"}>Nie</MenuItem>
                    <MenuItem value={"Nie wiem"}>Nie wiem</MenuItem>
                  </Select>
                  <br />
                  <br />
                  {data.GUEST}
                  <Select
                    labelId="Obecność"
                    id="demo-simple-select"
                    placeholder="Tak / nie / jeszcze nie wiem"
                    label="Tak / nie / jeszcze nie wiem"
                    onChange={(e) => setObecnosctowarzysza(e.target.value)}
                  >
                    <MenuItem value={"Tak"}>Tak</MenuItem>
                    <MenuItem value={"Nie"}>Nie</MenuItem>
                    <MenuItem value={"Nie wiem"}>Nie wiem</MenuItem>
                  </Select>
                  <TextField
                    fullWidth
                    required
                    placeholder={"Preferencje dietetyczne :" + ` ${data.NAME}`}
                    onChange={(e) => setFood(e.target.value)}
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    required
                    placeholder={
                      "Preferencje dietetyczne :" + `  ${data.GUEST}`
                    }
                    onChange={(e) => setFoodguest(e.target.value)}
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    required
                    placeholder=" e-mail"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    required
                    name="phone"
                    placeholder=" numer telefonu"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={4}
                    placeholder="Dodatkowe pytania"
                    onChange={(e) => setMsg(e.target.value)}
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={4}
                    placeholder="Przydziel do stołu"
                    onChange={(e) => setTable(e.target.value)}
                  />
                  <br />
                  <br />
                  <Wyslano />
                  <Wyslano />{" "}
                  <Button
                    variant="outlined"
                    className="red"
                    onClick={updateDATA}
                  >
                    Zapisz zmiany
                  </Button>
                </div>
              </Grid>

              {/* <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography> */}
            </CardContent>
          </Collapse>
        </Card>
        
        {/* <Grid item xs={12} sm={12} md={5}>
          <Typography align="left">
            gość: <br />
            <b>{data.NAME}</b>
          </Typography>
          <br />
          <Typography align="left">będzie: {data.OBECNOSC}</Typography>
          <br />
          <Typography align="left">dieta: {data.FOOD}</Typography>
        </Grid> */}

        {/* <Grid item xs={12} sm={12} md={2}>
          <Typography align="left">
            osoba towarzysząca:
            <br /> <b>{data.GUEST}</b>
          </Typography>
          <br />
          <Typography align="left">będzie: {data.GUESTOBECNOSC}</Typography>
          <br />
          <Typography align="left">dieta: {data.FOODGUEST}</Typography>
        </Grid> */}
{/* 
        <Grid item xs={12} sm={12} md={2}>
          <Typography align="left">email: {data.EMAIL}</Typography>
          <br />
          <Typography align="left">telefon: {data.PHONE}</Typography>
          <br />
          <Typography align="left">wiadomość: {data.MSG}</Typography>
        </Grid> */}
        {/* <Grid item xs={12} sm={12} md={12}>
          <Typography align="center">
            Zaproszenie: {data.PRZEDROSTEK}, {data.INVITE}
          </Typography>
          <hr />
        </Grid> */}
      </Grid>

      // <Grid item xs={12} sm={12} md={12} >
      //   <Modal
      //     actions={[
      //       <Button flat modal="close" node="button" waves="green">
      //         Close
      //       </Button>,
      //     ]}
      //     bottomSheet={false}
      //     fixedFooter={false}
      //     header={data.ID}
      //     id={data.ID}
      //     value={data.ID}
      //     open={false}
      //     options={{
      //       dismissible: true,
      //       endingTop: "10%",
      //       inDuration: 250,
      //       onCloseEnd: null,
      //       onCloseStart: null,
      //       onOpenEnd: null,
      //       onOpenStart: null,
      //       opacity: 0.5,
      //       outDuration: 250,
      //       preventScrolling: true,
      //       startingTop: "4%",
      //     }}
      //     trigger={
      //       <Button
      //         value={data.ID}
      //         className="red"
      //         node="button"
      //         onClick={(e) => setId(e.target.value)}
      //       >
      //         <Button
      //           value={data.LOKAL}
      //           className="red"
      //           node="button"
      //           onClick={(e) => {
      //             // setLokal(e.target.value);
      //             // setCena(data.CENA);
      //             // setMetraz(data.METRAZ);
      //             // setPietro(data.PIETRO);
      //             // setDostepnosc(data.DOSTEPNOSC);
      //           }}
      //         >
      //           Edytuj
      //         </Button>
      //       </Button>
      //     }
      //   >

      //     {/* <input
      //       placeholder="METRAZ"
      //       onChange={(e) => setMetraz(e.target.value)}
      //     />

      //     <input
      //       placeholder="PIETRO"
      //       onChange={(e) => setPietro(e.target.value)}
      //     />

      //     <input
      //       placeholder="CENA"
      //       onChange={(e) => setCena(e.target.value)}
      //     />

      //     <input
      //       placeholder="DOSTEPNOSC"
      //       onChange={(e) => setDostepnosc(e.target.value)}
      //     /> */}

      //     <Button onClick={updateDATA}>Zapisz</Button>
      //   </Modal>
      // </Grid>
    );
  });
  if (loggedin == "Sylwester2024") {
    return (
      <Box sx={{ justifyContent: 'center', alignItems: 'center'  }}>
        <div>
          <div>Ilosc Gosci: {2 * info.length - 7}</div>
          <Card>
            <h5>Dodaj nowego gościa:</h5>
            <input
              placeholder="ID - format imie nazwisko bez spacji"
              onChange={(e) => setId(e.target.value)}
            />
            <input
              placeholder="Imie i nazwisko"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Imie i nazwisko osoby towarzyszącej"
              onChange={(e) => setGuest(e.target.value)}
            />
            <input
              placeholder="drogi/droga/drodzy?"
              onChange={(e) => setPrzedrostek(e.target.value)}
            />
            <input
              placeholder="Agato nazwisko"
              onChange={(e) => setInvite(e.target.value)}
            />
            <Button className="red" onClick={createDATA}>
              Dodaj
            </Button>
          </Card>
          <hr />
        </div>
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
