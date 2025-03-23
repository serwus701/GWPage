import { useState, useRef, useEffect } from "react";

const slides = [
    { src: "/Foto/krzeslo1.jpg", title: "Ikony Designu", description: "Wybierz dla siebie produkty z kultowej fabryki produkującej najwyższej jakości meble na świecie.", link: "/nowosci" },
    { src: "/Foto/krzeslo2.jpg", title: "Japandi | Eco", description: "Kulturalne i współczesne piękno, ponadczasowa elegancja oraz dążenie do doskonałości technicznej.", link: "/nowosci" },
    { src: "/Foto/krzeslo3.jpg", title: "Unikatowy", description: "Włoska firma rodzinna wywodząca się z miłości do najszlachetniejszych skór i tradycyjnego rzemiosła.", link: "/nowosci" },
    { src: "/Foto/krzeslo4.jpg", title: "Hampton", description: "Marka-ikona, realizująca najbardziej nowatorskie projekty czołowych twórców wzornictwa przemysłowego.", link: "/nowosci" },
    { src: "/Foto/krzeslo5.jpg", title: "Wspolczesny Design", description: "Serge Mouille, mistrz oświetlenia, znany ze swoich rzeźbiarskich, ponadczasowych projektów.", link: "/nowosci" },
    { src: "/Foto/tron.jpg", title: "Art Deco", description: "Serge Mouille, mistrz oświetlenia, znany ze swoich rzeźbiarskich, ponadczasowych projektów.", link: "/nowosci" },
    { src: "/Foto/krzeslo6.jpg", title: "Tradycyjny", description: "Serge Mouille, mistrz oświetlenia, znany ze swoich rzeźbiarskich, ponadczasowych projektów.", link: "/nowosci" },
    { src: "/Foto/krzeslo7.jpg", title: "Minimalistyczny", description: "Serge Mouille, mistrz oświetlenia, znany ze swoich rzeźbiarskich, ponadczasowych projektów.", link: "/nowosci" },
    { src: "/Foto/krzeslo8.jpg", title: "Skandynawski", description: "Serge Mouille, mistrz oświetlenia, znany ze swoich rzeźbiarskich, ponadczasowych projektów.", link: "/nowosci" },

];

export default function Carousel1() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;
    const visibleSlides = 3;
    const maxSlide = totalSlides - visibleSlides;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <div className="relative w-full flex bg-white items-center overflow-hidden ">
            {/* Przycisk przewijania w lewo */}
            {currentSlide > 0 && (
                <button
                    className="absolute top-1/3 left-2 z-50 transform -translate-y-1/2 bg-white/10 p-3  shadow-md hover:bg-white/70 transition"
                    onClick={prevSlide}
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="gray"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-12 h-18"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
            )}

            {/* Kontener na slajdy */}
            <div className="relative w-full flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-1/3 flex flex-col items-center justify-center flex-shrink-0 ">
                        <img src={slide.src} alt={slide.title} className="w-3/4 h-[70%] object-cover" />
                        <div className="text-center mt-4 px-6">
                            <h1 className="text-4xl font-serif font-thin text-black mb-18">{slide.title}</h1>
                            <a href={slide.link} className="w-90 bg-white border-1 border-black text-black text-lg text-center font-normal  px-6 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block uppercase">
                                {slide.title}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Przycisk przewijania w prawo */}
            {currentSlide < maxSlide && (
                <button
                    className="absolute top-1/3 right-2 z-50 transform -translate-y-1/2 bg-white/10 p-3  shadow-md hover:bg-white/70 transition"
                    onClick={nextSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="gray"
                        strokeWidth="1"

                        className="w-12 h-18"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            )}
        </div>
    );
}

