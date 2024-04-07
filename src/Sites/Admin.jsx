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
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import QRCode from "react-qr-code";
import generatePDF, { Options, Resolution } from "react-to-pdf";
import page1cie from "../GraphicAssets/page1cie.svg";
import page1ciebez from "../GraphicAssets/page1ciebez.svg";
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
    const ref = doc(db, "goscie", "ID");
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

  const pdfs = info.map((data) => {
    if(data.PRZEDROSTEK=="Dear"){
    return (
      <Container>
        <div id={data.ID}>
          <div className="" title="Zaproszenia">
          <Box sx={{ alignContent: 'flex-end', height:"1600px" }}>
            <Typography
              sx={{
                fontSize: 80,
                fontStyle: "oblique",
                fontWeight: 50,
                letterSpacing: 6,
                // color: "grey",
              }}
              // fontFamily='"Great Vibes"'
               fontFamily='Whisper'
              // variant="h2"
              align="center"
            >
            
              {data.PRZEDROSTEK},
              <br />
              {data.NAME}
              <br />
              {data.GUEST}
            
            </Typography>{" "}
            <img width="90%" src={page1ang}></img></Box>
          </div>
        
          
        
          <div className="a5" title="Zaproszenia">
          <br /><br/>
            <QRCode value={"weselekarolinyikuby.info/" + `${data.ID})`} />
            <img width="84%" src={page2ang} />
          </div>
        </div>
        <hr />
      </Container>
    );}
    else  if(data.PRZEDROSTEK=="Drodzy"){
      return (
        <Container>
          <div id={data.ID}>
            <div className="" title="Zaproszenia">
            <Box sx={{ alignContent: 'flex-end', height:"1600px" }}>
              <Typography
                sx={{
                  fontSize: 80,
                  fontStyle: "oblique",
                  fontWeight: 50,
                  letterSpacing: 6,
                  // color: "grey",
                }}
                // fontFamily='"Great Vibes"'
                 fontFamily='Whisper'
                // variant="h2"
                align="center"
              >
                
                {data.PRZEDROSTEK},
              <br/>
              {data.INVITE}
              <br/>
              </Typography>{" "}
              <img width="90%" src={page1was}></img>
              </Box>
            </div>
          
            
          
           
            <div className="a5" title="Zaproszenia">
          <br /><br/>
            <QRCode value={"weselekarolinyikuby.info/" + `${data.ID})`} />
            <img width="84%" src={page2} />
            </div>
          </div>
          <hr />
        </Container>
      );}
      else  if(data.GUEST=="bez"){
        return (
          <Container>
            <div id={data.ID}>
              <div className="" title="Zaproszenia">
              <Box sx={{ alignContent: 'flex-end', height:"1600px" }}>
                <Typography
                  sx={{
                    fontSize: 80,
                    fontStyle: "oblique",
                    fontWeight: 50,
                    letterSpacing: 6,
                    // color: "grey",
                  }}
                  // fontFamily='"Great Vibes"'
                   fontFamily='Whisper'
                  // variant="h2"
                  align="center"
                >
                 
                  {data.PRZEDROSTEK},
                <br/>
                {data.INVITE}
                
                </Typography>{" "}
                <img width="90%" src={page1ciebez}></img></Box>
              </div>
            
              
            
             
              <div className="a5" title="Zaproszenia">
            <br /><br/>
              <QRCode value={"weselekarolinyikuby.info/" + `${data.ID})`} />
              <img width="84%" src={page2} />
              </div>
            </div>
            <hr />
          </Container>
        );}

  else { return (
      
      
      <Container>
        <div id={data.ID}>
          <div className="" title="Zaproszenia">
          <Box sx={{ alignContent: 'flex-end', height:"1600px" }}>
            <Typography
              sx={{
                fontSize: 80,
                fontStyle: "",
                fontWeight: 400,
                letterSpacing: 12,
                
              }}
              // fontFamily='"Great Vibes"'
               fontFamily='Whisper'
              // variant="h2"
              align="center"
            >
             
              {data.PRZEDROSTEK},
              <br/>
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
          <br /><br/>
            <QRCode value={"weselekarolinyikuby.info/" + `${data.ID})`} />
            <img width="84%" src={page2} />
          </div>
        </div>
        <hr />
      </Container>
    );}
  });
  {
    /* <Button onClick={
            () => 
            {
            setPrint(data.ID);
            downloadPdf();
          }
        }
          
            >  Download PDF</Button> */
  }
  const items = info.map((data) => {
    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={3}>
          {/* <QRCode value={"weselekarolinyikuby.info/" + `${data.ID})`} /> */}
          <Button onClick={(e) => setPrint(data.ID)}> load PDF</Button>
          <Button onClick={downloadPdf}> Download PDF</Button>
          {/* <Button
            onClick={() => {
              Dlpdf(`${data.ID})`)
            }}
          >
            Say Hello and Increment
          </Button> */}
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Typography align="left">gość: <br/><b>{data.NAME}</b></Typography>
          <br />
          <Typography align="left">będzie: {data.OBECNOSC}</Typography>
          <br />
          <Typography align="left">dieta: {data.FOOD}</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={2}>
          <Typography align="left">osoba towarzysząca:<br/> <b>{data.GUEST}</b></Typography>
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
        <Typography align="center">Zaproszenie: {data.PRZEDROSTEK}, {data.INVITE}</Typography>
          <hr />
        </Grid>
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
      <Container><div>
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
          <hr/>
        </div>
        <Grid item xs={12} sm={12} md={12}>
          {items}
        </Grid>
        {pdfs}
        
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
