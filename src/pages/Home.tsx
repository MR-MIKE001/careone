import Hero from "../components/sections/home/Hero";
import HomeCTA from "../components/sections/home/HomeCTA";
import ServicesOverview from "../components/sections/home/ServicesOverview";
import WhyChoose from "../components/sections/home/WhyChoose";


const Home = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChoose/>
      <HomeCTA />
    </>
  );
};

export default Home;