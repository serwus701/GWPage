import { useEffect, useState } from "react";

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { type: "logo" },
        { type: "video", src: "/videos/video1.mp4" },
        { type: "video", src: "/videos/video2.mp4" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Przesuwa slajd co 5 sekund
        return () => clearInterval(interval);
    }, []);

    return (

        <div className="relative w-screen h-screen  overflow-hidden">

            <div
                className="flex transition-transform duration-1000"
                style={{ width: `${slides.length * 100}%`, transform: `translateX(-${currentSlide * (100 / slides.length)}%)` }}>
                {/* Pierwszy slajd - Logo */}
                <div className="w-screen h-screen flex items-center justify-center bg-gray-800 flex-shrink-0">
                    <h1 className="text-7xl text-white font-bold">Galeria Wnętrza</h1>
                </div>

                {/* Pozostałe slajdy - Filmy */}
                {slides.map((slide, index) =>
                    slide.type === "video" ? (
                        <div key={index} className="sm:w-screen h-screen flex-shrink-0">
                            <video autoPlay loop muted className="w-screen h-screen object-cover">
                                <source src={slide.src} type="video/mp4" />
                            </video>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
}
export default Slider;