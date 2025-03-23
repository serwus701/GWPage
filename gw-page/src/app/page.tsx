"use client";

import Link from "next/link";
{/*import { useState } from "react";*/ }
import { useState, useEffect } from "react";
import Footer from "./component/footer";
import Slider from "./component/slider1";
import Carousel from "./component/carousel";
import Slider1 from "./component/slider2";
import Carousel1 from "./component/carousel1";
import Carousel2 from "./component/carousel2";
import Carousel3 from "./component/carousel3";
import { useTranslation } from "react-i18next";
import '../utils/translations/i18n'

export default function Home() {
  const [currency, setCurrency] = useState<string>("PLN");
  const { t, i18n } = useTranslation()

  return (
    <>
      {/* Cały nagłówek i menu (stała pozycja) */}
      <div className="fixed top-0  w-full z-50 shadow-2xl border-b border-gray-500 bg-white">

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
              <span>{t('homepage.login')}</span>
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
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option className="bg-white text-black" value="pl">POLSKI</option>
              <option className="bg-white text-black" value="en">ENGLISH</option>
            </select>
          </div>
        </div>
        {/*koniec czarnego paska*/}

        <div className="w-full bg-gray-50 text-black px-8 flex h-[120px]">
          {/* Lewa sekcja - 1/4 szerokości */}
          <div className="w-1/4 h-full flex justify-end items-center bg-gray-150 p-4">
            <Link href="/" className="text-4xl font-serif font-light">Galeria Wnętrza123</Link>
          </div>

          {/* Prawa sekcja - 3/4 szerokości, podzielona na dwie części */}
          <div className="w-3/4 h-full grid grid-rows-2">


            {/* Górna część */}

            <div className="relative flex justify-center items-center bg-gray-50 w-full px-4">
              {/*linia oddzielajaca*/}
              <div className="absolute bottom-0 left-0 right-[200px] border-b border-gray-300"></div>

              {/* Górna część - Linki i wyszukiwanie */}
              <div className="flex items-center w-full gap-x-6">
                {/* Linki */}
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
                  {/* Ikona lupy */}
                  <img src="/lupa.svg" alt="Szukaj" className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>

                {/* Ikona serca (logowanie) */}
                <a href="#" className="ml-4">
                  <img src="/serce.svg" alt="Logowanie" className="w-10 h-10 text-gray-500 cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Dolna część */}
            <div className="flex justify-center items-center bg-gray-50">

              <div className="flex justify-between items-center w-full px-4">
                {/* Linki */}
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
      </div>

      <div className="overflow-y-auto overflow-x-hidden h-screen pt-[120px]">



        <Slider />



        {/* Nowy kontener pod sliderem */}
        <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">


          <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
            <img src="/domekSuper.svg" className="w-10 h-10 text-black cursor-pointer mt-6 transition-transform duration-300 hover:scale-120" />
            <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Dostawa i montaż</h3>
            <p className="text-gray-500 text-center text-sm mt-2">Nasze dostawy sa ubezpieczone i dowożone<br /> przez wykwalifikowane osoby</p>
          </div>

          <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
            <img src="/globus.svg" className="w-10 h-10 text-black cursor-pointer mt-6 transition-transform duration-300 hover:scale-120" />
            <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Międzynarodowe dostawy</h3>
            <p className="text-gray-500 text-center text-sm mt-2">Dostarczamy na całym swiecie</p><br />
          </div>

          <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
            <img src="/gwarancjaNajjakosci.svg" className="w-10 h-10 text-black cursor-pointer mt-6 transition-transform duration-300 hover:scale-120" />
            <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Gwarancja najlepszej jakości</h3>
            <p className="text-gray-500 text-center text-sm mt-2">Wszystkie nasze produkty są oryginalne</p><br />
          </div>

          <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
            <img src="/oficjalnyDealer.svg" className="w-10 h-10 text-black cursor-pointer mt-6 transition-transform duration-300 hover:scale-120" />
            <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Oficjalny Dealer</h3>
            <p className="text-gray-500 text-center text-sm mt-2">Jesteśmy oficjalnym przedstawicielem <br /> wszystkich oferowanych przez nas marek</p>
          </div>
        </div>

        {/* zawartość  nowosci */}
        <div className="w-full h-[650px] bg-white flex">

          <div className="w-1/3 flex flex-col items-center justify-start border-r border-white px-25 pt-40">
            <div className="w-full flex flex-col items-start">
              <h3 className="text-black text-xl font-sans min-h-[40px]">251 NOWE PRODUKTY</h3>
              <h1 className="mt-6 text-black text-5xl font-serif font-bold">Co Nowego</h1>
              <p className="mt-10 text-black text-lg">Bądź na bieżąco z nowymi produktami</p>
              <a href="/nowosci" className="mt-12 bg-black text-white text-lg font-normal py-1 px-22 transition-colors duration-900 hover:bg-gray-500 hover:text-white tracking-[0.2em] inline-block">NOWOŚCI</a>
            </div>
          </div>
          {/* Prawa sekcja */}
          <div className="flex-1 min-w-[66.66%] bg-white overflow-hidden flex">

            <Carousel></Carousel>

          </div>
        </div>

        <div className="w-screen h-[600px] bg-white flex">

          <div className="w-2/3 h-full pl-17">
            <img src="/Foto/pano7.webp" alt="pano1" className="w-full h-full object-cover" />
          </div>

          <div className="w-1/3 flex flex-col items-start justify-center p-8">
            <h3 className="text-lg font-thin text-black mb-10">180 PRODUKTÓW</h3>
            <h1 className="text-5xl font-serif font-light">B&B Italia</h1>
            <p className="text-lg mt-2">Wybierz dla siebie produkty z kultowej fabryki</p>
            <p className="text-lg mb-12">produkującej najwyższej jakości meble na świecie</p>
            <a
              href="/nowosci"
              className="mt-6  text-black text-lg font-sm py-0 px-20 border-1 border-black transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block"
            >
              B&B ITALIA
            </a>
          </div>
        </div>
        <Carousel2></Carousel2>
        {/*<Slider1></Slider1>*/}

        <div className="w-screen h-[70px] flex flex-col bg-white items-center mt-8 relative w-full">
          <a href="#" className="underline italic font-serif font-normal text-center text-2xl block hover:no-underline">
            Zobacz wszystkie marki
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[1px] bg-black"></div>
        </div>

        <div className="w-screen bg-white p-4 flex flex-col items-center">
          <h1 className="text-5xl  font-bold font-serif mt-4">Jakiego stylu szukasz dla siebie?</h1>
          <p className="text-lg  text-black mt-6">Odkryj nasze produkty sprofilowane dla Ciebie w wybranej stylistyce</p>
        </div>




        <div className="w-screen h-[800px] bg-white
         flex items-center justify-center shadow-2xl border-b border-gray-500 relative z-10">
          <Carousel1></Carousel1>
        </div>


        <div className="w-screen h-[480px] bg-gray-200 flex flex-col items-center justify-center">
          {/* Sekcja nagłówka */}
          <div className="w-full text-center relative">
            <h2 className="font-serif text-black text-5xl">Chcesz nas o coś zapytać?</h2>
            {/* Czarna linia na dole nagłówka */}
            <div className="w-24 h-[8px] bg-black mx-auto mt-12"></div>
          </div>
          <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">


            <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
              <img src="/telefonBig.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
              <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Zadzwoń</h3>
              <p className="text-gray-500 text-center text-sm mt-2">Zadwoń do jednego z naszych<br />Opiekunów Klienta<br /><br /></p>
              <a href="/nowosci" className="mt-12 bg-black text-white text-sm font-normal py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">OPIEKUN KLIENTA</a>

            </div>

            <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
              <img src="/koperta.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
              <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Napisz mail</h3>
              <p className="text-gray-500 text-center text-sm mt-2">Napisz do nas - z chęcią odpowiemy na<br />Twoje pytania<br /><br /></p>
              <a href="/nowosci" className="mt-12 bg-black text-white text-sm font-normal py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">OPIEKUN KLIENTA</a>

            </div>

            <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
              <img src="/odwiedzNas.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
              <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Odwiedź nas</h3>
              <p className="text-gray-500 text-center text-sm mt-2">Przyjedź do naszych showroomów we<br />Wrocławiu,Warszawie lub Poznaniu lub<br />zobacz nas wirtualnie</p>
              <a href="/nowosci" className="mt-12 bg-black text-white text-sm font-normal py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">JAK DOJECHAĆ?</a>

            </div>

            <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
              <img src="/showrooms.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
              <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Showroomy</h3>
              <p className="text-gray-500 text-center text-sm mt-2"><br /><br /><br /></p>
              <a href="/nowosci" className="mt-12 bg-black text-white text-sm font-normall py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">ZOBACZ SHOWROOMY</a>

            </div>
          </div>
        </div>

        <div className="w-screen h-[600px] bg-white flex items-center justify-center">

          {/* zawartość  nowosci */}
          <div className="w-full h-[650px] bg-white flex">

            <div className="w-1/3 flex flex-col bg-white items-center justify-start border-r border-white px-25 pt-40">
              <div className="w-full flex flex-col items-start">
                <h3 className="text-black text-xl font-thin font-sans min-h-[40px]">Nasze doswiadczenie<br />Twoja historia</h3>
                <h1 className="text-black text-5xl font-serif font-normal min-h-[40px] mt-6">Porada eksperta</h1>
                <p className="mt-8 text-black text-lg">to wsparcie dla Ciebie w realizacji marzen.</p>
                <p className="mt-8 text-black text-sm font-thin font-sans">Skorzystaj z doswiadczenia naszych ekspertow,<br />fachowego doradztwa w zakresie doboru najlepszych<br />rozwiazan dla twojego Wnetrza</p>
                <a href="/nowosci" className="mt-12 bg-black text-white text-lg font-normal py-0 px-18 transition-colors duration-900 hover:bg-gray-500 hover:text-white tracking-[0.2em] inline-block">SKORZYSTAJ</a>
              </div>
            </div>
            {/* Prawa sekcja */}
            <div className="flex-1 min-w-[66.66%] bg-white overflow-hidden flex flex-col items-center justify-center">

              <video autoPlay muted loop className="w-full max-w-[800px] h-auto">
                <source src="/videos/eksperci.mp4" type="video/mp4" />
                Twoja przeglądarka nie obsługuje elementu wideo.
              </video>
            </div>

          </div>
        </div>
        <div className="w-screen h-[800px] bg-gray-400 flex items-center justify-center">
          <Carousel3></Carousel3>
        </div>
        <Footer></Footer>
      </div>


    </>
  );
}

