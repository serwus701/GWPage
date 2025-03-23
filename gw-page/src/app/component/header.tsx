"use client";

import Link from "next/link";
import '../../utils/translations/i18n'
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("PL");
  const [currency, setCurrency] = useState("PLN");

  return (
    <>
      <header className="fixed top-0 w-full z-50 shadow-2xl border-b border-gray-500 bg-white">
        {/* Pasek kontaktowy tylko MOBILE */}
        <div className="block lg:hidden w-full bg-black text-gray-400 py-2 px-4 md:px-8 flex flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 md:pl-16">
            <div className="flex items-center space-x-2">
              <img src="/sluchawka.svg" alt="Telefon" className="w-4 h-4 filter grayscale brightness-50" />
              <span>+48 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/odwiedzNasWhite.svg" alt="Jak dojechać" className="w-4 h-4" />
              <span>Jak dojechać</span>
            </div>
          </div>
        </div>

        {/* Pasek kontaktowy - DESKTOP ONLY */}
        <div className="hidden lg:flex w-full bg-black text-gray-400 py-2 px-8 justify-between items-center text-sm">
          <div className="flex items-center space-x-4 pr-32">
            <div className="flex items-center space-x-2">
              <img src="/sluchawka.svg" alt="Telefon" className="w-4 h-4 filter grayscale brightness-50" />
              <span>+48 123 456 789</span>
              <div className="mx-4">|</div>

              <div className="flex items-center space-x-2">
                <span>✉ kontakt@example.com</span>
              </div>
            </div>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <span>ZALOGUJ SIĘ</span>
              <img src="/user.svg" alt="Logowanie" className="w-6 h-6" />
            </a>
            <div className="mx-4">|</div>
            <select
              className="bg-black text-gray-400 border-none p-1 rounded appearance focus:outline-none focus:ring-0"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option className="bg-white text-black hover:bg-white" value="PLN">PLN</option>
              <option className="bg-white text-black hover:bg-white" value="EUR">EUR</option>
              <option className="bg-white text-black hover:bg-white" value="USD">USD</option>
            </select>
            <div className="mx-4">|</div>
            <select
              className="bg-black text-gray-400 border-none p-1 rounded appearance focus:outline-none focus:ring-0"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option className="bg-white text-black" value="PL">POLSKI</option>
              <option className="bg-white text-black" value="EN">ENGLISH</option>
            </select>
          </div>
        </div>

        {/* Główna nawigacja */}
        <div className="w-full bg-gray-50 text-black px-4 md:px-8 flex flex-col h-auto lg:h-[120px] relative">

          {/* Logo i Mobile Menu (tylko mobile) */}
          <div className="w-full lg:hidden h-[85px] flex justify-between items-center p-4">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <img src="/mobilMenu.svg" alt="Menu" className="w-6 h-6" />
            </button>

            <Link href="/" className="text-xl font-serif font-light">Galeria Wnętrza</Link>
            <div className="flex space-x-3 items-center">
              <img src="/lupa.svg" alt="Szukaj" className="w-5 h-5 cursor-pointer" />
              <img src="/serce.svg" alt="Ulubione" className="w-6 h-6 cursor-pointer" />
            </div>
          </div>

          {/* Nawigacja górna i dolna (tylko desktop) */}
          <div className="hidden lg:flex w-full bg-gray-50 text-black px-8 h-[120px]">
            {/* Logo */}
            <div className="w-1/4 h-full flex justify-end items-center p-4">
              <Link href="/" className="text-4xl font-serif font-light">Galeria Wnętrza</Link>
            </div>

            {/* Nawigacja */}
            <div className="w-3/4 h-full grid grid-rows-2">
              {/* Górna część - Linki i wyszukiwanie */}
              <div className="relative flex justify-center items-center bg-gray-50 w-full px-4">
                {/* Linia oddzielająca */}
                <div className="absolute bottom-0 left-0 right-[200px] border-b border-gray-300"></div>

                <div className="flex items-center w-full gap-x-6">
                  <nav className="flex space-x-6 justify-start font-bold">
                    <Link href="/brands" className="hover:underline">MARKI</Link>
                    <Link href="/stories" className="hover:underline">HISTORIE</Link>
                    <Link href="/Outlet" className="hover:underline">OUTLET</Link>
                  </nav>

                  {/* Pasek wyszukiwania */}
                  <div className="flex items-center border bg-gray-200 border-gray-400 rounded px-2 py-1 w-3/5">
                    <input
                      type="text"
                      placeholder="komoda..."
                      className="w-full bg-transparent focus:outline-none px-2"
                    />
                    <img src="/lupa.svg" alt="Szukaj" className="w-5 h-5 text-gray-500 cursor-pointer" />
                  </div>

                  {/* Ikona serca (ulubione) */}
                  <a href="#" className="ml-4">
                    <img src="/serce.svg" alt="Ulubione" className="w-10 h-10 text-gray-500 cursor-pointer" />
                  </a>
                </div>
              </div>

              {/* Dolna część - Główne kategorie */}
              <div className="flex justify-center items-center bg-gray-50">
                <div className="flex justify-between items-center w-full px-4">
                  <nav className="flex space-x-12 justify-start font-light">
                    <a href="#" className="hover:font-bold hover:underline">MEBLE</a>
                    <a href="#" className="hover:font-bold hover:underline">KUCHNIE</a>
                    <a href="#" className="hover:font-bold hover:underline">OFFICE</a>
                    <a href="#" className="hover:font-bold hover:underline">OUTDOOR</a>
                    <a href="#" className="hover:font-bold hover:underline">DRZWI</a>
                    <a href="#" className="hover:font-bold hover:underline">OŚWIETLENIE</a>
                    <a href="#" className="hover:font-bold hover:underline">DEKORACJE</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-t border-gray-300 flex flex-col items-start px-6 py-4 z-40 lg:hidden">
              <Link href="#" className="py-1">MEBLE</Link>
              <Link href="#" className="py-1">KUCHNIE</Link>
              <Link href="#" className="py-1">OFFICE</Link>
              <Link href="#" className="py-1">OUTDOOR</Link>
              <Link href="#" className="py-1">DRZWI</Link>
              <Link href="#" className="py-1">OŚWIETLENIE</Link>
              <Link href="#" className="py-1">DEKORACJE</Link>
              <Link href="#" className="py-1">MARKI</Link>
              <Link href="#" className="py-1">AKTUALNOSCI</Link>
              <Link href="#" className="py-1">OUTLET</Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
