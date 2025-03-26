import React from "react";
const MarkiSection = () => {
    return (

        <div className="w-screen h-[70px] flex flex-col bg-white items-center mt-8 relative w-full">
            <a href="#" className="underline italic font-serif font-normal text-center text-2xl block hover:no-underline">
                Zobacz wszystkie marki
            </a>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[1px] bg-black"></div>
        </div>
    );
};
export default MarkiSection;