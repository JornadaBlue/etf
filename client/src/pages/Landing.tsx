import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, TrendingUp, Shield, Clock, DollarSign, Users, MessageCircle } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-lg md:text-xl whitespace-nowrap">Rota da Paz Financeira</span>
          </Link>
          <nav className="flex items-center gap-2 md:gap-6">
            <Button size="sm" className="md:size-default text-xs md:text-sm" asChild>
              <a href="https://pay.hotmart.com/P102628059I?checkoutMode=2" target="_blank" rel="noopener noreferrer">
                Comprar Agora
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              A Rota da Paz Financeira
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Invista em ETFs e Bata 92% dos Fundos sem Ansiedade
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              <em>A Estratégia de Alocação Curada por Jhony Bosio</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://pay.hotmart.com/P102628059I?checkoutMode=2" target="_blank" rel="noopener noreferrer">
                  Começar Agora - R$ 197,00
                </a>
              </Button>
              <Link href="#beneficios">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <div className="text-muted-foreground">dos fundos ativos perdem para o índice</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">0,1-0,5%</div>
              <div className="text-muted-foreground">taxa de administração de ETFs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5 Módulos</div>
              <div className="text-muted-foreground">de conteúdo prático e aplicável</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que Este Curso é Diferente?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprenda a investir como os profissionais, sem a complexidade e os custos da gestão ativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Retornos Superiores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Aprenda a estratégia que bate 92% dos fundos ativos no longo prazo, com custos mínimos e sem estresse.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Paz de Espírito</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Elimine a ansiedade financeira. Invista de forma sistemática e durma tranquilo sabendo que está no caminho certo.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Economia de Tempo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pare de gastar horas analisando ações. Com ETFs, você constrói uma carteira diversificada em minutos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Custos Mínimos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pague apenas 0,1-0,5% ao ano em taxas, em vez dos 2-3% dos fundos ativos. A diferença é de centenas de milhares de reais no longo prazo.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Método Comprovado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Siga o Método Bosio (5-3-2): 5 ETFs, 3 Perfis, 2 Rebalanceamentos. Simples, eficiente e testado.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <MessageCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Tutor IA 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tire suas dúvidas a qualquer momento com nosso assistente inteligente. Suporte instantâneo para garantir que você aproveite ao máximo o curso.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Check className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Conteúdo Prático</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Não é teoria abstrata. Você sai do curso com uma carteira pronta para implementar hoje mesmo.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulos Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Você Vai Aprender
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              5 módulos práticos que transformam você em um investidor profissional de ETFs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Módulo 1: O Fim da Ansiedade Financeira</CardTitle>
                <CardDescription>
                  Entenda por que 92% dos fundos ativos falham e como a gestão passiva é a escolha racional.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Módulo 2: O Mapa da Rota</CardTitle>
                <CardDescription>
                  Aprenda a navegar no universo de ETFs: ações, renda fixa, mercados internacionais e temáticos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Módulo 3: A Alocação Estratégica (O Método Bosio)</CardTitle>
                <CardDescription>
                  Descubra o Método Bosio (5-3-2) e construa sua carteira personalizada em 3 perfis de risco.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Módulo 4: Otimização e Tributação</CardTitle>
                <CardDescription>
                  Aprenda o "segredo dos 15%" e como declarar corretamente no Imposto de Renda.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Módulo 5: O Próximo Nível</CardTitle>
                <CardDescription>
                  Conheça o Bosio Finance Club: carteiras prontas, atualizadas mensalmente, por apenas R$ 97/mês.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Investimento no Curso</CardTitle>
                <div className="text-5xl font-bold text-primary my-4">R$ 197,00</div>
                <CardDescription className="text-lg">
                  Pagamento único. Acesso vitalício ao conteúdo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>5 módulos completos com mais de 20 aulas práticas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>O Método Bosio (5-3-2) para construir sua carteira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Carteiras prontas para 3 perfis de risco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Guia completo de tributação e declaração de IR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Acesso vitalício + atualizações futuras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Garantia de 30 dias (devolução integral)</span>
                  </li>
                </ul>
                <Button size="lg" className="w-full text-lg" asChild>
                  <a href="https://pay.hotmart.com/P102628059I?checkoutMode=2" target="_blank" rel="noopener noreferrer">
                    Começar Agora
                  </a>
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Garantia de 30 dias. Se não gostar, devolvemos 100% do seu dinheiro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upsell Teaser */}
      <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quer Carteiras Prontas Todo Mês?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Após completar o curso, você pode se juntar ao <strong>Bosio Finance Club</strong> e receber 3 carteiras prontas (Conservadora, Moderada, Agressiva) atualizadas mensalmente por apenas R$ 97/mês.
            </p>
            <p className="text-muted-foreground">
              <em>O Bosio Finance Club será lançado em breve para alunos do curso.</em>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quanto tempo leva para começar a ganhar dinheiro?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ETFs são investimentos de longo prazo. Você começa a ver resultados significativos após 3-5 anos. Mas cada mês que passa, você está acumulando riqueza.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Posso começar com pouco dinheiro?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sim! Você pode começar com R$ 1.000 ou R$ 5.000. O importante é começar. Conforme você ganha mais, vai aportando mais.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>E se o mercado cair?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Se você seguir o Método Bosio e rebalancear regularmente, você vai comprar mais barato. Crises são oportunidades, não desastres.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preciso de uma corretora especial?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Não. Qualquer corretora brasileira funciona (XP, Nuinvest, Easynvest, etc.). Escolha uma com baixas taxas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>O curso funciona para iniciantes?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sim! O curso foi criado exatamente para isso. Você aprende do zero e sai com uma carteira pronta para implementar.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sua Rota da Paz Financeira Começa Agora
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Não espere mais. Comece a investir de forma inteligente hoje mesmo.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <a href="https://pay.hotmart.com/P102628059I?checkoutMode=2" target="_blank" rel="noopener noreferrer">
                Começar Agora - R$ 197,00
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Rota da Paz Financeira. Todos os direitos reservados.</p>
            <p className="mt-2">Curadoria de Jhony Bosio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

