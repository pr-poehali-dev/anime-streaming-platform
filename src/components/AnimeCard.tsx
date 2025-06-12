import { Play, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AnimeCardProps {
  title: string;
  image: string;
  rating: number;
  year: string;
  episodes: string;
  genre: string;
}

const AnimeCard = ({
  title,
  image,
  rating,
  year,
  episodes,
  genre,
}: AnimeCardProps) => {
  return (
    <Card className="group bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white" />
        </div>
        <div className="absolute top-2 right-2 bg-black/70 rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-white text-xs">{rating}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <div className="flex justify-between text-xs text-gray-400">
          <span>{year}</span>
          <span>{episodes}</span>
        </div>
        <div className="mt-2">
          <span className="text-xs text-purple-400">{genre}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
