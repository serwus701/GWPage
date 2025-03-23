import Link from "next/link";

function Footer() {
    return (
        <div>
            <div className="w-full bg-gray-300 flex flex-col px-4 md:px-12 lg:px-24 py-10">
                {/* Górna część */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
                    <div className="w-full lg:w-1/3 flex flex-col font-bold gap-y-3">
                        <span className="text-lg">O GALERII WNĘTRZA</span>
                        <Link href="/onas" className="text-lg font-light text-black hover:text-gray-500">O NAS</Link>
                        <a href="/brands" className="text-lg font-light text-black hover:text-gray-500">MARKI</a>
                        <a href="#" className="text-lg font-normal text-black hover:text-gray-500">SHOWROOMY</a>
                        <a href="#" className="text-lg font-normal text-black hover:text-gray-500">JAK DOJECHAĆ</a>
                        <a href="#" className="text-lg font-normal text-black hover:text-gray-500">KONTAKT</a>
                    </div>

                    <div className="w-full lg:w-1/3 flex flex-col font-bold gap-y-3">
                        <span className="text-lg">INFORMACJE</span>
                        <a href="/politykaPrywatnosci" className="text-lg font-normal text-black hover:text-gray-500">POLITYKA PRYWATNOŚCI I COOKIES</a>
                        <a href="/regulamin" className="text-lg font-normal text-black hover:text-gray-500">REGULAMIN</a>
                    </div>

                    <div className="w-full lg:w-1/3 flex flex-col font-bold gap-y-3">
                        <span className="text-lg">DOŁĄCZ</span>
                        <Link href="https://www.instagram.com/galeria_wnetrza/" className="text-lg font-normal text-black hover:text-gray-500">INSTAGRAM</Link>
                        <Link href="https://www.facebook.com/GaleriaWnetrzaWroclaw" className="text-lg font-normal text-black hover:text-gray-500">FACEBOOK</Link>
                        <a href="#" className="text-lg font-normal text-black hover:text-gray-500">LINKEDIN</a>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-300 flex flex-col items-center px-4 py-10">
                <div className="w-24 h-[5px] bg-black mb-6"></div>
                <h2 className="font-normal text-black text-lg text-center mb-6">NAJNOWSZE TRENDY, INSPIRACJE I WIĘCEJ:</h2>
                <div className="flex flex-col sm:flex-row items-center w-full max-w-xl gap-4">
                    <input
                        type="email"
                        placeholder="Wpisz swój adres e-mail"
                        className="flex-1 px-4 py-2 bg-white border border-gray-300 text-black w-full"
                    />
                    <button className="px-6 py-2 bg-gray-100 text-black border border-gray-300 hover:text-gray-300 transition-all duration-700 w-full sm:w-auto">
                        SUBSKRYBUJ
                    </button>
                </div>
            </div>

            {/* Dolna belka */}
            <div className="w-full bg-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-16 py-6 gap-4">
                <div className="flex space-x-6">
                    <a href="https://www.facebook.com/GaleriaWnetrzaWroclaw" target="_blank" rel="noopener noreferrer">
                        <img src="/facebookIcon.svg" alt="facebook" className="w-6 h-6" />
                    </a>
                    <img src="/linkEdlin.svg" alt="linkedin" className="w-6 h-6" />
                    <a href="https://www.instagram.com/galeria_wnetrza/" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.svg" alt="instagram" className="w-6 h-6" />
                    </a>
                </div>
                <p className="text-gray-300 text-sm text-center sm:text-right">© 2025 DIJKSTRA i MRóWKA sp. z o.o. Wszystkie prawa zastrzeżone</p>
            </div>
        </div>
    );
}

export default Footer;
