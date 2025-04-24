import React from "react";
const NaszeSklepy = () => {
    return (
        <div className="w-screen h-[480px] bg-gray-200 flex flex-col items-center justify-center">
            {/* Sekcja nagłówka */}
            <div className="w-full text-center relative">
                <h2 className="font-serif text-black text-5xl">Nasze Sklepy</h2>
                {/* Czarna linia na dole nagłówka */}
                <div className="w-24 h-[8px] bg-black mx-auto mt-12"></div>
            </div>
            <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">
                <div className="w-1/3 flex flex-col items-center justify-center border-r border-gray-200 px-4">
                    <img src="/Herb_wroclaw.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
                    <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Bielany Wrocławskie (Wrocław)<picture></picture></h3>
                    <p className="text-gray-500 text-center text-sm mt-2">ul. Szwedzka 5A<br />55-040 Bielany Wrocławskie<br />Poland<br /></p>
                    <a href="/nowosci" className="mt-12 bg-black text-white text-sm font-normal py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">WROCŁAW</a>

                </div>

                <div className="w-1/3 flex flex-col items-center justify-center border-r border-gray-200 px-4">
                    <img src="/Herb_Poznan.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
                    <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Poznań</h3>
                    <p className="text-gray-500 text-center text-sm mt-2">ul. Głogowska 40<br />(przy Parku Wilsona)<br />60-736 Poznań<br />Poland</p>
                    <a href="/nowosci" className="mt-12 bg-black text-white text-sm font-normal py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">POZNAŃ</a>

                </div>

                <div className="w-1/3 flex flex-col items-center justify-center border-r border-gray-200 px-4">
                    <img src="/Herb_Warszawa.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
                    <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Rimadesio Showroom</h3>
                    <p className="text-gray-500 text-center text-sm mt-2">ul. Piękna 20 (wejście od Kruczej)<br />00-549 Warszawa<br />Poland</p>
                    <a href="/nowosci" className="mt-12 bg-black text-white text-sm font-normal py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">WARSZAWA</a>

                </div>


            </div>
        </div>

    );
};
export default NaszeSklepy;