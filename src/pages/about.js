import aboutBg from "../../public/images/image9.jpg";

export default function about() {
  return (
    <div className="flex w-full h-screen overflow-auto">
      <div className="sm:w-[50%] xl:w-[40%] about-text relative z-[30] sm:after:w-[50%] xl:after:w-[40%] sm:before:w-[50%] xl:before:w-[40%]">
        <div className="text-white max-w-[900px] xl:px-[80px] lg:px-[50px] px-[30px] pt-[140px] pb-[50px] flex flex-col">
          <h2 className="text-2xl font-light uppercase ">O nama</h2>
          <div className="py-[50px]">
            <p className="text-xl font-bold uppercase">Stan na dan, Nikšić</p>
            <p className="text-lg uppercase">Ilija Dumnić</p>
          </div>
          <p className="text-sm pb-[20px]">
            Sa strašću za pružanjem kvalitetnog smeštaja, moj cilj je da vam
            obezbedim nezaboravno iskustvo. Stan je pažljivo uređen kako bi
            pružio udobnost i osećaj kao da ste kod kuće. Svaki detalj je
            pažljivo biran kako bi vaš boravak bio prijatan i relaksirajući.
          </p>

          <p className="text-sm pb-[20px]">
            Lokacija stana je izvanredna, smeštena u samom srcu grada. U blizini
            ćete pronaći razne atrakcije i praktične pogodnosti. Bilo da ste u
            poseti iz poslovnih ili turističkih razloga, naš stan će vam pružiti
            idealnu bazu za istraživanje.
          </p>
          <p className="text-sm pb-[20px]">
            Vaše zadovoljstvo je od velikog značaja za nas. Stoga, svi vaši
            zahtevi, pitanja i potrebe su nam važni. Rado ćemo vam pružiti
            informacije o lokalnim restoranima, znamenitostima i događanjima
            kako biste iskoristili svoje vreme u gradu na najbolji mogući način.
          </p>
          <p className="text-sm pb-[20px]">
            Radujem se prilici da vas ugostim i pružim vam nezaboravan boravak u
            našem prelepom stanu. Ukoliko imate bilo kakva pitanja ili želite
            napraviti rezervaciju, slobodno me kontaktirajte.
          </p>
        </div>
      </div>
      <div
        className="fixed top-0 right-0 overflow-hidden about-cover xl:w-[60%] sm:w-[50%] w-full sm:opacity-100 opacity-40 sm:before:opacity-100 before:opacity-0"
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
