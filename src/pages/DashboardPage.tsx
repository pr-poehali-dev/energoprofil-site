
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ConsumptionChart from "@/components/ConsumptionChart";
import AnomalyDetection from "@/components/AnomalyDetection";
import ComparisonWidget from "@/components/ComparisonWidget";
import { 
  ArrowLeft, 
  Home, 
  Activity,
  Lightbulb,
  BellRing
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-energo-beige/10">
      <Header />
      
      <div className="container mx-auto px-4 py-6 flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <Link to="/" className="text-energo-brown hover:text-energo-darkBrown flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            <span>На главную</span>
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
            <div>
              <h1 className="text-3xl font-bold text-energo-darkBrown">Мой профиль потребления</h1>
              <p className="text-energo-brown mt-1">Анализ расхода электроэнергии вашего дома</p>
            </div>
            
            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-auto">
              <Card className="bg-white border-energo-brown/10">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Home className="h-5 w-5 text-energo-green mb-1" />
                  <div className="text-2xl font-bold text-energo-darkBrown">312</div>
                  <div className="text-xs text-energo-brown">кВт/ч за месяц</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-energo-brown/10">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Activity className="h-5 w-5 text-energo-green mb-1" />
                  <div className="text-2xl font-bold text-energo-darkBrown">1846</div>
                  <div className="text-xs text-energo-brown">₽ за месяц</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-energo-brown/10 col-span-2 md:col-span-1">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Lightbulb className="h-5 w-5 text-energo-green mb-1" />
                  <div className="text-2xl font-bold text-energo-green">-13.5%</div>
                  <div className="text-xs text-energo-brown">от прошлого месяца</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <Tabs defaultValue="analysis" className="w-full">
            <TabsList className="mb-6 bg-white/60">
              <TabsTrigger value="analysis">Анализ потребления</TabsTrigger>
              <TabsTrigger value="anomalies">Аномалии и рекомендации</TabsTrigger>
              <TabsTrigger value="comparison">Сравнение</TabsTrigger>
            </TabsList>
            
            <TabsContent value="analysis" className="space-y-6 mt-2">
              <ConsumptionChart />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-energo-darkBrown mb-4">Пиковые часы потребления</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-10 bg-red-500 rounded-sm"></div>
                          <div>
                            <div className="font-medium text-energo-darkBrown">18:00 - 21:00</div>
                            <div className="text-sm text-energo-brown">Вечерний пик</div>
                          </div>
                        </div>
                        <div className="text-lg font-semibold text-energo-darkBrown">2.8 кВт/ч</div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-8 bg-orange-400 rounded-sm"></div>
                          <div>
                            <div className="font-medium text-energo-darkBrown">7:00 - 9:00</div>
                            <div className="text-sm text-energo-brown">Утренний пик</div>
                          </div>
                        </div>
                        <div className="text-lg font-semibold text-energo-darkBrown">2.1 кВт/ч</div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-6 bg-yellow-400 rounded-sm"></div>
                          <div>
                            <div className="font-medium text-energo-darkBrown">12:00 - 14:00</div>
                            <div className="text-sm text-energo-brown">Дневной пик</div>
                          </div>
                        </div>
                        <div className="text-lg font-semibold text-energo-darkBrown">1.7 кВт/ч</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-energo-beige/30 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <BellRing className="h-5 w-5 text-energo-brown mt-0.5" />
                        <div>
                          <p className="font-medium text-energo-darkBrown">Совет дня</p>
                          <p className="text-sm text-energo-brown mt-1">Перенесите использование мощных электроприборов на непиковые часы (22:00-6:00), чтобы сэкономить до 15% на счетах</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-energo-darkBrown mb-4">Распределение по устройствам</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-energo-brown">Холодильник</span>
                          <span className="font-medium text-energo-darkBrown">24%</span>
                        </div>
                        <div className="w-full bg-energo-beige/50 rounded-full h-2.5">
                          <div className="bg-energo-green h-2.5 rounded-full" style={{ width: '24%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-energo-brown">Кондиционер</span>
                          <span className="font-medium text-energo-darkBrown">21%</span>
                        </div>
                        <div className="w-full bg-energo-beige/50 rounded-full h-2.5">
                          <div className="bg-energo-green h-2.5 rounded-full" style={{ width: '21%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-energo-brown">Освещение</span>
                          <span className="font-medium text-energo-darkBrown">16%</span>
                        </div>
                        <div className="w-full bg-energo-beige/50 rounded-full h-2.5">
                          <div className="bg-energo-green h-2.5 rounded-full" style={{ width: '16%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-energo-brown">Стиральная машина</span>
                          <span className="font-medium text-energo-darkBrown">14%</span>
                        </div>
                        <div className="w-full bg-energo-beige/50 rounded-full h-2.5">
                          <div className="bg-energo-green h-2.5 rounded-full" style={{ width: '14%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-energo-brown">Другие устройства</span>
                          <span className="font-medium text-energo-darkBrown">25%</span>
                        </div>
                        <div className="w-full bg-energo-beige/50 rounded-full h-2.5">
                          <div className="bg-energo-green h-2.5 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-6 bg-energo-green hover:bg-energo-lightGreen text-white">
                      Добавить умные розетки
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="anomalies" className="mt-2">
              <AnomalyDetection />
            </TabsContent>
            
            <TabsContent value="comparison" className="mt-2">
              <ComparisonWidget />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
