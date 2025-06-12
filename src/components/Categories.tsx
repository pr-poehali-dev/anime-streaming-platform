import { Sword, Heart, Zap, Gamepad2, Sparkles, Users } from "lucide-react";

const Categories = () => {
  const categories = [
    { name: "Экшен", icon: Sword, color: "bg-red-600", count: "1,234" },
    { name: "Романтика", icon: Heart, color: "bg-pink-600", count: "876" },
    { name: "Сёнен", icon: Zap, color: "bg-orange-600", count: "2,156" },
    { name: "Игры", icon: Gamepad2, color: "bg-blue-600", count: "432" },
    { name: "Магия", icon: Sparkles, color: "bg-purple-600", count: "654" },
    { name: "Школа", icon: Users, color: "bg-green-600", count: "987" },
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 font-montserrat">
          Категории
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-center border border-gray-700 hover:border-purple-500"
              >
                <div
                  className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-purple-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-xs">{category.count} аниме</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
