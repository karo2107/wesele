import db from "../firebase.config";
import React, { useState, useEffect, useLocation } from "react";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/database";
import { doc, setDoc, updateDoc } from "firebase/firestore";
// updateDoc
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bg from "../GraphicAssets/bg1.png";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Nav from "./nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fireworks } from "@fireworks-js/react";
import Line from "../GraphicAssets/line.svg";
import Meat from "../GraphicAssets/Meat.png";
import Vegetables from "../GraphicAssets/Vegetables.png";
import Anwser from "../GraphicAssets/Anwser.png";
import banana from "../GraphicAssets/Banana.svg";
import Alert from "@mui/material/Alert";




const pathname = window.location.pathname;
const splitString = pathname.split("/");
const a = splitString[1];

const Post = () => {
  const [info, setInfo] = useState([]);

  const [obecnosc, setObecnosc] = React.useState("");
  const [obecnosctowarzysza, setObecnosctowarzysza] = React.useState("");
  const [guest, setGuest] = React.useState("");
  const [food, setFood] = React.useState("");
  const [foodguest, setFoodguest] = React.useState("");
  const href = window.location.pathname;
  const output = href.replace("/Zaproszenie/", "");
  const [name, setName] = React.useState("");
  const [guestobecnosc, setGuestobecnosc] = React.useState("");
  const [id, setId] = React.useState("");
  const [invite, setInvite] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [przedrostek, setPrzedrostek] = React.useState("");
  const [wyslanoWiadomosc, setwyslanoWiadomosc] = React.useState(false);

  // const href = window.location.pathname;
  // const output = href.replace("/Zaproszenie/", "");
  // const BGIMG ="https://images.unsplash.com/photo-1515339760107-1952b7a08454?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // const BGIMG =
  //   "https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // const BGIMG ="https://images.unsplash.com/photo-1518627249530-af3cb4a171ae?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const handleChange = (event) => {
    setFood(event.target.value);
  };
  const handleChangeObecnosc = (event) => {
    setObecnosc(event.target.value);
  };
  const handleChangeObecnosctowarzysza = (event) => {
    setObecnosctowarzysza(event.target.value);
  };
  const handleChangeFood = (event) => {
    setFood(event.target.value);
  };
  const handleChangeFoodguest = (event) => {
    setFoodguest(event.target.value);
  };
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
            Wiadomość wysłana!
          </Alert>
        ) : null}
      </div>
    );
  };
  useEffect(() => {
    const Fetchdata = async () => {
      await db
        .collection("goscie")
        .where("ID", "==", a)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            var data = element.data();
            setInfo((arr) => [...arr, data]);
            setGuest(data.GUEST)
          });
        });
    };
    Fetchdata();
    AOS.init({
      duration: 2000,
    });
  }, []);

  const updateDATA = async (e) => {
    e.preventDefault();
    const ref = doc(db, "goscie", a);
    await setDoc(
      ref,
      {
        // ID: id,
        ID: a,
        // NAME: name,
        OBECNOSC: obecnosc,
        GUEST: guest,
        GUESTOBECNOSC: guestobecnosc,
        FOOD: food,
        FOODGUEST: foodguest,
        EMAIL: email,
        PHONE: phone,
       
        MSG: msg,
       
      },
      { merge: true }
    );
    
        setwyslanoWiadomosc(true);
       
    // window.location.reload(false);
  };

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
  const items = info.map((data) => {
    if (data.PRZEDROSTEK == "Drodzy") {
      return (
        <Grid container maxWidth="md" sx={{ mt: 10 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} elevation={1}>
            <CssBaseline />
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#FFFFFFE6",

                minHeight: "100vh",
                maxWidth: "100vw",
              }}
            >
              <Container
                sx={{
                  alignItems: "center",
                  py: 2,
                }}
                component="main"
                maxWidth="md"
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "80vh",
                    marginLeft: 1,
                    marginRight: 1,
                  }}
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  // spacing={{ xs: 1, sm: 2, md: 8, lg: 14 }}
                >
                  <br />
                  <br />
                  <br />
                  <Typography
                    sx={{ fontStyle: "italic" }}
                    component="h1"
                    variant="h2"
                  >
                    {data.INVITE}
                  </Typography>
                  <br />
                  <img src={Line} width="75%" />
                  <br />
                  <Typography
                    sx={{ fontStyle: "italic" }}
                    align="justify"
                    component="h6"
                    variant="h6"
                  >
                    Z wielką radością chcielibyśmy podzielić się z Wami
                    wyjątkowym momentem w naszym życiu.
                    <br />Z tej okazji serdecznie zapraszamy Was na nasze
                    wesele, które odbędzie się w sylwestra 31.12.2024r. o
                    godzinie 15.00 w Gospodzie nad Rabą w Bochni. <br />
                    Będzie to dla nas niezapomniana chwila, którą pragniemy
                    spędzić w gronie najbliższych przyjaciół i rodziny.
                    <br />
                    Prosimy o potwierdzenie obecności do 31.10.2024r.
                    <br />Z niecierpliwością czekamy na wspólne świętowanie!
                    <br />
                    <br />
                    Z serdecznymi pozdrowieniami,
                    <br />
                    Karolina i Kuba
                    <br />
                    <br />
                  </Typography>

                  <Typography component="h1" variant="h5" />
                </Stack>
              </Container>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} elevation={6}>
            <div>
              <h2>Czy możemy liczyć na Twoją obecność?</h2>
              <br />
              <br />
             
              {data.NAME}, czy możemy liczyć na Twoją obecność?
              <Select
                labelId="Czy możemy liczyć na Twoją obecność?"
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
              {data.GUEST}, czy możemy liczyć na Twoją obecność?
              <Select
                labelId="Czy możemy liczyć na Twoją obecność?"
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
                placeholder={"Preferencje dietetyczne :" + `  ${data.GUEST}`}
                onChange={(e) => setFoodguest(e.target.value)}
              />
              <br />
              <br />
              <br />
              <br />
              <TextField
                fullWidth
                required
                placeholder="Twój e-mail"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                name="phone"
                placeholder="Twój numer telefonu"
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                placeholder="Czy masz dodatkowe pytania?"
                onChange={(e) => setMsg(e.target.value)}
              />
              <br />
              <br />
             <Wyslano /><Wyslano /> <Button variant="outlined" className="red" onClick={updateDATA}>
                Wyślij odpowiedz
              </Button>
            </div>
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
      );
    } else if (data.GUEST == "brak") {
      return (
        <Grid container maxWidth="md" sx={{ mt: 10 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} elevation={1}>
            <CssBaseline />
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#FFFFFFE6",

                minHeight: "100vh",
                maxWidth: "100vw",
              }}
            >
              <Container
                sx={{
                  alignItems: "center",
                  py: 2,
                }}
                component="main"
                maxWidth="md"
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "80vh",
                    marginLeft: 1,
                    marginRight: 1,
                  }}
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  // spacing={{ xs: 1, sm: 2, md: 8, lg: 14 }}
                >
                  <br />
                  <br />
                  <br />
                  <Typography
                    sx={{ fontStyle: "italic" }}
                    component="h1"
                    variant="h2"
                  >
                    {data.INVITE}
                  </Typography>
                  <br />
                  <img src={Line} width="75%" />
                  <br />
                  <Typography
                    sx={{ fontStyle: "italic" }}
                    align="justify"
                    component="h6"
                    variant="h6"
                  >
                    Z wielką radością chcielibyśmy podzielić się z Tobą
                    wyjątkowym momentem w naszym życiu.
                    <br />Z tej okazji serdecznie zapraszamy Ciebie na nasze
                    wesele, które odbędzie się w sylwestra 31.12.2024r. o
                    godzinie 15.00 w Gospodzie nad Rabą w Bochni. <br />
                    Będzie to dla nas niezapomniana chwila, którą pragniemy
                    spędzić w gronie najbliższych przyjaciół i rodziny.
                    <br />
                    Prosimy o potwierdzenie obecności do 31.10.2024r.
                    <br />Z niecierpliwością czekamy na wspólne świętowanie!
                    <br />
                    <br />
                    Z serdecznymi pozdrowieniami,
                    <br />
                    Karolina i Kuba
                    <br />
                    <br />
                  </Typography>

                  <Typography component="h1" variant="h5" />
                </Stack>
              </Container>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} elevation={6}>
            <div>
              <h2>Czy możemy liczyć na Twoją obecność?</h2>
              <br />
              <br />
              {/* <TextField
                  fullWidth
                  required
                  placeholder="Tak / nie / jeszcze nie wiem"
                  onChange={(e) => setObecnosc(e.target.value)}
                /> */}
              Czy możemy liczyć na Twoją obecność?
              <Select
                labelId="Czy możemy liczyć na Twoją obecność?"
                id="demo-simple-select"
                
                placeholder="Tak / nie / jeszcze nie wiem"
                label="Czy możemy liczyć na Twoją obecność?"
                onChange={(e) => setObecnosc(e.target.value)}
              >
                <MenuItem value={"Tak"}>Tak</MenuItem>
                <MenuItem value={"Nie"}>Nie</MenuItem>
                <MenuItem value={"Nie wiem"}>Nie wiem</MenuItem>
              </Select>
              <br />
              <br />
              {data.INVITE}
              <TextField
                fullWidth
                required
                placeholder="Twoje preferencje dietetyczne"
                onChange={(e) => setFood(e.target.value)}
              />
              <br />
              <br />
              <br />
              <br />
              <TextField
                fullWidth
                required
                placeholder="Twój e-mail"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                name="phone"
                placeholder="Twój numer telefonu"
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                placeholder="Czy masz dodatkowe pytania?"
                onChange={(e) => setMsg(e.target.value)}
              />
              <br />
              <br />
             <Wyslano /> <Button variant="outlined" className="red" onClick={updateDATA}>
                Wyślij odpowiedz
              </Button>
            </div>
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
      );
    } else if (data.PRZEDROSTEK == "Dear") {
      return (
        <Grid container maxWidth="md" sx={{ mt: 10 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} elevation={1}>
            <CssBaseline />
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#FFFFFFE6",

                minHeight: "100vh",
                maxWidth: "100vw",
              }}
            >
              <Container
                sx={{
                  alignItems: "center",
                  py: 2,
                }}
                component="main"
                maxWidth="md"
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "80vh",
                    marginLeft: 1,
                    marginRight: 1,
                  }}
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  // spacing={{ xs: 1, sm: 2, md: 8, lg: 14 }}
                >
                  <br />
                  <br />
                  <br />
                  <Typography
                    sx={{ fontStyle: "italic" }}
                    component="h1"
                    variant="h2"
                  >
                    {data.INVITE}
                  </Typography>
                  <br />
                  <img src={banana} width="50%" />
                  <br />
                  <Typography
                    sx={{ fontStyle: "italic" }}
                    align="justify"
                    component="h6"
                    variant="h6"
                  >
                    Dear MALAKA <br />
                    With great joy, we would like to share with you our special
                    moment.
                    <br />
                    For this occasion, we warmly invite you to our wedding,
                    which will take place on New Year's Eve, December 31 2024,
                    at 3:00 PM at Gospoda nad Rabą in Bochnia(just outside of
                    Krakow). <br />
                    It will be an unforgettable moment for us, which we wish to
                    spend with our closest friends and family.
                    <br />
                    Please confirm your attendance by October 31, 2024.
                    <br />
                    <br />
                    With warm regards,
                    <br />
                    Karolina i Kuba
                    <br />
                    <br />
                  </Typography>

                  <Typography component="h1" variant="h5" />
                </Stack>
              </Container>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} elevation={6}>
            <div>
              <h2>Can we count on your presence?</h2>
              <br />
              <br />
              {/* <TextField
                  fullWidth
                  required
                  placeholder="Tak / nie / jeszcze nie wiem"
                  onChange={(e) => setObecnosc(e.target.value)}
                /> */}
              Can we count on your presence?
              <Select
                labelId="Can we count on your presence?"
                id="demo-simple-select"
                
                placeholder="yes/no"
                label="Can we count on your presence?"
                onChange={(e) => setObecnosc(e.target.value)}
              >
                <MenuItem value={"Tak"}>Yes</MenuItem>
                <MenuItem value={"Nie"}>No</MenuItem>
                <MenuItem value={"Nie wiem"}>Not sure</MenuItem>
              </Select>
              <br />
              <br />
              <TextField
                fullWidth
                required
                placeholder={"Dietary preferences of :" + ` ${data.NAME}`}
                onChange={(e) => setFood(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                placeholder="Plus one's name"
                defaultValue={data.GUEST}
                onChange={(e) => setGuest(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                placeholder={"Dietary preferences of :" + `  ${guest}`}
                onChange={(e) => setFoodguest(e.target.value)}
              />
              <br />
              <br />
              <br />
              <br />
              <TextField
                fullWidth
                required
                placeholder="Your e-mail"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                name="phone"
                placeholder="Your phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                placeholder="Is there anything you would like to ask us?"
                onChange={(e) => setMsg(e.target.value)}
              />
              <br />
              <br />
              <Wyslano /> <Button variant="outlined" className="red" onClick={updateDATA}>
                Send answer
              </Button>
            </div>
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
      );
    } else {
      return (
        <Grid container maxWidth="md" sx={{ mt: 10 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} elevation={1}>
            <CssBaseline />
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#FFFFFFE6",

                minHeight: "100vh",
                maxWidth: "100vw",
              }}
            >
              <Container
                sx={{
                  alignItems: "center",
                  py: 2,
                }}
                component="main"
                maxWidth="md"
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "80vh",
                    marginLeft: 1,
                    marginRight: 1,
                  }}
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  // spacing={{ xs: 1, sm: 2, md: 8, lg: 14 }}
                >
                  <br />
                  <br />
                  <br />
                  <Typography
                    sx={{ fontStyle: "italic" }}
                    component="h1"
                    variant="h2"
                  >
                    {data.INVITE}
                  </Typography>
                  <br />
                  <img src={Line} width="75%" />
                  <br />
                  <Typography
                    sx={{ fontStyle: "italic" }}
                    align="justify"
                    component="h6"
                    variant="h6"
                  >
                    Z wielką radością chcielibyśmy podzielić się z Tobą
                    wyjątkowym momentem w naszym życiu.
                    <br />Z tej okazji serdecznie zapraszamy Cię, wraz z osobą
                    towarzyszącą, na nasze wesele, które odbędzie się w
                    sylwestra 31.12.2024r. o godzinie 15.00 w Gospodzie nad Rabą
                    w Bochni.
                    <br />
                    Będzie to dla nas niezapomniana chwila, którą pragniemy
                    spędzić w gronie najbliższych przyjaciół i rodziny.
                    <br />
                    Prosimy o potwierdzenie obecności do 31.10.2024r.
                    <br />Z niecierpliwością czekamy na wspólne świętowanie!
                    <br />
                    <br />
                    Z serdecznymi pozdrowieniami,
                    <br />
                    Karolina i Kuba
                    <br />
                    <br />
                  </Typography>

                  <Typography component="h1" variant="h5" />
                </Stack>
              </Container>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} elevation={6}>
            <div>
              <h2>Czy możemy liczyć na Twoją obecność?</h2>
              {data.NAME}, czy możemy liczyć na Twoją obecność?
              <Select
                labelId="Czy możemy liczyć na Twoją obecność?"
                id="demo-simple-select"
                
                placeholder="Tak / nie / jeszcze nie wiem"
                label="Tak / nie / jeszcze nie wiem"
                onChange={(e) => setObecnosc(e.target.value)}
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
                placeholder="Imię i nazwisko osoby towarzyszącej"
                defaultValue={data.GUEST}
                onChange={(e) => setGuest(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                placeholder={"Preferencje dietetyczne osoby towarzyszącej"}
                onChange={(e) => setFoodguest(e.target.value)}
              />
              <br />
              <br />
              <br />
              <br />
              <TextField
                fullWidth
                required
                placeholder="Twój e-mail"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                name="phone"
                placeholder="Twój numer telefonu"
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                placeholder="Czy masz dodatkowe pytania?"
                onChange={(e) => setMsg(e.target.value)}
              />
              <br />
              <br />
             <Wyslano /> <Button variant="outlined" className="red" onClick={updateDATA}>
                Wyślij odpowiedz
              </Button>
            </div>
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
      );
    }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Nav />
        <Fireworks
          className="fireworks"
          // ref={ref}
          options={{
            opacity: 0.2,
            friction: 1,
            acceleration: 1,
            particles: 30,
            intensity: 4,
            gravity: 3.5,
            brightness: {
              min: 1,
              max: 2,
            },
            lineWidth: {
              explosion: {
                min: 1,
                max: 5,
              },
              trace: {
                min: 1,
                max: 2,
              },
            },
          }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            background: "#fff",
            zindex: -3,
          }}
        />
        <Container sx={{ minHeight: "100vh", minWidth: "100vw" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // backgroundImage: `url(${bg})`,
              //backgroundImage: `url(${BGIMG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "100vh",
              // maxWidth: "100vw",
              backgroundColor: "",
            }}
          >
            {items}
          </Box>
        </Container>
        <div className="blankspace" />
      </ThemeProvider>{" "}
    </div>
  );
};

export default Post;
