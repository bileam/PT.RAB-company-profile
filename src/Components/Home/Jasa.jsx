import Card from "./Card";

import logo1 from "../../assets/logo/bangunan.png";
import Title from "../Title";
const Jasa = () => {
  return (
    <div className="flex flex-col gap-4  mt-5 ">
      <Title aos="fade-up">Out Services</Title>
      <div className="flex md:flex-row flex-col gap-2">
        <Card
          delay={200}
          title="Alat Bangunan"
          logo={logo1}
          buttonTitle="LIHAT KATALOG"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla
          saepe molestias distinctio quae aliquid, ipsum harum veritatis
          praesentium consequatur."
        />
        <Card
          delay={600}
          title="Desain Interior Rumah"
          logo={logo1}
          buttonTitle="KONSULTASI DESAIN"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla
          saepe molestias distinctio quae aliquid, ipsum harum veritatis
          praesentium consequatur."
        />
        <Card
          delay={800}
          title="Desain Dan Renovasi Rumah"
          logo={logo1}
          buttonTitle="KONSULTASI RUMAH"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla
          saepe molestias distinctio quae aliquid, ipsum harum veritatis
          praesentium consequatur."
        />
      </div>
    </div>
  );
};
export default Jasa;
