import Footer from "../component/footer";
import Header from "../component/header";

function Regulamin() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center bg-gray-100 px-6 py-12 pt-24">
                <h1 className="text-4xl font-bold text-center mb-6">Regulamin sklepu internetowego</h1>

                <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6">
                    <p className="text-justify mb-4">
                        Regulamin ten określa ogólne warunki, zasady oraz sposób sprzedaży realizowany przez Galeria Wnętrza Sp. z o.o.
                        z siedzibą ul. Szwedzka 5A 55-040 Bielany Wrocławskie, za pośrednictwem sklepu internetowego www.sklep.galeria-wnetrza.pl
                        zwanego dalej: „Sklepem Internetowym” oraz określa zasady i warunki świadczenia usług nieodpłatnych.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 1 Definicje</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Dni robocze:</strong> oznacza dni tygodnia od poniedziałku do piątku z wyłączeniem dni ustawowo wolnych od pracy.</li>
                        <li><strong>Dostawa:</strong> oznacza czynność faktyczną polegającą na dostarczeniu Klientowi przez Sprzedawcę Towaru określonego w zamówieniu.</li>
                        <li><strong>Klient:</strong> oznacza podmiot, na rzecz którego zgodnie z Regulaminem i przepisami prawa mogą być świadczone usługi.</li>
                        <li><strong>Sprzedawca:</strong> Galeria Wnętrza Sp. z o.o. z siedzibą ul. Szwedzka 5A 55-040 Bielany Wrocławskie, KRS 0000269479, REGON 020427556, NIP 8971722332.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 2 Postanowienia ogólne i korzystanie ze Sklepu</h2>
                    <p className="mb-4">
                        1. Wszystkie prawa do Sklepu Internetowego, w tym prawa autorskie, należą do Sprzedawcy, a korzystanie z nich może następować wyłącznie
                        w sposób określony w Regulaminie oraz za zgodą Sprzedawcy.
                    </p>
                    <p className="mb-4">
                        2. Sprzedawca dołoży starań, aby korzystanie ze Sklepu było możliwe na popularnych przeglądarkach i urządzeniach.
                    </p>
                    <p className="mb-4">
                        3. Sprzedawca stosuje pliki "cookies", które pomagają w prawidłowym funkcjonowaniu Sklepu.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 3 Rejestracja</h2>
                    <p className="mb-4">
                        1. W celu utworzenia Konta Klienta, Klient obowiązany jest dokonać nieodpłatnej Rejestracji.
                    </p>
                    <p className="mb-4">
                        2. Rejestracja nie jest konieczna do złożenia zamówienia w Sklepie Internetowym.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 4 Zamówienia</h2>
                    <p className="mb-4">
                        1. Informacje zawarte na Stronie Internetowej Sklepu nie stanowią oferty Sprzedawcy w rozumieniu Kodeksu Cywilnego,
                        a jedynie zaproszenie Klientów do składania ofert zawarcia Umowy sprzedaży.
                    </p>
                    <p className="mb-4">
                        2. Klient może składać zamówienia w Sklepie Internetowym 7 dni w tygodniu, 24 godziny na dobę.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 5 Płatności</h2>
                    <p className="mb-4">
                        1. Ceny na Stronie Sklepu są podane w wartościach brutto i nie zawierają kosztów dostawy.
                    </p>
                    <p className="mb-4">
                        2. Klient może wybrać różne metody płatności, w tym przelew bankowy, pobranie lub płatność kartą.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 6 Dostawa</h2>
                    <p className="mb-4">
                        1. Sprzedawca realizuje dostawę na terytorium Rzeczypospolitej Polskiej.
                    </p>
                    <p className="mb-4">
                        2. Termin dostawy liczony jest w Dniach roboczych zgodnie z informacją na stronie.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 7 Rękojmia</h2>
                    <p className="mb-4">
                        1. Sprzedawca zapewnia Dostawę Towaru pozbawionego wad fizycznych i prawnych.
                    </p>
                    <p className="mb-4">
                        2. Klient ma prawo do wymiany wadliwego towaru lub zwrotu.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 8 Odstąpienie od umowy</h2>
                    <p className="mb-4">
                        1. Klient będący Konsumentem może w terminie 14 dni odstąpić od umowy bez podawania przyczyny.
                    </p>
                    <p className="mb-4">
                        2. Zwrot płatności następuje niezwłocznie po otrzymaniu towaru przez Sprzedawcę.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 9 Ochrona danych osobowych</h2>
                    <p className="mb-4">
                        1. Zasady ochrony Danych Osobowych zamieszczone są w Polityce prywatności.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 10 Postanowienia końcowe</h2>
                    <p className="mb-4">
                        1. Wszelkie spory wynikające z Regulaminu podlegają prawu polskiemu.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Regulamin;
