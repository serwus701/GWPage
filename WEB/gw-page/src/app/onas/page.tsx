import Footer from "../component/footer";
import Header from "../component/header";

function Onas() {
    return (
        <>
            <Header />
            {/* Dodany padding-top, aby treść nie była zasłonięta przez nagłówek */}
            <div className="flex flex-col items-center px-8 py-16 bg-gray-100 text-gray-900 max-w-4xl mx-auto pt-[200px]">
                <h1 className="text-3xl font-serif font-bold text-center mb-6">
                    Od 19 lat słuchamy, projektujemy i urządzamy
                </h1>

                <p className="text-lg text-justify leading-relaxed mb-4">
                    To wieloletnie doświadczenie pozwoliło nam zbudować firmę stabilną, z silną pozycją na rynku i uznaniem klientów. Przez wszystkie te lata stworzyliśmy wnętrza prywatne w takich inwestycjach jak: Ogrody Hallera Archicomu, Centauris, SkyTower, Rezydencja Piasek. Przychodząc do nas zyskujecie Państwo pewność, że wnętrza, które nam powierzycie zyskają elegancję, klasę i urodę, która nie przemija, a wszystko to przy maksymalnym nastawieniu na wygodę i ergonomię.
                </p>

                <p className="text-lg text-justify leading-relaxed mb-4">
                    Służymy pomocą i radą na każdym etapie współpracy. Czy chodzi o wybór pojedynczego mebla lub koncepcję, czy też o całościowy projekt wraz z realizacją.
                </p>

                <p className="text-lg text-justify leading-relaxed mb-4">
                    Wnętrza widzimy ponadczasowo, bez względu na przychodzące i odchodzące mody. Subtelność, ciekawość i przywiązanie do detalu w połączeniu z rzemiosłem, minimalizmem, ale także tradycją to kwintesencja naszych marek. A wszystko po to, aby ubrać Państwa wnętrza w szlachetny styl, który nie przemija.
                </p>

                <p className="text-lg text-justify leading-relaxed mb-4">
                    Zapraszamy do naszego salonu sprzedaży, gdzie w pięknie zaaranżowanych przestrzeniach zobaczycie Państwo luksusowe meble, zarówno te do salonu, jak i sypialni oraz kuchni. Galeria Wnętrza od lat współpracuje z najbardziej uznanymi europejskimi markami.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Nasza oferta</h2>
                <ul className="list-disc list-inside text-lg leading-relaxed">
                    <li>Pojedyncze produkty do natychmiastowego kupna z naszej ekspozycji we Wrocławiu lub Poznaniu.</li>
                    <li>Europejskie marki z najwyższej półki.</li>
                    <li>Luksusowe wyposażenie wnętrz: Galotti & Radice, Poltrona Frau, Baxter, Molteni & C, Rimadesio, Moroso, Zanotta, Living Divani, Riva 1920, Desalto, Vitra, Potocco, Porada, Alivar, Cor, Freifrau, Classicon, Miniforms, Lapalma, Petite Friture, Kartell, Magis, Kristalia, Ligne Roset.</li>
                    <li>Eleganckie oświetlenie: Labra, Chors, Brokis, Nemo, Vibia, Flos, Foscarini, Olev, Davide Groppi, Penta.</li>
                    <li>Piękne meble ogrodowe: Tribu, Ethimo, Roda, Paola Lenti, Emu.</li>
                    <li>Dywany: Jan Kath, Jacaranda, Gloran.</li>
                    <li>Wyposażenie łazienki: Agape, Casabath.</li>
                </ul>

                <p className="text-lg text-justify leading-relaxed mt-8">
                    Nasza firma to również studio projektowe i galeria sztuki użytkowej.
                </p>

                <p className="text-lg text-justify leading-relaxed mt-4">
                    Jesteśmy ludźmi, którzy do życia podchodzą z pasją i odwagą. Z pasją podchodzimy też do naszej pracy. Mamy nadzieję, że zechcecie Państwo poznać nas bliżej i obdarzyć zaufaniem przy współprojektowaniu i urządzaniu niepowtarzalnych wnętrz.
                </p>
            </div>
            <Footer />
        </>
    );
}

export default Onas;
