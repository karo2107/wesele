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
import CloseIcon from "@mui/icons-material/Close";
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
import NavAdmin from "./NavAdmin";
import Snackbar from "@mui/material/Snackbar";




const Write = () => {
  const [info, setInfo] = useState([]);
  const [name, setName] = React.useState("");
const [downloadData, setdownloadData] = useState([]);
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

  const [currentOBECNOSC, setCurrentOBECNOSC] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState();
  const [obecnosc, setObecnosc] = useState();
  const [guestobecnosc, setGuestobecnosc] = useState();
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

  

  const login = () => {
    localStorage.setItem("pass", pass);
    window.location.reload(false);
  };
  let loggedin = localStorage.getItem("pass");
  const Fetchdata = async () => {
    await db
      .collection("goscie")
      .orderBy("OBECNOSC")
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
  const searchSpace = (event) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };
  useEffect(() => {
    setTimeout(() => {
      Fetchdata();
    }, 1); //miliseconds
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const updateDATA = async (a, b) => {
    const ref = doc(db, "goscie", a);
    await updateDoc(ref, {
      OBECNOSC: b,
    });
    console.log(ref, a, b);
    setOpen(true);
  };
  const updateDATAGuest = async (a, b) => {
    const ref = doc(db, "goscie", a);
    await updateDoc(ref, {
      GUESTOBECNOSC: b,
    });
    console.log(ref, a, b);
    setOpen(true);
  };
  const download = info
  .map((data) => {
    return (
<div>
   
gość;{data.NAME};{data.OBECNOSC}
<br/>
osoba towarzysząca;{data.GUESTNAME};{data.GUESTOBECNOSC}
<br/>
      
</div>
  )});

  const items = info

    .filter((data) => {
      if (search == null) return data;
      else if (
        data.NAME.toLowerCase().includes(search.toLowerCase()) ||
        data.GUEST.toLowerCase().includes(search.toLowerCase())
      ) {
        return data;
      }
    })
    .map((data) => {
      return (
        <Card sx={{ m: 0.5 }} variant="outlined">
          <Typography color="" align="left">
            {data.NAME}
            <br />
            <br />
            Obecnosc: {data.OBECNOSC}
          </Typography>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATA(e.target.value, "Tak")}
          >
            Tak
          </Button>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATA(e.target.value, "Nie")}
          >
            Nie
          </Button>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATA(e.target.value, "Nie wiem")}
          >
            Nie wiem
          </Button>
          <br />
          <Typography color="" align="left">
            {data.GUEST}
            <br />
            <br />
            Obecnosc: {data.GUESTOBECNOSC}
          </Typography>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATAGuest(e.target.value, "Tak")}
          >
            Tak
          </Button>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATAGuest(e.target.value, "Nie")}
          >
            Nie
          </Button>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATAGuest(e.target.value, "Nie wiem")}
          >
            Nie wiem
          </Button>
        </Card>
      );
    });

  const itemstoshow = info

    .filter((data) => {
      if (data.OBECNOSC == currentOBECNOSC) return data;
    })
    .map((data, key) => {
      return (
        <Card key={key} sx={{ m: 3 }} variant="">
          Nr : {key + 1}
          <Typography color="" align="left">
            {data.NAME}
            <br />
            <br />
            Obecnosc: {data.OBECNOSC}
          </Typography>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATA(e.target.value, "Tak")}
          >
            Tak
          </Button>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATA(e.target.value, "Nie")}
          >
            Nie
          </Button>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATA(e.target.value, "Nie wiem")}
          >
            Nie wiem
          </Button>
          <br />
          <Typography color="" align="left">
            {data.GUEST}
            <br />
            <br />
            Obecnosc: {data.GUESTOBECNOSC}
          </Typography>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATAGuest(e.target.value, "Tak")}
          >
            Tak
          </Button>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATAGuest(e.target.value, "Nie")}
          >
            Nie
          </Button>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            value={data.ID}
            onClick={(e) => updateDATAGuest(e.target.value, "Nie wiem")}
          >
            Nie wiem
          </Button>
        </Card>
      );
    });
  if (loggedin == "Sylwester2024") {
    return (
      <div>
        <NavAdmin />
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
              sx={{ width: "100%" }}
            >
              Wprowadzono zmiany!
            </Alert>
          </Snackbar>
          <hr />
          Wybierz obecnosc do podglądu:
          <br />
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            onClick={(e) => setCurrentOBECNOSC("Tak")}
          >
            Tak
          </Button>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            onClick={(e) => setCurrentOBECNOSC("Nie")}
          >
            Nie
          </Button>
          <Button
            variant="outlined"
            sx={{ m: 0.5 }}
            size="small"
            onClick={(e) => setCurrentOBECNOSC("Nie wiem")}
          >
            Nie wiem
          </Button>
          <hr />
        </div>
        <Box bgcolor="" sx={{ maxWidth: "lg" }} display="block" m="auto">
          <Card>
            <Typography
              align="justify"
              sx={{ fontStyle: "italic", color: "" }}
              component="h6"
              variant="h6"
            >
              Obecnosc: {currentOBECNOSC}
            </Typography>
          </Card>
          {itemstoshow}
        </Box>
        <hr />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        Lista wszystkich gości
        <br />
        <input
          className="input"
          type="text"
          placeholder="Wyszukaj"
          onChange={(e) => searchSpace(e)}
        />
        <Box sx={{ maxWidth: "sm" }} display="block" m="auto">
          {items}
        </Box>
        <div>
      {download}
    
        </div>
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
