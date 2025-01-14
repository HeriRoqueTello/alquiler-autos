import { FeaturedCars } from "./components/featured-cars";
import { HeroSection } from "./components/hero";
import { NewestCars } from "./components/new-cars";
import SearchSection from "./components/search";
import ServiceSection from "./components/services";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <ServiceSection />
      <NewestCars />
      <FeaturedCars />
      <Testimonials />
    </>
  );
}
