
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, BarChart, Clock, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Sample anomaly data
const anomalies = [
  {
    id: 1,
    date: "18 июля, 19:35",
    device: "Холодильник",
    consumption: 3.2,
    average: 1.1,
    percentAbove: 191,
    reason: "Возможная неисправность компрессора",
    recommendations: [
      {
        title: "Холодильник Samsung RB37A52N0B1",
        description: "Энергоэффективный холодильник класса А+++ с инверторным компрессором",
        price: "59 990 ₽",
        saving: "До 65% экономии электроэнергии",
        image: "/placeholder.svg"
      },
      {
        title: "Диагностика холодильного оборудования",
        description: "Профессиональная проверка и ремонт вашего холодильника",
        price: "2 500 ₽",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: 2,
    date: "21 июля, 15:12",
    device: "Кондиционер",
    consumption: 2.8,
    average: 1.5,
    percentAbove: 87,
    reason: "Загрязнение фильтров или низкий уровень фреона",
    recommendations: [
      {
        title: "Кондиционер Mitsubishi Electric MSZ-AP25VGK",
        description: "Инверторный кондиционер с функцией энергосбережения",
        price: "42 990 ₽",
        saving: "До 40% экономии электроэнергии",
        image: "/placeholder.svg"
      }
    ]
  }
];

const AnomalyDetection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-energo-darkBrown">Обнаруженные аномалии</h2>
          <p className="text-energo-brown">Моменты, когда ваше потребление значительно превышало норму</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-energo-beige/50 rounded-full">
          <AlertTriangle className="h-4 w-4 text-energo-brown" />
          <span className="text-sm font-medium text-energo-brown">Найдено 2 аномалии</span>
        </div>
      </div>

      <div className="space-y-4">
        {anomalies.map((anomaly) => (
          <Card key={anomaly.id} className="border-energo-brown/10 overflow-hidden">
            <CardHeader className="bg-energo-beige/30 pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-energo-darkBrown">{anomaly.device}</CardTitle>
                  <CardDescription className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{anomaly.date}</span>
                  </CardDescription>
                </div>
                <div className="px-3 py-1.5 bg-red-100 rounded-full flex items-center gap-1.5">
                  <BarChart className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-semibold text-red-600">+{anomaly.percentAbove}% выше нормы</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-energo-brown">Потребление</span>
                  <div className="flex items-end gap-1.5">
                    <span className="text-2xl font-bold text-energo-darkBrown">{anomaly.consumption} кВт/ч</span>
                    <span className="text-sm text-energo-brown pb-1">против обычных {anomaly.average} кВт/ч</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-energo-brown">Возможная причина</span>
                  <span className="text-lg font-semibold text-energo-darkBrown">{anomaly.reason}</span>
                </div>
              </div>

              <Separator className="my-4 bg-energo-brown/10" />
              
              <div>
                <h4 className="text-lg font-semibold text-energo-darkBrown mb-3">Рекомендуемые решения</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {anomaly.recommendations.map((rec, index) => (
                    <div key={index} className="flex gap-3 p-3 border border-energo-brown/15 rounded-lg bg-white hover:bg-energo-beige/10 transition-colors">
                      <div className="w-16 h-16 rounded overflow-hidden shrink-0">
                        <img 
                          src={rec.image} 
                          alt={rec.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-energo-darkBrown text-sm mb-1">{rec.title}</h5>
                        <p className="text-energo-brown text-xs mb-1.5 line-clamp-2">{rec.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-energo-green">{rec.price}</span>
                          {rec.saving && (
                            <span className="text-xs font-medium text-energo-brown flex items-center gap-1">
                              <Zap className="h-3 w-3" />
                              {rec.saving}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-energo-beige/30 py-3 px-6">
              <Button className="text-white bg-energo-green hover:bg-energo-lightGreen w-full sm:w-auto">
                Просмотреть все решения
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnomalyDetection;
