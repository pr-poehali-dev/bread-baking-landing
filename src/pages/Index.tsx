import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const recipes = [
    {
      id: 1,
      title: "Деревенский хлеб на закваске",
      description: "Классический рецепт с хрустящей корочкой и мягким мякишем",
      time: "24 часа",
      difficulty: "средний",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Французский багет",
      description: "Традиционный багет с золотистой корочкой",
      time: "6 часов",
      difficulty: "сложный",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Цельнозерновой хлеб",
      description: "Полезный хлеб с семенами и орехами",
      time: "8 часов",
      difficulty: "легкий",
      image: "/placeholder.svg",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Секреты идеальной закваски",
      excerpt: "Как создать и поддерживать активную закваску дома",
      date: "15 июня 2024",
      readTime: "5 мин",
    },
    {
      id: 2,
      title: "Выбираем правильную муку",
      excerpt: "Разбираемся в видах муки и их влиянии на вкус хлеба",
      date: "10 июня 2024",
      readTime: "7 мин",
    },
    {
      id: 3,
      title: "Температура и время выпечки",
      excerpt: "Как добиться идеального результата в домашней духовке",
      date: "5 июня 2024",
      readTime: "6 мин",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍞</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Хлебное дело
                </h1>
                <p className="text-sm text-gray-600">
                  Авторские рецепты и секреты
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#recipes"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Рецепты
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Блог
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                О нас
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Искусство домашнего
            <span className="text-orange-600 block">хлебопечения</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Делюсь проверенными рецептами, секретами мастерства и вдохновением
            для создания настоящего домашнего хлеба
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8"
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Смотреть рецепты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8"
            >
              <Icon name="Coffee" className="mr-2" size={20} />
              Читать блог
            </Button>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные рецепты
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Проверенные временем рецепты с подробными инструкциями и секретами
              приготовления
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <Card
                key={recipe.id}
                className="hover:shadow-lg transition-shadow duration-300 border-orange-100"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-t-lg flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-orange-400" />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-gray-900">
                      {recipe.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 text-orange-800"
                    >
                      {recipe.difficulty}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {recipe.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Icon name="Clock" size={16} />
                      <span>{recipe.time}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-orange-600 hover:bg-orange-50"
                    >
                      Читать рецепт
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Блог о хлебе
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полезные статьи, советы и истории из мира хлебопечения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Icon name="Calendar" size={16} />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Icon name="Clock" size={16} />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-orange-600 hover:bg-orange-50 p-0"
                  >
                    Читать полностью
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="User" size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">О мастере</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Меня зовут Анна, и я уже более 10 лет изучаю искусство
              хлебопечения. Начав с простых рецептов, я постепенно открыла для
              себя мир заквасок, традиционных методов и авторских экспериментов.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  10+ лет опыта
                </h4>
                <p className="text-sm text-gray-600">
                  Постоянное совершенствование мастерства
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" size={24} className="text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  100+ рецептов
                </h4>
                <p className="text-sm text-gray-600">
                  Проверенные и авторские рецепты
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  1000+ учеников
                </h4>
                <p className="text-sm text-gray-600">
                  Счастливых домашних пекарей
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-600">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Готовы начать печь?
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу любителей домашнего хлеба и получите
            доступ к эксклюзивным рецептам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8"
            >
              <Icon name="Mail" className="mr-2" size={20} />
              Подписаться на новости
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🍞</span>
                </div>
                <span className="text-xl font-bold">Хлебное дело</span>
              </div>
              <p className="text-gray-400 text-sm">
                Авторские рецепты и секреты домашнего хлебопечения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Рецепты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Хлеб на закваске
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Французские багеты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Цельнозерновой хлеб
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Блог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Секреты закваски
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Выбор муки
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Техника выпечки
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Icon name="Mail" size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Хлебное дело. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
