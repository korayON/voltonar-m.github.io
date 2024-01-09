import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Kamera Sistemleri     ",
      decription:
        "Profesyonel markalar ile olşturduğumuz ortaklıklar ve tecrübeli kadromuz ile Kamera Sistemleri konusunda hizmet vermekteyiz.",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 2,
      title: "Yüksek  Gerilim ",
      decription:
        "Profesyonel ve tecrübeli teknik kadromuz ile Yüksek Gerilim konusunda hizmet vermekteyiz.",
      image: "/src/assets/icons/association.png",
    },
    {
      id: 3,
      title: "Alt Yapı      ",
      decription:
        "Profesyonel ve tecrübeli teknik kadromuz ile Alt Yapı konusunda hizmet vermekteyiz.",
      image: "/src/assets/icons/group-club.png",
    },
    {
      id: 4,
      title: "Orta Gerilim     ",
      decription:
        "Profesyonel markalar ile olşturduğumuz ortaklıklar ve tecrübeli kadromuz ile Kamera Sistemleri konusunda hizmet vermekteyiz.",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 5,
      title: "Bariyer Sistemleri",
      decription:
        "Profesyonel markalar ile olşturduğumuz ortaklıklar ve tecrübeli kadromuz ile Kamera Sistemleri konusunda hizmet vermekteyiz.",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 6,
      title: "Zayıf Akım   ",
      decription:
        "Profesyonel markalar ile olşturduğumuz ortaklıklar ve tecrübeli kadromuz ile Kamera Sistemleri konusunda hizmet vermekteyiz.",
      image: "/src/assets/icons/membership.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
         Referanslarımız
        </h2>
        <p className="text-neutralGrey">
          Bizimle çalışan ve daha önce çalışmışlar olan firmalar...
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8 ">
          <img src="src/assets/icons/milli.png" alt="" width={150} />
          <img src="src/assets/icons/petrol.png" alt="" width={150} />
          <img src="src/assets/icons/zorlu.jpg" alt="" width={150} />
          <img src="src/assets/icons/girne.png" alt="" width={150} />
          <img src="src/assets/icons/teknokent.jpg" alt=""width={150}  />
          <img src="src/assets/icons/ekotem.jpg" alt="" width={150} />
          <img src="src/assets/icons/cbktp.png" alt="" width={250} />
        </div>
      </motion.div>

      {/* service cards */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-20 text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Hizmetlerimiz
        </h2>
        <p className="text-neutralGrey">
          Hizmet vermekte oldugumuz alanlar için...
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div className="">
              <div className="bg-[#E8F5E9] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.decription}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
