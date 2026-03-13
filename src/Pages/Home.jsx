import Banner from "../Components/Banner";
import Jasa from "../Components/Home/Jasa";
import Portofolio from "../Components/Home/Portofolio";
import ProjectStatistic from "../Components/Home/Statistic";

const Home = () => {
  return (
    <div className="flex flex-col  gap-2 ">
      <Banner />
      <div className="section-container flex flex-col gap-16 ">
        <Jasa />
        <ProjectStatistic />
        <Portofolio />
      </div>
    </div>
  );
};
export default Home;
