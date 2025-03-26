import React from "react";
const PoradaExpertaSection = () => {
    return (
        <div className="w-screen h-[600px] bg-white flex items-center justify-center">

            {/* zawartość  nowosci */}
            <div className="w-full h-[650px] bg-white flex">

                <div className="w-1/3 flex flex-col bg-white items-center justify-start border-r border-white px-25 pt-40">
                    <div className="w-full flex flex-col items-start">
                        <h3 className="text-black text-xl font-thin font-sans min-h-[40px]">Nasze doswiadczenie<br />Twoja historia</h3>
                        <h1 className="text-black text-5xl font-serif font-normal min-h-[40px] mt-6">Porada eksperta</h1>
                        <p className="mt-8 text-black text-lg">to wsparcie dla Ciebie w realizacji marzen.</p>
                        <p className="mt-8 text-black text-sm font-thin font-sans">Skorzystaj z doswiadczenia naszych ekspertow,<br />fachowego doradztwa w zakresie doboru najlepszych<br />rozwiazan dla twojego Wnetrza</p>
                        <a href="/nowosci" className="mt-12 bg-black text-white text-lg font-normal py-0 px-18 transition-colors duration-900 hover:bg-gray-500 hover:text-white tracking-[0.2em] inline-block">SKORZYSTAJ</a>
                    </div>
                </div>
                {/* Prawa sekcja */}
                <div className="flex-1 min-w-[66.66%] bg-white overflow-hidden flex flex-col items-center justify-center">
                    <video autoPlay muted loop className="w-full max-w-[800px] h-auto">
                        <source src="/videos/eksperci.mp4" type="video/mp4" />
                        Twoja przeglądarka nie obsługuje elementu wideo.
                    </video>
                </div>
            </div>
        </div>
    );
};
export default PoradaExpertaSection;