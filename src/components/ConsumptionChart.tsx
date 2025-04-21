
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

// Mock data
const dailyData = [
  { time: '00:00', consumption: 0.8, average: 1.1 },
  { time: '03:00', consumption: 0.5, average: 0.7 },
  { time: '06:00', consumption: 1.2, average: 1.0 },
  { time: '09:00', consumption: 2.4, average: 1.8 },
  { time: '12:00', consumption: 1.7, average: 1.5 },
  { time: '15:00', consumption: 1.9, average: 1.6 },
  { time: '18:00', consumption: 3.2, average: 2.1, anomaly: true },
  { time: '21:00', consumption: 2.1, average: 1.9 },
];

const weeklyData = [
  { day: 'Пн', consumption: 12.5, average: 13.1 },
  { day: 'Вт', consumption: 13.2, average: 13.0 },
  { day: 'Ср', consumption: 14.1, average: 13.2 },
  { day: 'Чт', consumption: 12.8, average: 13.4 },
  { day: 'Пт', consumption: 15.2, average: 13.6, anomaly: true },
  { day: 'Сб', consumption: 11.5, average: 12.1 },
  { day: 'Вс', consumption: 10.8, average: 11.4 },
];

const monthlyData = [
  { week: '1-7 июля', consumption: 85.2, average: 88.7 },
  { week: '8-14 июля', consumption: 88.9, average: 89.1 },
  { week: '15-21 июля', consumption: 92.3, average: 89.5, anomaly: true },
  { week: '22-28 июля', consumption: 87.4, average: 89.2 },
];

type ChartPeriod = 'daily' | 'weekly' | 'monthly';

const ConsumptionChart = () => {
  const [period, setPeriod] = useState<ChartPeriod>('daily');

  const getChartData = () => {
    switch (period) {
      case 'daily': return dailyData;
      case 'weekly': return weeklyData;
      case 'monthly': return monthlyData;
    }
  };

  const getXAxisKey = () => {
    switch (period) {
      case 'daily': return 'time';
      case 'weekly': return 'day';
      case 'monthly': return 'week';
    }
  };

  return (
    <Card className="shadow-md w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl text-energo-darkBrown">Потребление электроэнергии</CardTitle>
            <CardDescription>Сравните ваше потребление со средним в вашем районе</CardDescription>
          </div>
          <Select 
            defaultValue="daily" 
            onValueChange={(value) => setPeriod(value as ChartPeriod)}
          >
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">День</SelectItem>
              <SelectItem value="weekly">Неделя</SelectItem>
              <SelectItem value="monthly">Месяц</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="area" className="space-y-4">
          <TabsList className="grid w-full max-w-xs grid-cols-2">
            <TabsTrigger value="area">График</TabsTrigger>
            <TabsTrigger value="bar">Столбцы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="area" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={getChartData()}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5C8D76" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#5C8D76" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A47551" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#A47551" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey={getXAxisKey()}
                    tick={{ fill: '#8E7D68' }}
                  />
                  <YAxis 
                    tick={{ fill: '#8E7D68' }}
                    label={{ 
                      value: 'кВт/ч', 
                      angle: -90, 
                      position: 'insideLeft',
                      fill: '#8E7D68' 
                    }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FFF8EE', 
                      borderColor: '#8E7D68',
                      borderRadius: '8px' 
                    }}
                  />
                  <Legend 
                    verticalAlign="top" 
                    height={36} 
                    iconType="circle"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="consumption" 
                    stroke="#5C8D76" 
                    fillOpacity={1} 
                    fill="url(#colorConsumption)" 
                    name="Ваше потребление"
                    activeDot={(props) => {
                      const { payload } = props;
                      return payload.anomaly ? (
                        <circle
                          {...props}
                          r={8}
                          strokeWidth={2}
                          stroke="#E74C3C"
                          fill="#E74C3C"
                        />
                      ) : (
                        <circle {...props} />
                      );
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="average" 
                    stroke="#A47551" 
                    fillOpacity={1} 
                    fill="url(#colorAverage)" 
                    name="Среднее по району"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="bar" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getChartData()}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey={getXAxisKey()} 
                    tick={{ fill: '#8E7D68' }}
                  />
                  <YAxis 
                    tick={{ fill: '#8E7D68' }}
                    label={{ 
                      value: 'кВт/ч', 
                      angle: -90, 
                      position: 'insideLeft',
                      fill: '#8E7D68' 
                    }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FFF8EE', 
                      borderColor: '#8E7D68',
                      borderRadius: '8px' 
                    }}
                  />
                  <Legend 
                    verticalAlign="top" 
                    height={36} 
                    iconType="circle"
                  />
                  <Bar 
                    dataKey="consumption" 
                    fill="#5C8D76" 
                    name="Ваше потребление"
                    radius={[4, 4, 0, 0]}
                    // Highlight anomalies
                    fill={(entry) => (entry.anomaly ? '#E74C3C' : '#5C8D76')}
                  />
                  <Bar 
                    dataKey="average" 
                    fill="#A47551" 
                    name="Среднее по району"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ConsumptionChart;
