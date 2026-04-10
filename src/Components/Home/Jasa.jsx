import Card from "./Card";

import logo1 from "../../assets/logo/bangunan.png";
import Title from "../Title";
const Jasa = () => {
  return (
    <div className="flex flex-col gap-4  mt-5 ">
      <Title aos="fade-up">Layanan Kami</Title>
      <div className="flex md:flex-row flex-col gap-2">
        <Card
          delay={200}
          title="Konstruksi Bangunan"
          logo={logo1}
          buttonTitle="LIHAT KATALOG"
          desc="mengerjakan berbagai proyek konstruksi, mulai dari hunian, komersial hingga infrastruktur, dengan standar kualitas dan keselamatan"
        />
        <Card
          delay={600}
          title="Suplier Material"
          logo={logo1}
          buttonTitle="KONSULTASI DESAIN"
          desc="Menyediakan material bangunan berkualitas dari pemasok terpercaya dengan harga kompotitif dan pengiriman cepat"
        />
        <Card
          delay={800}
          title="Solusi Proyek Terintegrasi"
          logo={logo1}
          buttonTitle="KONSULTASI RUMAH"
          desc="memberi pembangunan terintegrasi mulai dari perencanaan, pengadaan material, hingga pelaksanaan proyek secara efisien dan transparan"
        />
        <Card
          delay={800}
          title="Kemitraan Terpercaya"
          logo={logo1}
          buttonTitle="KONSULTASI RUMAH"
          desc="Membangun hubungan jangka panjang dengan klien melalui kepercayaan, integritas, dan komitment terhadap kepuasan pelanggan"
        />
      </div>
    </div>
  );
};
export default Jasa;
