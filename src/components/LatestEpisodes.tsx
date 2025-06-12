import { Clock, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LatestEpisodes = () => {
  const latestEpisodes = [
    {
      title: "Атака Титанов",
      episode: "Эпизод 87: Рассвет человечества",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      time: "24 мин назад",
    },
    {
      title: "Магическая битва",
      episode: "Эпизод 13: Красный и чёрный",
      image:
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=200&fit=crop",
      time: "2 часа назад",
    },
    {
      title: "Шпион x Семья",
      episode: "Эпизод 25: Первое впечатление",
      image:
        "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=200&fit=crop",
      time: "5 часов назад",
    },
    {
      title: "Берсерк",
      episode: "Эпизод 12: Тот, кто сражается с чудовищами",
      image:
        "https://images.unsplash.com/photo-1574732059078-9097604327ae?w=400&h=200&fit=crop",
      time: "1 день назад",
    },
  ];

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 font-montserrat">
          Последние эпизоды
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {latestEpisodes.map((episode, index) => (
            <Card
              key={index}
              className="group bg-gray-700 border-gray-600 hover:border-purple-500 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0 flex">
                <div className="relative w-32 sm:w-48 flex-shrink-0">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-24 sm:h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-4 flex-1">
                  <h3 className="text-purple-400 font-semibold text-sm mb-1">
                    {episode.title}
                  </h3>
                  <p className="text-white text-sm mb-3 line-clamp-2">
                    {episode.episode}
                  </p>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {episode.time}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestEpisodes;
