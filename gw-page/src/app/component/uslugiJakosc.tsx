import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sekcje = [
    {
        icon: "/domekSuper.svg",
        title: "Dostawa i montaż",
        text: "Nasze dostawy są ubezpieczone i dowożone przez wykwalifikowane osoby",
    },
    {
        icon: "/globus.svg",
        title: "Międzynarodowe dostawy",
        text: "Dostarczamy na całym świecie",
    },
    {
        icon: "/gwarancjaNajjakosci.svg",
        title: "Gwarancja najlepszej jakości",
        text: "Wszystkie nasze produkty są oryginalne",
    },
    {
        icon: "/oficjalnyDealer.svg",
        title: "Oficjalny Dealer",
        text: "Jesteśmy oficjalnym przedstawicielem wszystkich oferowanych przez nas marek",
    },
];

function UslugiJakosc() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            {/* Desktop version */}
            <div className="hidden md:flex w-full h-[250px] bg-gray-200 items-center justify-center">
                {sekcje.map((item, index) => (
                    <div key={index} className="w-1/4 flex flex-col items-center justify-center border-r border-gray-200 px-4">
                        <img src={item.icon} className="w-10 h-10 text-black cursor-pointer mt-6 transition-transform duration-300 hover:scale-110" />
                        <h3 className="text-black text-xl font-serif min-h-[40px] text-center mt-2">{item.title}</h3>
                        <p className="text-gray-500 text-center text-sm mt-2">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* Mobile version */}
            <div className="block md:hidden w-full h-[300px] bg-gray-200 px-4 py-6">
                <Slider {...settings}>
                    {sekcje.map((item, index) => (
                        <div key={index} className="flex flex-col h-[230px] items-center justify-between">
                            {/* Ikona wyżej */}
                            <div className="flex items-center justify-center h-[100px]">
                                <img
                                    src={item.icon}
                                    className="w-10 h-10 text-black cursor-pointer transition-transform duration-300 hover:scale-110"
                                />
                            </div>

                            {/* Tekst niżej */}
                            <div className="text-center px-4">
                                <h3 className="text-black text-xl font-serif min-h-[40px]">{item.title}</h3>
                                <p className="text-gray-500 text-sm mt-2">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default UslugiJakosc;
