import logoRab from "../assets/image/NobgLogo.png";
import icon_phone from "../assets/logo/icn_phone.svg";
import icon_email from "../assets/logo/icn_email.svg";
import icon_location from "../assets/logo/icn_location.svg";
const Footer = () => {
  return (
    <div className="pt-10 pb-5 section-container">
      <div className="flex justify-between md:flex-row flex-col gap-6 md:gap-0">
        {/* untuk gambar */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex gap-2 items-center"
        >
          <img src={logoRab} alt="logo" className="md:w-15 w-10 object-cover" />
          <div className="flex flex-col justify-center">
            <h1 className="text-rab-navy font-extrabold text-[0.9rem] md:text-[1rem]">
              PT. Renol Anugrah Bersama
            </h1>
            <p className="text-[0.8rem]  md:text-[0.9rem] font-bold text-rab-green">
              General Contractor & Supplier
            </p>
          </div>
        </div>

        {/* menu */}
        <div className="flex justify-between md:gap-10">
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col gap-4 border-white "
          >
            <h1 className="text-rab-neon transition-colors duration-300 font-bold">
              Menu
            </h1>
            <div className="items-start flex flex-col gap-2">
              <button className="text-rab-light">Home</button>
              <button className="text-rab-light">About</button>
              <button className="text-rab-light">Portofolio</button>
              <button className="text-rab-light">Service</button>
            </div>
          </div>
          {/* hubungi kami */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col gap-4"
          >
            <h1 className="text-rab-neon transition-colors duration-300 font-bold">
              Hubungi kami
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <img src={icon_location} alt="location.svg" />
                <p className="text-rab-light">
                  Jl. Simbuang No.123, Tana Toraja
                </p>
              </div>
              <div className="flex  gap-2">
                <img src={icon_phone} alt="phone.svg" />
                <p className="text-rab-light">+62 8125 2922 597</p>
              </div>
              <div className="flex  gap-2 ">
                <img src={icon_email} alt="email.svg" />
                <p className="text-rab-light">RenolAnugrahBersamah@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="1000" className="mt-4 ">
        <h1 className="text-rab-navy md:text-md text-sm">
          @2026 PT. RENOL ANUGRAH BERSAMA, by bileam mangalla
        </h1>
      </div>
    </div>
  );
};
export default Footer;
