import React from "react";
import Carousel1 from "./carousel1";

const JakiegoStyluSection = () => {
    return (
        <>
            <div className="w-screen bg-white p-4 flex flex-col items-center">
                <h1 className="text-5xl  font-bold font-serif mt-4">Jakiego stylu szukasz dla siebie?</h1>
                <p className="text-lg  text-black mt-6">Odkryj nasze produkty sprofilowane dla Ciebie w wybranej stylistyce</p>
            </div>
            <div className="w-screen h-[800px] bg-white
       flex items-center justify-center shadow-2xl border-b border-gray-500 relative z-10">
                <Carousel1 />
            </div>
        </>
    );
};
export default JakiegoStyluSection;