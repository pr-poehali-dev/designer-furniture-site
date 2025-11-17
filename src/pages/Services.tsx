import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Services() {
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
            <a href="/about" className="hover:text-[#E8DED3] transition-colors">О нас</a>
            <a href="/services" className="text-[#E8DED3]">Услуги</a>
            <a href="/" className="hover:text-[#E8DED3] transition-colors">Каталог</a>
            <a href="/" className="hover:text-[#E8DED3] transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-[#C4B5A0] to-[#E8DED3] flex items-center justify-center">
        <div className="text-center z-10 max-w-4xl px-6">
          <h1 className="text-6xl font-serif text-[#3D2817] mb-6 animate-fade-in">Наши услуги</h1>
          <p className="text-xl text-[#3D2817]/80 animate-fade-in">
            Полный цикл создания мебели от дизайна до установки
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: 'Ruler',
              title: 'Дизайн-проект',
              description: 'Создаём 3D-визуализацию будущей мебели с учётом всех ваших пожеланий и особенностей помещения',
              features: ['Замеры помещения', '3D-моделирование', 'Подбор материалов', 'Цветовые решения']
            },
            {
              icon: 'Hammer',
              title: 'Производство',
              description: 'Изготавливаем мебель на собственном производстве с использованием современного оборудования',
              features: ['Качественные материалы', 'Точность исполнения', 'Контроль качества', 'Сроки 2-4 недели']
            },
            {
              icon: 'Package',
              title: 'Доставка и монтаж',
              description: 'Организуем доставку и профессиональную установку мебели с соблюдением всех технологий',
              features: ['Аккуратная доставка', 'Профессиональный монтаж', 'Настройка фурнитуры', 'Гарантия 3 года']
            },
            {
              icon: 'Headphones',
              title: 'Сервисное обслуживание',
              description: 'Предоставляем гарантийное и постгарантийное обслуживание всей произведённой мебели',
              features: ['Гарантия качества', 'Регулировка фурнитуры', 'Замена деталей', 'Консультации']
            }
          ].map((service, index) => (
            <Card key={index} className="p-8 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-[#E8DED3] rounded-full flex items-center justify-center mb-6">
                <Icon name={service.icon as any} size={32} className="text-[#3D2817]" />
              </div>
              <h3 className="text-2xl font-serif text-[#3D2817] mb-4">{service.title}</h3>
              <p className="text-[#3D2817]/70 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[#3D2817]/70">
                    <Icon name="Check" size={16} className="text-[#3D2817]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Types */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-[#3D2817] text-center mb-4">Виды проектов</h2>
          <p className="text-center text-[#3D2817]/70 mb-16">Мы специализируемся на создании мебели для различных помещений</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Кухни',
                description: 'Функциональные кухонные гарнитуры с продуманной эргономикой',
                image: 'https://cdn.poehali.dev/projects/69664c28-95a7-48d6-8a83-b02a4bf633a0/files/9b2aa658-e0f3-4039-a117-286ddb1e4ec9.jpg'
              },
              {
                title: 'Гардеробные',
                description: 'Системы хранения с оптимальным использованием пространства',
                image: 'https://cdn.poehali.dev/projects/69664c28-95a7-48d6-8a83-b02a4bf633a0/files/b8310a22-58ed-449d-8d10-f61cbae68dc0.jpg'
              },
              {
                title: 'Гостиные',
                description: 'Элегантная мебель для зон отдыха и приёма гостей',
                image: 'https://cdn.poehali.dev/projects/69664c28-95a7-48d6-8a83-b02a4bf633a0/files/b47737f2-ce80-4592-9666-520c4f80ca2c.jpg'
              },
              {
                title: 'Спальни',
                description: 'Комфортная мебель для создания уютной атмосферы',
                image: 'https://cdn.poehali.dev/projects/69664c28-95a7-48d6-8a83-b02a4bf633a0/files/d825457a-a1f9-46eb-b0e7-38a8bca7e569.jpg'
              },
              {
                title: 'Кабинеты',
                description: 'Стильная мебель для рабочих пространств',
                image: 'https://cdn.poehali.dev/projects/69664c28-95a7-48d6-8a83-b02a4bf633a0/files/1801d278-1397-48c7-b118-ff1fb96dacca.jpg'
              },
              {
                title: 'Прихожие',
                description: 'Компактные и вместительные решения для входных зон',
                image: 'https://cdn.poehali.dev/projects/69664c28-95a7-48d6-8a83-b02a4bf633a0/files/f412a04f-2d9b-49b2-94ed-e5191fb45401.jpg'
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif text-[#3D2817] mb-3">{project.title}</h3>
                  <p className="text-[#3D2817]/70">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-serif text-[#3D2817] text-center mb-4">Как мы работаем</h2>
        <p className="text-center text-[#3D2817]/70 mb-16">Прозрачный процесс от идеи до реализации</p>
        
        <div className="space-y-4">
          {[
            {
              step: '1',
              title: 'Консультация и замеры',
              description: 'Встречаемся с вами, обсуждаем пожелания и делаем точные замеры помещения. На этом этапе определяем общую концепцию проекта.',
              duration: '1-2 дня'
            },
            {
              step: '2',
              title: 'Дизайн-проект',
              description: 'Создаём детальную 3D-визуализацию мебели, подбираем материалы, фурнитуру и согласовываем с вами все детали.',
              duration: '3-5 дней'
            },
            {
              step: '3',
              title: 'Производство',
              description: 'Изготавливаем мебель на нашем производстве с постоянным контролем качества на каждом этапе.',
              duration: '2-4 недели'
            },
            {
              step: '4',
              title: 'Доставка и установка',
              description: 'Доставляем готовую мебель, профессионально устанавливаем и настраиваем все механизмы.',
              duration: '1 день'
            }
          ].map((item, index) => (
            <Card key={index} className="p-6 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#3D2817] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-[#3D2817] mb-2">{item.title}</h3>
                  <p className="text-[#3D2817]/70 mb-2">{item.description}</p>
                  <div className="text-sm text-[#3D2817]/60">
                    <Icon name="Clock" size={14} className="inline mr-1" />
                    Срок: {item.duration}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#E8DED3] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-[#3D2817] text-center mb-16">Частые вопросы</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Какие материалы вы используете?',
                answer: 'Мы работаем с качественными материалами европейских производителей: ЛДСП EGGER, МДФ, массив дерева, стекло, металл. Все материалы имеют сертификаты качества.'
              },
              {
                question: 'Сколько стоит дизайн-проект?',
                answer: 'Дизайн-проект входит в стоимость заказа при заключении договора на производство мебели. При отдельном заказе проекта стоимость составляет от 5000 рублей.'
              },
              {
                question: 'Какие сроки изготовления?',
                answer: 'Стандартный срок изготовления 2-4 недели в зависимости от сложности проекта. Возможно срочное изготовление за дополнительную плату.'
              },
              {
                question: 'Предоставляете ли вы гарантию?',
                answer: 'Да, мы предоставляем гарантию 3 года на всю произведённую мебель и фурнитуру. Гарантийное обслуживание включает регулировку и замену комплектующих.'
              },
              {
                question: 'Можно ли изменить проект после согласования?',
                answer: 'Да, изменения возможны до момента запуска в производство. После начала производства изменения не вносятся.'
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg">
                <AccordionTrigger className="text-left text-lg font-serif text-[#3D2817] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#3D2817]/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-serif text-[#3D2817] mb-6">Готовы обсудить ваш проект?</h2>
        <p className="text-lg text-[#3D2817]/70 mb-8 max-w-2xl mx-auto">
          Закажите бесплатную консультацию и замеры — мы поможем воплотить ваши идеи в жизнь
        </p>
        <Button className="bg-[#3D2817] hover:bg-[#3D2817]/90 text-white px-8 py-6 text-lg">
          Заказать консультацию
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