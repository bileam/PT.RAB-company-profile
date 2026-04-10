import Card from "../Home/Card";
import Title from "../Title";
import berkualitas from "../../assets/logo/berkualitas.png";
import pengalaman from "../../assets/logo/berpengalaman.png";
import prefesional from "../../assets/logo/prefesional.png";
const MemiliKami = () => {
  return (
    <div className="mb-5 mt-4    flex flex-col gap-6 ">
      <div className="flex">
        <Title aos="fade-up">Mengapa memili kami?</Title>
      </div>
      <div className="flex md:flex-row flex-col gap-4">
        <Card
          logo={pengalaman}
          title="Berpengalaman"
          desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        voluptates velit officia eligendi perspiciatis, illo doloribus similique
        quod quia aliquid non ullam eos adipisci! Aut repellendus dolor velit
        beatae explicabo?"
        />
        <Card
          logo={berkualitas}
          title="Berkualitas"
          desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        voluptates velit officia eligendi perspiciatis, illo doloribus similique
        quod quia aliquid non ullam eos adipisci! Aut repellendus dolor velit
        beatae explicabo?"
        />
        <Card
          logo={prefesional}
          title="Prefesional"
          desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        voluptates velit officia eligendi perspiciatis, illo doloribus similique
        quod quia aliquid non ullam eos adipisci! Aut repellendus dolor velit
        beatae explicabo?"
        />
      </div>
    </div>
  );
};

export default MemiliKami;
