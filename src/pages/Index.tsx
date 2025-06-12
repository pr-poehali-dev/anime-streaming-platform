import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PopularAnime from "@/components/PopularAnime";
import LatestEpisodes from "@/components/LatestEpisodes";
import Categories from "@/components/Categories";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      <PopularAnime />
      <LatestEpisodes />
      <Categories />
    </div>
  );
};

export default Index;
