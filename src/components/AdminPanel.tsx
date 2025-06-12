import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Settings, Plus, Save } from "lucide-react";

interface AnimeData {
  title: string;
  description: string;
  genre: string;
  rating: string;
  episodes: string;
  imageUrl: string;
  year: string;
  status: string;
}

interface AdminPanelProps {
  children: React.ReactNode;
}

const AdminPanel = ({ children }: AdminPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animeData, setAnimeData] = useState<AnimeData>({
    title: "",
    description: "",
    genre: "",
    rating: "",
    episodes: "",
    imageUrl: "",
    year: "",
    status: "ongoing",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess("");

    try {
      // Получаем существующие аниме из localStorage
      const existingAnime = JSON.parse(
        localStorage.getItem("elcore_anime") || "[]",
      );

      // Добавляем новое аниме
      const newAnime = {
        id: Date.now().toString(),
        ...animeData,
        addedAt: new Date().toISOString(),
      };

      existingAnime.push(newAnime);
      localStorage.setItem("elcore_anime", JSON.stringify(existingAnime));

      setSuccess("Аниме успешно добавлено!");
      setAnimeData({
        title: "",
        description: "",
        genre: "",
        rating: "",
        episodes: "",
        imageUrl: "",
        year: "",
        status: "ongoing",
      });

      setTimeout(() => {
        setSuccess("");
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error("Ошибка при добавлении аниме:", error);
    }

    setIsLoading(false);
  };

  const handleInputChange = (field: keyof AnimeData, value: string) => {
    setAnimeData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-gray-900 border-gray-800 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Админ-панель
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-300">
              Название аниме
            </Label>
            <Input
              id="title"
              value={animeData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="Например: Наруто"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-300">
              Описание
            </Label>
            <Textarea
              id="description"
              value={animeData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="bg-gray-800 border-gray-700 text-white min-h-[80px]"
              placeholder="Краткое описание сюжета..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="genre" className="text-gray-300">
                Жанр
              </Label>
              <Input
                id="genre"
                value={animeData.genre}
                onChange={(e) => handleInputChange("genre", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
                placeholder="Сёнен, Романс..."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating" className="text-gray-300">
                Рейтинг
              </Label>
              <Input
                id="rating"
                value={animeData.rating}
                onChange={(e) => handleInputChange("rating", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
                placeholder="8.5"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="episodes" className="text-gray-300">
                Эпизоды
              </Label>
              <Input
                id="episodes"
                value={animeData.episodes}
                onChange={(e) => handleInputChange("episodes", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
                placeholder="12 / 24"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="year" className="text-gray-300">
                Год
              </Label>
              <Input
                id="year"
                value={animeData.year}
                onChange={(e) => handleInputChange("year", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
                placeholder="2024"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status" className="text-gray-300">
              Статус
            </Label>
            <Select
              value={animeData.status}
              onValueChange={(value) => handleInputChange("status", value)}
            >
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="ongoing">Выходит</SelectItem>
                <SelectItem value="completed">Завершено</SelectItem>
                <SelectItem value="upcoming">Анонс</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl" className="text-gray-300">
              URL изображения
            </Label>
            <Input
              id="imageUrl"
              value={animeData.imageUrl}
              onChange={(e) => handleInputChange("imageUrl", e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          {success && <p className="text-green-400 text-sm">{success}</p>}

          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700"
            disabled={isLoading}
          >
            <Plus className="w-4 h-4 mr-2" />
            {isLoading ? "Добавление..." : "Добавить аниме"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPanel;
