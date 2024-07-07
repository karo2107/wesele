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
import NavAdmin from "./NavAdmin";
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
  const [pass, setPass] = useState([]);
  const [info, setInfo] = useState([]);
  const [task, setTask] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [importance, setImportance] = React.useState("");
  const [uid, setUid] = React.useState("");
  const [search, setSearch] = React.useState("");
  const login = () => {
    localStorage.setItem("pass", pass);
    window.location.reload(false);
  };
  let loggedin = localStorage.getItem("pass");

  const Fetchdata = async () => {
    await db
      .collection("todo")
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

  const createDATA = async () => {
    const ref = doc(db, "todo", task);
    await setDoc(ref, {
      DESCRIPTION: description,
      IMPORTANCE: importance,
      TASK: task,
    });
    window.location.reload(false);
  };
  const deleteDATA = async (uid) => {
    await deleteDoc(doc(db, "todo", uid));
    window.location.reload(false);
  };
  const updateDATA = async (a) => {
    
    const ref = doc(db, "todo", a);
    await updateDoc(ref, {
      DESCRIPTION: description,
     
    });
    window.location.reload(false);
   
    
  };

  const searchSpace = (event) => {
    let keyword = event.target.value;
    setSearch(keyword)
    ;
  };

  const items = info.filter((data) => {
    if (search == null) return data;
    else if (
      data.TASK.toLowerCase().includes(search.toLowerCase()) ||
      data.DESCRIPTION
        .toLowerCase()
        .includes(search.toLowerCase()) 
   
    ) {
      return data;
    }
  })
  
  .map((data) => {
    return (
      <Card sx={{ display: 'flex', m: 2 }} variant="outlined">
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography 
        component="h6"
        
        color="text.secondary">
         
         
          
          {"Zadanie :" + `  ${data.TASK}`}
          <br />
          {"Priorytet :" + `  ${data.IMPORTANCE}`}
          <TextField
            fullWidth
            multiline
          rows={4}

            variant="standard"
            placeholder={"Opis :" + `  ${data.DESCRIPTION}`}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br /> 
           </Typography>
           </CardContent>
          
        
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        <Button variant="outlined" value={data.TASK} onClick={(e) => deleteDATA(e.target.value)}>
          Usuń zadanie
        </Button>
        
        <br/>
        <Button variant="outlined" value={data.TASK} onClick={(e) => updateDATA(e.target.value)}>
          Zapisz zmiany
        </Button>
        </Box>
      </Card>
    );
  });
  if (loggedin == "Sylwester2024") {
    return (
      <div>
        <NavAdmin />
        <div>
          <Card>
            <h5>Dodaj zadanie:</h5>

            <input
              placeholder="zadanie"
              onChange={(e) => setTask(e.target.value)}
            />
            <input
              placeholder="detale"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              placeholder="priotytet"
              onChange={(e) => setImportance(e.target.value)}
            />
            <Button className="red" onClick={createDATA}>
              Dodaj
            </Button>
          </Card>
          <hr />
        </div>
        <div>
          Wyszukaj:
          <input
               
                type="text"
                placeholder="Wyszukaj "
                onChange={(e) => searchSpace(e)}
              />
        </div>
        <Box sx={{ maxWidth: "sm" }} display="block" m="auto">
          {items}
        </Box>
        <br/> <br/> <br/>
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
