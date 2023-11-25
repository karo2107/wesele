import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import Realestate from "@mui/icons-material/AccountBalance";
import Employer from "@mui/icons-material/FollowTheSigns";
import Employee from "@mui/icons-material/SupportAgent";
import Court from "@mui/icons-material/Gavel";
import Spolka from "@mui/icons-material/Handshake";
import Transaction from "@mui/icons-material/Receipt";
import Upadlosc from "@mui/icons-material/MoneyOff";
import It from "@mui/icons-material/Computer";
import PhoneIcon from "@mui/icons-material/AssuredWorkload";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import NavPc from "./navPc";
import AOS from "aos";
import "aos/dist/aos.css";
import {Helmet} from "react-helmet";
const one = [
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",

    tab: "Obsługa przedsiębiorcy",
    index: 0,
    icon: <Employer />,
    bgPic:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    parg1: "Obsługa przedsiębiorcy",
    parg2: (
      <p>
        Przedsiębiorcy na co dzień muszą mierzyć się z wieloma wyzwaniami, w tym
        także dotyczącymi sfery prawnej. Obsługa prawna przedsiębiorcy obejmuje
        swym zakresem wsparcie w bieżącym kierowaniu działalnością gospodarczą
        prowadzoną w różnych formach, niezależnie od ich wielkości czy stażu.
        Bieżąca Obsługa przedsiębiorcy zawiera wszystkie czynności, jakie są nie
        tylko niezbędne dla danego przedsiębiorcy, ale wręcz przez niego
        pożądane lub oczekiwane. Opisywana specjalizacja obejmuje przede
        wszystkim: doradztwo i negocjacje bieżących umów, obsługę organów
        przedsiębiorcy, podejmowanie uchwał, pieczę nad sprawami pracowniczymi,
        wsparcie w tworzeniu struktur i w procesie finansowania nowych podmiotów
        (start-upów).
      </p>
    ),
    parg3: "",
    parg4: "W ramach specjalizacji “Obsługa przedsiębiorcy” między innymi:",
    parg5: [
      <ul>
        <li>
          • na bieżąco doradzamy prawnie przedsiębiorcom przy prowadzeniu przez
          nich działalności (bieżące doradztwo prawne);
        </li>
        <li>
          <br />• monitorujemy zmiany w prawie pod kątem konieczności
          wprowadzenia zmian w działalności Klienta;
        </li>
        <li>
          <br />• wspieramy przedsiębiorców w procesie bieżącej windykacji
          należności od kontrahentów;
        </li>
        <li>
          <br />• nadzorujemy sprawy pracownicze przedsiębiorców;
        </li>
        <li>
          <br />• tworzymy organy spółek i przeprowadzamy w nich zmiany;
        </li>
        <li>
          <br />• analizujemy strukturę organizacyjną przedsiębiorców i
          doradzamy w procesie jej zmian;
        </li>
        <li>
          <br />• wspieramy przedsiębiorców przy spełnianiu przez nich wymogów
          stawianych przez przepisy prawa (np. w procesie rejestracji zmian w
          Centralnym Rejestrze Beneficjentów Rzeczywistych (tzw. CRBR));
        </li>
        <li>
          {" "}
          <br />• przygotowujemy projekty uchwał organów spółek, między innymi w
          przedmiocie zmian w akcie założycielskim (np.: umowy i statuty
          spółek), czy podwyższenia i obniżenia kapitału zakładowego;
        </li>{" "}
        <li>
          {" "}
          <br />• wspieramy przedsiębiorców przed sądami i organami, w tym
          reprezentujemy Klienta przed sądem rejestrowym, a także w sporach
          pomiędzy wspólnikami;
        </li>{" "}
        <li>
          {" "}
          <br />• reprezentujemy Klienta podczas posiedzeń organów spółek, np.
          na zgromadzeniach wspólników/walnych zgromadzeniach akcjonariuszy.
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br />• jasna i szybka komunikacja z Klientem, nastawiona na
          posługiwanie się pojęciami właściwymi dla przedsiębiorców, jak również
          na zrozumienie i zaadresowanie bieżących potrzeb Klienta;
        </li>
        <li>
          <br />• wieloletnie doświadczenie w bieżącej obsłudze prawnej
          przedsiębiorców z różnych branż, m.in. inwestycyjnej, medycznej, FMCG,
          IT, produkcyjnej, nieruchomości, e-commerce, biotechnologicznej,
          energetycznej;
        </li>
        <li>
          <br />• doświadczenie w pozaprawnej działalności, pozwalające
          zrozumieć potrzeby biznesowe Klientów;
        </li>
        <li>
          <br />• wszechstronny i wyspecjalizowany zespół, posiadający wiedzę z
          różnych obszarów prawa, co pozwala na kompleksową obsługę prawną
          przedsiębiorców.
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "4528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",

    tab: "Postępowania sądowe",
    index: 1,
    icon: <Court />,
    bgPic:
      "https://images.unsplash.com/photo-1539190346343-2063b7a88208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1753&q=80",
    parg1: "Postępowania sądowe",
    parg2: (
      <p>
        W życiu każdego, a w szczególności przedsiębiorców, dochodzi do sytuacji
        wymagających podjęcia działań prawnych przed odpowiednimi organami
        państwowymi. O ile część tych sytuacji może zostać rozwiązana za pomocą
        stosownych rozmów pomiędzy dwoma stronami, o tyle zdarza się, że spór
        lub inne zdarzenie wymaga wydania rozstrzygnięcia przez sąd lub inny
        organ.
      </p>
    ),
    parg3: "",
    parg4: "W ramach specjalizacji “Postępowania sądowe” między innymi:",
    parg5: [
      <ul>
        <li>
          <br />• reprezentujemy Klienta przed sądami w sprawach cywilnych,
          także rodzinnych, jak również w sporach gospodarczych, zarówno przed
          sądami powszechnymi, jak i przed Sądem Najwyższym;
        </li>
        <li>
          <br />• reprezentujemy Klienta na etapie przedsądowym, dążąc do
          rozstrzygnięcia sporu bez konieczności ingerencji sądu;
        </li>
        <li>
          <br />• sporządzamy pisma procesowe na każdym etapie postępowania;
        </li>
        <li>
          <br />• bierzemy udział w procesach mediacyjnych, negocjacjach,
          rozmowach ugodowych;
        </li>
        <li>
          <br />• opracowujemy strategię procesową w celu optymalizacji ryzyk i
          kosztów po stronie Klienta, jak również maksymalizacji szans uzyskania
          pozytywnego rozstrzygnięcia;
        </li>
        <li>
          <br />• opracowujemy analizę przedprocesową obejmującą ocenę
          zasadności roszczenia w celu umożliwienia Klientowi podjęcia świadomej
          decyzji w przedmiocie dochodzenia swoich roszczeń przed sądem;
        </li>
        <li>
          <br />• reprezentujemy Klienta w postępowaniach egzekucyjnych, zarówno
          przed komornikiem, jak i przed sądem;
        </li>
        <li>
          <br />• reprezentujemy Klienta w postępowaniach arbitrażowych;
        </li>
        <li>
          <br />• sporządzamy opinie prawne na temat zagadnień prawnych, które
          mogą być przedmiotem postępowania przed sądami lub organami;
        </li>
        <li>
          <br />• reprezentujemy Klienta przed organami i sądami
          administracyjnymi, w tym przed Naczelnym Sądem Administracyjnym.
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br /> • wieloletnie doświadczenie w reprezentowaniu Klientów w
          postępowaniach przed sądami i innymi organami, uzyskane w najbardziej
          renomowanych kancelariach w Polsce;
        </li>
        <li>
          <br />• wszechstronny zespół, posiadający wiedzę w różnych dziedzinach
          prawa, na tle których prowadzone są postępowania sądowe i
          administracyjne;
        </li>
        <li>
          <br />• wsparcie specjalistów spoza obszaru doradztwa prawnego;
        </li>
        <li>
          <br />• kompleksowe podejście do prowadzonej sprawy, obejmujące m.in.
          analizę indywidualnej sytuacji i potrzeb Klienta oraz opracowanie
          optymalnej strategii podejmowanych czynności, w celu maksymalizacji
          szans uzyskania pozytywnego rozstrzygnięcia jego sprawy;
        </li>
        <li>
          <br />• jasna i szybka komunikacja z Klientem w celu umożliwienia mu
          zrozumienia zagadnień prawnych będących przedmiotem postępowania, a
          także niezwłoczne otrzymanie niezbędnych informacji i dokumentów.
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: " Maciej Truszkiewicz",
    tab: "Prawo spółek",
    index: 2,
    icon: <Spolka />,
    bgPic:
      "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    parg1: "Prawo spółek ",
    parg2:
      <p>Przeobrażenia w gospodarce i prawie determinują konieczność ciągłego dostosowywania się do nowych warunków. Wysokie tempo zmian ekonomicznych stwarza coraz więcej okazji do tworzenia nowych podmiotów gospodarczych zawiązywanych dla realizacji określonego celu lub prowadzenia długotrwałej działalności. W celu dostosowania się do realiów rynkowych ustawodawca w ostatnich latach wprowadził nowe formy prowadzenia działalności gospodarczej (np. prosta spółka akcyjna). Jednocześnie nieustannie aktualizowane i rozbudowywane prawo gospodarcze stwarza konieczność ciągłego monitorowania i implementowania koniecznych zmian.</p>,
    parg3:
      <p>Prawo spółek to szerokie zagadnienie, które zawiera w sobie regulacje dotyczące tworzenia, działalności, przekształceń oraz likwidacji podmiotów prawa handlowego. Naszym Klientom doradzamy na każdym etapie “życia” spółki, tj. w sprawach od wyboru formy prawnej, poprzez ich bieżącą działalność, łączenie, przekształcenie, sprzedaż/akwizycję, restrukturyzację, aż po likwidację spółki.</p>,
    parg4: "W ramach specjalizacji “Prawo spółek” między innymi:",
    parg5: [
      <ul>
        <li>
          <br />• doradzamy w wyborze odpowiedniej formy prowadzenia
          działalności gospodarczej;
        </li>
        <li>
          <br />• zakładamy spółki kapitałowe: spółki z ograniczoną
          odpowiedzialnością, spółki akcyjne, proste spółki akcyjne;
        </li>
        <li>
          <br />• zakładamy spółki osobowe: spółki jawne, spółki partnerskie,
          spółki komandytowe, spółki komandytowo-akcyjne;
        </li>
        <li>
          <br />• doradzamy w procesie zakładania “wehikułów inwestycyjnych”
          (np. tzw. ASI, funduszy inwestycyjnych);
        </li>
        <li>
          <br />• tworzymy oddziały spółek w Polsce i wspieramy w zakładaniu
          przedstawicielstw zagranicą;
        </li>
        <li>
          <br />• doradzamy w wyborze struktury grupy podmiotów powiązanych
          (tzw. grupy spółek);
        </li>
        <li>
          <br />• doradzamy w tworzeniu, organizacji i określeniu struktury
          przedsięwzięć zawiązywanych przez kilka podmiotów dla realizacji
          określonych celów (np. joint venture, konsorcjum);
        </li>
        <li>
          <br />• przygotowujemy i negocjujemy treść aktów założycielskich mając
          na uwadze charakter i cel zakładania podmiotu;
        </li>
        <li>
          <br />• sporządzamy pełną dokumentację konieczną do zarejestrowania
          spółki.
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br />• nastawienie probiznesowe, przejawiające się w analizie potrzeb
          Klienta i doborze rozwiązań właściwych dla jego indywidualnej
          sytuacji;
        </li>
        <li>
          <br />• bogate doświadczenie w obszarze szeroko rozumianego prawa
          spółek, zarówno w zakresie spraw korporacyjnych, jak i postępowań
          gospodarczych;
        </li>
        <li>
          <br />• wszechstronny zespół, również z doświadczeniem w obsłudze
          funduszów inwestycyjnych i w prowadzeniu własnych, pozaprawnych
          działalności gospodarczych;
        </li>
        <li>
          <br />• zainteresowanie problematyką rynków kapitałowych i nieustanne
          poszerzanie wiedzy w tym przedmiocie, przy jednoczesnym bieżącym
          śledzeniu trendów w gospodarce i prawie;
        </li>
        <li>
          <br />• jasna i szybka komunikacja z Klientem, nastawiona na
          posługiwanie się pojęciami, właściwymi dla przedsiębiorców.
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",

    tab: "Fuzje i przejęcia (M&A) / Procesy inwestycyjne ",
    index: 3,
    icon: <Transaction />,
    bgPic:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    parg1: "Fuzje i przejęcia (M&A) / Procesy inwestycyjne  ",
    parg2: (
      <p>
        Jednym ze sposobów rozwoju przedsiębiorstwa są tzw. Fuzje i przejęcia
        (M&A) / Procesy inwestycyjne, czyli procesy fuzji i przejęć. Transakcje
        te polegają zasadniczo na połączeniu dwóch podmiotów gospodarczych w
        jeden podmiot (fuzja) lub na przejęciu kontroli przez jeden podmiot nad
        innym podmiotem (przejęcie). Celem transakcji M&A jest zazwyczaj
        wypracowanie tzw. efektu synergii, czyli uzyskanie w wyniku transakcji
        M&A wartości wyższej niż suma wartości poszczególnych podmiotów
        uczestniczących w transakcji.
      </p>
    ),
    parg3:
      <p>Procesy inwestycyjne polegają na tym, że dany podmiot (inwestor, którym mogą być przykładowo fundusze VC/PE (Venture Capital/Private Equity), ASI czy aniołowie biznesu) decyduje się zainwestować określone środki w inny podmiot (w tzw. target, np. w start-up) w celu rozwoju tego podmiotu i uzyskania określonego zysku. Inwestycja może mieć różną formę, przykładowo może polegać na zainwestowaniu środków w istniejący już podmiot, czy na zainwestowaniu w nowy podmiot, utworzony w celu realizacji określonego przedsięwzięcia.</p>,
    parg4: (
      <p>
        W ramach specjalizacji "Fuzje i przejęcia (M&A) / Procesy inwestycyjne"
        między innymi:
      </p>
    ),
    parg5: [
      <ul>
        <li>
          • kompleksowo doradzamy w procesach inwestycyjnych inwestorom (w tym
          funduszom VC/PE, czy aniołom biznesu), a także podmiotom
          dokapitalizowywanym (targetom) i ich dotychczasowych właścicielom (w
          tym założycielom start-upów);
        </li>
        <li>
          <br />• kompleksowo doradzamy w transakcjach M&A stronie sprzedającej
          (przejmowanej) lub stronie kupującej (przejmującej) przedsiębiorstwo,
          bądź łączącym się podmiotom;
        </li>
        <li>
          <br />• sporządzamy i negocjujemy umowy o zachowaniu poufności NDA
          (Non-disclosure Agreement);
        </li>
        <li>
          <br />• zarządzamy i przeprowadzamy badania due diligence dla strony
          kupującej (inwestującej, przejmującej) lub sprzedającej;
        </li>
        <li>
          <br />• sporządzamy i negocjujemy umowy inwestycyjne SPA (Share
          Purchase Agreement/Sale and Purchase Agreement);
        </li>
        <li>
          <br />• sporządzamy i negocjujemy umowy wspólników SHA (Shareholders
          Agreement);
        </li>
        <li>
          <br />• zarządzamy i doradzamy w ramach procesu podwyższania i
          obniżania kapitału zakładowego targetu i sporządzamy w tym zakresie
          niezbędną dokumentację;
        </li>
        <li>
          <br />• wspieramy przy spełnieniu przez stronę kupującą (inwestującą,
          przejmującą) lub stronę sprzedającą (przejmowaną) warunków transakcji;
        </li>
        <li>
          <br />• wspieramy stronę kupującą (inwestującą, przejmującą) w
          integracji połączonych podmiotów (Post Merger Integration);
        </li>
        <li>
          <br />• sporządzamy i negocjujemy umowy, których celem jest pozyskanie
          finansowania na planowane inwestycje;
        </li>
        <li>
          <br />• analizujemy możliwość przeprowadzenia procesu inwestycyjnego z
          perspektywy krajowych i wspólnotowych przepisów antymonopolowych, a
          także reprezentujemy podmioty w postępowaniach przed urzędami
          kontrolującymi koncentrację przedsiębiorców;
        </li>
        <li>
          <br />• opracowujemy i wdrażamy strategie obrony przed wrogim
          przejęciem.
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br />• wszechstronny zespół posiadający umiejętności pozwalające na
          kompleksowe wsparcie procesu transakcyjnego;
        </li>
        <li>
          <br />• doświadczenie nabyte podczas wielu procesów transakcyjnych i
          reprezentowaniu zarówno inwestorów (w tym funduszy VC/PE, ASI), jak i
          spółek dokapitalizowywanych (targetów) i ich właścicieli (w tym
          założycieli start-upów);
        </li>
        <li>
          <br />• kwalifikacje naszych ekspertów, którzy nieustannie poszerzają
          wiedzę w obszarze procesu inwestycyjnego i transakcji M&A, nie tylko
          od strony prawnej, ale przede wszystkim biznesowej;
        </li>
        <li>
          <br />• indywidualne i praktyczne podejście do procesu inwestycyjnego,
          nastawione na poznanie celów oraz interesów Klienta, a także specyfiki
          działalności podmiotów uczestniczących w transakcji;
        </li>
        <li>
          <br />• jasna i szybka komunikacja w celu sprawnego przeprowadzenia
          całego procesu inwestycyjnego;
        </li>
        <li>
          <br />• nastawienie proinwestycyjne, tzn. nastawienie w kierunku
          uzyskania porozumienia i przeprowadzenia inwestycji.
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: " Maciej Truszkiewicz",
    tab: "IT / Nowe technologie",
    icon: <It />,
    index: 4,
    bgPic:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    parg1: "IT/Nowe technologie ",
    parg2: (
      <p>
        W obecnych czasach każdy biznes ma styczność z branżą IT i nowymi
        technologiami. Dlatego zagadnienia prawne związane z rozwiązaniami
        informatycznymi stały się istotne i wymagają uwagi każdego
        przedsiębiorcy, a w szczególności takiego, który zmierza do rozwoju
        swojej działalności przy zastosowaniu najnowszych technologii dostępnych
        na rynku.
      </p>
    ),
    parg3: (
      <p>
        Specjalizacja "IT/Nowe technologie" obejmuje zagadnienia prawne, jakie
        powstają przy organizacji biznesu i jego bieżącej działalności w związku
        z udziałem rozwiązań informatycznych/technologicznych przy
        funkcjonowaniu tego biznesu. W tym zakresie tytułem przykładu można
        wyróżnić konieczność zaadresowania problemów ochrony danych osobowych
        (zbieranych choćby w wyniku internetowej działalności danego podmiotu),
        czy problemów związanych z prawami własności intelektualnej (np.
        rozstrzygnięcie, czy określone prawa przysługują twórcy danego utworu,
        czy osobie zlecającej jego opracowanie).
      </p>
    ),
    parg4: <p>W ramach specjalizacji "IT/Nowe technologie" między innymi:</p>,
    parg5: [
      <ul>
        <li>
          <br />• doradzamy w przedmiocie organizacji biznesu IT/Nowych
          technologii m.in. w zakresie wyboru odpowiedniej formy prowadzenia
          działalności, czy sporządzania i negocjowania umów o współpracę
          pomiędzy wspólnikami;
        </li>
        <li>
          <br />• wspieramy przy pozyskiwaniu kapitału m.in. poprzez
          sporządzanie i negocjowanie umów inwestycyjnych z potencjalnym
          inwestorem lub wsparcie prawne w ramach procesu pozyskania
          dofinansowania;
        </li>
        <li>
          <br />• sporządzamy i negocjujemy umowy regulujące stan praw własności
          intelektualnej;
        </li>
        <li>
          <br />• wspieramy przy ochronie tajemnicy przedsiębiorstwa, know-how i
          dóbr osobistych;
        </li>
        <li>
          <br />• opracowujemy niezbędne regulaminy i polityki związane z
          prowadzeniem biznesu przy wykorzystaniu nowych technologii;
        </li>
        <li>
          <br />• opracowujemy i wdrażamy procedury mające na celu odpowiednią
          ochronę praw własności intelektualnej, ochronę danych osobowych i
          prywatności;
        </li>
        <li>
          <br />• reprezentujemy strony w postępowaniach sądowych i
          administracyjnych związanych z IT, prawami własności intelektualnej,
          ochroną danych osobowych (RODO), ochroną dóbr osobistych, oferując w
          tym zakresie m.in. opracowanie strategii postępowania, negocjacje,
          sporządzanie i negocjowanie ugód, czy reprezentację strony przed
          odpowiednim sądem lub organem;
        </li>
        <li>
          <br />• sporządzamy analizy (audyty) m.in. w przedmiocie zgodności z
          prawem korzystania z praw własności intelektualnej, czy zgodności
          podejmowanych działań z przepisami o ochronie danych osobowych;
        </li>
        <li>
          <br />• wspieramy we wdrażaniu nowych rozwiązań dostępnych dla branży
          IT (np. IP Box).
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br />• młody zespół zainteresowany nowymi technologiami i
          rozwiązaniami IT, posiadający wiedzę z różnych dziedzin prawa, dzięki
          której zespół posiada odpowiednie kwalifikacje pozwalające na
          kompleksową obsługę podmiotów ze wspomnianych branż;
        </li>
        <li>
          <br />• doświadczenie nabyte podczas procesów inwestycyjnych oraz przy
          obsłudze prawnej start-upów technologicznych;
        </li>
        <li>
          <br />• otwartość na nowe rozwiązania technologiczne i ich analizę z
          perspektywy przepisów prawa;
        </li>
        <li>
          <br />• kreatywne podejście do indywidualnych problemów naszych
          Klientów w celu osiągnięcia oczekiwanych przez nich efektów;
        </li>
        <li>
          <br />• jasna i szybka komunikacja z Klientem w celu poznania i
          sprawnego zaadresowania jego potrzeb.
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: " Maciej Truszkiewicz",
    tab: "Nieruchomości",
    index: 5,
    icon: <Realestate />,
    bgPic:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    parg1: "Nieruchomości",
    parg2: (
      <p>
        Specjalizacja w prawie nieruchomości obejmuje zasadniczo trzy obszary
        działania. <br />
        <br />
        Pierwszy obszar dotyczy tzw. procesu inwestycyjnego, czyli sytuacji, w
        której dany podmiot (inwestor) inwestuje w daną nieruchomość w celu
        utworzenia lub modernizacji obiektu budowlanego. W tym zakresie może
        powstać konieczność uzyskania prawnego wsparcia m.in. w sporządzaniu i
        negocjowaniu umów inwestycyjnych, sprawdzeniu stanu prawnego
        nieruchomości, czy uzyskaniu wymaganych prawem decyzji i pozwoleń.
        <br />
        <br />
        Drugi obszar obejmuje bieżącą obsługę podmiotów z branży nieruchomości
        lub mających z nią styczność. W ramach tego obszaru uzyskanie prawnego
        wsparcia może być wskazane m.in. w przedmiocie sporządzania i
        negocjowania umów związanych z przeniesieniem własności nieruchomości
        (np. umowa sprzedaży, umowa deweloperska) lub korzystaniem z niej (np.
        najem, dzierżawa), a także w zakresie reprezentowania strony przed
        odpowiednimi urzędami i sądami, czy przy podejmowaniu działań
        bezpośrednio związanych z codzienną działalnością Klienta.
        <br />
        <br />
        Trzeci obszar dotyczy sporów sądowych powiązanych z nieruchomością. W
        tym zakresie może powstać konieczność uzyskania wsparcia prawnego m.in.
        przy dochodzeniu naprawienia szkody powstałej w związku z nieprawidłową
        realizacją inwestycji, wadami fizycznymi lub prawnymi nabywanej
        nieruchomości, czy przy uregulowaniu stanu prawnego nieruchomości.
      </p>
    ),
    parg3: "",
    parg4: <p>W ramach specjalizacji "Nieruchomości" między innymi:</p>,
    parg5: [
      <ul>
        <li>
          <br />• kompleksowo doradzamy podmiotom (w tym inwestorom i
          deweloperom) na każdym etapie procesu budowlanego i procesu
          inwestycyjnego, w tym analizujemy stan prawny nieruchomości (due
          diligence nieruchomości) w celu zaproponowania odpowiedniej strategii
          oraz dostępnych rozwiązań inwestycyjnych zmierzających do nabycia lub
          zbycia nieruchomości;
        </li>
        <li>
          <br />• sporządzamy i negocjujemy umowy regulujące zasady
          przeprowadzenia inwestycji (umowy inwestycyjne, umowy o współpracę),
          jak również doradzamy w przedmiocie wyboru formy działalności
          gospodarczej na potrzeby planowanej inwestycji;
        </li>
        <li>
          <br />• sporządzamy i negocjujemy umowy dotyczące nieruchomości, w
          szczególności umowy sprzedaży nieruchomości, umowy regulujące
          możliwość korzystania z nieruchomości (np. umowy najmu, dzierżawy),
          umowy deweloperskie, umowy o roboty budowlane, umowy z generalnym
          wykonawcą lub podwykonawcami;
        </li>
        <li>
          <br />• reprezentujemy strony w postępowaniach sądowych i
          administracyjnych związanych z nieruchomościami, w tym z procesem
          budowlanym, w szczególności w zakresie uzyskania decyzji i pozwoleń
          niezbędnych do zgodnego z prawem przeprowadzenia inwestycji budowlanej
          (np. decyzji o warunkach zabudowy, pozwolenia na budowę, decyzji o
          środowiskowych uwarunkowaniach);
        </li>
        <li>
          <br />• reprezentujemy strony w procesach odszkodowawczych związanych
          z nieruchomościami, w szczególności w związku z niewykonaniem lub
          nienależytym wykonaniem umowy o roboty budowlane (po stronie
          inwestorów, generalnych wykonawców i podwykonawców);
        </li>
        <li>
          <br />• wspieramy Klientów w pozyskaniu finansowania na
          przeprowadzenie inwestycji, w szczególności sporządzamy i negocjujemy
          umowy kredytu pomiędzy inwestorem a bankiem;
        </li>
        <li>
          <br />• wspieramy Klientów w procesie uregulowania stanu prawnego
          nieruchomości, w tym reprezentujemy strony w postępowaniach o
          zasiedzenie, wywłaszczenie lub zniesienie współwłasności
          nieruchomości.
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br />• wszechstronny zespół posiadający wiedzę zarówno w zakresie
          prawa nieruchomości, jak i innych dziedzin prawa, co pozwala
          kompleksowo wspierać naszych Klientów na rynku nieruchomości;
        </li>
        <li>
          <br />• wsparcie specjalistów spoza obszaru doradztwa prawnego;
        </li>
        <li>
          <br />• wieloletnie doświadczenie w procesach inwestycyjnych oraz
          sporach związanych z nieruchomościami;
        </li>
        <li>
          <br />• indywidualne i praktyczne podejście do każdej sprawy, m.in.
          polegające na przeprowadzeniu analizy stanu faktycznego i prawnego
          danej nieruchomości oraz dostosowaniu podejmowanych działań do
          indywidualnej sytuacji Klienta.
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",

    tab: "Upadłość i restrukturyzacja",
    index: 6,
    icon: <Upadlosc />,
    bgPic:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    parg1: "Upadłość i restrukturyzacja",
    parg2:
    <p>Specjalizacja “Upadłość i restrukturyzacja” obejmuje usługi skierowane do osób zadłużonych i wierzycieli mające na celu rozwiązanie powstałych problemów majątkowych związanych z niewypłacalnością podmiotów oraz ich oddłużeniem. Rzetelnie przeprowadzone postępowanie pozwala na uwolnienie się od zadłużenia bądź jego istotne ograniczenie. Efekt ten może zostać osiągnięty poprzez skutecznie przeprowadzone postępowanie upadłościowe. Równocześnie przy zaistnieniu przesłanek do podjęcia działań restrukturyzacyjnych możliwe jest wyeliminowanie problemów finansowych przy jednoczesnym utrzymaniu przedsiębiorstwa i jego dalszego funkcjonowania.</p>,
    parg4:
     "W ramach specjalizacji “Upadłość i restrukturyzacja” między innymi: ",
    parg5: [
      <ul>
        <li>
          <br />• oferujemy doradztwo prawne na rzecz zadłużonych, w tym
          sporządzamy analizę w przedmiocie najbardziej optymalnych dla nich
          rozwiązań w zakresie wyboru pomiędzy postępowaniem upadłościowym a
          restrukturyzacyjnym i sposobami ich przeprowadzenia;
        </li>
        <li>
          <br />• oferujemy doradztwo prawne na rzecz wierzycieli, prezentując
          rozwiązania zmierzające do ustalenia majątku dłużnika i
          przeprowadzenia skutecznej egzekucji;
        </li>
        <li>
          <br />• bierzemy udział w negocjacjach po stronie zadłużonych oraz
          wierzycieli;
        </li>
        <li>
          <br />• sporządzamy wnioski w sprawach o ogłoszenie upadłości
          przedsiębiorców;
        </li>
        <li>
          <br />• sporządzamy wnioski w sprawach o ogłoszenie upadłości osób
          fizycznych nieprowadzących działalności gospodarczej (upadłości
          konsumenckie);
        </li>
        <li>
          <br />• reprezentujemy Klienta przed sądem w postępowaniu o ogłoszenie
          upadłości oraz w postępowaniu upadłościowym, w tym dbamy o interes
          Klienta m.in. w czasie udziału w posiedzeniach rady wierzycieli, na
          etapie sprawozdań syndyka oraz przy podziale funduszów masy upadłości;
        </li>
        <li>
          <br />• wspieramy przedsiębiorców w procesie ich restrukturyzacji;
        </li>
        <li>
          <br />• oferujemy obsługę prawną syndyków masy upadłości, w
          szczególności zastępujemy syndyka w sprawach sądowych związanych z
          przedmiotami wchodzącymi w skład masy upadłościowej, w tym w sprawach
          o uznaniu czynności dłużnika za bezskuteczną;
        </li>
        <li>
          <br />• doradzamy członkom organów podmiotów zagrożonych
          niewypłacalnością, w szczególności w przedmiocie ich odpowiedzialności
          za długi niewypłacalnego przedsiębiorstwa;
        </li>
        <li>
          <br />• doradzamy osobom trzecim (np. poręczycielom) w przedmiocie
          odpowiedzialności za zadłużenie;
        </li>
        <li>
          <br />• doradzamy podmiotom w procesie tzw. przygotowanej likwidacji
          (pre-pack).
        </li>{" "}
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br />• bogate doświadczenie w czynnościach związanych z
          niewypłacalnością podmiotów, w szczególności w postępowaniach
          upadłościowych i restrukturyzacyjnych;
        </li>
        <li>
          <br />• bieżąca aktualizacja wiedzy członków zespołu w przedmiocie
          przepisów regulujących upadłość i restrukturyzację;
        </li>
        <li>
          <br />• bieżące wsparcie doradcy restrukturyzacyjnego w celu
          rozwiązania najbardziej skomplikowanych spraw;
        </li>
        <li>
          <br />• indywidualne podejście do każdej sprawy w celu określenia
          najlepszego rozwiązania dla Klienta oraz konsekwencji proponowanych
          działań, dzięki szerokiej wiedzy z różnych dziedzin prawa istotnych w
          ramach postępowania upadłościowego/restrukturyzacyjnego.
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: " Maciej Truszkiewicz",
    tab: "Prawo pracy",
    index: 7,
    icon: <Employee />,
    bgPic:
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    parg1: "Prawo pracy ",
    parg2:
    <p>Stale pojawiające się nowe regulacje dotyczące relacji na linii pracodawca-pracownik oraz dynamicznie zmieniający się rynek pracy stają się dla tych pierwszych nie lada wyzwaniem. Prawo pracy to obszar prawa, który dotyczy każdego przedsiębiorcy zatrudniającego pracowników. Reguluje ono stosunki pracodawców z pracownikami, jak również działalność zakładów pracy (np. poprzez regulamin pracy zdalnej). W obecnych realiach ustawodawca, tak krajowy, jak i unijny, stawiają na prawa pracownicze. Ponadto, na rynku coraz trudniej pozyskać specjalistów, jak również ich utrzymać. Dobrze skonstruowany kontrakt menedżerski czy umowa o pracę pomagają w utrzymaniu zespołu specjalistów.</p>,
    parg3:
    <p>Monitorowanie zgodności działalności z prawem pracy pozwala przedsiębiorstwu zaoszczędzić czas, środki, jak również zminimalizować ryzyko konfliktów pracowniczych.</p>,
    parg4: "W ramach specjalizacji “Prawo pracy” między innymi:",
    parg5: [
      <ul>
        <li>
          <br />• przygotowujemy i negocjujemy umowy o pracę i cywilnoprawne, w
          tym: umowy zlecenia, o świadczenie usług, umowy B2B, kontrakty
          menedżerskie;
        </li>
        <li>
          <br />• przygotowujemy i negocjujemy umowy zabezpieczające interesy
          stron, w tym umowy o zachowanie poufności (tzw. NDA), czy umowy
          przewidujące zakaz konkurencji;
        </li>
        <li>
          <br />• opracowujemy wewnątrzzakładowe akty prawne, w tym regulaminy
          zakładów pracy (także regulaminy pracy zdalnej) i procedury
          przeciwdziałające dyskryminacji i mobbingowi;
        </li>
        <li>
          <br />• reprezentujemy pracodawców, pracowników oraz związki zawodowe
          w postępowaniach sądowych i administracyjnych, także przed Państwową
          Inspekcją Pracy;
        </li>
        <li>
          <br />• prowadzimy komunikację oraz negocjacje w sprawach na linii
          pracodawca-pracownik-związek zawodowy;
        </li>
        <li>
          <br />• opracowujemy projekty układów zbiorowych;
        </li>
        <li>
          <br />• wspieramy podmioty w legalizacji pobytu i pracy na terenie
          Polski;
        </li>
        <li>
          <br />• opracowujemy dokumentację niezbędną w ramach procesów leasingu
          i outsourcingu pracowniczego;
        </li>
        <li>
          <br />• opracowujemy dokumentację dotyczącą redukcji zatrudnienia w
          przedsiębiorstwe;
        </li>
        <li>
          <br />• przygotowujemy analizy i strategie związane z rozwiązaniem
          sporów na tle pracownik-pracodawca w celu minimalizacji ryzyk z tym
          związanych;
        </li>
        <li>
          <br />• opracowujemy program opcji na udziały lub akcje pracownicze
          (tzw. regulaminy ESOP);
        </li>
        <li>
          <br />• doradzamy Klientom przy rozwiązywaniu zagadnień pracowniczych,
          w tym także powstałych w ramach łączenia, przejęcia oraz
          przekształcenia przedsiębiorców.
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br />• doświadczenie w doradztwie w obszarze prawa pracy zarówno od
          strony korporacyjnej, jak i w ramach rozwiązaniu sporów pracowniczych;
        </li>
        <li>
          <br />• bieżąca aktualizacja wiedzy na temat zmian w prawie pracy oraz
          trendów na rynku pracy;
        </li>
        <li>
          <br />• jasna i szybka komunikacja z Klientem w celu sprawnego
          opracowania odpowiedzi na problemy pracownicze;
        </li>
        <li>
          <br />• współpraca z podmiotami spoza branży prawniczej, co pozwala
          przeprowadzać analizę skutków ekonomicznych podejmowanych działań w
          obszarze prawa pracy.
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
  {
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",

    tab: "Compliance / Governance",
    index: 8,
    icon: <PhoneIcon />,
    bgPic:
      "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    parg1: "Compliance / Governance",
    parg2: (
      <p>
        W obecnych czasach, w szczególności w związku z członkostwem Polski w
        Unii Europejskiej, działalność przedsiębiorców jest w coraz większym
        stopniu regulowana. Specjalizacja "Compliance / Governance" obejmuje
        wsparcie przedsiębiorców w dostosowaniu swojej działalności do
        aktualnych wymogów prawnych. Usługi prawne w tym przedmiocie mają przede
        wszystkim na celu minimalizację ryzyk prawnych związanych ze wspomnianą
        postępującą regulacją działalności przedsiębiorców. Prawidłowe
        zaadresowanie tych ryzyk często związane jest z koniecznością
        odpowiedniego ukształtowania ładu korporacyjnego, czyli zbioru procesów
        oraz standardów wyznaczających ramy działania danej organizacji i
        wpływających na jej dalszy rozwój.
      </p>
    ),
    parg3:
    <p>Implementacja systemu compliance pozwala zredukować ryzyko związane z prowadzeniem działalności gospodarczej, w szczególności w zakresie odpowiedzialności karnej, cywilnej czy karnoskarbowej. Jednocześnie wspomniana implementacja wpływa na zwiększenie zaufania do przedsiębiorcy ze strony kontrahentów, akcjonariuszy, udziałowców oraz innych interesariuszy, a przy tym na zabezpieczenie przedsiębiorcy przed stratami finansowymi oraz wizerunkowymi. Ponadto, wdrożenie stosownych procedur może prowadzić do zwiększenia przychodów bądź zmniejszenia wydatków, a odpowiednie ukształtowanie ładu korporacyjnego, dostosowane do zindywidualizowanych potrzeb danego podmiotu - do uniknięcia sporów wewnętrznych w ramach przedsiębiorstwa.</p>,
    parg4: (
      <p>W ramach specjalizacji "Compliance / Governance" między innymi:</p>
    ),
    parg5: [
      <ul>
        <li>
          <br />• przeprowadzamy analizę podmiotu w celu dopasowania
          odpowiedniej dla niego formy prawnej;
        </li>
        <li>
          <br />• przeprowadzamy audyty (due diligence) stosowanych procedur (w
          tym w zakresie ochrony danych (tzw. RODO), ochrony konsumenta, czy
          procedur związanych z przeciwdziałaniem praniu brudnych pieniędzy
          (tzw. AML) w celu określenia źródeł ryzyka i jego minimalizacji, a
          także w celu uniknięcia konsekwencji braku dostosowania się do
          istniejących wymogów prawnych;
        </li>
        <li>
          <br />• opracowujemy polityki oraz procedury wewnętrzne, między innymi
          w zakresie weryfikacji obecnych i nowych kontrahentów;
        </li>
        <li>
          <br />• doradzamy organom spółek oraz innym jednostkom w przedmiocie
          wykonywania ich obowiązków prawnych, w tym o charakterze powierniczym;
        </li>
        <li>
          <br />• optymalizujemy istniejące procedury korporacyjne;
        </li>
        <li>
          <br />• opracowujemy i wspieramy w implementacji procedur służących
          zwiększeniu wydajności przedsiębiorstwa, w tym wspieramy w
          kształtowaniu ładu korporacyjnego.
        </li>
      </ul>,
    ],
    parg6: [
      <ul>
        <li>
          <br /> • doświadczenie przy wsparciu przedsiębiorców w ramach bieżącej
          obsługi, w tym przy dostosowaniu wymogów prowadzonej działalności
          gospodarczej do zmieniających się przepisów prawa;
        </li>
        <li>
          <br />• doświadczenie przy prowadzeniu i zarządzaniu (w tym w ramach
          organów korporacyjnych) pozaprawną działalnością gospodarczą, co
          pozwala zrozumieć zagadnienia o charakterze biznesowym;
        </li>
        <li>
          <br />• bieżące monitorowanie zmian przepisów prawa, mających wpływ na
          działalność gospodarczą, co pozwala na dostosowanie wspomnianej
          działalności do zmieniających się przepisów prawa;
        </li>
        <li>
          <br />• jasna i szybka komunikacja z Klientem w celu zaprezentowania i
          implementacji u Klienta nowych wymogów wynikających z przepisów prawa.
        </li>
      </ul>,
    ],

    buttonText: "Telefon",
    buttonVariant: "outlined",
    buttonText2: "Email",
    buttonVariant2: "outlined",
    buttonText3: "LinkedIn",
    buttonVariant3: "outlined",
  },
];

const text = [
  {
    tab: "Obsługa przedsiębiorcy",
    icon: <Employer sx={{ fontSize: "80px" }} />,
    id: 0,
  },
  {
    tab: "Postępowania sądowe",
    icon: <Court sx={{ fontSize: "80px" }} />,
    id: 1,
  },
  {
    tab: "Prawo spółek",
    icon: <Spolka sx={{ fontSize: "80px" }} />,
    id: 2,
  },
  {
    tab: "Fuzje i przejęcia (M&A) / Procesy inwestycyjne",
    icon: <Transaction sx={{ fontSize: "80px" }} />,
    id: 3,
  },
  {
    tab: "IT / Nowe technologie",
    icon: <It sx={{ fontSize: "80px" }} />,
    id: 4,
  },
  {
    tab: "Nieruchomości",
    icon: <Realestate sx={{ fontSize: "80px" }} />,
    id: 5,
  },
  {
    tab: "Upadłość i restrukturyzacja",
    icon: <Upadlosc sx={{ fontSize: "80px" }} />,
    id: 6,
  },
  {
    tab: "Prawo pracy",
    icon: <Employee sx={{ fontSize: "80px" }} />,
    id: 7,
  },
  {
    tab: "Compliance / Governance",
    icon: <PhoneIcon sx={{ fontSize: "80px" }} />,
    id: 8,
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleSwitch = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Container
        maxWidth="l"
        sx={{
          position: "fixed",
          zIndex: 5,
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <Box backgroundColor="white">
          <NavPc />
        </Box>
      </Container>
      <Container
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
        maxWidth="lg"
      >
        <Box
          sx={{
            pt: 3,
            pb: 3,
            minHeight: "20vh",
          }}
        >
          <Container
            data-aos="fade-up"
            disableGutters
            component="main"
            sx={{
              pt: 0,
              pb: 0,
              // backgroundColor: "secondary.main"
            }}
          >
            <Container
              sx={{
                m: 0.2,
                py: 5,
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            ></Container>

            <Typography
              variant="h5"
              align="justify"
              color=""
              component="p"
               
            >
              <br />
              KMT Kozubek Matusiak Truszkiewicz. Jesteśmy kancelarią adwokatów i
              radców prawnych, która powstała z myślą o kompleksowym wsparciu
              podmiotów gospodarczych w celu umożliwienia im skupienia całej
              swojej uwagi na własnej działalności. Stawiamy się w roli partnera
              prawnegHarmonogramzego Klienta, starannie słuchając jego potrzeb, aby
              dostarczyć mu najlepszych rozwiązań.
            </Typography>
          </Container>
        </Box>

        <Box
          sx={{
            // backgroundImage: `url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // minHeight: "80vh",
            // alignItems: "center",
            // py: 10,
            // backgroundColor: "secondary.main",
            minHeight: "80vh",
          }}
        >
          <Container
            data-aos="fade-down"
            sx={{
              pt: 5,
              pb: 22,
              // backgroundColor: "secondary.main",
            }}
          >
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color=""
               
              sx={{
                backgroundColor: "primary",
              }}
            >
              Specjalizacje
              <hr />
            </Typography>
            <Tabs>
              <Grid
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
                container
                spacing={0}
                alignItems=""
              >
                {text.map((tier) => (
                  <Grid item key={tier.tab} xs={12} md={6} lg={4}>
                    <Button
                      onClick={() => {
                        executeScroll();
                        setValue(tier.id);
                      }}
                      id={tier.id}
                      size="large"
                      color="third"
                      sx={{
                        "&:hover": {
                          backgroundColor: "secondary.light",
                        },
                      }}
                    >
                      <Typography color="grey" component="h4" variant="h6">
                        {tier.icon}
                        <br />
                        {tier.tab}
                      </Typography>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Tabs>
          </Container>
        </Box>
      </Container>
      <div ref={myRef}>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            minHeight: "101vh",
            minWidth: "102vw",
            zIndex: -2,
            pt: 12,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              width: "20vw",
              py: 4,
            }}
          >
            <Tab
              sx={{ py: 1 }}
              icon={<Employer />}
              label="Obsługa przedsiębiorcy"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ py: 1 }}
              icon={<Court />}
              label="Postępowania sądowe"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ py: 1 }}
              icon={<Spolka />}
              label="Prawo spółek"
              {...a11yProps(2)}
            />
            <Tab
              sx={{ py: 1 }}
              icon={<Transaction />}
              label="Fuzje i przejęcia (M&A) / Procesy inwestycyjne"
              {...a11yProps(3)}
            />
            <Tab
              sx={{ py: 1 }}
              icon={<It />}
              label="IT / Nowe technologie"
              {...a11yProps(4)}
            />
            <Tab
              sx={{ py: 1 }}
              icon={<Realestate />}
              label="Nieruchomości"
              {...a11yProps(5)}
            />
            <Tab
              sx={{ py: 1 }}
              icon={<Upadlosc />}
              label="Upadłość i restrukturyzacja"
              {...a11yProps(6)}
            />
            <Tab
              sx={{ py: 1 }}
              icon={<Employee />}
              label="Prawo pracy"
              {...a11yProps(7)}
            />
            <Tab
              sx={{ py: 1 }}
              icon={<PhoneIcon />}
              label="Compliance / Governance"
              {...a11yProps(8)}
            />
          </Tabs>
          {one.map((one) => (
            <TabPanel value={value} index={one.index}>
              <Box
                sx={{
                  // backgroundImage: `url(${one.bgPic})`,
                  // backgroundSize: "200vh",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  minHeight: "120vh",
                  minWidth: "85vw",
                  mt: "-2vh",
                  ml: "-1vw",
                }}
              >
                <Grid container spacing={0} alignItems="">
                  <Grid item key="about" xs={0} sm={0} md={1} lg={2}>
                    <Card
                      data-aos="fade-right"
                      sx={{
                        backgroundColor: "white",
                        opacity: [0.9, 0.8, 0.7],
                        minHeight: "101vh",
                        alignItems: "right",
                      }}
                    ></Card>
                  </Grid>

                  <Grid item key="bio" xs={12} sm={12} md={11} lg={10}>
                    <Card
                      data-aos="fade-justify"
                      sx={{
                        // minHeight: "300vh",
                        minHeight: "101vh",
                        py: 5,
                      }}
                    >
                      <CardContent>
                        <Box
                          sx={{
                            justifyContent: "justify",
                            maxWidth: "md",
                            mb: 2,
                            minHeight: "50vh",
                          }}
                        >
                          <Typography
                            component="h6"
                            variant="h6"
                            align="justify"
                            color="text.priamry"
                            sx={{ py: 0 }}
                          >
                            {one.icon} | {one.tab}
                            <hr />
                          </Typography>

                          <Accordion
                            expanded={expanded === "panel1"}
                            onChange={handleSwitch("panel1")}
                            sx={{ py: 4 }}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls={one.parg1}
                              id={one.parg1}
                            >
                              <Typography
                                component="h6"
                                variant="h6"
                                align="justify"
                                color="text.priamry"
                              >
                                Opis specjalizacji
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                {/* <Typography
                                variant="h5"
                                align="justify"
                                color="text.secondary"
                                component="p"
                                 
                              >
                                {one.parg1}
                              </Typography> */}
                                <Typography
                                  variant="h7"
                                  align="justify"
                                  color="text.secondary"
                                  component="p"
                                   
                                >
                                  {one.parg2}
                                </Typography>
                             
                                <Typography
                                  variant="h7"
                                  align="justify"
                                  color="text.secondary"
                                  component="p"
                                   
                                >
                                  {one.parg3}
                                </Typography>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion
                            sx={{ py: 4 }}
                            expanded={expanded === "panel2"}
                            onChange={handleSwitch("panel2")}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls={one.parg2}
                              id={one.parg2}
                            >
                              {/* <img src={one} width="10%" /> */}

                              <Typography
                                component="h6"
                                variant="h6"
                                align="justify"
                                color="text.priamry"
                              >
                                <br />
                                Nasze usługi
                                <br />
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <Typography
                                  variant="h7"
                                  align="justify"
                                  color="text.secondary"
                                  component="p"
                                   
                                >
                                  {one.parg4}
                                </Typography>
                                <br />
                                <ul>
                                  <Typography
                                    component="p"
                                    variant="h7"
                                    align="justify"
                                    color="text.secondary"
                                    // key={line}
                                  >
                                    {one.parg5}
                                  </Typography>
                                </ul>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion
                            sx={{ py: 4 }}
                            expanded={expanded === "panel3"}
                            onChange={handleSwitch("panel3")}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls={one.parg3}
                              id={one.parg3}
                            >
                              {/* <img src={one} width="10%" /> */}

                              <Typography
                                component="h6"
                                variant="h6"
                                align="justify"
                                color="text.priamry"
                              >
                                Dlaczego KMT?
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <Typography
                                  color="text.secondary"
                                  component="p"
                                  variant="h7"
                                  align="justify"
                                >
                                  {one.parg6}
                                </Typography>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </Box>
                        {/* <CardActions>
                        <br/>
                        <Box
                          data-aos="zoom-in"
                          sx={{
                            maxWidth: "10vw",
                            display: "flex",
                            flexDirection: "column",
                            py:10,
                          }}
                        >
                          <Typography   variant="h5" component="h5">
                            Partner odpowiedzialny
                          </Typography>
                          <CardActionArea component="a" href={one.bio}>
                            <CardMedia
                              component="img"
                              sx={
                                {
                                  borderRadius:"100%",
                                  // 16:9
                                  // pt: "56.25%",
                                }
                              }
                              image={one.pic}
                              alt="random"
                            />
                          </CardActionArea>

                          <Button component="a" href={one.bio} size="small">
                            {one.title}
                          </Button>
                          <Button component="a" href={one.phone} size="small">
                            Telefon
                          </Button>
                          <Button component="a" href={one.email} size="small">
                            E-mail
                          </Button>
                        </Box>
                      </CardActions>
                    */}
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
          ))}
        </Box>
      </div>
    </React.Fragment>
  );
}
function Accord() {
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        align="center"
        color=""
        component="h1"
         
      >
        {" "}
        <hr />
        Specjalizacje
        <hr />
      </Typography>
      <Grid container spacing={1} alignItems="" sx={{ minHeight: "90vh" }}>
        {one.map((one) => (
          <Grid item key={one.title} xs={12} md={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={one.tab}
                id={one.tab}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  align="justify"
                  color="text.priamry"
                >
                  {one.icon} |{one.tab}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Card
                  data-aos="fade-justify"
                  sx={{
                    minHeight: "300vh",
                    py: 5,
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        justifyContent: "justify",
                        maxWidth: "md",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h5"
                        align="justify"
                        color="text.secondary"
                        component="p"
                         
                      >
                        {one.parg1}
                      </Typography>
                      <br />
                      <Typography
                        variant="h7"
                        align="justify"
                        color="text.secondary"
                        component="p"
                         
                      >
                        {one.parg2}
                      </Typography>
                      <Typography
                        variant="h7"
                        align="justify"
                        color="text.secondary"
                        component="p"
                         
                      >
                        {one.parg3}
                      </Typography>
                      <br />
                      <Typography
                        variant="h5"
                        align="justify"
                        color="text.secondary"
                        component="p"
                         
                      >
                        Nasze usługi
                        <br />
                      </Typography>
                      <br />
                      <Typography
                        variant="h7"
                        align="justify"
                        color="text.secondary"
                        component="p"
                         
                      >
                        {one.parg4}
                      </Typography>
                      <ul>
                        <Typography
                          component="p"
                          variant="h7"
                          align="justify"
                          color="text.secondary"
                          // key={line}
                        >
                          {one.parg5}
                        </Typography>
                      </ul>
                      <Typography
                        variant="h5"
                        align="justify"
                        color="text.secondary"
                        component="p"
                         
                      >
                        <br /> Dlaczego KMT?
                        <br />
                      </Typography>

                      <Typography
                        color="text.secondary"
                        component="p"
                        variant="h7"
                        align="justify"
                      >
                        {one.parg6}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default function Pricing() {
  return (
    <div>
      <Box component="span" sx={{ display: { xs: "none", sm: "block" } }}>
        <BasicTabs />
      </Box>
      <Box component="span" sx={{ display: { xs: "block", sm: "none" } }}>
        <Accord />
      </Box>
      <Helmet>
        
        <title>
        Specjalizacje
        </title>
        <meta name="description" content="W czym się specjalizujemy?"
        />
        <link rel="canonical" href="https://kmtlegal.pl/Specjalizacje"/>
      </Helmet>
    </div>
  );
}
