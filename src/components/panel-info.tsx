export function PanelInfo() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="w-full max-w-4xl mx-auto px-8 py-6">
        <div className="prose mx-auto text-center">
          <h1 className="text-2xl font-bold mb-6">Instrukcja postępowania w przypadku pożaru</h1>
          <ol className="list-decimal space-y-4 text-left">
            <li><strong>Zachowaj spokój i ocen sytuację:</strong> Staraj się nie panikować, co pozwoli Ci działać skutecznie i szybko. Oceń, czy możesz samodzielnie opanować pożar. Jeśli nie, natychmiast przystąp do ewakuacji.</li>
            <li><strong>Powiadom służby ratunkowe:</strong> Jak najszybciej zadzwoń pod numer alarmowy 112 lub 998 (straż pożarna) i zgłoś pożar. Przekaż dokładne informacje o lokalizacji i sytuacji.</li>
            <li><strong>Rozpocznij ewakuację:</strong> Wyprowadź ludzi z budynku, jeśli jesteś odpowiedzialny za grupę osób. Unikaj wind – używaj schodów. Jeśli dym jest gęsty, poruszaj się nisko przy podłodze, gdzie powietrze może być mniej zadymione. Zostaw wszystko za sobą – nie ryzykuj zdrowia i życia, by ratować rzeczy osobiste.</li>
            <li><strong>Zabezpiecz drogi oddechowe:</strong> Jeśli to możliwe, przykryj usta i nos wilgotną tkaniną, by ułatwić oddychanie w zadymieniu.</li>
            <li><strong>Unikaj ognia i dymu:</strong> Zamykaj za sobą drzwi, aby ograniczyć rozprzestrzenianie się ognia i dymu. Nie otwieraj gorących drzwi – sprawdź je najpierw dłonią. Jeśli są gorące, oznacza to, że po drugiej stronie może być ogień.</li>
            <li><strong>Użyj gaśnicy tylko, jeśli umiesz to zrobić:</strong> Jeżeli pożar jest mały i posiadasz odpowiednią gaśnicę oraz umiesz ją obsługiwać, możesz spróbować ugasić ogień. Nie podejmuj jednak tego kroku, jeśli ogień szybko się rozprzestrzenia.</li>
            <li><strong>Jeśli nie możesz uciec, znajdź bezpieczne miejsce:</strong> W miarę możliwości udaj się do pomieszczenia z oknem, zamknij drzwi i zablokuj ich szpary, by dym nie przedostał się do środka. Przyciągnij uwagę ratowników przez okno – możesz użyć latarki lub białego materiału.</li>
            <li><strong>Po wyjściu z budynku nie wracaj do środka:</strong> Czekaj na przybycie służb ratunkowych i przekaż im wszelkie potrzebne informacje, np. o osobach, które mogły pozostać w środku.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}