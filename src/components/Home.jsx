import React from "react";
import { Carousel } from "flowbite-react";
import araba from "../assets/araba.png";
import sac from "../assets/sac.png"
import paro from "../assets/paro.png";


const Home = () => {
  return (
    <div className=" bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={sac} alt="" width={650}/>
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug"> <span className="text-brandPrimary leading-snug">Güneş Enerji panelleri</span> <span className="text-brandPrimary leading-snug">ve kurulumu</span></h1>
            <p className="text-neutralGrey text-base mb-8">ENERJİNİZ HİÇ BİTMESİN</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Daha Fazlası için...</button>
           </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={paro} alt="" width={750}/>

           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Kompanzasyon pano <span className="text-brandPrimary leading-snug">elektrik pano kurulum ve devreye alma</span></h1>
            <p className="text-neutralGrey text-base mb-8">%100 Müşteri ve teknik destek ile</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Detaylı Bilgi için...</button>
           </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={araba} alt=""/>
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Voltonarım farkıyla  <span className="text-brandPrimary leading-snug">Eşarj kurulum</span></h1>
            <p className="text-neutralGrey text-base mb-8">%100 Tasarruf %100 Güven</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Detaylı Bilgi için...</button>
           </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
