import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import { createTheme, } from "@mui/material/styles";
// import emailjs from "@emailjs/browser";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Container from "@mui/material/Container";
// import Iframe from "react-iframe";
// import TextField from "@mui/material/TextField";
// import Cookies from "./cookies.jsx";
import GlobalStyles from "@mui/material/GlobalStyles";
import AOS from "aos";
import "aos/dist/aos.css";
import {Helmet} from "react-helmet";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="primary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://cholujdesign.com/">
//         CholujDesign S.C.
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }
// function sendEmail(e) {
//   e.preventDefault();
//   emailjs
//     .sendForm(
//       "service_a1wwmva",
//       "template_jnm4g0d",
//       e.target,
//       "user_x9kPpW1JmhYVbwVWmxAVD"
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
// }
// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#f5f5f5",
//       main: "#825b07",
//       dark: "#825b07",
//       contrastText: "#000",
//     },
//     secondary: {
//       light: "#022911",
//       main: "#022911",
//       dark: "#022911",
//       contrastText: "#fff",
//     },
//   },
//   shadows: ["none"],
//   typography: {
//     fontFamily: ["Lato"].join(","),
//     textTransform: 'none',
//   },
// });

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <React.Fragment>
     <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
        <CssBaseline />
       
    <main>
    <Helmet>
        
        <title>
        Kontakt
        </title>
        <meta name="description" content="Kontakt z KMT"
        />
         <meta name="keywords" content="KMT kontakt, KMT telefon, KMT email, KMT Adres"/>
        <link rel="canonical" href="https://kmtlegal.pl/Kontakt"/>
      </Helmet>
       
        </main>
        
        </React.Fragment>
  );
}
