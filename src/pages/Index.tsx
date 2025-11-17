import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Header */}
      <header className="bg-[#3D2817] text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Armchair" size={28} />
            <span className="text-xl font-bold">FURNITURE DESIGN</span>
          </div>
          <nav className="flex gap-8">
            <a href="/" className="text-[#E8DED3]">Главная</a>
            <a href="/about" className="hover:text-[#E8DED3] transition-colors">О нас</a>
            <a href="/services" className="hover:text-[#E8DED3] transition-colors">Услуги</a>
            <a href="/" className="hover:text-[#E8DED3] transition-colors">Каталог</a>
            <a href="/" className="hover:text-[#E8DED3] transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/683167f1-e769-4c40-9bda-b058682aa8f3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="text-center z-10 max-w-3xl px-6">
          <h1 className="text-6xl font-serif text-[#3D2817] mb-6 animate-fade-in leading-tight">
            ДОБАВЬТЕ<br />ИЗЫСКАННОСТИ<br />В СВОЙ ИНТЕРЬЕР
          </h1>
          <p className="text-lg text-[#3D2817]/90 mb-4 animate-fade-in">
            Превратите ваш дом в шедевр. Мы создаем уникальную дизайнерскую мебель, 
            которая подчеркнет вашу индивидуальность и стиль.
          </p>
          <Button className="bg-[#3D2817] hover:bg-[#3D2817]/90 text-white px-8 py-6 text-lg animate-scale-in">
            Каталог
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-serif text-[#3D2817] text-center mb-16">ПОЧЕМУ ВЫБИРАЮТ НАС?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: 'Palette',
              title: 'Индивидуальный дизайн',
              description: 'Мы учтем все пожелания, создадим мебель, которая гармонично впишется в ваш интерьер'
            },
            {
              icon: 'Award',
              title: 'Качественные материалы',
              description: 'Работаем только с проверенными поставщиками премиальных материалов из Европы'
            },
            {
              icon: 'Package',
              title: 'Полный цикл',
              description: 'От проектирования и изготовления до доставки и сборки. Все включено!'
            }
          ].map((item, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-20 h-20 bg-[#E8DED3] rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name={item.icon as any} size={36} className="text-[#3D2817]" />
              </div>
              <h3 className="text-2xl font-serif text-[#3D2817] mb-4">{item.title}</h3>
              <p className="text-[#3D2817]/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Projects */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-[#3D2817] text-center mb-16">Наши проекты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Гардеробная', icon: 'Shirt' },
              { title: 'Кухня', icon: 'UtensilsCrossed' },
              { title: 'Гостиная', icon: 'Sofa' }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-64 bg-[#C4B5A0] flex items-center justify-center">
                  <Icon name={project.icon as any} size={80} className="text-white/30" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-serif text-[#3D2817] mb-3">{project.title}</h3>
                  <Button variant="outline" className="border-[#3D2817] text-[#3D2817] hover:bg-[#3D2817] hover:text-white">
                    Посмотреть
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-serif text-[#3D2817] text-center mb-16">Новинки</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: 'Кресла', icon: 'Armchair' },
            { name: 'Диваны', icon: 'Sofa' },
            { name: 'Комоды', icon: 'Container' },
            { name: 'Стулья', icon: 'ChefHat' },
            { name: 'Шкафы', icon: 'DoorOpen' }
          ].map((product, index) => (
            <Card key={index} className="overflow-hidden hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-48 bg-gradient-to-br from-[#E8DED3] to-[#C4B5A0] flex items-center justify-center relative">
                <Icon name={product.icon as any} size={60} className="text-[#3D2817]/30" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3D2817] hover:text-white transition-colors">
                  <Icon name="Heart" size={20} />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-serif text-[#3D2817]">{product.name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E8DED3] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-[#3D2817] mb-6">Создадим мебель вашей мечты вместе</h2>
          <p className="text-lg text-[#3D2817]/70 mb-8">
            Закажите бесплатную консультацию и получите дизайн-проект в подарок
          </p>
          <Button className="bg-[#3D2817] hover:bg-[#3D2817]/90 text-white px-8 py-6 text-lg">
            Связаться с нами
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D2817] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Armchair" size={24} />
              <span className="text-lg font-bold">FURNITURE DESIGN</span>
            </div>
            <p className="text-white/70 text-sm">
              Производитель дизайнерской мебели премиум-класса
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="/about" className="hover:text-white">О нас</a></li>
              <li><a href="/services" className="hover:text-white">Услуги</a></li>
              <li><a href="/" className="hover:text-white">Портфолио</a></li>
              <li><a href="/" className="hover:text-white">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="/" className="hover:text-white">Гардеробные</a></li>
              <li><a href="/" className="hover:text-white">Кухни</a></li>
              <li><a href="/" className="hover:text-white">Гостиные</a></li>
              <li><a href="/" className="hover:text-white">Мебель</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@furniture.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, ул. Примерная, 1
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/20 text-center text-white/70 text-sm">
          © 2024 Furniture Design. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
