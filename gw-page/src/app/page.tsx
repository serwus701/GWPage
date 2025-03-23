"use client";

import Footer from "./component/footer";
import Slider from "./component/slider1";
import Carousel from "./component/carousel";
import Carousel1 from "./component/carousel1";
import Carousel2 from "./component/carousel2";
import Carousel3 from "./component/carousel3";
import Header from "./component/header";
import '../utils/translations/i18n'

export default function Home() {

  return (
    <>
      <Header></Header>

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

