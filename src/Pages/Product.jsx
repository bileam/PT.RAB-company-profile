import banner from "../assets/image/home.jpg";
import Banner from "../Components/About/Banner";
import Card from "../Components/Product/Card";
import Title from "../Components/Product/Title";
import { Products } from "../Data/Product";

const Product = () => {
  return (
    <div className="md:mt-4">
      <Banner image={banner}>Product Kami</Banner>
      <div className="section-container flex flex-col gap-2">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="inline-block  md:-translate-y-5 -translate-y-2  items-center tx-navy text-[0.9rem] md:text-[1.2rem]"
        >
          <span className="font-extrabold">Home</span> <span>{">"}</span>{" "}
          <span>Product Kami</span>
        </h1>
        <Title />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full ">
          {Products.map((item, index) => (
            <Card gambar={item.image} name={item.name} desc={item.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
