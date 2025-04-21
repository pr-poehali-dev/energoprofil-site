import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Gauge, Lightbulb, BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-energo-lightBeige py-4 border-b border-energo-brown/20 sticky top-0 z-10">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gauge className="w-8 h-8 text-energo-green" />
          <span className="text-xl font-bold text-energo-green">ЭнергоПрофиль</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-energo-brown hover:text-energo-green transition-colors">
            Главная
          </Link>
          <Link to="/how-it-works" className="text-energo-brown hover:text-energo-green transition-colors">
            Как это работает
          </Link>
          <Link to="/benefits" className="text-energo-brown hover:text-energo-green transition-colors">
            Преимущества
          </Link>
          <Link to="/contact" className="text-energo-brown hover:text-energo-green transition-colors">
            Контакты
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex border-energo-brown text-energo-brown hover:bg-energo-brown hover:text-energo-beige">
            Войти
          </Button>
          <Button className="bg-energo-green hover:bg-energo-lightGreen text-white">
            Начать бесплатно
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
