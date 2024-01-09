import React from "react";
import aboutImg from "../assets/about.png";
import aboutImg2 from "../assets/mobile-login.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";


const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <img src={aboutImg} alt="" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              FİRMAMIZ KESİNLİKLE İŞ BİTİMİNDEN HEMEN SONRA SİZDEN ÜCRET TALEP ETMEZ

            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              YAPILAN İŞ ONAYLANMADAN ASLA ÜCRET TALEP ETMEZ
              ÜCRET İÇİN KESİNLİKLE İKİNCİ KİŞİLER İLE MUHATAP OLUNMAZ
              İŞ EMRİ HANGİ FİRMADAN GELDİ İSE
              İŞ O FİRMAYA ( YETKİLİ) KİŞİLERE TESLİM EDİLİR.
              FİRMAMIZ 7/24 HİZMET VERMEKTEDİR
              SAAT İLE SINIRIMIZ OLMADIĞINI BİLMENİZİ İSTERİZ…
            </p>
            <button className="btn-primary">Devamını okumak için...</button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
            Yerel yardım, işin yeniden doğuşunu simgeler. <br /> <span className="text-brandPrimary">Emek ve özveriyle geldiğimiz bu nokta, </span>
            </h2>
            <p>topluluğumuza katkıda bulunmanın gururunu taşır."</p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/sarj.png" alt=""width={100}  />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">E-şarj kurulum</h4>
                  {<p>7-11-22—150–kw</p> }
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/hizmet.png" alt="" width={100} />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">7/24 Hizmet  </h4>
                  { <p>Elektrik arıza müdahale merkezi </p> }
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/proje.png" alt="" width={100} />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">Projelendirme</h4>
                  <p>Güneş enerji panelleri ve kurulum</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/sanayi.png" alt="" width={100} />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">Sanayi elektriği ve yüksek Gerilim</h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default About;
