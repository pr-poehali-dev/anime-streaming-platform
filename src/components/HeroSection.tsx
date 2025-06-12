import { Play, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')`,
        }}
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-montserrat">
              Атака <span className="text-purple-400">Титанов</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Человечество ведёт отчаянную борьбу за выживание против гигантских
              титанов. Эрен Йегер поклялся уничтожить всех титанов и отомстить
              за свою мать.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                Экшен
              </span>
              <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                Драма
              </span>
              <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                Фэнтези
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8"
              >
                <Play className="w-5 h-5 mr-2" />
                Смотреть
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Plus className="w-5 h-5 mr-2" />В список
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/20"
              >
                <Info className="w-5 h-5 mr-2" />
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
