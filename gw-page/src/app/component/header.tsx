"use client";

import Link from "next/link";
import '../../utils/translations/i18n'
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 shadow-2xl border-b border-gray-500 bg-white">
        {/* Pasek kontaktowy tylko MOBILE */}
        <div className="block lg:hidden w-full bg-black text-gray-400 py-2 px-4 md:px-8 flex flex-row justify-between items-center text-sm">
          {/* Numer telefonu po lewej */}
          <div className="flex items-center space-x-2 md:pl-16">
            <img src="/sluchawka.svg" alt="Telefon" className="w-4 h-4 filter grayscale brightness-50" />
            <span>+48 123 456 789</span>
          </div>

          {/* Jak dojechać po prawej */}
          <div className="flex items-center space-x-2">
            <img src="/odwiedzNasWhite.svg" alt="Jak dojechać" className="w-4 h-4" />
            <span>{t('navbar.whereToFindUs')}</span>
          </div>
        </div>


        {/* Pasek kontaktowy - DESKTOP ONLY */}
        <div className="hidden lg:flex w-full bg-black text-gray-400 py-2 px-8 justify-between items-center text-sm">
          {/* Lewa sekcja */}
          <div className="flex items-center space-x-4 pl-8">
            <div className="flex items-center space-x-2">
              <img src="/sluchawka.svg" alt="Telefon" className="w-4 h-4 filter grayscale brightness-50" />
              <span>+48 123 456 789</span>
            </div>
            <div className="mx-4">|</div>
            <div className="flex items-center space-x-2">
              <span>✉ kontakt@example.com</span>
            </div>
          </div>

          {/* Prawa sekcja */}
          <div className="flex items-center space-x-4 pr-8">
            <a href="#" className="flex items-center space-x-2 hover:underline">
              <span>{t('navbar.login')}</span>
              <img src="/user.svg" alt="Logowanie" className="w-6 h-6" />
            </a>
            <div className="mx-4">|</div>
            <select
              className="bg-black text-gray-400 border-none p-1 rounded appearance-none focus:outline-none focus:ring-0"
              value={i18n.language}
              onChange={handleLanguageChange}
            >
              <option className="bg-white text-black" value="pl">POLSKI</option>
              <option className="bg-white text-black" value="en">ENGLISH</option>
            </select>
          </div>
        </div>


        {/* Główna nawigacja */}
        <div className="w-full bg-gray-50 text-black px-4 md:px-8 flex flex-col h-auto lg:h-[140px] relative">



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
          <div className="hidden lg:flex w-full bg-white text-black px-8 h-[140px]">
            <div className="w-full h-full grid grid-rows-2">

              {/* Górna część */}
              <div className="grid grid-cols-3 items-center bg-white w-full px-4 py-2">
                {/* Lewa strona (np. menu, pusta przestrzeń) */}
                <div className="flex justify-start min-w-[4rem]">{/* zostawione miejsce */}</div>

                {/* Środkowe logo */}
                <div className="flex justify-center">
                  <img
                    src="/foto/xml-shop-logo.webp"
                    alt="Logo"
                    className="h-16 object-contain"
                  />
                </div>

                {/* Wyszukiwarka po prawej */}
                <div className="flex justify-end">
                  <div className="relative w-full max-w-sm">
                    <input
                      type="text"
                      placeholder="Szukaj w naszym katalogu"
                      className="w-full border border-gray-400 rounded px-4 py-2 pr-10 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>


              {/* Dolna część - Główne kategorie */}
              <div className="flex justify-center items-center bg-white">
                <nav className="flex flex-wrap gap-x-8 justify-center font-light text-sm text-center">
                  <Link href="/news" className="hover:font-bold hover:underline">{t('navbar.recents')}</Link>
                  <Link href="/drzwi" className="hover:font-bold hover:underline">{t('navbar.doors')}</Link>
                  <Link href="/kuchnie" className="hover:font-bold hover:underline">{t('navbar.kitchens')}</Link>
                  <Link href="/meble" className="hover:font-bold hover:underline">{t('navbar.furniture')}</Link>
                  <Link href="/oswietlenie" className="hover:font-bold hover:underline">{t('navbar.lighting')}</Link>
                  <Link href="/dekoracje" className="hover:font-bold hover:underline">{t('navbar.decor')}</Link>
                  <Link href="/office" className="hover:font-bold hover:underline">{t('navbar.office')}</Link>
                  <Link href="/brands" className="hover:font-bold hover:underline">{t('navbar.brands')}</Link>
                  <Link href="/outdoor" className="hover:font-bold hover:underline">{t('navbar.outdoor')}</Link>
                  <Link href="/Outlet" className="hover:font-bold hover:underline">{t('navbar.outlet')}</Link>
                </nav>
              </div>

            </div>
          </div>





          {/* Nawigacja górna i dolna (tylko desktop) */}
          {/*} <div className="hidden lg:flex w-full bg-gray-50 text-black px-8 h-[120px]">
            {/* Logo */}
          {/*<div className="w-1/4 h-full flex justify-end items-center p-4">
              <Link href="/" className="text-4xl font-serif font-light">Galeria Wnętrza</Link>
            </div>

            {/* Nawigacja */}
          {/*<div className="w-3/4 h-full grid grid-rows-2">
              {/* Górna część - Linki i wyszukiwanie */}
          {/*<div className="relative flex justify-center items-center bg-gray-50 w-full px-4">
                {/* Linia oddzielająca */}
          {/*<div className="absolute bottom-0 left-0 right-[200px] border-b border-gray-300"></div>

                <div className="flex items-center w-full gap-x-6">
                  <nav className="flex space-x-6 justify-start font-bold">
                    <Link href="/brands" className="hover:underline">MARKI</Link>
                    <Link href="/news" className="hover:underline">AKTUALNOSCI</Link>
                    <Link href="/Outlet" className="hover:underline">OUTLET</Link>
                  </nav>

                  {/* Pasek wyszukiwania */}
          {/*<div className="flex items-center border bg-gray-200 border-gray-400 rounded px-2 py-1 w-3/5">
                    <input
                      type="text"
                      placeholder="komoda..."
                      className="w-full bg-transparent focus:outline-none px-2"
                    />
                    <img src="/lupa.svg" alt="Szukaj" className="w-5 h-5 text-gray-500 cursor-pointer" />
                  </div>*/}

          {/* Ikona serca (ulubione) */}
          {/*<a href="#" className="ml-4">
                    <img src="/serce.svg" alt="Ulubione" className="w-10 h-10 text-gray-500 cursor-pointer" />
                  </a>
                </div>
              </div>*/}

          {/* Dolna część - Główne kategorie */}
          {/*<div className="flex justify-center items-center bg-gray-50">
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
          </div>*/}

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-t border-gray-300 flex flex-col items-start px-6 py-4 z-40 lg:hidden">
              <div className="w-full flex justify-between items-center py-1">
                <Link href="#" className="text-black">MEBLE</Link>
                <span className="text-black">{'>'}</span>
              </div>
              <div className="w-full flex justify-between items-center py-1">
                <Link href="#" className="py-1">KUCHNIE</Link>
                <span className="text-black">{'>'}</span>
              </div>
              <div className="w-full flex justify-between items-center py-1">
                <Link href="#" className="py-1">OFFICE</Link>
                <span className="text-black">{'>'}</span>
              </div>
              <div className="w-full flex justify-between items-center py-1">
                <Link href="#" className="py-1">OUTDOOR</Link>
                <span className="text-black">{'>'}</span>
              </div>
              <div className="w-full flex justify-between items-center py-1">
                <Link href="#" className="py-1">DRZWI</Link>
                <span className="text-black">{'>'}</span>
              </div>
              <div className="w-full flex justify-between items-center py-1">
                <Link href="#" className="py-1">OŚWIETLENIE</Link>
                <span className="text-black">{'>'}</span>
              </div>
              <div className="w-full flex justify-between items-center py-1">
                <Link href="#" className="py-1">DEKORACJE</Link>
                <span className="text-black">{'>'}</span>
              </div>
              {/* Odstęp */}
              <div className="h-4" />
              <Link href="#" className="py-1">MARKI</Link>
              <Link href="#" className="py-1">AKTUALNOSCI</Link>
              <Link href="#" className="py-1">OUTLET</Link>
              {/* Odstęp */}
              <div className="h-4" />
              <Link href="#" className="py-1">ZALOGUJ SIE</Link>
              <div className="h-4" />
              <div className="flex justify-between items-center w-full">
                <Link href="#" className="py-1">KONTAKT</Link>
                <Link href="#" className="py-1">PL / EN</Link>
              </div>

            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
