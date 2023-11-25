import * as React from "react";
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
const pathname = window.location.pathname;
const splitString = pathname.split("/");
const a = splitString[1];
const defaultTheme = createTheme();

export default function SignIn() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Nav />
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={5} elevation={1}>
          <CssBaseline />
          <Box
            sx={{
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundImage: `url(${bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "100vh",
              maxWidth: "md",
              backgroundColor: "red",
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
                <Typography component="h1" variant="h5" />
                <Typography component="h1" variant="h5" />
                <Typography component="h1" variant="h5" />
                <Typography component="h1" variant="h4">
                  Zaproszenie dla
                </Typography>
                <Typography component="h1" variant="h2">
                  Filip Filpowski
                </Typography>
                <Typography component="h6" variant="h6" >
                  Uroczyście informujemy, że dnia 18 października 2023 r. w
                  Kościele św. Piotra w Puszczykowie Kamila Proszkowska i Wacław
                  Wiaderko powiedzą sobie sakramentalne "TAK" i będą przysięgać
                  sobie miłość, wierność i uczciwość małżeńską. Na uroczystość
                  zaślubin Narzeczeni zapraszają wraz z Rodzicami
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "row",

                    alignItems: "right",
                  }}
                  component="h1"
                  variant="h5"
                >
                  Zapraszamy,
                  <br />
                  {a}
                </Typography>

                <Typography component="h1" variant="h5" />
              </Stack>
            </Container>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4} elevation={6}>
          <Typography component="h1" variant="h5">
            <br />
            <br /> Twoja odpowiedz
            <br /><br />
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}> */}

            <Grid container sx={{ px: 2 }}>
              <Grid item xs={12} sm={12} md={6} sx={{ px: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Czy możemy liczyć na Twoją obecność?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="obecnosc"
                  value={age}
                  label="Czy możemy liczyć na Twoją obecność?"
                  onChange={handleChange} variant="standard"
                >
                  <MenuItem value={10}>Tak</MenuItem>
                  <MenuItem value={20}>Nie</MenuItem>
                  <MenuItem value={30}>Jeszcze nie wiem</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={12} md={6} sx={{ px: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Czy pojawisz się z osobą towarzyszącą?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="obecnosc-goscia"
                  value={age}
                  label="Age"
                  onChange={handleChange} variant="standard"
                >
                  <MenuItem value={10}>Tak</MenuItem>
                  <MenuItem value={20}>Nie</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={12} md={6} sx={{ px: 2 }}>
                <InputLabel id="demo-simple-select-label">
                Twoje preferencje żywieniowe
                </InputLabel>
                <Select
                  labelId="jedzenie"
                  id="demo-simple-select"
                  value={age}
                  label="Czy możemy liczyć na Twoją obecność?"
                  onChange={handleChange}
                  variant="standard"
                >
                  <MenuItem value={10}>Tak</MenuItem>
                  <MenuItem value={20}>Nie</MenuItem>
                  <MenuItem value={30}>Jeszcze nie wiem</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={12} md={6} sx={{ px: 2 }}>
                <InputLabel id="demo-simple-select-label">
                Preferencje żywieniowe osoby towarzyszącej
                </InputLabel>
                <Select
                  labelId="jedzenie-goscia"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  variant="standard"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Tak</MenuItem>
                  <MenuItem value={20}>Nie</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <TextField
            sx={{ px: 2 }}
              margin="normal"
              required
              fullWidth
              id="text"
              label="Dodatkowe informacje"
              name="text"
              autoComplete=""
              autoFocus
              variant="standard"
              multiline
          rows={4}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, px:2 }}
            >
              Wyślij
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
