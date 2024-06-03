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
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";
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
  const [tables, setTables] = useState();
  const [table, setTable] = useState();

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
      .orderBy("TABLE", "desc")
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
        TABLE:table
      },
      { merge: true }
    );

    window.location.reload(false);
  };

  const createDATA = async () => {
    const ref = doc(db, "weddingdata", id);
    await setDoc(ref, {
      ID: id,
      NAME: name,
    
    });
    window.location.reload(false);
  };
  const deleteDATA = async () => {
    await deleteDoc(doc(db, "goscie", id));
    window.location.reload(false);
  };

  const getTargetElement = () => document.getElementById(print);

  const downloadPdf = () => {
    generatePDF(getTargetElement, options);
  };

  function Dlpdf({ person }) {
    generatePDF(document.getElementById(person), options);
  }
 
  var res = info.sort((a, b) => b.age-a.age)

  
 
  const notassigned = info.map(
    (data) => {
     
      return (
        <div id={data.ID}>
          <Card variant="outlined">
            <Typography component="h5" variant="h5" align="center">
              {data.NAME},{data.GUEST}
            </Typography>{" "}
            <FormControl fullWidth>
              <InputLabel id={data.ID}>Stół nr {data.TABLE}</InputLabel>
              <Select
              onClick={(e) => setId(data.ID)}
                labelId={data.ID}
                id={data.ID}
                //value={}
                label="Przydziel"
                //onChange={handleChange}
              >
                <MenuItem onClick={(e) => setTable(1)} value={1}>1</MenuItem>
                <MenuItem onClick={(e) => setTable(2) } value={2}>2</MenuItem>
                <MenuItem onClick={(e) => setTable(3) } value={3}>3</MenuItem>
                <MenuItem onClick={(e) => setTable(4)} value={4}>4</MenuItem>
                <MenuItem onClick={(e) => setTable(5) } value={5}>5</MenuItem>
                <MenuItem onClick={(e) => setTable(6) } value={6}>6</MenuItem>
                <MenuItem onClick={(e) => setTable(7)} value={7}>7</MenuItem>
                <MenuItem onClick={(e) => setTable(8) } value={8}>8</MenuItem>
                <MenuItem onClick={(e) => setTable(9) } value={9}>9</MenuItem>
                <MenuItem onClick={(e) => setTable(10)} value={10}>10</MenuItem>
                <MenuItem onClick={(e) => setTable(11) } value={11}>11</MenuItem>
                <MenuItem onClick={(e) => setTable(12) } value={12}>12</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={(e) => updateDATA(data.ID)}>
                Zapisz
            </Button>
          </Card>
          <br />
        </div>
      );
    }
    //   }
  );
  {
  }
  if (loggedin == "Sylwester2024") {
    return (
      <Container>
        <Grid
          container
          //   spacing={0}
          //   direction="column"
          //   alignItems="center"
          //   justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid xs={12} md={6}>
            <Grid
              container
              spacing={2}
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}
            >
              {/* <div>Ilosc Gosci: {2 * info.length - 7}</div> */}
              <Typography component="h4" variant="h4" align="center">
                <br />
                <br />
                Lista Gości
                <br />
                <br />
              </Typography>
              <Box sx={{ maxWidth: "md" }}>
                <Card variant="outlined">{notassigned}</Card>
              </Box>
            </Grid>
          </Grid>
          <Grid xs={12} md={6}>
            <Grid
              container
              spacing={4}
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}
            >
              <Typography component="h4" variant="h4" align="center">
                Lista stolików
                <br />
                <br />
         
             </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
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
