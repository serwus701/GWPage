"use client";

{/*import { useState } from "react";*/ }
import { useState, useEffect } from "react";
import Footer from "./component/footer";
import Slider from "./component/slider1";
import Carousel2 from "./component/carousel2";
import Header from "./component/header";
import UslugiJakosc from "./component/designerskieMeble";
import NowosciSection from "./component/nowosciSection";
import BbItaliaSection from "./component/bbItaliaSection";
import MarkiSection from "./component/markiSection";
import JakiegoStyluSection from "./component/jakiegoStyluSection";
import CzyChceszZapytacSection from "./component/czyCheszZapytacSection";
import PoradaExpertaSection from "./component/poradaExpertaSection";
import MainLayout from "./layouts/MainLayout";
import DesignerskieMeble from "./component/designerskieMeble";

export default function Home() {

  return (
    <>
      <Header />
      <div className="overflow-y-auto overflow-x-hidden h-screen pt-[120px]">
        <Slider />
        <DesignerskieMeble />
        <NowosciSection />
        <BbItaliaSection />
        <Carousel2 />
        <MarkiSection />
        <JakiegoStyluSection />
        <CzyChceszZapytacSection />
        <PoradaExpertaSection />
      </div>
      <Footer />

    </>
  );
}