import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-energo-brown/10 text-energo-brown text-sm mb-2 w-fit">
              <Zap className="h-3.5 w-3.5 mr-2" />
              <span>Экономьте энергию интеллектуально</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-energo-green">
              Персонализированные энергетические решения для вашего дома
            </h1>
            <p className="text-lg text-energo-brown max-w-[600px]">
              ЭнергоПрофиль анализирует данные с умных электросчётчиков и предлагает 
              индивидуальные рекомендации, которые позволят вам сэкономить деньги и снизить 
              углеродный след.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="bg-energo-green hover:bg-energo-lightGreen text-white font-medium px-6 py-6">
                Подключить устройство
              </Button>
              <Button variant="outline" className="border-energo-brown text-energo-brown hover:bg-energo-brown hover:text-energo-beige font-medium px-6 py-6">
                Узнать больше
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Уже используют более 10 000 домохозяйств в России
            </p>
          </div>
          
          <div className="relative lg:ml-10">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-energo-brown/10 to-energo-green/10 mix-blend-multiply" />
              <img
                src="/placeholder.svg"
                alt="Умный энергетический мониторинг"
                className="object-cover w-full h-[400px] lg:h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-energo-lightBeige p-4 rounded-lg shadow-lg border border-energo-brown/20">
              <div className="flex items-center gap-3">
                <div className="bg-energo-green rounded-full w-10 h-10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-energo-darkBrown">Среднее снижение счетов</p>
                  <p className="text-xl font-bold text-energo-green">до 23%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
