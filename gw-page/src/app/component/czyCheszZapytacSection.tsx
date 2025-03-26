import React from "react";
const CzyChceszZapytacSection = () => {
    return (
        <div className="w-screen h-[480px] bg-gray-200 flex flex-col items-center justify-center">
            {/* Sekcja nagłówka */}
            <div className="w-full text-center relative">
                <h2 className="font-serif text-black text-5xl">Chcesz nas o coś zapytać?</h2>
                {/* Czarna linia na dole nagłówka */}
                <div className="w-24 h-[8px] bg-black mx-auto mt-12"></div>
            </div>
            <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">
                <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
                    <img src="/telefonBig.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
                    <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Zadzwoń</h3>
                    <p className="text-gray-500 text-center text-sm mt-2">Zadwoń do jednego z naszych<br />Opiekunów Klienta<br /><br /></p>
                    <a href="/nowosci" className="mt-12 bg-black text-white text-sm font-normal py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">OPIEKUN KLIENTA</a>

                </div>

                <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
                    <img src="/koperta.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
                    <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Napisz mail</h3>
                    <p className="text-gray-500 text-center text-sm mt-2">Napisz do nas - z chęcią odpowiemy na<br />Twoje pytania<br /><br /></p>
                    <a href="/nowosci" className="mt-12 bg-black text-white text-sm font-normal py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">OPIEKUN KLIENTA</a>

                </div>

                <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
                    <img src="/odwiedzNas.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
                    <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Odwiedź nas</h3>
                    <p className="text-gray-500 text-center text-sm mt-2">Przyjedź do naszych showroomów we<br />Wrocławiu,Warszawie lub Poznaniu lub<br />zobacz nas wirtualnie</p>
                    <a href="/nowosci" className="mt-12 bg-black text-white text-sm font-normal py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">JAK DOJECHAĆ?</a>

                </div>

                <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
                    <img src="/showrooms.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
                    <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Showroomy</h3>
                    <p className="text-gray-500 text-center text-sm mt-2"><br /><br /><br /></p>
                    <a href="/nowosci" className="mt-12 bg-black text-white text-sm font-normall py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">ZOBACZ SHOWROOMY</a>

                </div>
            </div>
        </div>

    );
};
export default CzyChceszZapytacSection;