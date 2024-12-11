import { HeroSection } from "./components/hero";
import SearchSection from "./components/search";
import ServiceSection from "./components/services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <ServiceSection />
    </>
  );
}
