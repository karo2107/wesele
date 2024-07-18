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
import Snackbar from '@mui/material/Snackbar';

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
  const [open, setOpen] = useState(false);
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
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      Fetchdata();
    }, 1); //miliseconds
  }, []);

  const updateDATA = async (a, b) => {
    
    const ref = doc(db, "goscie", a);
    await updateDoc(ref, {
      SENT: b,
    });
    console.log(ref, a, b);
    setOpen(true);
  };

  // async function Wyslano(props) {
  //   let ref = doc(db, "goscie",  props);
  //   await updateDoc(ref, {
  //     SENT: "",
  //   });
  //   console.log(ref, id, sent);
  //   // window.location.reload(true);
  // };
  

  const wreczono = info
    .filter((data) => {
      if (data.SENT == "Wręczono zaproszenie") return data;
    })
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
        <Card sx={{ m: 0.5 }} variant="outlined">
          <Typography color="green" align="left">
            {data.NAME + ", osoba towarzysząca: " + data.GUEST}
            <br />
            {data.SENT}
          </Typography>
          <Button variant="outlined" size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value," ")} >
            Nie wręczono zaproszenia 
          </Button>
          <Button variant="outlined" size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value,"Błędne zaproszenie")} >
          Błędne zaproszenie
          </Button>
         
        </Card>
      );
    });

    const searchSpace = (event) => {
      let keyword = event.target.value;
      setSearch(keyword)
      ;
    };

    const bledne = info
    .filter((data) => {
      if (data.SENT == "Błędne zaproszenie") return data;
    })
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
        <Card sx={{ m: 4 }} variant="">
          <Typography color="blue" align="left">
            {data.NAME + ", osoba towarzysząca: " + data.GUEST}
            <br />
            {data.SENT}
          </Typography>

          <Button variant="outlined" size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value,"Wręczono zaproszenie")} >
            Wręczono zaproszenie 
          </Button>
          <Button variant="outlined" size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value,"Błędne zaproszenie")} >
          Błędne zaproszenie
          </Button>
          <Button variant="outlined" size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value,"Nie wydrukowano")} >
          Nie wydrukowano
          </Button>
          <Button variant="outlined" size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value,"Nie wręczono")} >
          Nie wręczono
          </Button>
         
        
        </Card>
      );
    });
    
  const niewreczono = info
    .filter((data) => {
      if (data.SENT !== "Wręczono zaproszenie") return data;
    })
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
        <Card sx={{ m: 4 }} variant="">
          <Typography color="red" align="left">
            {data.NAME + ", osoba towarzysząca: " + data.GUEST}
            <br />
            {data.SENT}
          </Typography>

          <Button variant="outlined" size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value,"Wręczono zaproszenie")} >
            Wręczono zaproszenie 
          </Button>
          <Button variant="outlined" size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value,"Błędne zaproszenie")} >
          Błędne zaproszenie
          </Button>
          <Button variant="outlined" size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value,"Nie wydrukowano")} >
          Nie wydrukowano
          </Button>
          <Button variant="outlined" size="small"  value={data.ID} onClick={(e) =>updateDATA(e.target.value,"Nie wręczono")} >
          Nie wręczono
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
  autoHideDuration={2000}
  onClose={handleClose}
  
>
<Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
        Wprowadzono zmiany, będą one widzoczne po odświerzeniu strony
        </Alert>
        </Snackbar>
       
          {" "}
          Liczba wręczonych zaproszeń: {wreczono.length}
          <br />
          Liczba niewręczonych zaproszeń: {niewreczono.length}
          <hr />
        </div>
        <input
                className="input"
                type="text"
                placeholder="Wyszukaj"
                onChange={(e) => searchSpace(e)}
              />
              <br/><br/><br/>
               <Box sx={{ maxWidth: "sm" }} display="block" m="auto">
                 Błedne zaproszenia
          {bledne}
        </Box>
        <Box sx={{ maxWidth: "sm" }} display="block" m="auto">
        Niewręczone zaproszenia
          {niewreczono}
        </Box>
        <Box sx={{ maxWidth: "sm" }} display="block" m="auto">
        Wręczone zaproszenia
          {wreczono}
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
