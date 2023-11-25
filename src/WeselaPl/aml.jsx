import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import one from "./renders/1.jpeg";
import two from "./renders/1.jpeg";
import three from "./renders/1.jpeg";
import four from "./renders/1.jpeg";
import five from "./renders/1.jpeg";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/icons-material/Grading";
import Com from "@mui/icons-material/ConnectWithoutContact";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import BorderClearIcon from "@mui/icons-material/BorderClear";
import { SixK } from "@mui/icons-material";
import NavPc from "../navPc";

function PricingContent() {
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
      {/* Hero unit */}
      <NavPc />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 3,
          pb: 3,
        }}
      >
        <Container
          data-aos="fade-up"
          disableGutters
          maxWidth="md"
          component="main"
          sx={{ pt: 3, pb: 6 }}
        >
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            AML-KLAUZULA INFORMACYJNA RODO
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Na podstawie art.13 i art. 14 Rozporządzenia Parlamentu
            Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
            sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
            osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
            danych) (Dz. Urz. UE L 119 z 04.05.2016, str. 1, ze zmianą ogłoszoną
            w Dz. Urz. UE L 127 z 23.05.2018, str. 2) („RODO”) informuję, że
            Administratorem Pani/Pana danych osobowych, są Jakub Kozubek, Jan
            Matusiak i Maciej Truszkiewicz, prowadzący wspólnie działalność
            gospodarczą jako Kozubek Matusiak Truszkiewicz Adwokaci i Radcowie
            Prawni spółka cywilna , adres: ul. Piwna 15/3, 30-527 Kraków; NIP:
            9452267798; REGON: 524238078 („Administrator"). Administrator jest
            „instytucją obowiązaną” w rozumieniu ustawy o przeciwdziałaniu
            praniu pieniędzy oraz finansowaniu terroryzmu z dnia 1 marca 2018
            roku z późniejszymi zmianami („ustawa AML”)
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <br />
            Źródło i sposób pobierania danych osobowych
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Administrator pobiera Pani/Pana dane osobowe bezpośrednio od
            Pani/Pana i/lub na podstawie odpisu/kopii dokumentu stwierdzającego
            tożsamość i/lub od podmiotu, z którym zawarliśmy lub zawrzemy umowę,
            a który Pani/Pan reprezentuje lub jest jego Beneficjentem
            ostatecznym i/lub z Centralnego Rejestru Beneficjentów Rzeczywistych
            lub rejestru, o którym mowa w art. 30 lub art. 31 dyrektywy
            2015/849, prowadzonego we właściwym państwie członkowskim. z
            właściwego innego wiarygodnego rejestru podmiotów/podatników we
            właściwym państwie członkowskim, ze środków identyfikacji
            elektronicznej lub z odpowiednich usług zaufania określonych w
            rozporządzeniu 910/2014 (o ile są dostępne), z ogólnodostępnych
            stron internetowych.
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <br />
            Kategorie danych osobowych
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Administrator przetwarza następujące kategorie danych osobowych:
            dane identyfikacyjne, takie jak: imię i nazwisko, obywatelstwo,
            numer (PESEL) lub datę urodzenia, serię i numeru dokumentu
            stwierdzającego tożsamość, dane adresowe, numer identyfikacji
            podatkowej (NIP) oraz w przypadku prowadzenia jednoosobowej
            działalności gospodarczej dane identyfikacyjne i dane adresowe jej
            prowadzenia. Administrator ponadto na podstawie art. 34 ustawy AML
            przetwarza informacje, w tym dane osobowe zawarte w dokumentach
            tożsamości Klienta i osoby upoważnionej do działania w jego imieniu
            oraz sporządza ich kopie.
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <br />
            Cel przetwarzania danych osobowych
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Pani/Pana dane osobowe będą przetwarzane w celu realizacji przez
            Administratora jako instytucji obowiązanej wymagań ustawy AML w
            ramach stosowanych środków bezpieczeństwa finansowego: 1) w celu
            realizacji obowiązku oceny ryzyka związanego z praniem pieniędzy i
            finansowaniem terroryzmu odnoszące się do działalności
            Administratora, z uwzględnieniem czynników ryzyka dotyczących
            Klientów, państw lub obszarów geograficznych, produktów, usług,
            transakcji lub kanałów ich dostaw 2) w celu stosowania wobec swoich
            Klientów środków bezpieczeństwa finansowego, o których mowa w art.
            33 i art. 34 ustawy AML w szczególności, ale nie wyłącznie: a) w
            celu dokonania identyfikacji klienta i weryfikacji jego tożsamości,
            b) w celu dokonania identyfikacji beneficjenta rzeczywistego,
            Załącznik nr 5 c) w celu oceny stosunków gospodarczych i stosownie
            do sytuacji, uzyskania informacji na temat ich celu i zamierzonego
            charakteru; d) w celu bieżącego monitorowania stosunków
            gospodarczych klienta; e) w celu dokonywania zawiadomień i zgłoszeń
            odpowiednim organom.
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <br />
            Podstawa prawna przetwarzania danych osobowych
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Pani/Pana dane osobowe będą przetwarzane na podstawie art. 6 ust. 1
            lit. c RODO – wypełnienie obowiązku prawnego ciążącego na
            Administratorze.
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <br />
            Okres przechowywania danych osobowych
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Dane osobowe, kopie dokumentów i informacje uzyskane w wyniku
            stosowania środków bezpieczeństwa finansowego będą przechowywane
            przez okres 5 lat, licząc od pierwszego dnia roku następującego po
            roku, w którym zakończono stosunki gospodarcze z Klientem lub w
            którym przeprowadzono transakcje okazjonalne. Generalny Inspektor
            Informacji Finansowej może zażądać od Administratora ich
            przechowywania przez kolejny okres nie dłuższy niż 5 lat.
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <br />
            Odbiorcy danych osobowych
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Pani/Pana dane osobowe mogą być przekazywane: 1) Generalnemu
            Inspektorowi Informacji Finansowej, 2) Organom właściwym w sprawach
            Centralnego Rejestru Beneficjentów Rzeczywistych, 3) Prokuratorom
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <br />
            Uprawnienia podmiotu danych osobowych
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Przysługuje Pani/Panu prawo żądania od Administratora dostępu do
            danych osobowych, ich sprostowania, lub ograniczenia ich
            przetwarzania, wniesienia sprzeciwu wobec przetwarzania, a także
            prawo do przenoszenia danych, o ile przepisy prawa powszechnie
            obowiązującego nie przewidują inaczej. Przysługuje Pani/Panu prawo
            wniesienia skargi do organu nadzorczego tj. Prezesa Urzędu Ochrony
            Danych Osobowych. Podanie danych osobowych jest wymogiem ustawowym,
            a ich niepodanie skutkuje brakiem możliwości nawiązania stosunków
            gospodarczych z Administratorem lub ich rozwiązaniem.
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <br />
            Profilowanie
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Pani/Pana dane osobowe będą przez Administratora wykorzystywane do
            profilowania tj. do oceny ryzyka prania pieniędzy i finansowania
            terroryzmu co jest obowiązkiem wynikającym z ustawy o
            przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu. Dane
            osobowe mogą być przetwarzane w systemach informatycznych
            Administratora, ale nie będą wykorzystywane do zautomatyzowanego
            (bez udziału człowieka) podejmowania decyzji wywołujących wobec
            osób, których dane dotyczą skutki prawne.
          </Typography>
        </Container>
      </Box>
      {/* End hero unit */}
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          alignItems: "center",
          py: 10,
        }}
      ></Box>
      {/* Hero unit */}

      {/* End hero unit */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
