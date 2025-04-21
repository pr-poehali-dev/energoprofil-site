
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-energo-brown/10 sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-energo-green mr-2">Энерго<span className="text-energo-brown">Профиль</span></div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-energo-brown hover:text-energo-darkBrown transition-colors">Главная</Link>
            <Link to="/dashboard" className="text-energo-brown hover:text-energo-darkBrown transition-colors">Мой профиль</Link>
            <Link to="#" className="text-energo-brown hover:text-energo-darkBrown transition-colors">Как это работает</Link>
            <Link to="#" className="text-energo-brown hover:text-energo-darkBrown transition-colors">Цены</Link>
            <Link to="#" className="text-energo-brown hover:text-energo-darkBrown transition-colors">О нас</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-energo-brown text-energo-brown hover:bg-energo-brown/10">
              Войти
            </Button>
            <Button className="bg-energo-green hover:bg-energo-lightGreen text-white">
              Регистрация
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-energo-brown"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-energo-brown/10 px-4 pt-2 pb-4">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-energo-brown hover:text-energo-darkBrown transition-colors py-2">Главная</Link>
            <Link to="/dashboard" className="text-energo-brown hover:text-energo-darkBrown transition-colors py-2">Мой профиль</Link>
            <Link to="#" className="text-energo-brown hover:text-energo-darkBrown transition-colors py-2">Как это работает</Link>
            <Link to="#" className="text-energo-brown hover:text-energo-darkBrown transition-colors py-2">Цены</Link>
            <Link to="#" className="text-energo-brown hover:text-energo-darkBrown transition-colors py-2">О нас</Link>
          </nav>
          <div className="flex flex-col space-y-3 mt-4">
            <Button variant="outline" className="border-energo-brown text-energo-brown w-full">
              Войти
            </Button>
            <Button className="bg-energo-green hover:bg-energo-lightGreen text-white w-full">
              Регистрация
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
