import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-lg bg-energo-green p-8 md:p-12">
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              <span>Начните экономить уже сегодня</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
              Готовы оптимизировать ваше энергопотребление?
            </h2>
            <p className="text-lg text-white/90 max-w-[800px]">
              Подключите ваш умный счётчик к ЭнергоПрофилю и начните получать персонализированные рекомендации, 
              которые помогут вам сэкономить до 23% на счетах за электроэнергию.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-energo-green hover:bg-energo-beige font-medium px-8 py-6">
                Зарегистрироваться бесплатно
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 font-medium px-8 py-6">
                Запросить демонстрацию
              </Button>
            </div>
            <p className="text-sm text-white/80">
              Бесплатный период - 30 дней. Без обязательств. Отмена в любой момент.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-energo-green/80 to-energo-green mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
