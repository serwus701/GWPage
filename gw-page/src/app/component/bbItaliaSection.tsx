import React from "react";
const BbItaliaSection = () => {
    return (


        <div className="w-screen h-[600px] bg-gray-800 flex">

            <div className="w-1/3 flex flex-col items-start justify-center p-8 text-white">
                <h3 className="text-lg font-thin  mb-10">180 PRODUKTÓW</h3>
                <h1 className="text-5xl font-serif font-light">B&B Italia</h1>
                <p className="text-lg mt-2">Wybierz dla siebie produkty z kultowej fabryki</p>
                <p className="text-lg mb-12">produkującej najwyższej jakości meble na świecie</p>
                <a
                    href="/nowosci"
                    className="mt-6  text-black text-lg font-sm py-0 px-20 border-1 border-black transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">
                    B&B ITALIA
                </a>
            </div>
            <div className="w-2/3 h-full pl-17">
                <img src="/Foto/pano7.webp" alt="pano1" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};
export default BbItaliaSection;