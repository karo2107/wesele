
import React, { setState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Autocomplete from "@mui/material/Autocomplete";
import { SettingsInputAntenna } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import Nav from "./nav";
const options = [
  "Bez dodtakowych wymagań",
  "Dieta wegetariańska",
  "Dieta wegańska",
  "Uczulenie na laktozę",
  "Uczulenie na gluten",
];

export default function Obecnosc() {
  const [wyslanoWiadomosc, setwyslanoWiadomosc] = React.useState(false);
  const [validated, setValidated] = React.useState(false);
  const [extra, setExtra] = React.useState(0);
  const Wyslano = () => {
    return (
      <div>
        {wyslanoWiadomosc ? (
          <Alert
          //sx
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

  const Extra = () => {
    if (extra === 1)
      return (
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 5,
          }}
        >
           <Typography component="h1" variant="h3">
            Pojawie się z osobą towarzyszącą
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Wymagania dietetyczne" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
              <Typography component="h1" variant="h3">
            Dane osoby towarzyszącej
          </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Wymagania dietetyczne" />
                    )}
                  />
                  {Extra}
                </Grid>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              <Typography component="h4" variant="h4">Wyslij</Typography>
            </Button>
            <Wyslano />
          </Box>
        </Box>
      );
    else if (extra === 2)
      return (
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 5,
          }}
        >
          <Typography component="h1" variant="h3">
          Pojawie się bez osoby towarzyszącej
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Wymagania dietetyczne" />
                  )}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              <Typography component="h4" variant="h4">Wyslij</Typography>
            </Button>
          </Box>
        </Box>
      );
      else if (extra === 3)
      return (
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 5,
          }}
        >
          <Typography component="h1" variant="h3">
            Nie pojawie się
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              <Typography component="h4" variant="h4">Wyslij</Typography>
            </Button>
          </Box>
        </Box>
      );
      else if (extra === 0)
      return (
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 25,
          }}
        >
       </Box>
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <div>
 <Nav />
    <Container component="main" maxWidth="lg">
      <br/>
      <Box  sx={{py:2,px:3, backgroundColor:'#ffffffde', borderRadius:15}}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography component="h1" variant="h3">
            <br/><br/>
            Potwierdzenie obecności<br/>
            W razie zmiany planów prosimy o kontakt
             <hr />
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button fullWidth variant="outlined" onClick={() => setExtra(1)}>
            {" "}<Typography component="h4" variant="h4">
            Przyjdę z osoba towarzyszącą
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button fullWidth variant="outlined" onClick={() => setExtra(2)}>
            {" "}<Typography component="h4" variant="h4">
            Przyjdę bez osoby towarzyszącej</Typography>
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button fullWidth variant="outlined" onClick={() => setExtra(3)}>
            {" "}<Typography component="h4" variant="h4">
            Nie pojawie się</Typography>
          </Button>
        </Grid>
      </Grid>
      <Extra /></Box>
    </Container></div>
  );
}