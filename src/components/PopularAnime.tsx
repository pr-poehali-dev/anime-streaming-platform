import AnimeCard from "./AnimeCard";

const PopularAnime = () => {
  const popularAnime = [
    {
      title: "Моя геройская академия",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 9.2,
      year: "2016",
      episodes: "138 эп.",
      genre: "Экшен",
    },
    {
      title: "Наруто: Ураганные хроники",
      image:
        "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=600&fit=crop",
      rating: 9.0,
      year: "2007",
      episodes: "500 эп.",
      genre: "Экшен",
    },
    {
      title: "Кимецу но Яиба",
      image:
        "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop",
      rating: 9.5,
      year: "2019",
      episodes: "32 эп.",
      genre: "Экшен",
    },
    {
      title: "Магическая битва",
      image:
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop",
      rating: 8.8,
      year: "2020",
      episodes: "24 эп.",
      genre: "Экшен",
    },
    {
      title: "Ван Пис",
      image:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop",
      rating: 9.3,
      year: "1999",
      episodes: "1000+ эп.",
      genre: "Приключения",
    },
    {
      title: "Волейбол!!",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
      rating: 8.9,
      year: "2014",
      episodes: "85 эп.",
      genre: "Спорт",
    },
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 font-montserrat">
          Популярное аниме
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {popularAnime.map((anime, index) => (
            <AnimeCard key={index} {...anime} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularAnime;
