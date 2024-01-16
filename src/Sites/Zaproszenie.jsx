import db from "../firebase.config";
import React, { useState, useEffect, useLocation } from "react";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/database";
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
import Line from "../GraphicAssets/line.png";
import Meat from "../GraphicAssets/Meat.png";
import Vegetables from "../GraphicAssets/Vegetables.png";
import Anwser from "../GraphicAssets/Anwser.png";

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

  // const href = window.location.pathname;
  // const output = href.replace("/Zaproszenie/", "");
  // const BGIMG ="https://images.unsplash.com/photo-1515339760107-1952b7a08454?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const BGIMG =
    "https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
          });
        });
    };
    Fetchdata();
    AOS.init({
      duration: 2000,
    });
  }, []);

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
                  {data.NAME} <br /> {data.GUEST}
                </Typography>
                <br />
                <img src={Line} width="75%"/>
                <br />
                <Typography
                  sx={{ fontStyle: "italic" }}
                  align="justify"
                  component="h6"
                  variant="h6"
                >
                  Z ogromną radością pragniemy Was zaprosić na nasz ślub i
                  wesele. To wyjątkowe wydarzenie odbędzie się w ostatnią noc
                  roku, 31 grudnia 2024 roku, w malowniczym zakątku, Gospodzie
                  nad Rabą. Prosimy o zarezerwowanie tego wyjątkowego dnia w
                  Waszym kalendarzu i dołączenie do zabawy. Będziemy razem witać
                  nowy rok w świetnym towarzystwie! Szczegóły dotyczące karty
                  dań, planu wesela oraz ceremonii ślubnej będziemy stopniowo
                  udostępniać, a wszystkie informacje zostaną podane do
                  wiadomości przed wakacjami. Bądźcie pewni, że pracujemy nad
                  stworzeniem niezapomnianego wydarzenia, a na koniec wieczoru
                  planujemy wybuchową zabawę, która dostarczy Wam mnóstwo
                  radości i niezapomnianych chwil.
                  <br />
                  Chcąc umozliwić wszystkich gościom relkaks i dobrą zabawę,
                  postanowiliśmy zorganizować ten wyjątkowy dzień wyłącznie dla
                  dorosłych.
                  <br />
                  Dziękujemy za zrozumienie i z niecierpliwością czekamy na
                  wspólną zabawę!
                  <br />
                  <br />
                  Z serdecznymi pozdrowieniami,
                  <br />
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
        <Box
            sx={{
              boxShadow: 3,
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#ffffffcc",

              minHeight: "100vh",
              maxWidth: "100vw",
            }}
          >
          <Typography component="h1" variant="h5">
            <br />
            <br /> Twoja odpowiedz
            <br />
           
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}> */}

            <Grid container sx={{ px: 2 }}>
              <Grid item xs={12} sm={12} md={12} sx={{ px: 2 }}>
                <img src={Anwser} width="20%"/>
                <InputLabel id="demo-simple-select-label">
                  {data.NAME}, czy możemy liczyć na Twoją obecność?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="obecnosc"
                  value={obecnosc}
                  label="Czy możemy liczyć na Twoją obecność?"
                  onChange={handleChangeObecnosc}
                  variant="standard"
                >
                  <MenuItem value={"tak"}>Tak</MenuItem>
                  <MenuItem value={"nie"}>Nie</MenuItem>
                  <MenuItem value={"moze"}>Jeszcze nie wiem</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={12} md={12} sx={{ px: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Jakie są Twoje preferencje żywieniowe
                </InputLabel>
                <Select
                  labelId="jedzenie"
                  id="demo-simple-select"
                  value={food}
                  label="Twoje preferencje deietetyczne?"
                  onChange={handleChangeFood}
                  variant="standard"
                >
                  <MenuItem value={"Brak"}>brak</MenuItem>
                  <MenuItem value={"Wege"}>wegetarianin</MenuItem>
                  <MenuItem value={"uczulenie na lactose"}>
                    uczulenie na laktose
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={12} md={12} sx={{ px: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  {data.GUEST}, czy możemy liczyć na Twoją obecność?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="obecnosc-goscia"
                  value={obecnosctowarzysza}
                  label="Age"
                  onChange={handleChangeObecnosctowarzysza}
                  variant="standard"
                >
                  <MenuItem value={"tak"}>Tak</MenuItem>
                  <MenuItem value={"nie"}>Nie</MenuItem>
                  <MenuItem value={"moze"}>Jeszcze nie wiem</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} sm={12} md={12} sx={{ px: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Jakie są Twoje preferencje żywieniowe
                </InputLabel>
                <Select
                  labelId="jedzenie-goscia"
                  id="demo-simple-select"
                  value={foodguest}
                  label="Preferencje deietetyczne osoby towarzyszącej"
                  variant="standard"
                  onChange={handleChangeFoodguest}
                >
                  <MenuItem value={"Brak"}>brak</MenuItem>
                  <MenuItem value={"Wege"}>wegetarianin</MenuItem>
                  <MenuItem value={"uczulenie na lactose"}>
                    uczulenie na laktose
                  </MenuItem>
                </Select>
              </Grid>
            </Grid>
            <TextField
              sx={{ px: 2 }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete=""
              variant="standard"
            />
            <TextField
              sx={{ px: 2 }}
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Telefon"
              name="phone"
              autoComplete=""
              variant="standard"
            />
            <TextField
              sx={{ px: 2 }}
              margin="normal"
              fullWidth
              id="text"
              label="Czy masz jakieś pytania?"
              name="text"
              autoComplete=""
              variant="standard"
              multiline
              rows={4}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 2 }}
            >
              <Typography sx={{ color: "white" }}>Wyślij odpowiedz</Typography>
            </Button>
          </Box>
       </Box>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Grid>
    );
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
            particles: 50,
            intensity: 9,
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
      </ThemeProvider>{" "}
    </div>
  );
};

export default Post;
