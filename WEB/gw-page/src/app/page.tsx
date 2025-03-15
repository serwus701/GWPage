"use client";

import Link from "next/link";
{/*import { useState } from "react";*/ }
import { useState, useEffect } from "react";
import Footer from "./component/footer";
import Slider from "./component/slider1";
import Carousel from "./component/carousel";

export default function Home() {
  const [language, setLanguage] = useState<string>("PL");
  const [currency, setCurrency] = useState<string>("PLN");

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
        {/*koniec czarnego paska*/}

        <div className="w-full bg-gray-50 text-black px-8 flex h-[120px]">
          {/* Lewa sekcja - 1/4 szerokości */}
          <div className="w-1/4 h-full flex justify-end items-center bg-gray-150 p-4">
            <Link href="/" className="text-4xl font-serif font-light">Galeria Wnętrza</Link>
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
            <img src="/domekSuper.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
            <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Dostawa i montaż</h3>
            <p className="text-gray-500 text-center text-sm mt-2">Nasze dostawy sa ubezpieczone i dowożone<br /> przez wykwalifikowane osoby</p>
          </div>

          <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
            <img src="/globus.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
            <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Międzynarodowe dostawy</h3>
            <p className="text-gray-500 text-center text-sm mt-2">Dostarczamy na całym swiecie</p><br />
          </div>

          <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
            <img src="/gwarancjaNajjakosci.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
            <h3 className="text-black text-xl font-serif min-h-[40px] flex items-center justify-center">Gwarancja najlepszej jakości</h3>
            <p className="text-gray-500 text-center text-sm mt-2">Wszystkie nasze produkty są oryginalne</p><br />
          </div>

          <div className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
            <img src="/oficjalnyDealer.svg" className="w-10 h-10 text-black cursor-pointer mt-6" />
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
              <a href="/nowosci" className="mt-12 bg-black text-white text-lg font-normal py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">NOWOŚCI</a>
            </div>
          </div>
          {/* Prawa sekcja */}
          <div className="flex-1 min-w-[66.66%] bg-white overflow-hidden flex">

            <Carousel></Carousel>
            {/*<div className="w-full overflow-x-auto flex space-x-4 p-6">
              
              <div className="flex space-x-6">
                <div className="w-[530px] h-[570px] bg-white  flex flex-col items-center justify-center text-xl font-bold block shadow-none transition-shadow duration-300 hover:shadow-[10px_15px_25px_rgba(0,0,0,0.3)] pt-[50px] pb-20 relative">
                  <div className="w-full h-full relative flex items-start justify-center">
                    <a href="/Foto/fotel1.jpg" className="w-[calc(100%-50px)] h-[calc(100%-50px)] ">
                      <img src="/serce.svg" alt="Heart" className="absolute top-1 end-10 w-6 z-10" />
                      <img src="/Foto/fotel1.jpg" alt="Fotel" className="w-full h-full object-cover" />
                    </a>
                  </div>
                  <p className="mt-8 text-center">Firma1</p>
                </div>
                <div className="w-[530px] h-[570px] bg-white  flex flex-col items-center justify-center text-xl font-bold block shadow-none transition-shadow duration-300 hover:shadow-2xl pt-[50px] pb-20 relative">
                  <div className="w-full h-full relative flex items-start justify-center">
                    <a href="/Foto/fotel1.jpg" className="w-[calc(100%-50px)] h-[calc(100%-50px)] ">
                      <img src="/serce.svg" alt="Heart" className="absolute top-1 end-10 w-6 z-10" />
                      <img src="/Foto/stol i krzesla.jpg" alt="Fotel" className="w-full h-full object-cover" />
                    </a>
                  </div>
                  <p className="mt-8 text-center">Firma2</p>
                </div>
                <div className="w-[530px] h-[570px] bg-white  flex flex-col items-center justify-center text-xl font-bold block shadow-none transition-shadow duration-300 hover:shadow-2xl pt-[50px] pb-20 relative">
                  <div className="w-full h-full relative flex items-start justify-center">
                    <a href="/Foto/fotel1.jpg" className="w-[calc(100%-50px)] h-[calc(100%-50px)] ">
                      <img src="/serce.svg" alt="Heart" className="absolute top-1 end-10 w-6 z-10" />
                      <img src="/Foto/lozko6.jpg" alt="Fotel" className="w-full h-full object-cover" />
                    </a>
                  </div>
                  <p className="mt-8 text-center">Firma3</p>
                </div>
                <div className="w-[530px] h-[570px] bg-white  flex flex-col items-center justify-center text-xl font-bold block shadow-none transition-shadow duration-300 hover:shadow-2xl pt-[50px] pb-20 relative">
                  <div className="w-full h-full relative flex items-start justify-center">
                    <a href="/Foto/fotel1.jpg" className="w-[calc(100%-50px)] h-[calc(100%-50px)] ">
                      <img src="/serce.svg" alt="Heart" className="absolute top-1 end-10 w-6 z-10" />
                      <img src="/Foto/lozko7.jpg" alt="Fotel" className="w-full h-full object-cover" />
                    </a>
                  </div>
                  <p className="mt-8 text-center">Firma4</p>
                </div>
                <div className="w-[530px] h-[570px] bg-white  flex flex-col items-center justify-center text-xl font-bold block shadow-none transition-shadow duration-300 hover:shadow-2xl pt-[50px] pb-20 relative">
                  <div className="w-full h-full relative flex items-start justify-center">
                    <a href="/Foto/fotel1.jpg" className="w-[calc(100%-50px)] h-[calc(100%-50px)] ">
                      <img src="/serce.svg" alt="Heart" className="absolute top-1 end-10 w-6 z-10" />
                      <img src="/Foto/tron.jpg" alt="Fotel" className="w-full h-full object-cover" />
                    </a>
                  </div>
                  <p className="mt-8 text-center">Firma5</p>
                </div>

              </div>
            </div>*/}
          </div>
        </div>



        <div className="w-screen h-[600px] bg-gray-100 flex items-center justify-center">
          <img src="/Foto/pano7.webp" alt="pano1" className="w-full h-full object-cover" />

          <div className="w-2/3 h-full bg-gray-400 ">

          </div>

          <div className="w-full flex flex-col items-start">
            <h3>180 PRODUKTÓW</h3>
            <h1>B&B Italia</h1>
            <p>Wybierz dla siebie produkty z kultowej fabryki</p>
            <p>produkujacej najwyższej jakości meble na swiecie</p>
            <a href="/nowosci" className="mt-12 bg-black text-white text-lg font-normal py-1 px-22 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">NOWOŚCI</a>

          </div>



        </div>

        <div className="w-screen h-[673px] bg-gray-00 flex items-start justify-center pt-10">

          <div className="w-full overflow-x-auto flex space-x-4 p-6">

            {/* Przesuwana zawartość */}
            <div className="flex space-x-6">
              <div className="w-[530px] h-[570px] bg-white  flex flex-col items-left justify-center text-xl font-bold block  relative">
                <div className="w-full h-[350] overflow-hidden  relative flex items-start justify-center">
                  <img src="/Foto/fotel2.jpg" alt="Fotel2" className="w-full h-full object-cover" />
                </div>
                <div className="h-[220px] flex flex-col justify-between">
                  <h1 className="mt-8 font-serif font-bold text-2xl">Poliform</h1>
                  <p className="font-light text-base">Kulturalne i współczesne piękno, ponadczasowa elegancja oraz</p>
                  <p className="font-light text-base"> ciągłe dążenie do doskonałości technicznej. Unikalność marki</p>
                  <p className="font-light text-base"> Poliform to kompleksowe, luksusowe rozwiązania do wnętrz.</p>
                  <div className="mt-auto">
                    <a href="/nowosci" className="w-80 mt-12 bg-white border-2 border-black text-black text-lg text-center font-normal py-1 px-6  transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">POLIFORM</a>
                  </div>
                </div>
              </div>

              <div className="w-[530px] h-[570px] bg-white  flex flex-col items-left justify-center text-xl font-bold block relative">
                <div className="w-full h-[350] overflow-hidden relative flex items-start justify-center">
                  <img src="/Foto/kanapa2.jpg" alt="kanapa2" className="w-full h-full object-cover" />
                </div>
                <div className="h-[220px] flex flex-col justify-between">
                  <p className="mt-8 font-serif font-bold text-2xl">Baxter</p>
                  <p className="font-light text-base">Włoska firma rodzinna posiada korzenie wywodzące się z miłości</p>
                  <p className="font-light text-base"> do najszlachetniejszych skór i tradycyjnego rzemiosła. Ambitny i</p>
                  <p className="font-light text-base"> artystyczny Baxter zapoczątkowany przez Luigi i Paolo Bestetti,</p>
                  <p className="font-light text-base">  opiera swoje kolekcje na osadzonej głęboko w tradycji obróbce skóry.</p>
                </div>
                <div className="mt-auto">
                  <a href="/nowosci" className="w-80 mt-12 bg-white border-2 border-black text-black text-lg text-center font-normal py-1 px-6 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">BAXTER</a>
                </div>
              </div>

              <div className="w-[530px] h-[570px] bg-white  flex flex-col items-left justify-center text-xl font-bold block relative">
                <div className="w-full h-[350] overflow-hidden relative flex items-start justify-center">
                  <img src="/Foto/lampa4.jpg" alt="Fotel" className="w-full h-full object-cover" />
                </div>
                <div className="h-[220px] flex flex-col justify-between">
                  <p className="mt-8 font-serif font-bold text-2xl">Vitra</p>
                  <p className="font-light text-base">Marka-ikona, która realizuje najbardziej nowatorskie projekty</p>
                  <p className="font-light text-base">czołowych twórców wzornictwa przemysłowego. Vitra to</p>
                  <p className="font-light text-base"> znacznie więcej niż marka, to styl życia, otoczenie, które</p>
                  <p className="font-light text-base"> kształtuje myśli i uczucia. </p>
                </div>
                <div className="mt-auto">
                  <a href="/nowosci" className="w-80 mt-12 bg-white border-2 border-black text-black text-lg text-center font-normal py-1 px-6 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">VITRA</a>
                </div>
              </div>

              <div className="w-[530px] h-[570px] bg-white  flex flex-col items-left justify-center text-xl font-bold block relative">
                <div className="w-full h-[350] overflow-hidden relative flex items-start justify-center">
                  <img src="/Foto/lozko3.jpg" alt="Fotel" className="w-full h-full object-cover" />
                </div>

                <div className="h-[220px] flex flex-col justify-between">
                  <p className="mt-8 font-serif font-bold text-2xl">Serge Mouille</p>
                  <p className="font-light text-base">Serge Mouille urodził się w grudniu 1922 w Paryżu. Jego</p>
                  <p className="font-light text-base"> fascynacja przyrodą została zaszczepiona już w dzieciństwie.</p>
                  <p className="font-light text-base"> Detale przyrody, które już wtedy zaobserwował stały się znakiem</p>
                  <p className="font-light text-base"> rozpoznawczym jego dzieł.</p>

                  <div className="mt-auto">
                    <a href="/nowosci" className="w-90 mt-12 bg-white border-2 border-black text-black text-lg text-center font-normal py-1 px-6 transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">SERGE MOUILLE</a>
                  </div>
                </div>
              </div>

              <div className="w-[530px] h-[570px] bg-white  flex flex-col items-left justify-center text-xl font-bold block relative">
                <div className="w-full h-[350] overflow-hidden relative flex items-start justify-center">
                  <img src="/Foto/star wars.jpg" alt="Fotel" className="w-full h-full object-cover" />
                </div>
                <div className="h-[220px] flex flex-col justify-between">
                  <h1 className="mt-8 font-serif font-bold text-2xl">Star Wars</h1>
                  <p className="font-light text-base">Kulturalne i współczesne piękno, ponadczasowa elegancja oraz</p>
                  <p className="font-light text-base"> ciągłe dążenie do doskonałości technicznej. Unikalność marki</p>
                  <p className="font-light text-base"> Poliform to kompleksowe, luksusowe rozwiązania do wnętrz.</p>
                </div>
                <div className="mt-auto">
                  <a href="/nowosci" className="w-80 mt-12 bg-white border-2 border-black text-black text-lg text-center font-normal py-1 px-6  transition-colors duration-700 hover:bg-gray-800 hover:text-white tracking-[0.2em] inline-block">STAR WARS</a>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="flex flex-col items-center mt-8 relative w-full">
          <a href="#" className="underline italic font-serif font-normal text-center text-2xl block">
            Zobacz wszystkie marki
          </a>

        </div>


        <div className="w-screen h-[800px] bg-gray-400 flex items-center justify-center">
          <h2 className="text-white text-3xl">Jakiego stylu szukasz dla siebie </h2>
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








        <div className="w-screen h-[600px] bg-gray-500 flex items-center justify-center">
          <h2 className="text-white text-3xl">Porada Experta</h2>
        </div>
        <div className="w-screen h-[600px] bg-gray-400 flex items-center justify-center">
          <p>oststnio przegladane</p>
        </div>
        <Footer></Footer>
      </div>


    </>
  );
}

