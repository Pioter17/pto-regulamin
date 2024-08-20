<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="title__panel" style="">
      <div class="gradient"></div>
      <h1 class="title">Polityka prywatności</h1>
    </div>
    <div class="policy">
      <ol>
        <li>
          Ten dokument zawiera informacje o zasadach dotyczących prywatności,
          które są stosowane w aplikacjach mobilnych wydawanych przez firmę
          Vectio sp. z o.o. (zwane dalej „Zasady Prywatności Vectio”).
        </li>
        <li>
          Aplikacje stworzone przez Vectio (określane jako "Aplikacje") mogą być
          instalowane na urządzeniach mobilnych, takich jak smartfony czy
          tablety, po wcześniejszym pobraniu ich przez użytkowników z Google
          Play (dla Androida), Apple App Store (dla iOS) lub Microsoft Store
          (dla Windows Phone).
        </li>
        <li>
          Aby korzystać z Aplikacji, niezbędne jest posiadanie urządzenia
          mobilnego z zainstalowanym systemem operacyjnym Android, iOS lub
          Windows Phone oraz dostępu do Internetu, który może być zapewniony
          przez pakiet danych lub połączenie Wi-Fi. Używanie Aplikacji nie
          wymaga od użytkowników podawania żadnych danych osobistych.
        </li>
        <li>
          Aplikacje Vectio nie gromadzą i nie przechowują żadnych informacji,
          które mogłyby pozwolić na identyfikację użytkownika przez osoby
          trzecie.
        </li>
        <li>
          Jeżeli nie zgadzasz się z warunkami Zasad Prywatności Vectio, prosimy
          o nieinstalowanie Aplikacji lub ich deinstalację. Definitywne
          usunięcie Aplikacji z urządzenia oznacza zaprzestanie z nich
          korzystać.
        </li>
        <li>
          Zasady Prywatności Vectio są dokumentem uzupełniającym do polityk
          prywatności dostępnych w sklepach aplikacji Google Play, Apple App
          Store i Microsoft Store. Vectio nie jest odpowiedzialne za polityki
          prywatności prowadzone przez te platformy ani za ich zgodność z
          obowiązującymi przepisami prawa dotyczącymi ochrony danych osobowych,
          takimi jak Rozporządzenie Parlamentu Europejskiego i Rady (UE)
          2016/679 z 27 kwietnia 2016 r. (RODO), ustawa o ochronie danych
          osobowych z dnia 10 maja 2018 r., czy ustawa o świadczeniu usług drogą
          elektroniczną z dnia 18 lipca 2002 r.
        </li>
        <li>
          W przypadku pytań lub potrzeby wyjaśnień, zachęcamy do kontaktu przez
          adres e-mail:
          <a href="mailto:kontakt@vectio.pl">kontakt@vectio.pl</a>.
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title__panel {
  background-image: url("https://www.forbes.com/advisor/wp-content/uploads/2023/01/pto_policy_examples_-_article_image.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  width: 1500px;
  height: 500px;
  margin-top: 150px;
  margin-bottom: 30px;
  position: relative;
}
.policy {
  background-color: #fff;
  border-radius: 20px;
  width: 1500px;
  font-size: 25px;
  /* padding-top: 30px; */
  padding: 50px;
}

.gradient {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100%;
  border-radius: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
}

ol {
  margin-left: 10px;
  text-align: justify;
}

.title {
  color: #fff;
  position: relative;
  top: 400px;
  left: 50px;
  font-size: 50px;
}
</style>
