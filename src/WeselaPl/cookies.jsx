import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import AOS from "aos";
import "aos/dist/aos.css";

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
            Polityka Prywatności i Cookies
            <hr />
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            I. POSTANOWIENIA OGÓLNE
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            1. Celem niniejszej Polityki Prywatności i Cookies (dalej:
            „Polityka”) jest informowanie o zasadach przetwarzania danych
            osobowych przez Jakuba Kozubka, Jana Matusiaka i Macieja
            Truszkiewicza, prowadzących wspólnie działalność gospodarczą jako
            Kozubek Matusiak Truszkiewicz Adwokaci i Radcowie Prawni spółka
            cywilna z siedzibą w Krakowie (dalej: „KMT” lub „Administrator”) w
            szczególności w ramach prowadzonej strony internetowej, ale również
            świadczonych usług przez KMT. Ponadto, celem niniejszej Polityki
            jest także przedstawienie przysługujących praw osobom, których dane
            dotyczą.
            <br />
            2. Państwa dane osobowe są przez KMT przetwarzane zgodnie z
            przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) z
            dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku
            z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
            takich danych oraz uchylenia dyrektywy 95/46/WE (dalej: „RODO”) oraz
            innymi przepisami prawa powszechnie obowiązującego.
            <br />
            3. Zgodnie z przepisami RODO, jako dane osobowe rozumie się
            informacje o zidentyfikowanej lub możliwej do zidentyfikowania
            osobie fizycznej („osobie, której dane dotyczą”). Możliwa do
            zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio
            lub pośrednio zidentyfikować, w szczególności na podstawie
            identyfikatora takiego jak imię i nazwisko, numer identyfikacyjny,
            dane o lokalizacji, identyfikator internetowy lub jeden bądź kilka
            szczególnych czynników określających fizyczną, fizjologiczną,
            genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną
            tożsamość osoby fizycznej.
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            II. INFORMACJE O ADMINISTRATORZE DANYCH OSOBOWYCH
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            1. Dane kontaktowe Administratora: Jakub Kozubek, Jan Matusiak i
            Maciej Truszkiewicz, prowadzący wspólnie działalność gospodarczą
            jako Kozubek Matusiak Truszkiewicz Adwokaci i Radcowie Prawni spółka
            cywilna z siedzibą w Krakowie, ul. Piwna 15/3, 30-527 Kraków, NIP:
            9452267798 REGON: 524238078
            <br />
            2. Z Administratorem można się skontaktować w następujący sposób, w
            szczególności w ramach wątpliwości związanych z przetwarzaniem
            Państwa danych osobowych: • w formie pisemnej – pod adresem: ul.
            Piwna 15/3, 30-527 Kraków; • w formie elektronicznej – pod adresem:
            biuro@kmtlegal.pl
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            III. CELE I PODSTAWY PRZETWARZANIA DANYCH
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            1. NAWIĄZANIE WSPÓŁPRACY I RELACJE BIZNESOWE
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Dane osobowe są przetwarzane przez Administratora w celu:
            <br />
            a) nawiązania współpracy z klientem, a następnie w celu zawarcia i
            realizacji umowy oraz dokonania rozliczeń dotyczących zawartej umowy
            – na podstawie art. 6 ust. 1 lit. b) RODO, tj. wykonanie umowy,
            której stroną jest osoba, której dane dotyczą lub podjęcie działań
            na żądanie osoby, której dane dotyczą, przed zawarciem umowy;
            <br />
            b) wypełniania przez KMT obowiązków prawnych, m.in. rachunkowych,
            podatkowych – na podstawie art. 6 ust. 1 lit. c) RODO tj.
            wypełnienie obowiązku prawnego ciążącego na Administratorze;
            <br />
            c) prowadzenia korespondencji, zapewnienia kontaktu z KMT,
            udzielania odpowiedzi na zapytania w związku nawiązaną współpracą i
            zawartą umową - na podstawie art. 6 ust. 1 lit. f) RODO, tj.
            realizacja prawnie uzasadnionego interesu Administratora, którym
            jest w szczególności zapewnienie kontaktu oraz prowadzenia
            korespondencji z klientem lub osobami reprezentującymi klienta;
            <br />
            d) ustalenia, dochodzenia lub obrony przed potencjalnymi
            roszczeniami - na podstawie art. 6 ust. 1 lit.
            <br />
            f) RODO, tj. realizacja prawnie uzasadnionego interesu
            Administratora, którym jest dochodzenie roszczeń i obrona
            przysługujących KMT praw.
            <br />
            <br />
            Czas przetwarzania danych osobowych
            <br />
            Dane osobowe zebrane w ww. celach będą przetwarzane przez czas
            trwania współpracy pomiędzy KMT a klientem oraz przez okres
            przedawnienia roszczeń wynikających z przedmiotowej współpracy. W
            przypadku, gdy obowiązujące przepisy prawa nakładają na KMT dłuższy
            termin, to dane przechowywane będą przez okres wskazany w przepisach
            prawa. W zależności od zakresu przetwarzanych danych osobowych i
            celów ich przetwarzania, dane osobowe mogą być przechowywane przez
            różny okres - w każdym przypadku decyduje dłuższy termin
            przechowywania danych osobowych.
            <br />
            Podanie danych jest co do zasady dobrowolne, jednak może okazać się
            niezbędne do zawarcia lub realizacji umowy albo w celu prowadzenia
            korespondencji z klientem lub osobami reprezentującymi klienta.
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            2. FORMULARZ KONTAKTOWY NA STRONIE INTERNETOWEJ KMT
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Dane osobowe są przetwarzane przez Administratora w celu:
            <br />
            a) obsługi Państwa zapytania oraz udzielenia odpowiedzi w przypadku
            nawiązania przez Państwa kontaktu z nami w ramach formularza
            kontaktowego - na podstawie art. 6 ust. 1 lit. f) RODO, tj.
            realizacja prawnie uzasadnionego interesu Administratora, którym
            jest obsługa Państwa zapytania skierowanego za pośrednictwem
            formularza;
            <br />
            b) ustalenia, dochodzenia lub obrony przed potencjalnymi
            roszczeniami - na podstawie art. 6 ust. 1 lit. f) RODO, tj.
            realizacja prawnie uzasadnionego interesu Administratora, którym
            jest dochodzenie roszczeń i obrona przysługujących KMT praw. Czas
            przetwarzania danych osobowych Dane osobowe zebrane w ww. celu będą
            przetwarzane przez czas wymagany dla obsługi Państwa zapytania, w
            szczególności udzielenia odpowiedzi na zapytanie skierowane przez
            Państwa za pośrednictwem formularza kontaktowego dostępnego na
            stronie internetowej KMT oraz przez okres przedawnienia ewentualnych
            roszczeń.
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            3. NEWSLETTER – w przypadku dostępności tej funkcjonalności
          </Typography>
          <br />
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Dane osobowe są przetwarzane przez Administratora w celu:
            <br />
            a) prowadzenia działań oraz wysyłki treści marketingowych
            Administratora (w przypadku wyrażenia zgody na otrzymywanie
            informacji handlowych), w tym także informowaniu o wydarzeniach
            organizowanych przez KMT – na podstawie art. 6 ust. 1 lit. f) RODO,
            tj. realizacja prawnie uzasadnionego interesu Administratora, którym
            jest utrzymywanie relacji z klientami, kontrahentami oraz
            pozostałymi osobami zainteresowanymi działalnością marketingową KMT;
            <br />
            b) ustalenia, dochodzenia lub obrony przed potencjalnymi
            roszczeniami - na podstawie art. 6 ust. 1 lit. f) RODO, tj.
            realizacja prawnie uzasadnionego interesu Administratora, którym
            jest dochodzenie roszczeń i obrona przysługujących KMT praw.
            <br />
            Czas przetwarzania danych osobowych
            <br />
            Dane osobowe zebrane w ww. celach będą przetwarzane przez
            przetwarzać przez czas istnienia uzasadnionego interesu KMT i do
            czasu wniesienia przez Państwa sprzeciwu wobec takiego przetwarzania
            danych osobowych. Ponadto, Państwa dane osobowe mogą być
            przetwarzane do czasu wycofania zgody na otrzymywanie informacji
            handlowych lub do czasu zakończenia wydarzenia i wysłania materiałów
            je podsumowujących, przez okres wymagany przepisami prawa lub przez
            okres przedawnienia ewentualnych roszczeń – w zależności od tego,
            który z tych okresów jest dłuższy. Podanie danych osobowych przez
            Państwa jest dobrowolne, ale konieczne do realizacji wskazanych
            wyżej celów.
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            IV. PRAWA PRZYSŁUGUJĄCE OSOBOM, KTÓRYCH DANE DOTYCZĄ
          </Typography>
          <br />
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            W związku z przetwarzaniem danych osobowych za pośrednictwem strony
            internetowej KMT,
            <br />
            przysługuje Państwu szereg praw wynikających z przepisów RODO, w
            szczególności:
            <br />• prawo dostępu do danych osobowych, w tym prawo do uzyskania
            kopii tych danych;
            <br />• prawo do żądania sprostowania danych osobowych,
            <br />• prawo do żądania usunięcia danych osobowych (tzw. „prawo do
            bycia zapominanym”),
            <br />• prawo do żądania ograniczenia przetwarzania danych
            osobowych,
            <br />• prawo do przenoszenia danych osobowych, które zostały
            dostarczone Administratorowi w związku z zawartą umową lub udzieloną
            zgodą i które są przetwarzane w zautomatyzowany sposób, a które mają
            być przekazane do innego administratora;
            <br />• prawo do złożenia sprzeciwu wobec przetwarzania danych,
            który jest oparty na realizacji uzasadnionego interesu prawnego
            Administratora lub przez stronę trzecią, w szczególności wobec
            przetwarzania na potrzeby marketingu bezpośredniego;
            <br />• prawo do złożenia skargi do organu nadzorczego (Prezesa
            Urzędu Ochrony Danych Osobowych).
            <br />W sytuacji, gdy Państwa dane osobowe będą przetwarzane na
            podstawie zgody, zgodę tę mogą Państwo wycofać w dowolnym momencie,
            co nie będzie miało wpływu na zgodność z prawem przetwarzania,
            którego dokonano na podstawie zgody przed jej cofnięciem. Kontakt z
            Administratorem w celu realizacji praw przysługujących zgodnie z
            przepisami RODO możliwy w sposób opisany na początku niniejszej
            Polityki w pkt II.
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            V. ODBIORCY DANYCH OSOBOWYCH
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            <br />W ramach działalności KMT Państwa dane mogą być przekazane
            następującym odbiorcom:
            <br />• podmiotom prowadzącym działalność doradczą, w szczególności
            konsultingową, prawną, księgową, audytorską, podatkową, a także w
            zakresie tłumaczenia dokumentów;
            <br />• notariuszom, przeciwnikom procesowym oraz innym
            podwykonawcom z którymi KMT współpracuje w ramach prowadzonej
            sprawy;
            <br />• podmiotom prowadzącym działalność polegającą na wsparciu
            rozwiązań i systemów teleinformatycznych;
            <br />• dane również mogą być przekazywane, podmiotom lub
            instytucjom uprawnionym do ich uzyskania na podstawie powszechnie
            obowiązującego prawa np. organom ścigania;
            <br />• podmiotom świadczącym usługi kurierskie i pocztowe, a także
            archiwizacji dokumentów. Wszystkie wskazane powyżej podmioty są
            uprawnione do przetwarzania danych osobowych wyłącznie w niezbędnym
            zakresie, na podstawie zawartych przez KMT umów powierzenia
            przetwarzania danych z ww. podmiotami.
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            VI. PRZEKAZYWANIE DANYCH DO PAŃSTW TRZECICH
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Co do zasady, Państwa dane osobowe są przetwarzane w ramach
            Europejskiego Obszaru Gospodarczego (dalej: „EOG”) i nie są
            przekazywane do państw trzecich.
            <br />
            Niezależnie, w związku ze współpracą Administratora z podmiotami
            trzecimi w zakresie działalności KMT, Państwa dane osobowe mogą być
            wyjątkowo przekazywane do państwa spoza EOG w którym podmiot
            współpracujący z Administratorem utrzymuje narzędzia służące do
            przetwarzania danych osobowych przy współpracy z Administratorem.
            <br />W przypadku przekazywania danych osobowych do podmiotów
            mających siedzibę poza EOG, Administrator zapewnia stosowanie
            wymogów określonych w rozdziale 5 RODO, w tym zastosowanie
            odpowiednich podstaw przekazania w postaci standardowych klauzul
            umownych. Mogą Państwo uzyskać kopię zabezpieczeń danych osobowych
            przekazywanych poza EOG, kontaktując się z Administratorem pod
            adresem e-mail: biuro@kmtlegal.pl .
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            VII. PLIKI COOKIE
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Pliki cookie, czyli tzw. „ciasteczka” stanowią dane informatyczne, w
            szczególności pliki tekstowe, które przechowywane są w urządzeniu
            końcowym użytkownika i przeznaczone są do korzystania ze strony
            internetowej prowadzonej przez KMT. Pliki cookie zazwyczaj zawierają
            nazwę strony internetowej, z której pochodzą, czas przechowywania
            ich na urządzeniu końcowym, zapis parametrów i statystyki oraz
            unikalny numer.
            <br />
            Co do zasady, pliki cookie nie pozwalają na identyfikację danej
            osoby. W niektórych sytuacjach jednak mogą one zostać przypisane do
            danej osoby, a więc mogą zostać uznane za dane osobowe. W takim
            wypadku podstawą przetwarzania będzie uzasadniony interes prawny
            Administratora – do tych kwestii stosuje się odpowiednio
            postanowienia powyższej Polityki.
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            VIII. RODZAJE STOSOWANYCH PLIKÓW COOKIE
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            W ramach strony internetowej, Administrator wykorzystuje następujące
            typy plików cookie:
            <br />
            • „sesyjne”, czyli pliki tymczasowe, które są przechowywane na danym
            urządzeniu końcowym
            <br />
            aż do zakończenia danej sesji (tj. wylogowania się, opuszczenia
            strony internetowej, zamknięcia przeglądarki), oraz • „stałe”, czyli
            pliki, które są przechowywane na danym urządzeniu końcowym przez
            czas
            <br />
            określony w parametrach danego pliku, bądź też do czasu ich
            usunięcia.
            <br />
            Ponadto, poza niezbędnymi plikami cookie na stronie internetowej,
            Administrator może także używać następujących rodzajów plików
            cookie:
            <br />
            • „niezbędne”, czyli pliki umożliwiające korzystanie z usług
            dostępnych w ramach strony internetowej KMT, np. prawidłowego
            wyświetlania strony;
            <br />
            • „funkcjonalne”, czyli pliki umożliwiające zapamiętywanie wybranych
            przez danego
            <br />
            użytkownika ustawień i personalizację interfejsu, np. w zakresie
            wybranego języka lub wyrażonych zgód;
            <br />
            • „analityczne”, czyli pliki umożliwiające prowadzenie działań
            analitycznych, które pozwalają m.in. na ulepszenie struktury strony
            internetowej odwiedzanej przez użytkowników;
            <br />• „reklamowe”, czyli pliki umożliwiające dostarczanie
            użytkownikom treści reklamowych optymalnie przystosowanych do ich
            zainteresowań i upodobań.
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            IX. ZARZĄDZANIE PLIKAMI COOKIE
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Możliwa jest zmiana sposobu korzystania z plików cookie, a także
            wyrażonych zgód za pośrednictwem ustawień danej przeglądarki.
            Szczegółowe informacje dotyczące zarządzania plikami cookie znajdują
            się w sekcji „Pomoc” w danej przeglądarce:
            <br />
            • Firefox –
            https://support.mozilla.org/pl/kb/ciasteczka#w_ustawienia-ciasteczek
            <br />
            • Microsoft Edge –
            https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-
            cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09
            <br />
            • Chrome – https://support.google.com/chrome/answer/95647?hl=pl
            <br />
            • Safari – https://support.apple.com/pl-pl/HT201265
            <br />
            • Opera – http://www.opera.com/browser/tutorials/security/privacy/
            <br />W każdym czasie mogą Państwo uniemożliwić przechowywanie
            plików cookie. Korzystanie ze strony będzie możliwe, natomiast może
            to jednak spowodować ograniczenie prawidłowego działania strony
            internetowej KMT.
          </Typography>
          <br />
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            X. POSTANOWIENIA KOŃCOWE
          </Typography>
          <Typography
            variant="h7"
            align="justify"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            Niniejsza Polityka obowiązuje od dnia 1 marca 2023 roku. W przypadku
            jej zmiany w przyszłości, KMT zamieści stosowną adnotację w treści
            niniejszej Polityki.
            <br />
            Jednocześnie zwracamy uwagę, że na stronie strony internetowej KMT
            mogą się także znajdować odnośniki do stron zewnętrznych lub
            serwisów społecznościowych, które nie należą do Administratora.
            Administrator nie odpowiada za sposób przetwarzania danych osobowych
            przez podmioty będące właścicielami zewnętrznych portali. W związku
            z powyższym rekomendujemy zapoznanie się z politykami prywatności
            opublikowanymi przez innych administratorów.
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
