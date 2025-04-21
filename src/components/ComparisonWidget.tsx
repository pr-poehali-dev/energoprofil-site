
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Leaf, Home, Zap, TrendingDown, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ComparisonWidget = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-energo-darkBrown flex items-center gap-2">
          <Users className="h-5 w-5 text-energo-green" />
          Сравнение с соседями
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="consumption">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="consumption">Потребление</TabsTrigger>
            <TabsTrigger value="efficiency">Эффективность</TabsTrigger>
          </TabsList>
          
          <TabsContent value="consumption" className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-energo-brown" />
                    <span className="text-sm font-medium text-energo-brown">Ваше домохозяйство</span>
                  </div>
                  <span className="text-lg font-bold text-energo-darkBrown">312 кВт/ч</span>
                </div>
                <Progress value={65} className="h-2 bg-energo-beige" indicatorClassName="bg-energo-green" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-energo-brown" />
                    <span className="text-sm font-medium text-energo-brown">Эффективные соседи</span>
                  </div>
                  <span className="text-lg font-medium text-energo-darkBrown">278 кВт/ч</span>
                </div>
                <Progress value={55} className="h-2 bg-energo-beige" indicatorClassName="bg-blue-500" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-energo-brown" />
                    <span className="text-sm font-medium text-energo-brown">Средние соседи</span>
                  </div>
                  <span className="text-lg font-medium text-energo-darkBrown">352 кВт/ч</span>
                </div>
                <Progress value={74} className="h-2 bg-energo-beige" indicatorClassName="bg-orange-500" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-energo-brown" />
                    <span className="text-sm font-medium text-energo-brown">Неэффективные соседи</span>
                  </div>
                  <span className="text-lg font-medium text-energo-darkBrown">476 кВт/ч</span>
                </div>
                <Progress value={100} className="h-2 bg-energo-beige" indicatorClassName="bg-red-500" />
              </div>
            </div>

            <div className="bg-energo-beige/40 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="bg-energo-beige rounded-full p-2 mt-1">
                  <TrendingDown className="h-4 w-4 text-energo-green" />
                </div>
                <div>
                  <p className="font-medium text-energo-darkBrown">Вы используете на 11% меньше энергии, чем средний сосед</p>
                  <p className="text-sm text-energo-brown mt-1">Но ещё 12% до показателей самых эффективных соседей</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="efficiency" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-energo-beige/20 border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-energo-green/10 p-3 rounded-full">
                      <Leaf className="h-5 w-5 text-energo-green" />
                    </div>
                    <div>
                      <div className="text-sm text-energo-brown mb-1">Сокращение CO₂</div>
                      <div className="text-xl font-bold text-energo-darkBrown">
                        42 кг <span className="text-sm font-normal text-energo-brown">/ месяц</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-energo-beige/20 border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-energo-green/10 p-3 rounded-full">
                      <Zap className="h-5 w-5 text-energo-green" />
                    </div>
                    <div>
                      <div className="text-sm text-energo-brown mb-1">Экономия</div>
                      <div className="text-xl font-bold text-energo-darkBrown">
                        530 ₽ <span className="text-sm font-normal text-energo-brown">/ месяц</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-dashed border-energo-brown/30 bg-transparent">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-energo-beige rounded-full p-2 mt-1">
                    <Award className="h-5 w-5 text-energo-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-energo-darkBrown">Ваш энергетический рейтинг</h4>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((grade, i) => (
                          <div 
                            key={grade}
                            className={`w-8 h-8 flex items-center justify-center text-sm font-bold rounded ${
                              i === 1 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-100 text-gray-500'
                            } ${i > 0 ? '-ml-1' : ''}`}
                          >
                            {grade}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-energo-brown mt-3">
                      У вас рейтинг B! Вы в 20% самых энергоэффективных домохозяйств вашего района.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ComparisonWidget;
