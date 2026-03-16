import Title from "../Title";
import Card from "./Card";
import gambar from "../../assets/image/Ceo.jpeg";

const Tim = () => {
  return (
    <div className="py-10  mb-2">
      <div className="flex mb-4">
        <Title aos="flip-left">Tim Kami</Title>
      </div>
      <div className="grid md:gap-4 gap-4 md:grid-cols-3 lg:grid-cols-5 grid-cols-2 ">
        <Card gambar={gambar} jabatan="Ceo Perusahaan">
          Renol Mangalla
        </Card>
        <Card delay={200} gambar={gambar} jabatan="Sekertaris perusahaan">
          Renol Mangalla
        </Card>
        <Card delay={400} gambar={gambar} jabatan="Bendahara Perusahaan">
          Renol Mangalla
        </Card>
      </div>
    </div>
  );
};
export default Tim;
