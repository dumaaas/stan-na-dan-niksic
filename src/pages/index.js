import aboutBg from "../../public/images/image2.jpg";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { WifiIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import Slider from "react-slick";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex w-full h-screen overflow-auto relative">
        <div className="flex items-center relative z-[30] xl:px-[80px] lg:px-[50px] px-[30px] w-full mx-auto">
          <div className="text-white flex flex-col">
            <div className="w-full h-full flex flex-col">
              <p className="md:text-[48px] text-[30px] font-bold uppercase">
                Stan na dan, Dumnić
              </p>
              <div className="flex items-center gap-[10px]">
                <MapPinIcon className="h-8 w-8 text-[#E39429]" />
                <p className="md:text-[28px] text-[18px] uppercase">
                  VI Crnogorske p+4/6, Nikšić
                </p>
              </div>
              <div className="flex flex-row gap-[8px] items-center pt-[20px]">
                <div className="border border-[#E39429] rounded-[20px] px-[12px] py-[4px] border-2">
                  Dnevni odmor
                </div>
                <div className="border border-[#E39429] rounded-[20px] px-[12px] py-[4px] border-2">
                  Noćenje
                </div>
                <div className="border border-[#E39429] rounded-[20px] px-[12px] py-[4px] border-2">
                  24h
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 right-0 overflow-hidden home-cover xl:w-[60%] sm:w-[50%] w-full sm:opacity-100 opacity-40 sm:before:opacity-100 before:opacity-0"
          style={{
            backgroundImage: `url(${aboutBg.src})`,
            height: "100%",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="md:py-[60px] py-[30px] xl:px-[80px] lg:px-[50px] px-[30px] w-full">
        <div className="flex flex-wrap gap-[20px] items-center justify-between">
          <div className="lg:flex-[22%] md:flex-[30%] flex-[100%] sm:flex-[47%] bg-white rounded-[20px] h-[200px] bg-opacity-20 flex items-center justify-center flex-col gap-[20px]">
            <WifiIcon className="h-8 w-8 text-[#E39429]" />
            <p className="text-[16px] uppercase text-white">Besplatan WiFi</p>
          </div>
          <div className="lg:flex-[22%] md:flex-[30%] flex-[100%] sm:flex-[47%] bg-white rounded-[20px] h-[200px] bg-opacity-20 flex items-center justify-center flex-col gap-[20px]">
            <div className="w-8 h-8 flex items-center justify-center rounded-full text-[#E39429] border border-[#E39429] font-bold border-2">
              P
            </div>
            <p className="text-[16px] uppercase text-white">
              Besplatan parking
            </p>
          </div>
          <div className="lg:flex-[22%] md:flex-[30%] flex-[100%] sm:flex-[47%] bg-white rounded-[20px] h-[200px] bg-opacity-20 flex items-center justify-center flex-col gap-[20px]">
            <HomeIcon className="h-8 w-8 text-[#E39429]" />
            <p className="text-[16px] uppercase text-white">52 m2 površina</p>
          </div>{" "}
          <div className="lg:flex-[22%] md:flex-[30%] flex-[100%] sm:flex-[47%] bg-white rounded-[20px] h-[200px] bg-opacity-20 flex items-center justify-center flex-col gap-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-[#E39429]"
            >
              <path d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"></path>
            </svg>
            <p className="text-[16px] uppercase text-white">Pet Friendly</p>
          </div>
          <div className="lg:flex-[22%] md:flex-[30%] flex-[100%] sm:flex-[47%] bg-white rounded-[20px] h-[200px] bg-opacity-20 flex items-center justify-center flex-col gap-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-[#E39429]"
            >
              <path d="M11.25.75v7.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm4.031.914l-3.75 3h.938l-3.75-3a.75.75 0 1 0-.938 1.172l3.75 3a.75.75 0 0 0 .938 0l3.75-3a.75.75 0 1 0-.938-1.172zM1.883 7.024l6.495 3.75a.75.75 0 0 0 .75-1.299l-6.495-3.75a.75.75 0 1 0-.75 1.3zM4.69 3.99l.723 4.748.468-.812-4.473 1.748a.75.75 0 0 0 .546 1.398l4.473-1.748a.75.75 0 0 0 .468-.812l-.723-4.748a.75.75 0 1 0-1.482.226zM2.632 18.274l6.495-3.75a.75.75 0 1 0-.75-1.298l-6.495 3.75a.75.75 0 1 0 .75 1.299zm-1.224-3.948l4.473 1.748-.468-.812-.723 4.748a.75.75 0 0 0 1.482.226l.723-4.748a.75.75 0 0 0-.468-.812l-4.473-1.748a.75.75 0 0 0-.546 1.398zM12.75 23.25v-7.5a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-4.031-.914l3.75-3h-.938l3.75 3a.75.75 0 0 0 .937-1.172l-3.75-3a.75.75 0 0 0-.937 0l-3.75 3a.75.75 0 0 0 .938 1.172zm13.399-5.36l-6.495-3.75a.75.75 0 0 0-.75 1.298l6.495 3.75a.75.75 0 0 0 .75-1.299zm-2.807 3.034l-.724-4.748-.468.812 4.473-1.748a.75.75 0 0 0-.546-1.398l-4.473 1.748a.75.75 0 0 0-.468.812l.723 4.748a.75.75 0 0 0 1.483-.226zm2.057-14.285l-6.495 3.75a.75.75 0 0 0 .75 1.3l6.495-3.75a.75.75 0 0 0-.75-1.3zm1.224 3.95l-4.473-1.749.468.812.724-4.748a.75.75 0 0 0-1.483-.226l-.723 4.748a.75.75 0 0 0 .468.812l4.473 1.748a.75.75 0 0 0 .546-1.398zM11.625 7.6L8.377 9.475a.75.75 0 0 0-.375.65v3.75a.75.75 0 0 0 .375.65l3.248 1.874a.75.75 0 0 0 .75 0l3.248-1.875a.75.75 0 0 0 .375-.649v-3.75a.75.75 0 0 0-.375-.65L12.375 7.6a.75.75 0 0 0-.75 0zm.75 1.3h-.75l3.248 1.874-.375-.649v3.75l.375-.65-3.248 1.876h.75l-3.248-1.876.375.65v-3.75l-.375.65L12.375 8.9z"></path>
            </svg>
            <p className="text-[16px] uppercase text-white">Klima uređaj</p>
          </div>{" "}
          <div className="lg:flex-[22%] md:flex-[30%] flex-[100%] sm:flex-[47%] bg-white rounded-[20px] h-[200px] bg-opacity-20 flex items-center justify-center flex-col gap-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-[#E39429]"
            >
              <path d="M9.35.22a3.75 3.75 0 0 0 0 5.303 2.25 2.25 0 0 1 0 3.182.75.75 0 0 0 1.06 1.06 3.75 3.75 0 0 0 0-5.302 2.25 2.25 0 0 1 0-3.183A.75.75 0 0 0 9.35.22zm4.007 0a3.75 3.75 0 0 0 0 5.303 2.25 2.25 0 0 1 0 3.182.75.75 0 1 0 1.06 1.06 3.75 3.75 0 0 0 0-5.302 2.25 2.25 0 0 1 0-3.183.75.75 0 0 0-1.06-1.06zm4.007 0a3.75 3.75 0 0 0 0 5.303 2.25 2.25 0 0 1 0 3.182.75.75 0 1 0 1.06 1.06 3.75 3.75 0 0 0 0-5.302 2.25 2.25 0 0 1 0-3.183.75.75 0 0 0-1.06-1.06zM19.5 18.75v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm-6 0v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm3 0v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm-6 0v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM4.125 9a.375.375 0 1 1 .75 0 .375.375 0 0 1-.75 0 .75.75 0 0 0 1.5 0 1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0 .75.75 0 0 0-1.5 0zm0 4.5a.375.375 0 1 1 .75 0 .375.375 0 0 1-.75 0 .75.75 0 0 0 1.5 0 1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0 .75.75 0 0 0-1.5 0zM3 21.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zm16.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM5.25 4.5h-3A2.25 2.25 0 0 0 0 6.75v13.5a2.25 2.25 0 0 0 2.25 2.25h19.5A2.25 2.25 0 0 0 24 20.25V6.75a2.25 2.25 0 0 0-2.25-2.25.75.75 0 0 0 0 1.5.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V6.75A.75.75 0 0 1 2.25 6h3a.75.75 0 0 0 0-1.5z"></path>
            </svg>
            <p className="text-[16px] uppercase text-white">Grijanje</p>
          </div>{" "}
          <div className="lg:flex-[22%] md:flex-[30%] flex-[100%] sm:flex-[47%] bg-white rounded-[20px] h-[200px] bg-opacity-20 flex items-center justify-center flex-col gap-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-[#E39429]"
            >
              <path d="M2.25 2.25h19.5L21 1.5v21l.75-.75H2.25l.75.75v-21l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v21c0 .414.336.75.75.75h19.5a.75.75 0 0 0 .75-.75v-21a.75.75 0 0 0-.75-.75H2.25zm-1.5 1.5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm0 21h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM18 15v3.539a.211.211 0 0 1-.211.211H6.211A.211.211 0 0 1 6 18.539v-7.078c0-.117.094-.211.211-.211h11.578c.116 0 .211.095.211.211V15zm1.5 0v-3.539a1.71 1.71 0 0 0-1.711-1.711H6.211c-.945 0-1.711.766-1.711 1.711v7.078c0 .945.766 1.711 1.711 1.711h11.578a1.71 1.71 0 0 0 1.711-1.711V15zM9 14.25h6a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zM5.25 4.875a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm3 0a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm-6 3.375h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zm11.25-3h5.25a.75.75 0 0 0 0-1.5H13.5a.75.75 0 0 0 0 1.5z"></path>
            </svg>
            <p className="text-[16px] uppercase text-white">Kuhinja</p>
          </div>{" "}
          <div className="lg:flex-[22%] md:flex-[30%] flex-[100%] sm:flex-[47%] bg-white rounded-[20px] h-[200px] bg-opacity-20 flex items-center justify-center flex-col gap-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-[#E39429]"
            >
              <path d="M15.375 10.875a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm.375 12.375V18.7l-.667.745C20.748 18.98 24 15.925 24 10.5a2.25 2.25 0 0 0-4.5 0c0 1.945-.609 3.154-1.64 3.848a3.973 3.973 0 0 1-2.132.652H9a3.75 3.75 0 1 0 0 7.5h3a2.25 2.25 0 0 0 0-4.5H9a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 0 1.5H9a2.25 2.25 0 0 1 0-4.5h6.74a5.426 5.426 0 0 0 2.957-.908C20.154 14.613 21 12.932 21 10.5a.75.75 0 0 1 1.5 0c0 4.6-2.628 7.069-6.083 7.455a.75.75 0 0 0-.667.745v4.55a.75.75 0 0 0 1.5 0zm-7.5-1.5v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 1.5h1.5l-.53-.22 1.402 1.402a.75.75 0 0 0 1.06-1.06L2.78.22A.75.75 0 0 0 2.25 0H.75a.75.75 0 1 0 0 1.5zm2.983 3.754a.01.01 0 0 1 .016.002c-.542-1.072-.1-2.426 1.008-2.988a2.25 2.25 0 0 1 2.037 0c-.041-.022-.043-.029-.04-.034l.002-.002-3.013 3.012zm1.07 1.05l3.002-3A1.489 1.489 0 0 0 7.51.951 3.766 3.766 0 0 0 4.079.929 3.75 3.75 0 0 0 2.43 5.971a1.49 1.49 0 0 0 2.382.323zm3.408-.968l1.116.62a.75.75 0 1 0 .728-1.312l-1.116-.62a.75.75 0 1 0-.728 1.312zm1.964-2.233l1.615.44a.75.75 0 1 0 .394-1.448l-1.615-.44a.75.75 0 1 0-.394 1.448zm4.217 1.15l1.615.44a.75.75 0 0 0 .396-1.447l-1.615-.44a.75.75 0 0 0-.396 1.447zM5.697 7.388l.577 1.038a.75.75 0 1 0 1.312-.728L7.009 6.66a.75.75 0 1 0-1.312.728zM3.284 8.94l.44 1.615a.75.75 0 1 0 1.448-.394l-.44-1.615a.75.75 0 1 0-1.448.394zm1.15 4.219l.246.896a.75.75 0 1 0 1.446-.396l-.245-.896a.75.75 0 1 0-1.446.396z"></path>
            </svg>
            <p className="text-[16px] uppercase text-white">Kupatilo</p>
          </div>{" "}
        </div>
      </div>
      <div className="md:py-[60px] py-[30px] xl:px-[80px] lg:px-[50px] px-[30px] w-full text-white text-center md:w-[60%] w-full mx-auto flex flex-col gap-[20px]">
        <p>
          Stan na dan Dumnić se nalazi u Nikšiću. Apartman nudi besplatan
          parking, WiFi i boravak kućnih ljubimaca.
        </p>
        <p>
          Klimatizovani apartman se sastoji od 1 spavaće sobe, dnevnog boravka,
          potpuno opremljene kuhinje sa frižiderom i kuvalom za vodu, i 1
          kupatila sa tušem i fenom za kosu. Peškiri i posteljina se nude u
          apartmanu.
        </p>
        <p>
          Najbliži aerodrom je Aerodrom Podgorica, udaljen 63 km od apartmana.
        </p>
      </div>
      <div className="md:py-[60px] py-[30px] xl:px-[80px] lg:px-[50px] px-[30px] w-full">
        <div className="flex flex-wrap gap-[20px] items-center justify-between">
          <div className="lg:flex-[30%] bg-[#E39429] md:flex-[45%] flex-[100%] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px]">
            <div className="flex flex-row gap-[10px] items-center pb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-black"
              >
                <path d="M12.974 3.554a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm3.675 7.496a1.488 1.488 0 0 1-1.168-.56 8.45 8.45 0 0 0-6.634-3.19A6.756 6.756 0 0 0 3.6 14.05a2.25 2.25 0 1 0 4.5 0 2.255 2.255 0 0 1 1.689-2.174l-.189-.726h-.75v.5a15.568 15.568 0 0 1-2.622 8.66 2.252 2.252 0 1 0 3.748 2.496 20.15 20.15 0 0 0 2.336-4.768l-1.111.396a7.288 7.288 0 0 1 3.018 3.838c.343 1.165 1.595 1.846 2.787 1.494a2.25 2.25 0 0 0 1.47-2.944 11.771 11.771 0 0 0-5.785-6.712l.398.788c.175-1.074.263-2.16.263-3.248v-.03h-.75l-.356.66a3.98 3.98 0 0 1 1.223 1.022 5.971 5.971 0 0 0 4.688 2.252 2.25 2.25 0 0 0-.002-4.5v.75l.6-.45-.003-.004a.75.75 0 0 0-.602-.3zm.004 1.5l-.002-.75-.6.45.003.004a.75.75 0 0 0 .6.3.75.75 0 0 1 0 1.5 4.473 4.473 0 0 1-3.513-1.687 5.48 5.48 0 0 0-1.684-1.407.75.75 0 0 0-1.106.66v.03c0 1.007-.081 2.012-.243 3.006a.75.75 0 0 0 .398.788 10.288 10.288 0 0 1 5.081 5.952.75.75 0 0 1-1.439.425A8.804 8.804 0 0 0 12 17.166a.75.75 0 0 0-1.111.396 18.65 18.65 0 0 1-2.162 4.412.752.752 0 0 1-1.252-.832 17.066 17.066 0 0 0 2.874-9.493v-.499a.75.75 0 0 0-.939-.726A3.756 3.756 0 0 0 6.6 14.048a.75.75 0 1 1-1.5.002 5.256 5.256 0 0 1 5.25-5.25 6.95 6.95 0 0 1 5.459 2.624 2.989 2.989 0 0 0 2.345 1.126z"></path>
              </svg>
              <p className="text-[16px] uppercase text-black font-medium">
                U blizini
              </p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Trebjesa</p>
              <p>1,3 km</p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Nacionalni park Durmitor</p>
              <p>20 km</p>
            </div>
          </div>
          <div className="lg:flex-[30%] bg-[#E39429] md:flex-[45%] flex-[100%] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px]">
            <div className="flex flex-row gap-[10px] items-center pb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-8 h-8 fill-black"
              >
                <path d="M127.5 104.38l-45.33-82a4.323 4.323 0 0 0-.33-.5 10.858 10.858 0 0 0-2-2c-4.7-3.567-11.398-2.674-15 2a3.61 3.61 0 0 0-.33.5l-25.44 46-7.87-10.47a4 4 0 0 0-6.75.55l-24 46A4 4 0 0 0 4 110.31h120a4 4 0 0 0 3.5-5.93zM71.32 26.57a2.73 2.73 0 0 1 3.68-.32c.128.093.246.2.35.32L89 51.35l-7.33 6.87-2.54-2.84a7.85 7.85 0 0 0-5.83-2.68 7.88 7.88 0 0 0-5.87 2.68l-2.54 2.83-7.24-6.91zM28.61 67.79l6.21 8.28-14.51 26.24H10.6zm.84 34.52L42.83 78.1c.196-.265.358-.554.48-.86l10.34-18.7 5.86 5.6a7.78 7.78 0 0 0 5.71 2.17 7.89 7.89 0 0 0 5.56-2.67l2.52-2.83 2.53 2.83a7.85 7.85 0 0 0 5.55 2.67h.32a7.75 7.75 0 0 0 5.37-2.17l6-5.58 24.19 43.74z"></path>
              </svg>
              <p className="text-[16px] uppercase text-black font-medium">
                Ljepote prirode
              </p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Kotorski zaliv</p>
              <p>33 km</p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Kapetanovo jezero</p>
              <p>46 km</p>
            </div>
          </div>
          <div className="lg:flex-[30%] bg-[#E39429] md:flex-[45%] flex-[100%] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px]">
            <div className="flex flex-row gap-[10px] items-center pb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-black"
              >
                <path d="M5.75 1.513h12.5c.69 0 1.25.56 1.25 1.25v13.5a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25v-13.5c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 3 2.763v13.5c0 .966.784 1.75 1.75 1.75h14.5a1.75 1.75 0 0 0 1.75-1.75v-13.5a2.75 2.75 0 0 0-2.75-2.75H5.75zm-3.65 23.7l2.25-3a.75.75 0 1 0-1.2-.9l-2.25 3a.75.75 0 1 0 1.2.9zm21-.9l-2.25-3a.75.75 0 1 0-1.2.9l2.25 3a.75.75 0 1 0 1.2-.9zm-19.35-12.3h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm7.5-9.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-1.5 0zm-7.5 12.75H7.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm16.5-1.5H16.5a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5zM8.92 17.598l1.5-3-.67.415h4.5l-.67-.415 1.5 3a.75.75 0 1 0 1.34-.67l-1.5-3a.75.75 0 0 0-.67-.415h-4.5a.75.75 0 0 0-.67.415l-1.5 3a.75.75 0 1 0 1.34.67z"></path>
              </svg>
              <p className="text-[16px] uppercase text-black font-medium">
                Javni prevoz
              </p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Željeznička stanica</p>
              <p>900 m</p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Autobuska stanica</p>
              <p>900 m</p>
            </div>
          </div>
          <div className="lg:flex-[30%] bg-[#E39429] md:flex-[45%] flex-[100%] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px]">
            <div className="flex flex-row gap-[10px] items-center pb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-black"
              >
                <path d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z"></path>
              </svg>
              <p className="text-[16px] uppercase text-black font-medium">
                Restorani i kafići
              </p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Kafe/bar Amići</p>
              <p>900 m</p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Kafe/bar Pijaca</p>
              <p>900 m</p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Restoran Portun</p>
              <p>900 m</p>
            </div>
          </div>
          <div className="lg:flex-[30%] bg-[#E39429] md:flex-[45%] flex-[100%] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px]">
            <div className="flex flex-row gap-[10px] items-center pb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-black"
              >
                <path d="M15.62 6.45a3.14 3.14 0 1 0-3.13-3.14 3.15 3.15 0 0 0 3.13 3.14Zm0-4.77A1.64 1.64 0 1 1 14 3.31a1.64 1.64 0 0 1 1.62-1.63ZM23.26 18.64a.74.74 0 0 0-1-.31l-.33.17-3.59-6.69a2.19 2.19 0 0 0 .48-1.37 2.25 2.25 0 0 0-2.24-2.26h-1.89l-1.84-2a3.5 3.5 0 0 0-4.53-.58L3.7 8.71A3.05 3.05 0 0 0 4 14l2.82 1.47-1.14 1.21a2.33 2.33 0 0 0-.56 1.25l-3.38-1.69a.75.75 0 0 0-1 .33.76.76 0 0 0 .34 1L13 23.52a2.78 2.78 0 0 0 1.26.3 2.74 2.74 0 0 0 1.33-.34l.82-.45a.75.75 0 0 0-.72-1.32l-.82.46a1.3 1.3 0 0 1-1.2 0l-4.78-2.36.11-.12 2.6-2.89a2.81 2.81 0 0 0-.8-4.37l-2.6-1.35 1.9-1.26 1.9 2.12a2.22 2.22 0 0 0 1.66.74h2.86a2 2 0 0 0 .5-.06l3.58 6.58-.54.29a.75.75 0 0 0-.31 1 .74.74 0 0 0 .66.39.72.72 0 0 0 .35-.08l.55-.3.44.83a.77.77 0 0 0 .67.4.73.73 0 0 0 .35-.09.76.76 0 0 0 .31-1l-.45-.82.32-.17a.75.75 0 0 0 .31-1.01Zm-6.7-7.46H13.7a.77.77 0 0 1-.56-.25l-2.51-2.76a.5.5 0 0 0-.63-.08l-3.79 2.54a.61.61 0 0 0 0 1l3.88 2.09a1.31 1.31 0 0 1 .69.92 1.28 1.28 0 0 1-.31 1.11l-2.56 2.93a.71.71 0 0 1-.55.25.77.77 0 0 1-.51-.19.76.76 0 0 1 0-1.06l1.79-2a.73.73 0 0 0-.21-1.15l-3.74-1.91A1.56 1.56 0 0 1 4.54 10l4.62-3.16a2 2 0 0 1 2.58.32L14 9.68h2.54a.75.75 0 0 1 0 1.5Z"></path>
              </svg>
              <p className="text-[16px] uppercase text-black font-medium">
                Žičare
              </p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Vučje Ski Lift</p>
              <p>11 km</p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Žabljak Ski</p>
              <p>42 km</p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Kolašin Ski</p>
              <p>75 km</p>
            </div>
          </div>
          <div className="lg:flex-[30%] bg-[#E39429] md:flex-[45%] flex-[100%] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px]">
            <div className="flex flex-row gap-[10px] items-center pb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-black"
              >
                <path d="M18.33 3.57L5.7 9.955l.79.07-1.96-1.478a.75.75 0 0 0-.753-.087l-2.1.925C.73 9.856.359 10.967.817 11.88c.11.22.263.417.45.577l3.997 3.402a2.94 2.94 0 0 0 3.22.4l3.62-1.8-1.084-.671v5.587a1.833 1.833 0 0 0 2.654 1.657l1.88-.932a1.85 1.85 0 0 0 .975-1.226l1.87-7.839-.396.498 3.441-1.707a3.494 3.494 0 1 0-3.11-6.259zm.672 1.342a1.994 1.994 0 0 1 1.775 3.571l-3.44 1.707a.75.75 0 0 0-.396.498l-1.87 7.838a.35.35 0 0 1-.185.232l-1.88.932a.335.335 0 0 1-.486-.304V13.79a.75.75 0 0 0-1.084-.672l-3.62 1.8a1.44 1.44 0 0 1-1.578-.197l-3.997-3.402a.35.35 0 0 1 .073-.577l2.067-.91-.754-.087 1.96 1.478a.75.75 0 0 0 .79.07l12.63-6.383zm-3.272.319l-4.46-2.26a1.852 1.852 0 0 0-1.656-.001l-1.846.912a1.85 1.85 0 0 0-.295 3.128l2.573 1.955a.75.75 0 1 0 .908-1.194L8.38 5.816a.35.35 0 0 1 .055-.591l1.845-.912a.351.351 0 0 1 .315 0l4.456 2.256a.75.75 0 0 0 .678-1.338z"></path>
              </svg>
              <p className="text-[16px] uppercase text-black font-medium">
                Najbliži aerodromi
              </p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Aerodrom Tivat</p>
              <p>45 km</p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Aerodrom Podgorica</p>
              <p>51 km</p>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
              <p>Aerodrom Dubrovnik</p>
              <p>60 km</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-[60px] py-[30px] xl:px-[80px] lg:px-[50px] px-[30px] w-full">
        <p className="flex justify-center mx-auto text-white text-3xl text-center md:pb-[80px] pb-[60px] relative">
          Recenzije
          <div className="absolute bottom-[70px] h-[4px] bg-[#e39429] w-[80px] rounded-[20px]"></div>
        </p>{" "}
        <div>
          <Slider
            {...settings}
            className="flex flex-wrap gap-[20px] items-center justify-between"
          >
            <div className="flex-[30%] border-2 rounded-[8px] border-[#E39429] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px] text-white">
              <div className="flex flex-row gap-[10px] items-center pb-[20px]">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#e39429]">
                  MD
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[16px] uppercase text-white font-medium">
                    Marko
                  </p>
                  <div className="flex flex-row gap-[4px] text-[14px] items-center">
                    <img
                      alt="Srbija"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAA7VBMVEX///8AAAAAAAAAAAAAAAD///////nx8/z77uvv7+/77OjmvcX3rq7kuWPyrbHprbvhrrPmqpTlqIfmn5vom4jmk5vljpjlkHvsiZTljXnhiJLrgo7mhI/ggY3hgXLfeoThennheHbocn/ocoDmc3Psa3fraG7nZ3TqZmvdZ1GTcp7rW2joW2leeLeKbZ3eYCbcXFLdXD3fXSHbW0esXoHbVEzdVTaAYpVQbbTgR1hNaq/fQlTkP03kOkk/X61AX6g/XK46WqNuS4YyVKQwUZ4wSp8pSZkiRpwhQ5UbQJgeOZUSOJQSMJEPLY4PJY3rzA3qAAAABXRSTlMAESIzRJTdRHwAAADOSURBVBgZrcG9SgNBFIbh9zs5uzObUVD0BgSxsrH1/gsvwNo0oo3BIhDcdZmjkPUHsxaCzwP/Rog5IV1XZty46op9Z3JskQP6PiUQIQJ6cMgOT1Xbl1M+yHDMHJVnOG6CSRVOmw8ZhoOyWeaWyabBoHi7fUiPy/uh9UkxHKVGh+PQjLVrgh0Jx7Kr1NfSjyUFO4vAsIVZl5d0uQsmZjhEhM7r6uJIfCNLI3C1ubust3zyXpZG3p34uOaL987Omh+MXzg4cyQT+6IKMSf4szeJcTsjxopu0QAAAABJRU5ErkJggg=="
                    />
                    <p>Srbija</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
                „Остао сам са породицом једну ноћ након дуге вожње. Свима се
                допало; љубазна домаћица, савршено чист стан, има све што вам
                треба. Радо ћемо поново свратити.”
              </div>
            </div>
            <div className="flex-[30%] border-2 rounded-[8px] border-[#E39429] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px] text-white">
              <div className="flex flex-row gap-[10px] items-center pb-[20px]">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#e39429]">
                  LV
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[16px] uppercase text-white font-medium">
                    Lorenzo
                  </p>
                  <div className="flex flex-row gap-[4px] text-[14px] items-center">
                    <img
                      alt="Španija"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAA5FBMVEX///8AAAAAAAAAAAAAAAD//FP/9nD/+FP/9WP/9CP/9RP970T88Dn/8xj/8Sn/8R//8Bn/8BL57Dn46zT37CD26TH15Vr06Cr95xX95hD031vx5CH74CHu1ojW3F3p2ELu1kPl1lDV2F/h0S/oxl7qxEjmxF/3vWPwumHqt0jsrZnrtxjop7Tqqljuo2PuoBTwiY3jkTLugobljTPckhvbjUnPf7fjhi/bg0fud3zscnbackzsZ2zQWxrnSU/NUyjlR0yeWj7lQkjkP0WwUSarPzDhFRzUFx7gEhnSEhjfCBDPChK7G3JaAAAABXRSTlMAESIzRJTdRHwAAACwSURBVBgZrcFBToNQGIXR7/5cQYgto+7CTXTprkYHarSxgqHvvQ5qNQEmJp4D/0aINUXaZ1Y8WPmNpa1MxC1zY2DUBHNNoGinYC7fDEZRyLu7fHjnR4CpJ7Nr+6T2matTMxhZqKs+RosrCxNV6Tedu1wNx4qLHAQBfB2qfjPxKzBMGmu/bNPnMSUuSotxHUmvPNHZfMvG3Bczd9KjicJCCAOZFSZYJYVYKlmINYU/OwNdvzKjDTSengAAAABJRU5ErkJggg=="
                    />
                    <p>Španija</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
                „Остао сам са породицом једну ноћ након дуге вожње. Свима се
                допало; љубазна домаћица, савршено чист стан, има све што вам
                треба. Радо ћемо поново свратити.”
              </div>
            </div>
            <div className="flex-[30%] border-2 rounded-[8px] border-[#E39429] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px] text-white">
              <div className="flex flex-row gap-[10px] items-center pb-[20px]">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#e39429]">
                  ST
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[16px] uppercase text-white font-medium">
                    Stefan
                  </p>
                  <div className="flex flex-row gap-[4px] text-[14px] items-center">
                    <img
                      alt="Crna Gora"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABTVBMVEX///8AAAAAAAAAAAAAAADr1T/q0D7qzzDv0BLuyzDpyTDrvkrvwDDpvkvswQvqu1Dou0PmuD/ptF7ptlHltjvpsETpr1HisjXprGDlsxTgry/erCvkrRTjrQrlonDno1LdpkfbqiTmnHHZpyHnnUbYpBviogzqjJbkmxDUnhDHoBnnlRTmjVe9nxjohY/EnA67ng6vmzDlhGjjh0jlixbnfIafllbkfmjmfVnmdIKkjjnhfDvkdWrmc3PlcHzHfUfgc0zka3jddRXia1uBh2biaGyyfCqTgUHfaz60dVDgaE/iY23iY3DcaxbfXlDQYR7fVGLaWx7fTmHYWBzXViFadR3dRlXZTSLcRVRVciXYShzYQSDXPhzaN0fXOB/LOSfZMEfXLibXKTvVJyDWITrWHzHTHyHVHC/TGSDUFyrTECPVDyjSCybTCCPRByPkXcP4AAAABXRSTlMAESIzRJTdRHwAAAD/SURBVBgZrcHBSgJRFIDh/5x7ZuZqMpGGYAQtgqiWUUHbnrxncBFRJIiRLSJwMg2dudOk7pxN0PfBvxGEOqVIkzozEw7Z9ioGyQ4bubH2BUaUeNaG+ZGxkjsMaTSpjHuT2WKRjjsxUIDhUgOdPO+N9luD1jA+CJAKBuaBYt6/6U8vH7NlDHw7DBdH4LxNJ920fFPvCwgOw7USYLf9nnU/53n7xAORwxAFtHk1mrXTh+MzT0UFJRYg+OZ5uH9anmYzBSRGUaTispfrj8FF0khKEUExVKmEni4baLtTBkAVA+VXTHQbfM6KgmGUVAqQaMmGYXBHHREVtpVBEOqU/NkP6IFGiv9fjF8AAAAASUVORK5CYII="
                    />
                    <p>Crna Gora</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
                „Остао сам са породицом једну ноћ након дуге вожње. Свима се
                допало; љубазна домаћица, савршено чист стан, има све што вам
                треба. Радо ћемо поново свратити.”
              </div>
            </div>
            <div className="flex-[30%] border-2 rounded-[8px] border-[#E39429] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px] text-white">
              <div className="flex flex-row gap-[10px] items-center pb-[20px]">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#e39429]">
                  MD
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[16px] uppercase text-white font-medium">
                    Marko
                  </p>
                  <div className="flex flex-row gap-[4px] text-[14px] items-center">
                    <img
                      alt="Srbija"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAA7VBMVEX///8AAAAAAAAAAAAAAAD///////nx8/z77uvv7+/77OjmvcX3rq7kuWPyrbHprbvhrrPmqpTlqIfmn5vom4jmk5vljpjlkHvsiZTljXnhiJLrgo7mhI/ggY3hgXLfeoThennheHbocn/ocoDmc3Psa3fraG7nZ3TqZmvdZ1GTcp7rW2joW2leeLeKbZ3eYCbcXFLdXD3fXSHbW0esXoHbVEzdVTaAYpVQbbTgR1hNaq/fQlTkP03kOkk/X61AX6g/XK46WqNuS4YyVKQwUZ4wSp8pSZkiRpwhQ5UbQJgeOZUSOJQSMJEPLY4PJY3rzA3qAAAABXRSTlMAESIzRJTdRHwAAADOSURBVBgZrcG9SgNBFIbh9zs5uzObUVD0BgSxsrH1/gsvwNo0oo3BIhDcdZmjkPUHsxaCzwP/Rog5IV1XZty46op9Z3JskQP6PiUQIQJ6cMgOT1Xbl1M+yHDMHJVnOG6CSRVOmw8ZhoOyWeaWyabBoHi7fUiPy/uh9UkxHKVGh+PQjLVrgh0Jx7Kr1NfSjyUFO4vAsIVZl5d0uQsmZjhEhM7r6uJIfCNLI3C1ubust3zyXpZG3p34uOaL987Omh+MXzg4cyQT+6IKMSf4szeJcTsjxopu0QAAAABJRU5ErkJggg=="
                    />
                    <p>Srbija</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
                „Остао сам са породицом једну ноћ након дуге вожње. Свима се
                допало; љубазна домаћица, савршено чист стан, има све што вам
                треба. Радо ћемо поново свратити.”
              </div>
            </div>
            <div className="flex-[30%] border-2 rounded-[8px] border-[#E39429] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px] text-white">
              <div className="flex flex-row gap-[10px] items-center pb-[20px]">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#e39429]">
                  LV
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[16px] uppercase text-white font-medium">
                    Lorenzo
                  </p>
                  <div className="flex flex-row gap-[4px] text-[14px] items-center">
                    <img
                      alt="Španija"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAA5FBMVEX///8AAAAAAAAAAAAAAAD//FP/9nD/+FP/9WP/9CP/9RP970T88Dn/8xj/8Sn/8R//8Bn/8BL57Dn46zT37CD26TH15Vr06Cr95xX95hD031vx5CH74CHu1ojW3F3p2ELu1kPl1lDV2F/h0S/oxl7qxEjmxF/3vWPwumHqt0jsrZnrtxjop7Tqqljuo2PuoBTwiY3jkTLugobljTPckhvbjUnPf7fjhi/bg0fud3zscnbackzsZ2zQWxrnSU/NUyjlR0yeWj7lQkjkP0WwUSarPzDhFRzUFx7gEhnSEhjfCBDPChK7G3JaAAAABXRSTlMAESIzRJTdRHwAAACwSURBVBgZrcFBToNQGIXR7/5cQYgto+7CTXTprkYHarSxgqHvvQ5qNQEmJp4D/0aINUXaZ1Y8WPmNpa1MxC1zY2DUBHNNoGinYC7fDEZRyLu7fHjnR4CpJ7Nr+6T2matTMxhZqKs+RosrCxNV6Tedu1wNx4qLHAQBfB2qfjPxKzBMGmu/bNPnMSUuSotxHUmvPNHZfMvG3Bczd9KjicJCCAOZFSZYJYVYKlmINYU/OwNdvzKjDTSengAAAABJRU5ErkJggg=="
                    />
                    <p>Španija</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
                „Остао сам са породицом једну ноћ након дуге вожње. Свима се
                допало; љубазна домаћица, савршено чист стан, има све што вам
                треба. Радо ћемо поново свратити.”
              </div>
            </div>
            <div className="flex-[30%] border-2 rounded-[8px] border-[#E39429] rounded-[20px] flex flex-col gap-[12px] px-[20px] py-[24px] text-white">
              <div className="flex flex-row gap-[10px] items-center pb-[20px]">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#e39429]">
                  ST
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[16px] uppercase text-white font-medium">
                    Stefan
                  </p>
                  <div className="flex flex-row gap-[4px] text-[14px] items-center">
                    <img
                      alt="Crna Gora"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABTVBMVEX///8AAAAAAAAAAAAAAADr1T/q0D7qzzDv0BLuyzDpyTDrvkrvwDDpvkvswQvqu1Dou0PmuD/ptF7ptlHltjvpsETpr1HisjXprGDlsxTgry/erCvkrRTjrQrlonDno1LdpkfbqiTmnHHZpyHnnUbYpBviogzqjJbkmxDUnhDHoBnnlRTmjVe9nxjohY/EnA67ng6vmzDlhGjjh0jlixbnfIafllbkfmjmfVnmdIKkjjnhfDvkdWrmc3PlcHzHfUfgc0zka3jddRXia1uBh2biaGyyfCqTgUHfaz60dVDgaE/iY23iY3DcaxbfXlDQYR7fVGLaWx7fTmHYWBzXViFadR3dRlXZTSLcRVRVciXYShzYQSDXPhzaN0fXOB/LOSfZMEfXLibXKTvVJyDWITrWHzHTHyHVHC/TGSDUFyrTECPVDyjSCybTCCPRByPkXcP4AAAABXRSTlMAESIzRJTdRHwAAAD/SURBVBgZrcHBSgJRFIDh/5x7ZuZqMpGGYAQtgqiWUUHbnrxncBFRJIiRLSJwMg2dudOk7pxN0PfBvxGEOqVIkzozEw7Z9ioGyQ4bubH2BUaUeNaG+ZGxkjsMaTSpjHuT2WKRjjsxUIDhUgOdPO+N9luD1jA+CJAKBuaBYt6/6U8vH7NlDHw7DBdH4LxNJ920fFPvCwgOw7USYLf9nnU/53n7xAORwxAFtHk1mrXTh+MzT0UFJRYg+OZ5uH9anmYzBSRGUaTispfrj8FF0khKEUExVKmEni4baLtTBkAVA+VXTHQbfM6KgmGUVAqQaMmGYXBHHREVtpVBEOqU/NkP6IFGiv9fjF8AAAAASUVORK5CYII="
                    />
                    <p>Crna Gora</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center flex-wrap gap-[10px]">
                „Остао сам са породицом једну ноћ након дуге вожње. Свима се
                допало; љубазна домаћица, савршено чист стан, има све што вам
                треба. Радо ћемо поново свратити.”
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="md:py-[60px] py-[30px] xl:px-[80px] lg:px-[50px] px-[30px] w-full">
        <p className="flex justify-center mx-auto text-white text-3xl text-center md:pb-[100px] pb-[60px] relative">
          Sadržaji objekta
          <div className="absolute bottom-[90px] h-[4px] bg-[#e39429] w-[120px] rounded-[20px]"></div>
        </p>
        <div className="flex flex-row gap-[40px] flex-wrap justify-between md:w-[80%] w-full mx-auto">
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <div className="w-8 h-8 flex items-center justify-center rounded-full text-[#E39429] border border-[#E39429] font-bold border-2">
                  P
                </div>
                <p className="text-[16px] uppercase text-white">
                  Besplatan parking
                </p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">
                  parking sa olakšanim pristupom
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <WifiIcon className="h-8 w-8 text-[#E39429]" />

                <p className="text-[16px] uppercase text-white">Internet</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">
                  bežični internet dostupan stanu besplatno
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-[#e38429]"
                >
                  <path d="M2.25 2.25h19.5L21 1.5v21l.75-.75H2.25l.75.75v-21l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v21c0 .414.336.75.75.75h19.5a.75.75 0 0 0 .75-.75v-21a.75.75 0 0 0-.75-.75H2.25zm-1.5 1.5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm0 21h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM18 15v3.539a.211.211 0 0 1-.211.211H6.211A.211.211 0 0 1 6 18.539v-7.078c0-.117.094-.211.211-.211h11.578c.116 0 .211.095.211.211V15zm1.5 0v-3.539a1.71 1.71 0 0 0-1.711-1.711H6.211c-.945 0-1.711.766-1.711 1.711v7.078c0 .945.766 1.711 1.711 1.711h11.578a1.71 1.71 0 0 0 1.711-1.711V15zM9 14.25h6a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zM5.25 4.875a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm3 0a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm-6 3.375h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zm11.25-3h5.25a.75.75 0 0 0 0-1.5H13.5a.75.75 0 0 0 0 1.5z"></path>
                </svg>
                <p className="text-[16px] uppercase text-white">Kuhinja</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">sto za ručavanje</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">sredstva za čišćenje</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">mašina za sušenje veša</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">posuđe</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">električno kuvalo</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">mašina za pranje veša</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">
                  mapina za pranje sudova
                </p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">mikrotalasna rerna</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">frižider</p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-[#e39429]"
                >
                  <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path>
                </svg>
                <p className="text-[16px] uppercase text-white">Spavaća soba</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">posteljina</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">garderober ili orman</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">
                  ekstra dugački kreveti (2+ m)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-[#e39429]"
                >
                  <path d="M12.75 15h10.5l-.74-.873-.664 3.986a5.25 5.25 0 0 1-5.179 4.387H7.333a5.25 5.25 0 0 1-5.18-4.387l-.663-3.986L.75 15h4.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0-.74.873l.664 3.986A6.75 6.75 0 0 0 7.334 24h9.333a6.75 6.75 0 0 0 6.659-5.64l.664-3.987a.75.75 0 0 0-.74-.873h-10.5a.75.75 0 0 0 0 1.5zM12 19.5H6v-5.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v5.25zm0 1.5a1.5 1.5 0 0 0 1.5-1.5v-5.25A2.25 2.25 0 0 0 11.25 12h-4.5a2.25 2.25 0 0 0-2.25 2.25v5.25A1.5 1.5 0 0 0 6 21h6zm4.5-17.25a2.25 2.25 0 0 1 4.5 0v10.5a.75.75 0 0 0 1.5 0V3.75a3.75 3.75 0 1 0-7.5 0 .75.75 0 0 0 1.5 0zm-3 3a2.25 2.25 0 0 1 4.5 0l.75-.75h-6l.75.75zm-1.5 0c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75 3.75 3.75 0 1 0-7.5 0z"></path>
                </svg>
                <p className="text-[16px] uppercase text-white">Kupatilo</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">toalet papir</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">peškiri</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">papuče</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">fen za kosu</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">tuš</p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-[#e39429]"
                >
                  <path d="M21.75 8.625a2.25 2.25 0 0 0-2.25 2.25v1.5h-15v-1.5a2.25 2.25 0 0 0-4.5 0v3a3.75 3.75 0 0 0 3.75 3.75h16.5a3.75 3.75 0 0 0 3.75-3.75v-3a2.25 2.25 0 0 0-2.25-2.25zm0 1.5a.75.75 0 0 1 .75.75v3a2.25 2.25 0 0 1-2.25 2.25H3.75a2.25 2.25 0 0 1-2.25-2.25v-3a.75.75 0 0 1 1.5 0v1.5a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-1.5a.75.75 0 0 1 .75-.75zM3 16.875v2.25a.75.75 0 0 0 1.5 0v-2.25a.75.75 0 0 0-1.5 0zm16.5 0v2.25a.75.75 0 0 0 1.5 0v-2.25a.75.75 0 0 0-1.5 0zM3 9.375a3.75 3.75 0 0 1 3.75-3.75h10.5A3.75 3.75 0 0 1 21 9.375a.75.75 0 0 0 1.5 0c0-2.9-2.35-5.25-5.25-5.25H6.75a5.25 5.25 0 0 0-5.25 5.25.75.75 0 0 0 1.5 0zm9.75 3.75v-8.25a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0z"></path>
                </svg>
                <p className="text-[16px] uppercase text-white">
                  Dnevni boravak
                </p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">trpezarija</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">ugaona garnitura</p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-[#e39429]"
                >
                  <path d="M22.5 10.375v6.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-13a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v6.5zm1.5 0v-6.5a1.75 1.75 0 0 0-1.75-1.75H1.75A1.75 1.75 0 0 0 0 3.875v13c0 .966.784 1.75 1.75 1.75h20.5a1.75 1.75 0 0 0 1.75-1.75v-6.5zm-16.5 12h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5zm3.75-4.5v3.75a.75.75 0 0 0 1.5 0v-3.75a.75.75 0 0 0-1.5 0z"></path>
                </svg>
                <p className="text-[16px] uppercase text-white">
                  Mediji i tehnologija
                </p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">flat-screen TV</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">kablovski kanali</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">satelitski kanali</p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-[#e39429]"
                >
                  <path d="M9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM12 15h8.5c.69 0 1.25.56 1.25 1.25v2.5l.75-.75H12l.75.75v-4.5L12 15zm0-1.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-2.5a2.75 2.75 0 0 0-2.75-2.75H12zm-10.5 6h21l-.75-.75v3l.75-.75h-21l.75.75v-3l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h21a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-21zm.75 5.25v-9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0zm21 0v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM19.4 6.001L19.403 6H15.1v.001l.562-4.5V1.5h3.176L19.4 6zm1.49-.187l-.564-4.5A1.5 1.5 0 0 0 18.838 0h-3.176a1.5 1.5 0 0 0-1.488 1.314l-.563 4.5A1.499 1.499 0 0 0 15.102 7.5H19.4a1.499 1.499 0 0 0 1.49-1.687zm-4.39.936v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-1.5 0z"></path>
                </svg>
                <p className="text-[16px] uppercase text-white">
                  Sadržaji u smeštajnoj jedinici
                </p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">utičnica pored kreveta</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">francuski krevet</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">sušilica za veš</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">vešalica za odeću</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">drveni pod ili parket</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">pegla</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-[#E39429]"
                >
                  <path d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"></path>
                </svg>
                <p className="text-[16px] uppercase text-white">
                  Kućni ljubimci
                </p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">
                  kućni ljubimci su dozvoljeni na zahtjev
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-[#E39429]"
                >
                  <path d="M13.125 3.56a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm3.454 18.335l-1.836-3.67a.75.75 0 0 0-.671-.415H11.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v6c0 .414.336.75.75.75h3.75a.75.75 0 0 1 .671.415l2.25 4.5a.75.75 0 0 1-1.342.67zm-1.342.671a2.25 2.25 0 1 0 4.026-2.012l-2.25-4.5A2.25 2.25 0 0 0 16.5 14.81h-3.75l.75.75v-6a2.25 2.25 0 0 0-4.5 0v7.5a2.25 2.25 0 0 0 2.25 2.25h4.322l-.67-.415 1.835 3.672zm-4.362-.958a5.25 5.25 0 0 1-5.25-9.096.75.75 0 1 0-.75-1.299 6.75 6.75 0 1 0 6.75 11.694.75.75 0 1 0-.75-1.3z"></path>
                </svg>

                <p className="text-[16px] uppercase text-white">
                  Pristup objektu
                </p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">
                  objekat se nalazi u prizemlju zgrade
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-[#E39429]"
                >
                  <path d="M9.094 10.879a1.125 1.125 0 1 0 1.134 1.116v-.003c.002-.61-.5-1.115-1.121-1.117h-.006a.75.75 0 1 0 .004 1.5h-.002a.376.376 0 0 1-.375-.368.375.375 0 1 1 .378.372.75.75 0 0 0-.012-1.5zM15.75 3.75h4.5a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 0 0 1.5h4.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25h-4.5a.75.75 0 0 0 0 1.5zM12 22.503l-9-1.285V3.725l9.023-2.227-.023.005v21.001zm-.212 1.485a1.5 1.5 0 0 0 1.712-1.484v-21A1.5 1.5 0 0 0 11.686.037L2.663 2.263A1.493 1.493 0 0 0 1.5 3.726v17.492c0 .747.55 1.38 1.289 1.485l8.999 1.285z"></path>
                </svg>
                <p className="text-[16px] uppercase text-white">
                  Karakteristike objekta
                </p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">
                  privatni apartman u zgradi
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <CheckIcon className="h-8 w-8 text-[#E39429]" />

                <p className="text-[16px] uppercase text-white">Razno</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">klima-uređaj</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">grejanje</p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center pb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-[#e39424]"
                >
                  <path d="M24 13.5a6 6 0 0 0-6-6h-3a6 6 0 0 0 0 12h.75l-.53-.22 4.5 4.5a.75.75 0 0 0 1.28-.53v-5.024l-.43.678A5.989 5.989 0 0 0 24 13.502zm-1.5-.002a4.489 4.489 0 0 1-2.57 4.05.75.75 0 0 0-.43.678v5.024l1.28-.53-4.5-4.5a.75.75 0 0 0-.53-.22H15a4.5 4.5 0 1 1 0-9h3a4.5 4.5 0 0 1 4.5 4.5zM6.22 12.22l-3 3 1.28.53v-5.024a.75.75 0 0 0-.43-.678A4.489 4.489 0 0 1 5.998 1.5H9a4.502 4.502 0 0 1 4.313 3.214.75.75 0 0 0 1.438-.428A6.002 6.002 0 0 0 9 0H6a5.988 5.988 0 0 0-2.57 11.404L3 10.726v5.024a.75.75 0 0 0 1.28.53l3-3a.75.75 0 1 0-1.06-1.06z"></path>
                </svg>
                <p className="text-[16px] uppercase text-white">
                  Usluga dostupna na
                </p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">crnogorski</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">engleski</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">srpski</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">bosanski</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <CheckIcon className="h-4 w-4 text-[#E39429]" />

                <p className="text-[14px] text-white">hrvatski</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-[60px] py-[30px] xl:px-[80px] lg:px-[50px] px-[30px] w-full">
        <p className="flex justify-center mx-auto text-white text-3xl text-center md:pb-[80px] pb-[60px] relative">
          Kućni red
          <div className="absolute bottom-[70px] h-[4px] bg-[#e39429] w-[80px] rounded-[20px]"></div>
        </p>
        <div className="px-[24px] py-[12px] border-2 border-[#e39429] rounded-[8px] flex flex-col text-white lg:w-[70%] w-full mx-auto">
          <div className="flex sm:flex-row flex-col gap-[20px] border-b border-[#e39429] py-[20px] justify-between justify-between">
            <div className="flex flex-row items-center gap-[12px] ">
              <svg
                height="20"
                width="20"
                viewBox="0 0 128 128"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="fill-white"
              >
                <path d="M87.33 66.22c.06-.1.11-.2.16-.3.077-.125.143-.255.2-.39.054-.133.097-.27.13-.41.04-.112.073-.225.1-.34.1-.515.1-1.045 0-1.56a3.352 3.352 0 0 0-.1-.34 2.802 2.802 0 0 0-.13-.41 2.868 2.868 0 0 0-.2-.39c0-.1-.1-.2-.16-.3a4.922 4.922 0 0 0-.5-.61l-24-24a4.002 4.002 0 1 0-5.66 5.66L74.34 60H20a4 4 0 0 0 0 8h54.34L57.17 85.17a4.002 4.002 0 1 0 5.66 5.66l24-24c.183-.19.35-.394.5-.61zM92 0h-8a4 4 0 0 0 0 8h8c6.627 0 12 5.373 12 12v88c0 6.627-5.373 12-12 12h-8a4 4 0 0 0 0 8h8c11.046 0 20-8.954 20-20V20c0-11.046-8.954-20-20-20z"></path>
              </svg>
              Prijavljivanje
            </div>
            <div className="flex flex-col gap-[12px] sm:text-right">
              <p>od 12.00 do 22.00</p>
              <p className="text-[14px]">
                Potrebno je unaprijed obavjestiti o vremenu dolaska.
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-[20px] border-b border-[#e39429] py-[20px] justify-between">
            <div className="flex flex-row items-center gap-[12px] ">
              <svg
                height="20"
                width="20"
                viewBox="0 0 128 128"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="fill-white"
              >
                <path d="M111.33 66.22c.06-.1.11-.2.16-.3.05-.1.15-.25.21-.39s.08-.27.12-.41c.039-.112.073-.225.1-.34.1-.515.1-1.045 0-1.56a3.352 3.352 0 0 0-.1-.34c0-.14-.07-.28-.12-.41-.05-.13-.14-.26-.21-.39-.07-.13-.1-.2-.16-.3a4.886 4.886 0 0 0-.5-.61l-24-24a4.002 4.002 0 1 0-5.66 5.66L98.34 60H44a4 4 0 0 0 0 8h54.34L81.17 85.17a4.002 4.002 0 1 0 5.66 5.66l24-24c.183-.19.35-.394.5-.61zM44 120h-8c-6.627 0-12-5.373-12-12V20c0-6.627 5.373-12 12-12h8a4 4 0 0 0 0-8h-8C24.954 0 16 8.954 16 20v88c0 11.046 8.954 20 20 20h8a4 4 0 0 0 0-8z"></path>
              </svg>
              Odjavljivanje
            </div>
            <div className="flex flex-col gap-[12px] sm:text-right">
              <p>od 08.00 do 10.00</p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-[20px] border-b border-[#e39429] py-[20px] justify-between">
            <div className="flex flex-row items-center gap-[12px] ">
              <svg
                height="20"
                width="20"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="fill-white"
              >
                <path d="M21.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm-6.182 15.093l.188 1.5A.75.75 0 0 0 18 22.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5a4.5 4.5 0 0 0-7.2-3.6.75.75 0 1 0 .9 1.2 3 3 0 0 1 4.8 2.4v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3l.744.657-.188-1.5a.75.75 0 0 0-1.488.186zM6.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM5.444 20.157l-.188 1.5L6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 4.8-2.4.75.75 0 1 0 .9-1.2A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3a.75.75 0 0 0 .744-.657l.188-1.5a.75.75 0 0 0-1.488-.186zM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 3a4.5 4.5 0 0 0-4.5 4.5v.75c0 .414.336.75.75.75h1.5l-.74-.627.75 4.5a.75.75 0 0 0 .74.627H12a.75.75 0 0 0 0-1.5h-1.5l.74.627-.75-4.5a.75.75 0 0 0-.74-.627h-1.5l.75.75v-.75a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5zm0 1.5a3 3 0 0 1 3 3v.75l.75-.75h-1.5a.75.75 0 0 0-.74.627l-.75 4.5.74-.627H12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .74-.627l.75-4.5-.74.627h1.5a.75.75 0 0 0 .75-.75v-.75A4.5 4.5 0 0 0 12 12a.75.75 0 0 0 0 1.5z"></path>
              </svg>
              Djeca i kreveti
            </div>
            <div className="flex flex-col gap-[12px] sm:text-right">
              <p>Deca bilo kog uzrasta su dobrodošla.</p>
              <p>Kreveci ili dodatni kreveti nisu dostupni.</p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-[20px] border-b border-[#e39429] py-[20px] justify-between">
            <div className="flex flex-row items-center gap-[12px] ">
              <svg
                height="20"
                width="20"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="fill-white min-w-[20px]"
              >
                <path d="M21.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm-6.182 15.093l.188 1.5A.75.75 0 0 0 18 22.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5a4.5 4.5 0 0 0-7.2-3.6.75.75 0 1 0 .9 1.2 3 3 0 0 1 4.8 2.4v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3l.744.657-.188-1.5a.75.75 0 0 0-1.488.186zM6.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM5.444 20.157l-.188 1.5L6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 4.8-2.4.75.75 0 1 0 .9-1.2A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3a.75.75 0 0 0 .744-.657l.188-1.5a.75.75 0 0 0-1.488-.186zM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 3a4.5 4.5 0 0 0-4.5 4.5v.75c0 .414.336.75.75.75h1.5l-.74-.627.75 4.5a.75.75 0 0 0 .74.627H12a.75.75 0 0 0 0-1.5h-1.5l.74.627-.75-4.5a.75.75 0 0 0-.74-.627h-1.5l.75.75v-.75a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5zm0 1.5a3 3 0 0 1 3 3v.75l.75-.75h-1.5a.75.75 0 0 0-.74.627l-.75 4.5.74-.627H12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .74-.627l.75-4.5-.74.627h1.5a.75.75 0 0 0 .75-.75v-.75A4.5 4.5 0 0 0 12 12a.75.75 0 0 0 0 1.5z"></path>
              </svg>
              Bez starosnog ograničenja
            </div>
            <div className="flex flex-col gap-[12px] sm:text-right">
              <p>Ne postoji starosno ograničenje za prijavljivanje .</p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-[20px] border-b border-[#e39429] py-[20px] justify-between">
            <div className="flex flex-row items-center gap-[12px] ">
              <svg
                height="20"
                width="20"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="fill-white"
              >
                <path d="M22.5 12v6.75a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75V12zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v13.5A2.25 2.25 0 0 0 2.25 21h19.5A2.25 2.25 0 0 0 24 18.75V12zM.75 9h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm4.5 4.5h8.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5zm0 3h5.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5z"></path>
              </svg>
              Samo gotovina
            </div>
            <div className="flex flex-col gap-[12px] sm:text-right">
              <p>Ovaj objekat prihvata samo plaćanje gotovinom.</p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-[20px] border-b border-[#e39429] py-[20px] justify-between">
            <div className="flex flex-row items-center gap-[12px] ">
              <svg
                height="20"
                width="20"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="fill-white"
              >
                <path d="M6.75 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zm4.35-1.2l-2.25-3a.75.75 0 1 0-1.2.9l2.25 3a.75.75 0 1 0 1.2-.9zm2.775-1.8a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm2.25-2.25a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm-4.5-.75a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm-3.21 4.782L5.742 9.62a2.25 2.25 0 0 0-.493 1.406v9.52c0 .444.132.878.378 1.248l.8 1.2A2.249 2.249 0 0 0 8.298 24H15.7a2.25 2.25 0 0 0 1.872-1.002l.8-1.2a2.25 2.25 0 0 0 .378-1.254v-9.518a2.25 2.25 0 0 0-.494-1.406l-2.67-3.338a.75.75 0 0 0-1.172.936l2.671 3.34a.75.75 0 0 1 .165.468v9.52c0 .15-.044.296-.126.42l-.8 1.2a.75.75 0 0 1-.624.334H8.3a.75.75 0 0 1-.623-.336l-.801-1.202a.75.75 0 0 1-.126-.416v-9.52a.75.75 0 0 1 .165-.468l2.67-3.34a.75.75 0 0 0-1.17-.936z"></path>
              </svg>
              Zabave
            </div>
            <div className="flex flex-col gap-[12px] sm:text-right">
              <p>Zabave/događaji nisu dozvoljeni .</p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-[20px] py-[20px] justify-between">
            <div className="flex flex-row items-center gap-[12px]">
              <svg
                height="20"
                width="20"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="fill-white"
              >
                <path d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"></path>
              </svg>
              Kućni ljubimci
            </div>
            <div className="flex flex-col gap-[12px] sm:text-right">
              <p>
                Kućni ljubimci su dozvoljeni na zahtev. Ne plaća se dodatno.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[450px] overflow-auto relative">
        <div className="items-center relative z-[30] xl:px-[80px] lg:px-[50px] px-[30px] w-full mx-auto sm:flex hidden">
          <div className="text-white flex flex-col">
            <div className="w-full h-full flex flex-col">
              <div className="flex items-center gap-[10px]">
                <MapPinIcon className="h-8 w-8 text-[#E39429]" />
                <p className="md:text-[28px] text-[18px] uppercase">
                  VI Crnogorske p+4/6, Nikšić
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 overflow-hidden home-cover xl:w-[60%] sm:w-[50%] w-full sm:opacity-100 opacity-40 sm:before:opacity-100 before:opacity-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1464.3057032676124!2d18.957918308921073!3d42.77543315990363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1689018516309!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="w-full px-[20px] py-[20px] items-center justify-between text-white text-[14px] flex gap-[10px] flex-wrap">
        <p>© Stan na Dan Nikšić, 2023</p>
        <p>
          built with 🧡 by{" "}
          <a href="https://github.com/dumaaas" className="underline">
            dumaaas
          </a>
        </p>
      </div>
    </div>
  );
}
