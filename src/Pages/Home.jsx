import Banner from "../Components/Banner";
import Jasa from "../Components/Home/Jasa";

const Home = () => {
  return (
    <div className="flex flex-col  gap-2 ">
      <Banner />
      <div className="section-container ">
        <Jasa />
      </div>
    </div>
  );
};
export default Home;
