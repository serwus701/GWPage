import { useState, useRef, useEffect } from "react";

const slides = [
    { src: "/Foto/pano7.webp", title: "B&B Italia", description: "Wybierz dla siebie produkty z kultowej fabryki produkującej najwyższej jakości meble na świecie.", link: "/nowosci" },
    { src: "/Foto/fotel2.jpg", title: "Poliform", description: "Kulturalne i współczesne piękno, ponadczasowa elegancja oraz dążenie do doskonałości technicznej.", link: "/nowosci" },
    { src: "/Foto/kanapa2.jpg", title: "Baxter", description: "Włoska firma rodzinna wywodząca się z miłości do najszlachetniejszych skór i tradycyjnego rzemiosła.", link: "/nowosci" },
    { src: "/Foto/lampa4.jpg", title: "Vitra", description: "Marka-ikona, realizująca najbardziej nowatorskie projekty czołowych twórców wzornictwa przemysłowego.", link: "/nowosci" },
    { src: "/Foto/lozko3.jpg", title: "Serge Mouille", description: "Serge Mouille, mistrz oświetlenia, znany ze swoich rzeźbiarskich, ponadczasowych projektów.", link: "/nowosci" },
    { src: "/Foto/star wars.jpg", title: "Star Wars", description: "Marka-ikona, realizująca najbardziej nowatorskie projekty czołowych twórców wzornictwa przemysłowego.", link: "/nowosci" }
];

export default function Carousel2() {
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
                        {/* Opis pod zdjęciem */}
                        <div className="w-3/4 text-left mt-4">
                            <h1 className="text-2xl font-serif font-semibold text-black">{slide.title}</h1>
                            <p className="text-md text-black mt-2">{slide.description}</p>
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

