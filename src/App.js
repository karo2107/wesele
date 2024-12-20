import * as React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Contact from "./WeselaPl/Contact";
import Obecnosc from "./Sites/Obecnosc";
import Home from "./Sites/Home";
import Harmonogram from "./Sites/Harmonogram";
import Informacje from "./Sites/Informacje";
import Zaproszenie from "./Sites/Zaproszenie";
import Zaproszenia from "./Sites/Zaproszenia";

import LandingPage from "./WeselaPl/LandingPage.jsx";
import emailjs from "@emailjs/browser";
import Footer from "./WeselaPl/Footer";
import DocumentMeta from "react-document-meta";
import MoreInfo from "./WeselaPl/MoreInfo.jsx";
import Karta from "./Sites/Karta";
import Admin from "./Sites/Admin";
import Tables from "./Sites/Tables.jsx";
import Wyslane from "./Sites/Wyslane.jsx";
import Zadania from "./Sites/Todo.jsx";
import Budget from "./Sites/Budget.jsx";
import Zakwaterowanie from "./Sites/Zakwaterowanie.jsx";
import Winietki from "./Sites/Winietki.jsx";
import Alergeny from './Sites/Alergeny.jsx'
function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://cholujdesign.com/">
        CholujDesign S.C.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_a1wwmva",
      "template_jnm4g0d",
      e.target,
      "user_x9kPpW1JmhYVbwVWmxAVD"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

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
    fontFamily: [
      '"Italianno"',
      'Charm',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Great Vibes"',
      '"Whisper"'
    ].join(','),
    textTransform: "none",
    button: {
      textTransform: "none",
    },
  },
});

export default function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const pathname = window.location.pathname;
  const href = window.location.href;
  const splitString = pathname.split("/");
  // const a = splitString[1];
  const a = null;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const meta = {
    title: { a },
    description: "wesele",
    canonical: { href },
    meta: {
      charset: "utf-8",
      name: {
        keywords: "wesele",
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <DocumentMeta {...meta}>
        <div className="App">
          <CssBaseline />
          
{/* DAC NARZEDZIE DO SPRAWDZANIA CZY TAKIE WESELE JEST JAK NIE MA TO OD RAZY WRZUCAC  DO /HOME */}
          <main>
            <BrowserRouter>
              <Routes>
                {/* WeselaPl */}
                {/* <Route path={`/home`} element={<LandingPage />} />
                <Route path={`/moreinfo`} element={<MoreInfo />} /> */}

                {/* WeselaPl */}
                {/* Sites */}
                <Route path={`/home`} element={<Home />} />
                <Route path={`/Kontakt`} element={<Contact />} />
                <Route path={`/Harmonogram`} element={<Harmonogram />} />
                <Route path={`/Obecnosc`} element={<Obecnosc />} />
                <Route path={`/Stoliki`} element={<Tables />} />
                <Route path={`/Budzet`} element={<Budget />} />
                <Route path={`/Informacje`} element={<Informacje />} />
                <Route path={`/Menu`} element={<Karta />} />
                <Route path="/:Zaproszenie" element={<Zaproszenie/>} />
                <Route path={`/Zaproszenia`} element={<Zaproszenia />} />
                <Route path={`/Admin`} element={<Admin />} />
                <Route path={`/Zakwaterowanie`} element={<Zakwaterowanie />} />
                <Route path={`/Wyslane`} element={<Wyslane />} />
                <Route path={`/Winietki`} element={<Winietki />} />
                <Route path={`/Zadania`} element={<Zadania />} />
                <Route path={`/Alergeny`} element={< Alergeny />} />
               
                {/* <Route path={`${a}/:any `} element={<LandingPage />} /> */}
                <Route path={`${a}`} element={<Home />} />
                <Route path={`/:any `} element={<Home />} />
                <Route path={``} element={<Home />} />
                {/* Sites */}
                {/* Admin */}
                 {/* <Route path={`${href}/cookies`} element={<Cookies />} />
              <Route path={`${href}/Admin`} element={<DodajPost />} />
              <Route path={`${href}/AML-RODO `}element={<AML/>} /> */}
                {/* Admin */}
              </Routes>
            </BrowserRouter>
          </main>
          <Footer />
        </div>
      </DocumentMeta>
    </ThemeProvider>
  );
}
