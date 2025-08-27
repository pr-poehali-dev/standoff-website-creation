import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const shopItems = [
    {
      id: 1,
      name: "RGB Gaming Keyboard",
      price: "₽8,990",
      image: "img/f8e2402b-9bd3-427c-8535-93038fb6ee5f.jpg",
      category: "Keyboards",
      inStock: true
    },
    {
      id: 2,
      name: "Pro Gaming Headset",
      price: "₽12,490",
      image: "img/28e5e393-81cb-4447-9868-9ca99ad6431b.jpg",
      category: "Audio",
      inStock: true
    },
    {
      id: 3,
      name: "Ultra Gaming Mouse",
      price: "₽6,790",
      image: "img/e4890de3-d558-4480-9178-5fe8c6ec87b3.jpg",
      category: "Mice",
      inStock: false
    }
  ];

  const newsItems = [
    {
      id: 1,
      title: "NAVI выиграли IEM Katowice 2024",
      excerpt: "Украинская команда одержала победу над FaZe в финале турнира",
      date: "27 авг 2024",
      category: "CS:GO",
      views: "15.2K"
    },
    {
      id: 2,
      title: "Новый патч Valorant меняет мету",
      excerpt: "Riot Games выпустили обновление с балансом агентов",
      date: "26 авг 2024", 
      category: "Valorant",
      views: "8.7K"
    },
    {
      id: 3,
      title: "Анализ: Почему Team Liquid проиграли Major",
      excerpt: "Разбираем ошибки американской команды в плей-офф",
      date: "25 авг 2024",
      category: "Analysis", 
      views: "22.1K"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold orbitron neon-glow text-primary">
              CYBERSTORE
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary hover-glow transition-colors">
                Магазин
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary hover-glow transition-colors">
                Новости
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary hover-glow transition-colors">
                Турниры
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary hover-glow transition-colors">
                Аналитика
              </a>
            </nav>
            <Button className="neon-border text-primary border-primary hover:bg-primary/10">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-black orbitron mb-6 gradient-bg bg-clip-text text-transparent">
            КИБЕРСПОРТ
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Магазин игрового оборудования и киберспортивая аналитика в одном месте
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="neon-border text-primary border-primary hover:bg-primary/10">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Перейти в магазин
            </Button>
            <Button size="lg" variant="outline" className="neon-border border-secondary text-secondary hover:bg-secondary/10">
              <Icon name="Newspaper" size={20} className="mr-2" />
              Читать новости
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="shop" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-card">
            <TabsTrigger value="shop" className="text-lg data-[state=active]:text-primary">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Магазин
            </TabsTrigger>
            <TabsTrigger value="news" className="text-lg data-[state=active]:text-secondary">
              <Icon name="Newspaper" size={20} className="mr-2" />
              Новости
            </TabsTrigger>
          </TabsList>

          {/* Shop Tab */}
          <TabsContent value="shop" className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-bold orbitron text-primary neon-glow">
                Gaming Gear
              </h3>
              <div className="flex gap-2">
                <Badge variant="secondary" className="hover-glow cursor-pointer">
                  Keyboards
                </Badge>
                <Badge variant="outline" className="hover-glow cursor-pointer border-accent text-accent">
                  Audio
                </Badge>
                <Badge variant="outline" className="hover-glow cursor-pointer border-secondary text-secondary">
                  Mice
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shopItems.map((item) => (
                <Card key={item.id} className="bg-card border-border hover-glow cursor-pointer group">
                  <CardHeader className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </CardTitle>
                      <Badge 
                        variant={item.inStock ? "default" : "destructive"}
                        className={item.inStock ? "bg-primary/20 text-primary" : ""}
                      >
                        {item.inStock ? "В наличии" : "Нет в наличии"}
                      </Badge>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      Категория: {item.category}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary neon-glow">
                      {item.price}
                    </span>
                    <Button 
                      size="sm" 
                      disabled={!item.inStock}
                      className="neon-border text-primary border-primary hover:bg-primary/10"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news" className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-bold orbitron text-secondary neon-glow">
                Esports News
              </h3>
              <div className="flex gap-2">
                <Badge variant="secondary" className="hover-glow cursor-pointer">
                  CS:GO
                </Badge>
                <Badge variant="outline" className="hover-glow cursor-pointer border-accent text-accent">
                  Valorant
                </Badge>
                <Badge variant="outline" className="hover-glow cursor-pointer border-primary text-primary">
                  Analysis
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((article) => (
                <Card key={article.id} className="bg-card border-border hover-glow cursor-pointer group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge 
                        variant="outline" 
                        className="border-secondary text-secondary"
                      >
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Icon name="Eye" size={14} className="mr-1" />
                        {article.views}
                      </div>
                    </div>
                    <CardTitle className="text-foreground group-hover:text-secondary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {article.date}
                    </span>
                    <Button size="sm" variant="outline" className="neon-border border-secondary text-secondary hover:bg-secondary/10">
                      Читать далее
                      <Icon name="ArrowRight" size={14} className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold orbitron text-primary mb-4 neon-glow">
                CYBERSTORE
              </h4>
              <p className="text-muted-foreground">
                Лучший магазин игрового оборудования и киберспортивой аналитики
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors hover-glow">Клавиатуры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover-glow">Мыши</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover-glow">Наушники</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover-glow">Мониторы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Киберспорт</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-secondary transition-colors hover-glow">Новости</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors hover-glow">Турниры</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors hover-glow">Аналитика</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors hover-glow">Команды</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;