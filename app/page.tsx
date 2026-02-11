import Hero from "./_component/Hero";
import { Popularcitylist } from "./_component/PopularCityList"
import Footer from "./_component/Footer";

export default function Home() {
  return (
      <div>
        <Hero/>
        <Popularcitylist/>
        <Footer/>
      </div>
  );
}
