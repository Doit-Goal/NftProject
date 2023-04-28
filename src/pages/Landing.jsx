import DemoCarousel from "../components/LandingIntro";
import LandingNftCard from "../components/LandingNftCard";

const Landing = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <DemoCarousel />
      </div>
      <div>
        <LandingNftCard />
      </div>
    </>
  );
};

export default Landing;
