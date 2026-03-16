import Banner from "../Components/About/Banner";
import MemiliKami from "../Components/About/MemiliKami";
import Tentang from "../Components/About/Tentang";
import Tim from "../Components/About/Tim";

const About = () => {
  return (
    <div className="md:mt-4">
      <Banner />
      <div className="section-container flex flex-col gap-2">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="inline-block  md:-translate-y-5 -translate-y-2  items-center tx-navy text-[0.9rem] md:text-[1.2rem]"
        >
          <span className="font-extrabold">Home</span> <span>{">"}</span>{" "}
          <span>Tentang Kami</span>
        </h1>
        <Tentang />
        <MemiliKami />
        <Tim />
      </div>
    </div>
  );
};
export default About;
