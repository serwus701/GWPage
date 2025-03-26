import React from "react";
import Carousel from "./carousel";

const NowosciSection = () => {
    return (
        <>
            {/* Desktop version */}
            <div className="hidden md:flex w-full h-[650px] bg-white">
                <div className="w-1/3 flex flex-col items-center justify-start border-r border-white px-[100px] pt-40">
                    <div className="w-full flex flex-col items-start">
                        <h3 className="text-black text-xl font-sans min-h-[40px]">251 NOWE PRODUKTY</h3>
                        <h1 className="mt-6 text-black text-5xl font-serif font-bold">Co Nowego</h1>
                        <p className="mt-10 text-black text-lg">Bądź na bieżąco z nowymi produktami</p>
                        <a
                            href="/nowosci"
                            className="mt-12 bg-black text-white text-lg font-normal py-1 px-[88px] transition-colors duration-300 hover:bg-gray-500 tracking-[0.2em] inline-block"
                        >
                            NOWOŚCI
                        </a>
                    </div>
                </div>
                <div className="flex-1 min-w-[66.66%] bg-white overflow-hidden flex">
                    <Carousel />
                </div>
            </div>

            {/* Mobile version */}
            <div className="block md:hidden w-full bg-white pt-8 px-6">
                <div className="flex flex-col items-start">
                    <h3 className="text-black text-lg font-sans min-h-[40px]">251 NOWE PRODUKTY</h3>
                    <h1 className="mt-4 text-black text-3xl font-serif font-bold">Co Nowego</h1>
                    <p className="mt-6 text-black text-base">Bądź na bieżąco z nowymi produktami</p>
                    <a
                        href="/nowosci"
                        className="mt-8 bg-black text-white text-base font-normal py-2 px-10 transition-colors duration-300 hover:bg-gray-500 tracking-[0.2em] inline-block"
                    >
                        NOWOŚCI
                    </a>
                </div>

                {/* Carousel under the text */}
                <div className="mt-8">
                    <Carousel />
                </div>
            </div>
        </>
    );
};

export default NowosciSection;
