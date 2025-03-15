"use client"; // ← Dodaj to na początku pliku!

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState<string>("PL");
  const [currency, setCurrency] = useState<string>("PLN");

  return (
    <>
      {/* Cały nagłówek i menu (stała pozycja) */}
      <header className="fixed top-0 w-full z-50 shadow-2xl border-b border-gray-500 bg-white">
        {/* Pasek kontaktowy */}
        <div className="w-full bg-black text-gray-400 py-2 px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 pl-32">
            <div className="flex items-center space-x-2">
              <img src="/sluchawka.svg" alt="Telefon" className="w-4 h-4 filter grayscale brightness-50" />
              <span>+48 123 456 789</span>
              <div className="mx-4">|</div>
            </div>
            <div className="flex items-center space-x-2">
              <span>✉ kontakt@example.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 pr-32">
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <span>ZALOGUJ SIĘ</span>
              <img src="/user.svg" alt="Logowanie" className="w-6 h-6" />
            </a>
            <div className="mx-4">|</div>
            {/* Wybór waluty */}
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
            {/* Wybór języka */}
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
        <div className="w-full bg-gray-50 text-black px-8 flex h-[120px]">
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
                  <a href="#" className="hover:font-bold hover:underline">OŚWIETLENIE</a>
                  <a href="#" className="hover:font-bold hover:underline">KUCHNIE I GARDEROBY</a>
                  <a href="#" className="hover:font-bold hover:underline">DRZWI</a>
                  <a href="#" className="hover:font-bold hover:underline">GALERIA</a>
                  <a href="#" className="hover:font-bold hover:underline">DODATKI</a>
                  <a href="#" className="hover:font-bold hover:underline">OGRÓD I SPA</a>
                  <a href="#" className="hover:font-bold hover:underline">BIURA I HORECA</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
