import { Helmet } from "react-helmet";
import BannerSlider from "../Components/Banner/BannerSlider";
import Jasa from "../Components/Home/Jasa";
import Portofolio from "../Components/Home/Portofolio";
import ProjectStatistic from "../Components/Home/Statistic";

const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <Helmet>
        <title>Jasa Konstraksi & renovasi Rumah terpercaya</title>
        <meta
          name="Description"
          content="Jasa  Pembangungan rumah, Renovasi,Desain, dan waterproofing dengan hasil dan harga terjangkau"
        />

        <meta property="og:title" content="jasa kontruksi terpercaya" />
        <meta
          property="og:description"
          content="Layanan bangunan, desain dan renovasi rumah prefesional"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <BannerSlider />
      <div className="section-container flex flex-col gap-16">
        <Jasa />
        <ProjectStatistic />
        <Portofolio />
      </div>
    </div>
  );
};
export default Home;
