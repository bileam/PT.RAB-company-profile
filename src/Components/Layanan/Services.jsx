import Title from "../Title";
import gambar from "../../assets/image/home.jpg";
import CardLayanan from "./CardLayanan";
const Service = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-start gap-2">
        <Title aos="fade-up" delay={200}>
          Layanan Unggulan
        </Title>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="md:text-[0.9rem] text-[0.8rem] text-rab-dark dark:text-rab-light transition-colors duration-300"
        >
          Kami menyediakan Layanan Lengkap dari perencanaan hingga finishing
          project
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4 2xl:grid-cols-6 mx-auto md:mx-0">
        {/* stars card */}
        <CardLayanan src={gambar} title="suplier Alat Bangunan" />
        <CardLayanan src={gambar} title="Desain Interior" />
        <CardLayanan src={gambar} title="Renovasi Rumah" />
        <CardLayanan src={gambar} title="Pembangunan Rumah" />
        <CardLayanan src={gambar} title="Konsultasi Proyek" />
        <CardLayanan src={gambar} title="Proyek Komersial" />
        {/* end card */}
      </div>
    </div>
  );
};

export default Service;
