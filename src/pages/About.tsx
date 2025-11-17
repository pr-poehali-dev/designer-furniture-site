import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function About() {
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
            <a href="/" className="hover:text-[#E8DED3] transition-colors">Главная</a>
            <a href="/about" className="text-[#E8DED3]">О нас</a>
            <a href="/services" className="hover:text-[#E8DED3] transition-colors">Услуги</a>
            <a href="/" className="hover:text-[#E8DED3] transition-colors">Каталог</a>
            <a href="/" className="hover:text-[#E8DED3] transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-[#E8DED3] to-[#C4B5A0] flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-6xl font-serif text-[#3D2817] mb-6 animate-fade-in">О нас</h1>
          <p className="text-xl text-[#3D2817]/80 max-w-2xl mx-auto animate-fade-in">
            Создаём уникальную мебель, которая превращает пространство в произведение искусства
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-serif text-[#3D2817] mb-6">Наша история</h2>
            <p className="text-lg text-[#3D2817]/70 mb-4 leading-relaxed">
              Мы начали свой путь более 15 лет назад с мечты создавать мебель, которая не просто функциональна, 
              но и вдохновляет. Каждый проект — это результат тщательной работы дизайнеров, мастеров и технологов.
            </p>
            <p className="text-lg text-[#3D2817]/70 leading-relaxed">
              Сегодня мы — команда из 50+ специалистов, создающих индивидуальные решения для жилых и коммерческих 
              интерьеров по всей России и странам СНГ.
            </p>
          </div>
          <div className="bg-[#C4B5A0] h-96 rounded-lg animate-scale-in flex items-center justify-center">
            <Icon name="Building2" size={120} className="text-white/20" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-[#3D2817] text-center mb-16">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Sparkles',
                title: 'Индивидуальность',
                description: 'Каждый проект уникален и создаётся под конкретные потребности клиента'
              },
              {
                icon: 'Award',
                title: 'Качество',
                description: 'Используем только проверенные материалы и современные технологии производства'
              },
              {
                icon: 'Users',
                title: 'Сервис',
                description: 'Полное сопровождение от замеров до установки с гарантией на все работы'
              }
            ].map((value, index) => (
              <Card key={index} className="p-8 text-center hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-[#E8DED3] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={value.icon as any} size={32} className="text-[#3D2817]" />
                </div>
                <h3 className="text-2xl font-serif text-[#3D2817] mb-4">{value.title}</h3>
                <p className="text-[#3D2817]/70 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-serif text-[#3D2817] text-center mb-16">Наши достижения</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: '1500+', label: 'Реализованных проектов' },
            { number: '15', label: 'Лет на рынке' },
            { number: '50+', label: 'Специалистов в команде' },
            { number: '98%', label: 'Довольных клиентов' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-5xl font-bold text-[#3D2817] mb-2">{stat.number}</div>
              <div className="text-[#3D2817]/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#E8DED3] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-[#3D2817] text-center mb-6">Команда профессионалов</h2>
          <p className="text-center text-[#3D2817]/70 mb-16 max-w-2xl mx-auto">
            Наша команда состоит из опытных дизайнеров, технологов и мастеров-краснодеревщиков
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: 'Главный дизайнер', name: 'Анна Петрова', icon: 'Palette' },
              { role: 'Технический директор', name: 'Михаил Соколов', icon: 'Wrench' },
              { role: 'Руководитель производства', name: 'Дмитрий Волков', icon: 'Factory' }
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-24 h-24 bg-[#C4B5A0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={member.icon as any} size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-serif text-[#3D2817] mb-2">{member.name}</h3>
                <p className="text-[#3D2817]/70">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-serif text-[#3D2817] mb-6">Готовы начать свой проект?</h2>
        <p className="text-lg text-[#3D2817]/70 mb-8 max-w-2xl mx-auto">
          Свяжитесь с нами для консультации и обсуждения вашего будущего интерьера
        </p>
        <Button className="bg-[#3D2817] hover:bg-[#3D2817]/90 text-white px-8 py-6 text-lg">
          Связаться с нами
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D2817] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/70">© 2024 Furniture Design. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
