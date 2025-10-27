import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, TrendingUp, FileText, Table, Users, ArrowRight } from "lucide-react";

export default function Club() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-lg md:text-xl whitespace-nowrap">Rota da Paz Financeira</span>
          </Link>
          <nav className="flex items-center gap-2 md:gap-6">
            <Link href="/modulo-1">
              <Button variant="ghost" size="sm" className="md:size-default">Acessar Curso</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Bosio Finance Club
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Carteiras 100% ETF, Atualizadas Mensalmente
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              3 Carteiras Prontas (Conservadora, Moderada, Agressiva) por apenas <strong>R$ 97/mês</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Assinar Agora - R$ 97/mês
              </Button>
              <Link href="#carteiras">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Ver Carteiras
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              O Limite do "Faça Você Mesmo"
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Você completou o curso e aprendeu tudo sobre ETFs, alocação e tributação. Você é capaz de montar sua própria carteira. Mas há um problema que ninguém fala: <strong>manter uma carteira atualizada é um trabalho contínuo</strong>.
              </p>
              <p>
                Depois que você investe, você precisa:
              </p>
              <ul>
                <li>Acompanhar o desempenho dos seus ETFs</li>
                <li>Ficar atento a mudanças de mercado</li>
                <li>Rebalancear regularmente (2 vezes por ano)</li>
                <li>Otimizar tributariamente</li>
                <li>Acompanhar notícias e tendências globais</li>
              </ul>
              <p>
                Isso pode parecer simples, mas na prática, é <strong>muito trabalho</strong>. Muitos investidores gastam 60+ horas por ano acompanhando suas carteiras, e ainda assim cometem erros que custam 2-3% de retorno anual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Solução Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Solução: Bosio Finance Club
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Por apenas <strong>R$ 97 por mês</strong>, você recebe carteiras prontas, atualizadas mensalmente, eliminando o trabalho de gestão e garantindo que você sempre está investindo de forma otimizada.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>3 Carteiras Prontas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Uma para cada perfil de risco (Conservador, Moderado, Agressivo). Todas 100% em ETFs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Relatório Mensal</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Entenda por que cada ETF está na carteira e qual é a estratégia do mês.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Table className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Planilha de Rebalanceamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Saiba exatamente o que comprar, vender e quando. Implementação em 15-30 minutos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Comunidade Exclusiva</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Tire dúvidas, aprenda com outros membros e fique atualizado sobre o mercado.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Carteiras Section */}
      <section id="carteiras" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              As 3 Carteiras do Club
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha a carteira que se encaixa no seu perfil de risco e comece a investir como um profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Carteira Conservadora */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Conservadora</CardTitle>
                <CardDescription>Para quem quer segurança e renda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">5-6% a.a.</div>
                  <div className="text-sm text-muted-foreground">Retorno Esperado</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">IVVB11 (S&P 500)</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">XBOV (Ibovespa)</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">XFXA (Renda Fixa)</span>
                      <span className="text-sm font-medium">70%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <strong>Ideal para:</strong> Aposentados, pessoas próximas da aposentadoria, quem não tolera volatilidade.
                </div>
              </CardContent>
            </Card>

            {/* Carteira Moderada */}
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                  MAIS POPULAR
                </div>
                <CardTitle className="text-2xl">Moderada</CardTitle>
                <CardDescription>Para quem quer crescimento equilibrado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">7-8% a.a.</div>
                  <div className="text-sm text-muted-foreground">Retorno Esperado</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">IVVB11 (S&P 500)</span>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">XBOV (Ibovespa)</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">XWML (MSCI World)</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">XFXA (Renda Fixa)</span>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <strong>Ideal para:</strong> Maioria dos investidores, quem tem 7-10 anos de horizonte.
                </div>
              </CardContent>
            </Card>

            {/* Carteira Agressiva */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Agressiva</CardTitle>
                <CardDescription>Para quem quer maximizar crescimento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">9-12% a.a.</div>
                  <div className="text-sm text-muted-foreground">Retorno Esperado</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">IVVB11 (S&P 500)</span>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">XBOV (Ibovespa)</span>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">XWML (MSCI World)</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">XFXA (Renda Fixa)</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">XENE (Clean Energy)</span>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <strong>Ideal para:</strong> Jovens, quem tem 10+ anos de horizonte, tolerância a volatilidade.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Assinatura Mensal</CardTitle>
                <div className="text-5xl font-bold text-primary my-4">R$ 97/mês</div>
                <CardDescription className="text-lg">
                  Cancele quando quiser. Sem compromisso de longo prazo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>3 Carteiras Prontas (Conservadora, Moderada, Agressiva)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Atualização Mensal com Rebalanceamentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Relatório Explicativo de cada carteira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Planilha de Rebalanceamento pronta para usar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Acesso à Comunidade Exclusiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Suporte e dúvidas respondidas</span>
                  </li>
                </ul>
                <Button size="lg" className="w-full text-lg">
                  Assinar Agora
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Garantia de 30 dias. Se não gostar, devolvemos 100% do seu dinheiro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              A Matemática do Club
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Suponha que você tem R$ 500.000 investidos:
              </p>

              <div className="not-prose my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Cenário</th>
                      <th className="text-left p-3">Sem o Club</th>
                      <th className="text-left p-3">Com o Club</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Retorno esperado (8% a.a.)</td>
                      <td className="p-3">R$ 40.000</td>
                      <td className="p-3">R$ 40.000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Tempo gasto (60h/ano)</td>
                      <td className="p-3">-R$ 6.000</td>
                      <td className="p-3">R$ 0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Risco de erro (-2% a.a.)</td>
                      <td className="p-3">-R$ 10.000</td>
                      <td className="p-3">R$ 0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Custo do Club</td>
                      <td className="p-3">R$ 0</td>
                      <td className="p-3">-R$ 1.164</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Otimização (+1% a.a.)</td>
                      <td className="p-3">R$ 0</td>
                      <td className="p-3">+R$ 5.000</td>
                    </tr>
                    <tr className="border-b font-bold">
                      <td className="p-3">Retorno Líquido</td>
                      <td className="p-3">R$ 24.000</td>
                      <td className="p-3 text-primary">R$ 43.836</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-center text-xl font-semibold text-primary">
                Diferença: R$ 19.836 a mais por ano apenas por usar o Club.
              </p>

              <p>
                R$ 97/mês é:
              </p>
              <ul>
                <li><strong>R$ 3,23 por dia</strong> (menos de um café com leite)</li>
                <li><strong>Menos de 0,3% do seu patrimônio</strong> (se você tem R$ 500.000)</li>
                <li><strong>Potencialmente R$ 19.000+ por ano</strong> em ganhos adicionais e tempo economizado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Junte-se ao Bosio Finance Club
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Invista como um profissional, sem o trabalho de um profissional.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Assinar Agora - R$ 97/mês
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

