import aboutBg from "../../public/images/image8.jpg";
import { useState } from "react";

export default function contact() {
  const [labelNamePosition, setLabelNamePosition] = useState("down");
  const [labelEmailPosition, setLabelEmailPosition] = useState("down");
  const [labelMessagePosition, setLabelMessagePosition] = useState("down");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLabelFocus = (type) => {
    switch (type) {
      case "name":
        setLabelNamePosition("up");
        break;
      case "email":
        setLabelEmailPosition("up");
        break;
      case "message":
        setLabelMessagePosition("up");
        break;
      default:
        break;
    }
  };
  const handleLabelBlur = (type) => {
    switch (type) {
      case "name":
        if (name.length < 1) setLabelNamePosition("down");
        break;
      case "email":
        if (email.length < 1) setLabelEmailPosition("down");
        break;
      case "message":
        if (message.length < 1) setLabelMessagePosition("down");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex w-full h-screen overflow-auto">
      <div className="sm:w-[50%] xl:w-[40%] sm:after:w-[50%] xl:after:w-[40%] sm:before:w-[50%] xl:before:w-[40%] about-text relative z-[30]">
        <div className="text-white max-w-[900px] xl:px-[80px] lg:px-[50px] px-[30px] pt-[140px] pb-[50px] flex flex-col">
          <h2 className="text-2xl font-light uppercase ">Kontaktirajte nas</h2>
          <div className="py-[50px]">
            <p className="text-xl font-bold uppercase">
              Dnevni odmor, noćenje, 24 sata?
            </p>
          </div>
          <div className="relative flex flex-col gap-[25px]">
            <div className="relative">
              <input
                onClick={() => handleLabelFocus("name")}
                onBlur={() => handleLabelBlur("name")}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className=" placeholder:text-white py-[8px] w-full bg-transparent border-0 border-b focus:outline-none border-b-white"
              />
              <label
                className={`${
                  labelNamePosition === "down"
                    ? "top-[8px]"
                    : "top-[-12px] text-[12px]"
                } absolute transition-all ease-in-out duration-300 left-0`}
              >
                Ime
              </label>
            </div>
            <div className="relative">
              <input
                onClick={() => handleLabelFocus("email")}
                onBlur={() => handleLabelBlur("email")}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className=" placeholder:text-white py-[8px] w-full bg-transparent border-0 border-b focus:outline-none border-b-white"
              />
              <label
                className={`${
                  labelEmailPosition === "down"
                    ? "top-[8px]"
                    : "top-[-12px] text-[12px]"
                } absolute transition-all ease-in-out duration-300 left-0`}
              >
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                onClick={() => handleLabelFocus("message")}
                onBlur={() => handleLabelBlur("message")}
                onChange={(e) => setMessage(e.target.value)}
                rows={1}
                className=" placeholder:text-white py-[8px] w-full bg-transparent border-0 border-b focus:outline-none border-b-white"
              />
              <label
                className={`${
                  labelMessagePosition === "down"
                    ? "top-[8px]"
                    : "top-[-12px] text-[12px]"
                } absolute transition-all ease-in-out duration-300 left-0`}
              >
                Poruka
              </label>
            </div>
            <button className="relative inline-flex contact-btn">
              <span className="">Pošalji</span>
            </button>
            <div className="flex items-center justify-between mt-[30px] gap-[40px] xl:gap-[20px] flex-wrap">
              <div className="flex flex-col gap-[8px]">
                <p>(068) 854-963</p>
                <p>VI Crnogorske p+4/6</p>
                <p>Nikšić, Montenegro</p>
              </div>
              <div className="flex gap-[12px]">
                <a target="_blank" href="https://www.instagram.com/stan.na.dan_niksic" className="text-[14px] cursor-pointer transition-all ease-in-out duration-200 hover:bg-white hover:border-black hover:text-black w-[116px] h-[116px] border border-white rounded-full flex items-center justify-center">
                    Booking
                </a>
                <a target="_blank" href="https://www.instagram.com/stan.na.dan_niksic" className="text-[14px] cursor-pointer transition-all ease-in-out duration-200 hover:bg-white hover:border-black hover:text-black w-[116px] h-[116px] border border-white rounded-full flex items-center justify-center">
                    Airbnb
                </a>
                <a target="_blank" href="https://www.instagram.com/stan.na.dan_niksic" className="text-[14px] cursor-pointer transition-all ease-in-out duration-200 hover:bg-white hover:border-black hover:text-black w-[116px] h-[116px] border border-white rounded-full flex items-center justify-center">
                    Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 right-0 overflow-hidden about-cover xl:w-[60%] sm:w-[50%] w-full sm:opacity-100 opacity-40 sm:before:opacity-100 before:opacity-0"
        style={{
          backgroundImage: `url(${aboutBg.src})`,
          height: "100%",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
