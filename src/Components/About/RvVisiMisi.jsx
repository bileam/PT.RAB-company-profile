import misiLogo from "../../assets/logo/misi.svg";
import dammygambar from "../../assets/image/home.jpg";
const RvVisiMisi = () => {
  const misi = [
    {
      logo: "",
      title: "Kualitas Terbaik",
      desc: "Memberikan layanan konstruksi dan penyediaan material berkualitas tinggi dengan fokus pada kepuasan pelanggan",
    },
    {
      logo: "",
      title: "Inovasi & Material Solution",
      desc: "Menghadirkan inovasi serta memastikan ketersediaan material yang andal dan tepat guna dalam setiap proyek",
    },
    {
      logo: "",
      title: "Kepercayaan Klien",
      desc: "Membangun hubungan jangka panjang dengan klien melalui kepercayaan, profesionalisme dan transparansi",
    },
    {
      logo: "",
      title: "Peduli Lingkungan",
      desc: "Mendukung praktik konstruksi yang ramah lingkungan dan bertanggung jawab untuk masa depan yang lebih baik",
    },
  ];

  return (
    <div className="flex md:flex-row flex-col gap-6 tx-light mt-4">
      <div className="md:w-80 lg:w-120">
        <h1 className="rab-title font-extrabold">Visi Kami</h1>
        <div className="relative mt-4 h-70 md:h-80 rounded-md overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.15)] ">
          <img
            src={dammygambar}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 transition-colors duration-300 bg-blue-900/50 dark:bg-black/50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <div className="p-2 rounded-full bg-rab-green">
              <img src={misiLogo} alt="" />
            </div>
            <h2 className="text-rab-light dark:text-rab-green transition-colors duration-300 font-bold mt-2">
              Visi PT Renol Anugrah Bersama
            </h2>
            <p className="text-white text-sm mt-2">
              Menjadi perusahaan konstruktor dan supplier terkemuka yang dikenal
              akan kualitas, ketepatan, dan keandalan dalam setiap proyek serta
              memberikan nilai terbaik untuk meningkatkan kepercayaan dan
              kepuasan klien.
            </p>
          </div>
        </div>
      </div>

      {/* ===== MISI ===== */}
      <div className="flex-1">
        <h1 className="rab-title font-extrabold">Misi Kami</h1>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {misi.map((item, index) => (
            <div
              key={index}
              className="  rounded-md shadow-[0_0_15px_rgba(0,0,0,0.1)] p-4 flex flex-col items-center text-center gap-2 hover:scale-[1.02] transition"
            >
              <div className="p-2 rounded-full bg-rab-green">
                <img src={misiLogo} alt="" />
              </div>
              <h1 className="rab-title font-bold">{item.title}</h1>
              <p className="text-[0.9rem] ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RvVisiMisi;
