import { Gauge } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-energo-darkBrown text-energo-beige">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gauge className="w-6 h-6" />
              <span className="text-xl font-bold">ЭнергоПрофиль</span>
            </div>
            <p className="text-energo-beige/80">
              Интеллектуальная платформа для оптимизации энергопотребления и экономии ресурсов.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">О компании</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-energo-beige/80 hover:text-energo-beige transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-energo-beige/80 hover:text-energo-beige transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-energo-beige/80 hover:text-energo-beige transition-colors">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-energo-beige/80 hover:text-energo-beige transition-colors">
                  Новости
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/energy-audit" className="text-energo-beige/80 hover:text-energo-beige transition-colors">
                  Энергоаудит
                </Link>
              </li>
              <li>
                <Link to="/recommendations" className="text-energo-beige/80 hover:text-energo-beige transition-colors">
                  Рекомендации
                </Link>
              </li>
              <li>
                <Link to="/smart-metering" className="text-energo-beige/80 hover:text-energo-beige transition-colors">
                  Умный учёт
                </Link>
              </li>
              <li>
                <Link to="/consulting" className="text-energo-beige/80 hover:text-energo-beige transition-colors">
                  Консультации
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-energo-beige/80">
                info@energoprofile.ru
              </li>
              <li className="text-energo-beige/80">
                8 (800) 123-45-67
              </li>
              <li className="text-energo-beige/80">
                г. Москва, ул. Энергетическая, 42
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-energo-beige/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-energo-beige/60">
            © 2023 ЭнергоПрофиль. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-energo-beige/60 hover:text-energo-beige transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-sm text-energo-beige/60 hover:text-energo-beige transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
