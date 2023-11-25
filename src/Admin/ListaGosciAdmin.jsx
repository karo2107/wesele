import db from "../firebase.config";
import React, { useState, useEffect } from "react";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/database";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import NavPc from "../navPc";
import AOS from "aos";
import "aos/dist/aos.css";

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

const ListaGosciAdmin = () => {
  const [info, setInfo] = useState([]);
  const [date, setDate] = useState("");


  const [summary, setSummary] = useState("");
  const [author, setAuthor] = useState("");
  const [name, setName] = useState("");
  const [guest, setGuest] = useState("");
  const [url, setUrl] = useState("");
  const [specjalizacja, setSpecjalizacja] = useState("");
  // const [loggedin, setLoggedin] = useState();
  const [pass, setPass] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  //const handleClose = () => setTitle(-1);
  const [art, setArt] = useState();
  const login = () => {
    localStorage.setItem("pass", pass);
    window.location.reload(false);
  };
  let loggedin = localStorage.getItem("pass");
  // const Fetchdata = async () => {
  //   await db
  //     .collection("wesela")
  //     .get()
  //     .then((querySnapshot) => {
  //       // Loop through the data and store
  //       // it in array to display
  //       querySnapshot.forEach((element) => {
  //         var data = element.data();
  //         setInfo((arr) => [...arr, data]);
  //       });
  //     });
  // };
  useEffect(() => {
    const Fetchdata = async () => {
      await db
        .collection("wesela")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            var data = element.data();
            setInfo((arr) => [...arr, data]);
            setArt(info.length + 1);
          });
        });
    };
    Fetchdata();
    AOS.init({
      duration: 2000,
    });
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     Fetchdata();
  //   }, 1);
  // }, []);

  // const updateDATA = async () => {
  //   const ref = doc(db, "wesela", url);
  //   await setDoc(
  //     ref,
  //     {
  //       TITLE: title,
  //       AUTHOR: author,
  //       DATE: date,
  //       P1: p1,
  //       P2: p2,
  //       P3: p3,
  //       P4: p4,
  //       P5: p5,
  //       PICTURE: picture,
  //       SPECJALIZACJA: specjalizacja,
  //       SUMMARY: summary,
  //       URL: url
  //     },
  //     { merge: true }
  //   );

  //   window.location.reload(false);
  // };

  const createDATA = async () => {
    const ref = doc(db, "wesela", url);
    await setDoc(ref, {
      NAME: name,
      AUTHOR: author,
      DATE: date,

      URL: url,
    });
    window.location.reload(false);
  };
  const deleteDATA = async () => {
    await deleteDoc(doc(db, "wesela", url));
    window.location.reload(false);
  };

  const items = info.map((data) => {
    return (
      <div>
        <Grid
          data-aos="fade-down"
          sx={{
            my: 5,
            display: {
              xs: "block",
              sm: "block",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
          container
          spacing={5}
          alignItems=""
        >
          <Grid item xs={0} md={0} lg={2} />
          <Grid item key={data.NAME} xs={12} md={3} lg={3}>
            {" "}
            <Typography
              align="justify"
              id={data.data.NAME}
              variant="h4"
              component="h1"
            >
              {data.data.NAME}
            </Typography>
          </Grid>
          <Grid sx={{ p: 1 }} item key={data.GUEST} xs={12} md={9} lg={5}>
            <Typography
              align="justify"
              id={data.GUEST}
              variant="h4"
              component="h1"
            >
              {data.GUEST}
            </Typography>
            <Typography
              align="justify"
              id={data.NAME}
              variant="p"
              component="h4"
            >
              Zaproszenie:
              <a href="/Specjalizacje{data.Name}"> </a>
            </Typography>
          </Grid>
          <Grid item xs={0} md={0} lg={2} />
        </Grid>
            <Button className="red" onClick={deleteDATA}>
              Usun - dac guzik o usuwania
            </Button>
            <Button className="red" onClick={deleteDATA}>
              zmiany - wprowadz zmiany
            </Button>
         
        
        <hr />
      </div>
    );
  });
  if (loggedin == "KMT2023") {
    return (
      <div>
 

        <div>
          <Card>
            <h5>
              <br /> 1. instrukcje dasd asd asd asdasd asdasd asdas
              <br />
             
              Dodaj nowego gościa:
        
            </h5>
            <input
              placeholder="Imię i nazwisko"
              onChange={(e) => setName(e.target.value)}
            />
            <br />{" "}
            
            <Button className="red" onClick={createDATA}>
              Dodaj
            </Button>
          </Card>
          <hr />
        </div>

       
        {items}
      </div>
    );
  } else
    return (
      <div>
        <NavPc />
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
      </div>
    );
};

export default ListaGosciAdmin;
