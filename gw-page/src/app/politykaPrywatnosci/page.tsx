import Footer from "../component/footer";
import Header from "../component/header";

function PolitykaPrywatnosci() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center bg-gray-100 px-6 py-12 pt-24">
                <h1 className="text-4xl font-bold text-center mb-6">Polityka Prywatności</h1>

                <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-center mb-4">§ 1 Ogólne</h2>
                    <p className="mb-4">
                        1. Niniejszy dokument określa ogólne warunki, zasady przetwarzania danych osobowych przez
                        Galeria Wnętrza Sp. z o.o. z siedzibą ul. Szwedzka 5A 55-040 Bielany Wrocławskie, uzyskanych
                        za pośrednictwem Sklepu Internetowego www.sklep.galeria-wnetrza.pl/.
                    </p>
                    <p className="mb-4">
                        2. Administratorem danych osobowych pozyskiwanych przez Sklep Internetowy jest Galeria Wnętrza
                        Sp. z o.o. będąca jednocześnie właścicielem Sklepu Internetowego.
                    </p>
                    <p className="mb-4">
                        3. Polityka Prywatności stanowi integralną część Regulaminu Sklepu Internetowego, a znajdujące się w
                        Regulaminie definicje mają odpowiednie zastosowanie do niniejszej Polityki Prywatności, chyba że określone
                        wyrażenia lub zwroty zostały bezpośrednio w niniejszej Polityce Prywatności zdefiniowane inaczej.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 2 Dane zbierane przez Sklep Internetowy</h2>
                    <p className="mb-4">
                        1. Użytkownik może przeglądać Sklep Internetowy bez konieczności podawania swoich danych osobowych czy też
                        bez konieczności dokonania rejestracji, z zastrzeżeniem postanowień § 3 [Dane zbierane automatycznie].
                    </p>
                    <p className="mb-4">
                        2. Galeria Wnętrza Sp. z o.o. zbiera informacje dotyczące:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>osób fizycznych dokonujących czynności prawnej niezwiązanej bezpośrednio z ich działalnością,</li>
                        <li>osób fizycznych prowadzących działalność gospodarczą lub zawodową,</li>
                        <li>osób reprezentujących osoby prawne lub inne jednostki organizacyjne.</li>
                    </ul>

                    <p className="mb-4">
                        3. Dane osobowe Klientów są zbierane w przypadku:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>rejestracji konta w Sklepie Internetowym,</li>
                        <li>składania zamówienia w Sklepie Internetowym,</li>
                        <li>subskrypcji biuletynu informacyjnego (Newsletter).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 3 Dane zbierane automatycznie</h2>
                    <p className="mb-4">
                        1. Podczas korzystania ze Stron Internetowych Sklepu mogą być pobierane dodatkowe informacje,
                        w szczególności: adres IP przypisany do komputera Klienta, nazwa domeny, rodzaj przeglądarki,
                        czas dostępu, typ systemu operacyjnego.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 4 Wykorzystanie zebranych danych</h2>
                    <p className="mb-4">
                        1. Wszystkie zebrane dane są wykorzystywane wyłącznie w celu realizacji usługi lub zamówienia,
                        dla jakich zostały zgromadzone.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 5 Mechanizm cookies, adres IP</h2>
                    <p className="mb-4">
                        1. Sklep Internetowy używa plików cookies, które są zapisywane przez przeglądarkę na komputerze
                        osoby odwiedzającej Sklep Internetowy.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 6 Zabezpieczenie danych osobowych</h2>
                    <p className="mb-4">
                        1. Galeria Wnętrza Sp. z o.o. stosuje środki techniczne oraz organizacyjne niezbędne do ochrony danych.
                    </p>

                    <h2 className="text-2xl font-bold text-center mt-6 mb-4">§ 7 Zmiany Polityki Prywatności</h2>
                    <p className="mb-4">
                        1. Polityka Prywatności może ulec zmianie, o czym Galeria Wnętrza Sp. z o.o. poinformuje Klientów z wyprzedzeniem 7 dni.
                    </p>
                    <p className="mb-4">
                        2. Pytania związane z Polityką Prywatności prosimy kierować na adres:
                        <a href="mailto:it@galeria-wnetrza.pl" className="text-blue-500 underline"> it@galeria-wnetrza.pl</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PolitykaPrywatnosci;
