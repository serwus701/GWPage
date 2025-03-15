import { useRef, useState, useEffect } from "react";


export default function Carousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -600, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 600, behavior: "smooth" });
        }
    };
    useEffect(() => {
        checkScroll();
        if (scrollContainerRef.current) {
            scrollContainerRef.current.addEventListener("scroll", checkScroll);
        }
        return () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.removeEventListener("scroll", checkScroll);
            }
        };
    }, []);

    return (
        <div className="relative w-full flex items-center">
            {/* Przycisk przewijania w lewo */}
            {canScrollLeft && (
                <button
                    className="absolute top-1/3 left-2 z-50 transform -translate-y-1/2 bg-white/10 p-3  shadow-md hover:bg-gray-50 transition"
                    onClick={scrollLeft}
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

            {/* Kontener z przewijaniem */}
            <div
                ref={scrollContainerRef}
                className="w-full overflow-hidden flex space-x-6 p-6 scroll-smooth"
            >
                <div className="flex space-x-6">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="w-[530px] h-[570px] bg-white flex flex-col items-center justify-center text-xl font-bold shadow-none transition-shadow duration-300 hover:shadow-[10px_15px_25px_rgba(0,0,0,0.3)] pt-[50px] pb-20 relative">
                            <div className="w-full h-full relative flex items-start justify-center">
                                <a href={`/Foto/kominek${index + 1}.jpg`} className="w-[calc(100%-50px)] h-[calc(100%-50px)]">
                                    <img src="/serce.svg" alt="Heart" className="absolute top-1 end-10 w-6 z-10" />
                                    <img src={`/Foto/kominek${index + 1}.jpg`} alt="Fotel" className="w-full h-full object-cover" />
                                </a>
                            </div>
                            <p className="mt-8 text-center">Firma {index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Przycisk przewijania w prawo */}
            {canScrollRight && (
                <button
                    className="absolute top-1/3 right-2 transform -translate-y-1/2 bg-white/10 p-3  shadow-md hover:bg-white/70 transition"
                    onClick={scrollRight}
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
