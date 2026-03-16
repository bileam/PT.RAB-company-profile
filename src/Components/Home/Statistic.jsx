import Title from "../Title";
import CardStatistic from "./CardStatistic";

const ProjectStatistic = () => {
  return (
    <div className="flex flex-col gap-4 px-2 md:px-0  py-6 overflow-hidden">
      <Title aos="zoom-in">Project Statistics</Title>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mx-auto gap-2 md:gap-10 px-2 ">
        <CardStatistic code1=">" angka={10}>
          Tahun Pengalaman
        </CardStatistic>
        <CardStatistic kode2="+" angka={250}>
          Proyek Selesai
        </CardStatistic>
        <CardStatistic kode2="+" angka={200}>
          Klien Puas
        </CardStatistic>
        <CardStatistic kode2="+" angka={50}>
          Tenaga Ahli
        </CardStatistic>
        <CardStatistic kode2="+" angka={250}>
          Proyek Selesai
        </CardStatistic>
      </div>
    </div>
  );
};
export default ProjectStatistic;
