import Link from "next/link"

function Footer() {
    return (
        <div>
            <div className="w-screen h-[300px] bg-gray-300 flex flex-col pl-50 pr-5">
                {/* Górna 60% */}
                <div className="h-[70%] flex items-start pt-8 w-full">
                    <div className="w-1/3 flex flex-col items-start font-bold px-10 gap-y-3">
                        <span className="text-lg">O GALERII WNĘTRZA</span>
                        <Link href="/onas" className="text-lg font-light text-black hover:text-gray-500">O NAS</Link>
                        <a href="/brands" className="text-lg font-light text-black hover:text-gray-500">MARKI</a>
                        <a href="#" className="text-lg font-normal text-black hover:text-gray-500">SHOWROOMY</a>
                        <a href="#" className="text-lg font-normal text-black hover:text-gray-500">JAK DOJECHAĆ</a>
                        <a href="#" className="text-lg font-normal text-black hover:text-gray-500">KONTAKT</a>
                    </div>


                    <div className="w-1/3 flex flex-col items-start font-bold px-10 gap-y-3">
                        <span className="text-lg">INFORMACJE</span>
                        <a href="/politykaPrywatnosci" className="text-lg font-normal text-black hover:text-gray-500">POLITYKA PRYWATNOSCI I COOKIES</a>
                        <a href="/regulamin" className="text-lg font-normal text-black hover:text-gray-500">REGULAMIN</a>
                    </div>


                    <div className="w-1/3 flex flex-col items-start font-bold px-10 gap-y-3">
                        <span className="text-lg">DOŁĄCZ</span>
                        <a href="#" className="text-lg font-normal text-black hover:text-gray-500">INSTAGRAM</a>
                        <Link href="https://www.facebook.com/GaleriaWnetrzaWroclaw" className="text-lg font-normal text-black hover:text-gray-500">FACEBOOK</Link>
                        <a href="#" className="text-lg font-normal text-black hover:text-gray-500">LINKEDIN</a>
                    </div>
                </div>
            </div>

            {/* Dolna 40% */}
            <div className="h-[30%]  bg-gray-300 flex flex-col items-center justify-start pt-4 w-full">
                <div className="w-[130px] h-[5px] bg-black mb-10"></div>
                <h2 className="font-normall text-black text-lg mb-10 text-center">NAJNOWSZE TRENDY, INSPIRACJE I WIĘCEJ:</h2>

                <div className="flex items-center mb-12">
                    <input
                        type="Twój adres e-mail"
                        placeholder="Wpisz swój adres e-mail"
                        className="px-4 py-2 bg-white border border-gray-300 w-100 text-black " />
                    <button className="px-6 py-2 bg-gray-100 text-black  border border-gray-300 w-60 hover:text-gray-300 transition-all duration-700">
                        SUBSKRYBUJ
                    </button>
                </div>
            </div>
            <div className="w-screen h-[80px] bg-[#2a2a2a] flex items-center justify-between px-70">
                {/* Sekcja ikon - wyrównana do lewej */}
                <div className="flex space-x-6">
                    <img src="/facebookIcon.svg" alt="facebook" className="w-6 h-6" />
                    <img src="/linkEdlin.svg" alt="linkedin" className="w-6 h-6" />
                    <img src="/instagram.svg" alt="instagram" className="w-6 h-6" />
                </div>

                {/* Sekcja tekstu - wyrównana do prawej */}
                <p className="text-gray-300">© 2025 DIJKSTRA i MRóWKA sp. z o.o Wszystkie prawa zastrzeżone</p>
            </div>

        </div >

    )
}

export default Footer