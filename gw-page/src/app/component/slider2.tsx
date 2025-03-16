"use client";
import { useState } from "react";

function Slider1() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { src: "/Foto/pano7.webp", title: "B&B Italia", description: "Wybierz dla siebie produkty z kultowej fabryki produkującej najwyższej jakości meble na świecie.", link: "/nowosci" },
        { src: "/Foto/fotel2.jpg", title: "Poliform", description: "Kulturalne i współczesne piękno, ponadczasowa elegancja oraz dążenie do doskonałości technicznej.", link: "/nowosci" },
        { src: "/Foto/kanapa2.jpg", title: "Baxter", description: "Włoska firma rodzinna wywodząca się z miłości do najszlachetniejszych skór i tradycyjnego rzemiosła.", link: "/nowosci" },
        { src: "/Foto/lampa4.jpg", title: "Vitra", description: "Marka-ikona, realizująca najbardziej nowatorskie projekty czołowych twórców wzornictwa przemysłowego.", link: "/nowosci" },
        { src: "/Foto/lozko3.jpg", title: "Serge Mouille", description: "Serge Mouille, mistrz oświetlenia, znany ze swoich rzeźbiarskich, ponadczasowych projektów.", link: "/nowosci" },
        { src: "/Foto/star wars.jpg", title: "Star Wars", description: "Marka-ikona, realizująca najbardziej nowatorskie projekty czołowych twórców wzornictwa przemysłowego.", link: "/nowosci" }
    ];

    // Funkcja do ręcznego przewijania slajdów
    const scrollLeft = () => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }
    };

    const scrollRight = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide((prev) => prev + 1);
        }
    };

    return (
        <div className="relative w-screen h-[680px] bg-white flex items-center justify-center overflow-hidden">

            {/* Przycisk przewijania w lewo - tylko jeśli nie jesteśmy na pierwszym slajdzie */}
            {currentSlide > 1 && (
                <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-3 rounded-md shadow-md hover:bg-white/70 transition z-10"
                    onClick={scrollLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
            )}

            {/* Kontener na slajdy */}
            <div className="relative w-1/3 h-full flex transition-transform duration-500 ease-in-out space-x-3"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex flex-col items-start justify-center bg-white p-2 flex-shrink-0">
                        <img src={slide.src} alt={slide.title} className="w-[95%] h-[70%] object-cover" />
                        {/* Opis pod zdjęciem */}
                        <div className="text-left mt-4 px-6">
                            <h1 className="text-2xl font-serif font-semibold text-black">{slide.title}</h1>
                            <p className="text-md text-gray-600 mt-2">{slide.description}</p>

                            {/* Przycisk pod opisem */}
                            <div className="mt-6">
                                <a href={slide.link} className="w-80 bg-white border-1 border-black text-black text-lg text-center font-normal  px-6 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block uppercase">
                                    {slide.title}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Przycisk przewijania w prawo - tylko jeśli nie jesteśmy na ostatnim slajdzie */}
            {currentSlide < slides.length - 2 && (
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-3 rounded-md shadow-md hover:bg-white/70 transition z-10"
                    onClick={scrollRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            )}
        </div>
    );
}

export default Slider1;
