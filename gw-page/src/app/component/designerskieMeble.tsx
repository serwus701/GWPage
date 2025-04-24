
import React from "react";
const DesignerskieMeble = () => {
    return (



        <>

            {/* Desktop version */}
            <div className="hidden md:flex flex-col w-full h-[400px] bg-white items-center justify-center">
                <div id="custom-text" className="text-center max-w-6xl px-4 font-sans ">
                    <h3 className="text-3xl font-bold mb-4">Designerskie meble, kuchnie i oświetlenie</h3>
                    <p className="text-center">Galeria Wnętrza we Wrocławiu, Poznaniu i Warszawie to salony sprzedaży, gdzie na dużych spójnie zaaranżowanych przestrzeniach</p>
                    <p className="text-center">zobaczycie Państwo luksusowe meble, zarówno te do salonu, jak i sypialni oraz kuchni.</p>
                    <br></br>
                    <p className="text-center">Galeria Wnętrza od lat współpracuje z najbardziej znanymi europejskimi markami, takimi jak: Ligne Roset, Moroso, Rimadesio, Molteni &amp; C,</p>
                    <p className="text-center">Baxter, Poltrona Frau, Zanotta, Vitra, Alivar, Kartell, Magis, Misuraemme, Diesel, Poggenpohl, DADA, Agape, które dają pewność najwyższej</p>
                    <p className="text-center">jakości i klasy.</p>
                    <br></br>
                    <p className="text-center">Nasza firma to również studio projektowe i galeria sztuki użytkowej.</p>
                    <br></br>
                    <p className="text-center">Zapraszamy do współpracy z nami.</p>
                </div>
            </div>



            {/* Mobile version */}
            <div className="block md:hidden w-full h-[300px] bg-gray-200 px-4 py-6">



            </div>



        </>
    );

}
export default DesignerskieMeble;

