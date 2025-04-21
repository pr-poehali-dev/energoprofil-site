import { 
  Zap, 
  LineChart, 
  Bell, 
  Lightbulb,
  BarChart4,
  CreditCard
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <LineChart className="h-6 w-6 text-energo-green" />,
      title: "Анализ потребления",
      description: "Наблюдайте за расходом электроэнергии в реальном времени и выявляйте пиковые нагрузки."
    },
    {
      icon: <Bell className="h-6 w-6 text-energo-green" />,
      title: "Умные уведомления",
      description: "Получайте оповещения о повышенном потреблении и предложения по его снижению."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-energo-green" />,
      title: "Персональные рекомендации",
      description: "Индивидуальные советы, учитывающие ваш график и особенности потребления энергии."
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-energo-green" />,
      title: "Сравнительный анализ",
      description: "Сравнивайте ваше потребление со средними показателями по району или аналогичным домохозяйствам."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-energo-green" />,
      title: "Экономия денег",
      description: "Сокращайте ежемесячные счета за электроэнергию благодаря оптимизированному потреблению."
    },
    {
      icon: <Zap className="h-6 w-6 text-energo-green" />,
      title: "Экологический эффект",
      description: "Сокращайте углеродный след и вносите вклад в сохранение окружающей среды."
    },
  ];

  return (
    <section className="py-16 bg-energo-lightBeige">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-energo-green mb-2">
            Интеллектуальное управление энергией
          </h2>
          <p className="text-xl text-energo-brown max-w-[800px] mx-auto">
            ЭнергоПрофиль предоставляет полный набор инструментов для оптимизации энергопотребления
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-energo-brown/10 hover:shadow-md transition-shadow"
            >
              <div className="rounded-full w-12 h-12 bg-energo-beige flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-energo-darkBrown mb-2">{feature.title}</h3>
              <p className="text-energo-brown">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
