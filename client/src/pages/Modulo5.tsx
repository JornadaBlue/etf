import CourseLayout from "@/components/CourseLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, TrendingUp, Calendar, Shield } from "lucide-react";

export default function Modulo5() {
  return (
    <CourseLayout currentModule={5}>
      <div className="prose prose-lg max-w-none">
        <h1>Módulo 5: O Próximo Nível</h1>
        <p className="lead text-xl text-muted-foreground">
          A Transição para o Bosio Finance Club
        </p>

        <div className="not-prose bg-accent/20 border-l-4 border-primary p-6 my-8">
          <p className="text-lg font-medium">
            <strong>Foco do Módulo:</strong> Apresentar o limite do "faça você mesmo" e introduzir o Bosio Finance 
            Club como a solução para quem quer carteiras prontas, atualizadas e otimizadas mensalmente.
          </p>
        </div>

        <hr className="my-12" />

        <h2>Aula 1: O Limite do "Faça Você Mesmo"</h2>
        <p className="lead">Quando Delegar é Mais Inteligente</p>

        <p>
          Você aprendeu tudo o que precisa para investir em ETFs de forma inteligente. Mas existe um ponto em que 
          <strong> delegar a curadoria</strong> se torna mais eficiente do que fazer tudo sozinho.
        </p>

        <h3>Os Desafios do Investidor DIY (Do It Yourself)</h3>

        <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Tempo
            </h4>
            <p className="text-sm">
              Acompanhar mercados, ler relatórios, rebalancear carteiras... tudo isso consome horas que você poderia 
              usar para trabalhar, família ou lazer.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Conhecimento Contínuo
            </h4>
            <p className="text-sm">
              O mercado muda. Novos ETFs surgem, regras tributárias mudam, oportunidades aparecem. Manter-se 
              atualizado é um trabalho full-time.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Viés Emocional
            </h4>
            <p className="text-sm">
              É difícil ser racional com o próprio dinheiro. O medo e a ganância podem levar a decisões ruins. Ter 
              uma curadoria externa ajuda a manter a disciplina.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Otimização Fiscal
            </h4>
            <p className="text-sm">
              Escolher os ETFs certos para minimizar impostos (como LFTB11 vs LFTS11, GPUS11 vs IVVB11) requer 
              conhecimento técnico profundo.
            </p>
          </div>
        </div>

        <blockquote className="border-l-4 border-primary pl-6 italic my-8">
          <strong>A Verdade:</strong> Você pode fazer tudo sozinho, mas o custo de oportunidade (tempo + estresse + 
          possíveis erros) pode ser maior do que pagar por uma curadoria profissional.
        </blockquote>

        <hr className="my-12" />

        <h2>Aula 2: Apresentação do Bosio Finance Club</h2>
        <p className="lead">Carteiras Prontas, Atualizadas Mensalmente</p>

        <p>
          O <strong>Bosio Finance Club</strong> é a evolução natural do que você aprendeu neste curso. É a solução 
          para quem quer os benefícios dos ETFs sem o trabalho de curadoria mensal.
        </p>

        <div className="not-prose bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg my-8 border-2 border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-center">O Que Você Recebe Todo Mês</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <h4 className="font-bold mb-2">Carteiras Completas</h4>
              <p className="text-sm text-muted-foreground">
                Conservadora, Moderada e Agressiva. Escolha a que se encaixa no seu perfil.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <h4 className="font-bold mb-2">ETFs Brasileiros</h4>
              <p className="text-sm text-muted-foreground">
                Todos os ETFs são negociados na B3. Sem complicação de conta no exterior.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">5-7</div>
              <h4 className="font-bold mb-2">ETFs por Carteira</h4>
              <p className="text-sm text-muted-foreground">
                Seguindo a Regra 5-3-2 do Método Bosio. Simplicidade e diversificação.
              </p>
            </div>
          </div>
        </div>

        <h3>O Que Está Incluído</h3>

        <div className="not-prose space-y-4 my-8">
          <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-semibold mb-1">Relatório Mensal de Alocação</h5>
              <p className="text-sm text-muted-foreground">
                PDF detalhado com a alocação recomendada para cada perfil, incluindo tickers, percentuais e 
                justificativas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-semibold mb-1">Planilha de Rebalanceamento</h5>
              <p className="text-sm text-muted-foreground">
                Excel/Google Sheets onde você insere seu patrimônio e a planilha calcula automaticamente quanto 
                comprar ou vender de cada ETF.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-semibold mb-1">Análise de Mercado</h5>
              <p className="text-sm text-muted-foreground">
                Contexto macroeconômico e por que fizemos as escolhas daquele mês (mudanças de alocação, novos ETFs, 
                etc.).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-semibold mb-1">Acesso Exclusivo ao Grupo</h5>
              <p className="text-sm text-muted-foreground">
                Comunidade privada de membros do Club para trocar experiências e tirar dúvidas.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-12" />

        <h2>Aula 3: Como Usar as Carteiras</h2>
        <p className="lead">Passo a Passo Prático</p>

        <p>
          Usar as carteiras do Club é extremamente simples. Veja o passo a passo:
        </p>

        <div className="not-prose my-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold mb-2">Receba o Relatório Mensal</h4>
                <p className="text-sm text-muted-foreground">
                  Todo dia 1º do mês, você recebe por email o relatório com as 3 carteiras atualizadas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold mb-2">Escolha Seu Perfil</h4>
                <p className="text-sm text-muted-foreground">
                  Conservador, Moderado ou Agressivo. Se não souber, use o teste do Módulo 3.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold mb-2">Abra a Planilha de Rebalanceamento</h4>
                <p className="text-sm text-muted-foreground">
                  Insira seu patrimônio total e a planilha calcula automaticamente quanto investir em cada ETF.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold mb-2">Execute as Ordens na Corretora</h4>
                <p className="text-sm text-muted-foreground">
                  Abra sua corretora (XP, Rico, Clear, etc.) e compre os ETFs nas quantidades indicadas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h4 className="font-bold mb-2">Pronto! Relaxe pelo Resto do Mês</h4>
                <p className="text-sm text-muted-foreground">
                  Não precisa acompanhar o mercado diariamente. Só volte no mês seguinte para o próximo rebalanceamento.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose bg-accent/20 border-l-4 border-primary p-6 my-8">
          <p className="font-medium">
            <strong>Tempo Total:</strong> 15-30 minutos por mês. É isso. Todo o resto do tempo é seu.
          </p>
        </div>

        <hr className="my-12" />

        <h2>Aula 4: CTA Final</h2>
        <p className="lead">Dê o Próximo Passo na Sua Jornada</p>

        <p>
          Você chegou ao final do curso <strong>"A Rota da Paz Financeira"</strong>. Parabéns! Você agora tem o 
          conhecimento necessário para investir em ETFs de forma inteligente e construir riqueza no longo prazo.
        </p>

        <h3>Suas Opções Agora</h3>

        <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-4">Opção 1: Faça Você Mesmo</h4>
            <p className="text-sm mb-4">
              Use o conhecimento do curso para montar e gerenciar sua própria carteira. Você tem todas as ferramentas 
              necessárias.
            </p>
            <p className="text-sm font-medium text-primary">
              ✅ Ideal se você tem tempo e gosta de acompanhar o mercado
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary">
            <h4 className="font-bold text-lg mb-4">Opção 2: Junte-se ao Club</h4>
            <p className="text-sm mb-4">
              Receba carteiras prontas todo mês e economize tempo. Foque no que você faz de melhor e deixe a 
              curadoria comigo.
            </p>
            <p className="text-sm font-medium text-primary mb-4">
              ✅ Ideal se você quer resultados sem o trabalho de curadoria
            </p>
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-bold">R$ 97,00/mês</div>
              <Link href="/club">
                <Button size="lg" className="w-full">
                  Conhecer o Bosio Finance Club
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="not-prose bg-primary text-primary-foreground p-8 rounded-lg my-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Obrigado por Fazer Parte Desta Jornada!</h3>
          <p className="text-lg mb-6 opacity-90">
            Independente da opção que escolher, você agora tem o conhecimento para investir com inteligência e 
            construir um futuro financeiro sólido.
          </p>
          <p className="font-medium">
            Qualquer dúvida, estou à disposição.
          </p>
          <p className="mt-4 text-xl font-bold">
            Jhony Bosio
          </p>
        </div>

        <div className="not-prose bg-primary/5 border-l-4 border-primary p-6 my-8">
          <p className="font-medium">
            <strong>Conclusão do Curso:</strong> Você completou os 5 módulos e agora é um investidor educado em ETFs. 
            Use esse conhecimento para construir riqueza de forma inteligente, simples e sem ansiedade. Seja 
            bem-vindo à <strong>Rota da Paz Financeira</strong>! 🎉
          </p>
        </div>
      </div>
    </CourseLayout>
  );
}
