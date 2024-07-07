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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/database";
import {
  doc,
  setDoc,
  updateDoc,
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
import { red, green } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import NavAdmin from "./NavAdmin"
import Snackbar from '@mui/material/Snackbar';
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
  const [sent, setSent] = useState();
  const [guests, setGuests] = useState();
  const [table, setTable] = useState();
  const [obecnosctowarzysza, setObecnosctowarzysza] = React.useState(false);
  const [currentTable, setCurrentTable] = useState("1");
  const [open, setOpen] = useState(false);
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
 
  const login = () => {
    localStorage.setItem("pass", pass);
    window.location.reload(false);
  };
  let loggedin = localStorage.getItem("pass");
  const Fetchdata = async () => {
    await db
      .collection("goscie")
      .orderBy('TABLE')
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
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const updateDATA = async (a, b) => {
    
    const ref = doc(db, "goscie", a);
    await updateDoc(ref, {
      TABLE: b,
    });
    console.log(ref, a, b);
    setOpen(true);
   
    
  };
 

  

  const items = info
    .map((data) => {
      return (
        <Card sx={{ m: 0.5 }} variant="outlined">
          <Typography color="" align="left">
            {data.NAME + ", osoba towarzysząca: " + data.GUEST}<br/>Obecność: {data.OBECNOSC}
            <br />
            Numer stolika: {data.TABLE}
          </Typography>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, "1")} >
          1
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, "2")} >
          2
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, "3")} >
          3
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 4)} >
          4
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 5)} >
          5
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 6)} >
          6
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 7)} >
          7
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 8)} >
          8
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 9)} >
          9
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 10)} >
          10
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 11)} >
          11
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 12)} >
          12
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 13)} >
          13
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 14)} >
          14
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 15)} >
          15
          </Button>
         
        </Card>
      );
    });

    const itemstoshow = info
    .filter((data) => {
      if (data.TABLE == currentTable) return data;
    })
    .map((data) => {
      return (
        <Card sx={{ m: 3 }} variant="">
          <Typography component="h5"
              variant="h5" color="" align="center">
           Gość: {data.NAME + ", osoba towarzysząca: " + data.GUEST} / 
            Obecność: {data.OBECNOSC} / Zmień przydzielony stolik:
            <br />
          
          </Typography>
          
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, "1")} >
          1
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, "2")} >
          2
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, "3")} >
          3
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 4)} >
          4
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 5)} >
          5
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 6)} >
          6
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 7)} >
          7
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 8)} >
          8
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 9)} >
          9
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 10)} >
          10
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 11)} >
          11
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 12)} >
          12
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 13)} >
          13
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 14)} >
          14
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value, 15)} >
          15
          </Button>
        
        </Card>
      );
    });
  if (loggedin == "Sylwester2024") {
    return (
      <div>
        <NavAdmin/>
        <div>
        <Snackbar
  open={open}
  autoHideDuration={1000}
  message="Wprowadzono zmiany"
  onClose={handleClose}
  
>
<Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
         Wprowadzono zmiany!
        </Alert>
        </Snackbar>
          <hr />
          Wybierz stolik do podglądu
          <br/>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"   onClick={(e) =>setCurrentTable(1)} >
          1
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"   onClick={(e) =>setCurrentTable(2)} >
          2
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"   onClick={(e) =>setCurrentTable(3)} >
          3
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"   onClick={(e) =>setCurrentTable(4)} >
          4
          </Button>
          <Button  variant="outlined" sx={{ m: 0.5 }}size="small"   onClick={(e) =>setCurrentTable(5)} >
          5
          </Button>
          <hr />
       
        </div>
        <Box bgcolor="primary.main"   sx={{ maxWidth: "lg"  }} display="block" m="auto">
          <Card>
          <Typography
              align="justify"
              sx={{ fontStyle: "italic", color: "" }}
              component="h6"
              variant="h6"
            >
              Aktulanie wybrany stolik: {currentTable}
             </Typography></Card>
          {itemstoshow}
        </Box>
        <hr />
        Lista wszystkich gości
          <br/>
        <Box sx={{ maxWidth: "sm" }} display="block" m="auto">
          {items}
        </Box>
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
