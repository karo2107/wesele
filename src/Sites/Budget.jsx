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
import Iframe from 'react-iframe'
import { collection, sum, getAggregateFromServer, } from "@firebase/firestore";

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
  const [pass, setPass] = useState("");
  const [info, setInfo] = useState([]);
  const [details, setDetails] = useState("");
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [paid, setPaid] = React.useState("");
  const [paidtotal, setPaidtotal] = React.useState("");
  const [pricetotal, setPricetotal] = React.useState("");
  const [who, setWho] = React.useState("");
  const [uid, setUid] = React.useState("");
  const [search, setSearch] = React.useState("");
  const login = () => {
    localStorage.setItem("pass", pass);
    window.location.reload(false);
  };
  let loggedin = localStorage.getItem("pass");
 



  if (loggedin == "Sylwester2024") {
    return (
      <div>
        <NavAdmin />
        <div>
          <hr />
        </div>
        <Button  href="https://docs.google.com/spreadsheets/d/1v2VKV27w1M3Efm8giLcweBP63H830jrRMAEm-o75Ofk/edit?usp=sharing"><b>Edycja</b></Button>
        <Box sx={{ maxWidth: "sm" }} display="block" m="auto">
        <div justifyContent="center">
        <Iframe url="https://docs.google.com/spreadsheets/d/1v2VKV27w1M3Efm8giLcweBP63H830jrRMAEm-o75Ofk/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
        width="640px"
        height="990px"
        id=""
        className=""
        display="block"
        position="relative"/>
        
        <br/>
      
       <br/>
         
        </div>
        
          
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
