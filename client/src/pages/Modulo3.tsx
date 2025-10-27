import CourseLayout from "@/components/CourseLayout";

export default function Modulo3() {
  return (
    <CourseLayout currentModule={3}>
      <div className="prose prose-lg max-w-none">
        <h1>Módulo 3: A Alocação Estratégica</h1>
        <p className="lead text-xl text-muted-foreground">
          O Método Bosio
        </p>

        <div className="not-prose bg-accent/20 border-l-4 border-primary p-6 my-8">
          <p className="text-lg font-medium">
            <strong>Foco do Módulo:</strong> Ensinar o método de alocação de ativos que o investidor deve seguir, 
            baseado em seu perfil de risco, e apresentar os 5 ETFs essenciais para começar.
          </p>
        </div>

        <hr className="my-12" />

        <h2>Aula 1: Definindo Seu Perfil de Risco</h2>
        <p className="lead">Conservador, Moderado ou Agressivo?</p>

        <p>
          Antes de investir um único real, você precisa entender <strong>quanto risco você está disposto a correr</strong>. 
          Isso não é sobre ganância ou medo irracional; é sobre <strong>autoconhecimento financeiro</strong>.
        </p>

        <h3>O Que é Perfil de Risco?</h3>

        <p>Seu perfil de risco é a resposta a três perguntas:</p>

        <ol className="space-y-2">
          <li><strong>Quanto tempo você tem?</strong> (Horizonte de investimento)</li>
          <li><strong>Quanto dinheiro você pode perder sem dormir mal?</strong> (Tolerância emocional)</li>
          <li><strong>Qual é seu objetivo?</strong> (Aposentadoria, compra de imóvel, riqueza)</li>
        </ol>

        <h3>Os Três Perfis Principais</h3>

        <div className="not-prose grid md:grid-cols-3 gap-6 my-8">
          {/* Conservador */}
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-bold text-xl mb-4 text-blue-600">Perfil Conservador</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Horizonte:</strong> 3-5 anos</li>
              <li><strong>Tolerância:</strong> Baixa</li>
              <li><strong>Alocação:</strong> 30% Ações / 70% Renda Fixa</li>
              <li><strong>Retorno:</strong> 5-6% a.a.</li>
            </ul>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm font-medium">Exemplo de Carteira:</p>
              <ul className="text-sm space-y-1 mt-2">
                <li>15% GPUS11 (S&P 500)</li>
                <li>15% BOVA11 (Ibovespa)</li>
                <li>70% LFTB11 (Renda Fixa)</li>
              </ul>
            </div>
          </div>

          {/* Moderado */}
          <div className="bg-card p-6 rounded-lg border border-primary">
            <h4 className="font-bold text-xl mb-4 text-primary">Perfil Moderado</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Horizonte:</strong> 7-10 anos</li>
              <li><strong>Tolerância:</strong> Média</li>
              <li><strong>Alocação:</strong> 60% Ações / 40% Renda Fixa</li>
              <li><strong>Retorno:</strong> 7-8% a.a.</li>
            </ul>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm font-medium">Exemplo de Carteira:</p>
              <ul className="text-sm space-y-1 mt-2">
                <li>30% GPUS11 (S&P 500)</li>
                <li>20% BOVA11 (Ibovespa)</li>
                <li>10% WRLD11 (MSCI World)</li>
                <li>40% LFTB11 (Renda Fixa)</li>
              </ul>
            </div>
          </div>

          {/* Agressivo */}
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-bold text-xl mb-4 text-green-600">Perfil Agressivo</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Horizonte:</strong> 10+ anos</li>
              <li><strong>Tolerância:</strong> Alta</li>
              <li><strong>Alocação:</strong> 80-100% Ações / 0-20% Renda Fixa</li>
              <li><strong>Retorno:</strong> 9-12% a.a.</li>
            </ul>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm font-medium">Exemplo de Carteira:</p>
              <ul className="text-sm space-y-1 mt-2">
                <li>40% GPUS11 (S&P 500)</li>
                <li>30% BOVA11 (Ibovespa)</li>
                <li>15% WRLD11 (MSCI World)</li>
                <li>10% CHIP11 (Semicondutores)</li>
                <li>5% LFTB11 (Renda Fixa)</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>O Teste do Perfil de Risco</h3>

        <p>Responda sinceramente:</p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <ol className="space-y-4">
            <li>
              <p className="font-medium mb-2">1. Se seu portfólio caísse 30% em um mês, você:</p>
              <ul className="space-y-1 ml-4">
                <li>A) Venderia tudo (Conservador)</li>
                <li>B) Manteria e continuaria investindo (Moderado)</li>
                <li>C) Compraria mais (Agressivo)</li>
              </ul>
            </li>
            <li>
              <p className="font-medium mb-2">2. Seu horizonte de investimento é:</p>
              <ul className="space-y-1 ml-4">
                <li>A) Menos de 5 anos (Conservador)</li>
                <li>B) 5-10 anos (Moderado)</li>
                <li>C) Mais de 10 anos (Agressivo)</li>
              </ul>
            </li>
            <li>
              <p className="font-medium mb-2">3. Seu objetivo principal é:</p>
              <ul className="space-y-1 ml-4">
                <li>A) Preservar dinheiro (Conservador)</li>
                <li>B) Crescimento equilibrado (Moderado)</li>
                <li>C) Maximizar riqueza (Agressivo)</li>
              </ul>
            </li>
          </ol>
          <p className="mt-4 font-medium text-primary">
            <strong>Resultado:</strong> Conte quantas vezes você respondeu A, B ou C. A letra que mais apareceu é seu perfil.
          </p>
        </div>

        <hr className="my-12" />

        <h2>Aula 2: O GPS do Portfólio</h2>
        <p className="lead">A Regra 5-3-2 do Método Bosio</p>

        <p>
          Agora que você conhece seu perfil de risco, é hora de aprender o <strong>Método Bosio</strong>, que é uma 
          forma simples e elegante de estruturar sua carteira.
        </p>

        <div className="not-prose bg-primary/10 p-8 rounded-lg my-8 text-center">
          <h3 className="text-3xl font-bold mb-6">A Regra 5-3-2</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">5</div>
              <p className="font-medium">ETFs Diferentes</p>
              <p className="text-sm text-muted-foreground mt-2">Diversificação sem complexidade</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">3</div>
              <p className="font-medium">Perfis de Risco</p>
              <p className="text-sm text-muted-foreground mt-2">Conservador, Moderado ou Agressivo</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">2</div>
              <p className="font-medium">Rebalanceamentos/Ano</p>
              <p className="text-sm text-muted-foreground mt-2">Manutenção mínima</p>
            </div>
          </div>
        </div>

        <h3>Por Que 5 ETFs?</h3>

        <p>Cinco ETFs oferecem:</p>
        <ul>
          <li><strong>Diversificação:</strong> Você está em 5 mercados/temas diferentes</li>
          <li><strong>Simplicidade:</strong> Não é complicado acompanhar 5 posições</li>
          <li><strong>Eficiência:</strong> Reduz custos de transação</li>
          <li><strong>Controle:</strong> Você entende exatamente o que tem</li>
        </ul>

        <hr className="my-12" />

        <h2>Aula 3: Rebalanceamento</h2>
        <p className="lead">Mantendo Sua Carteira no Caminho Certo</p>

        <p>
          Rebalancear é o processo de <strong>ajustar sua carteira</strong> para que ela volte às proporções originais 
          que você definiu. Com o tempo, alguns ativos sobem mais que outros, e sua alocação fica desbalanceada.
        </p>

        <h3>Exemplo Prático de Rebalanceamento</h3>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="border p-3 text-left">ETF</th>
                <th className="border p-3 text-left">Alocação Original</th>
                <th className="border p-3 text-left">Após 6 Meses</th>
                <th className="border p-3 text-left">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">GPUS11</td>
                <td className="border p-3">30%</td>
                <td className="border p-3">35%</td>
                <td className="border p-3 text-red-600">Vender 5%</td>
              </tr>
              <tr className="bg-accent/5">
                <td className="border p-3">BOVA11</td>
                <td className="border p-3">20%</td>
                <td className="border p-3">18%</td>
                <td className="border p-3 text-green-600">Comprar 2%</td>
              </tr>
              <tr>
                <td className="border p-3">WRLD11</td>
                <td className="border p-3">10%</td>
                <td className="border p-3">12%</td>
                <td className="border p-3 text-red-600">Vender 2%</td>
              </tr>
              <tr className="bg-accent/5">
                <td className="border p-3">LFTB11</td>
                <td className="border p-3">40%</td>
                <td className="border p-3">35%</td>
                <td className="border p-3 text-green-600">Comprar 5%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote className="border-l-4 border-primary pl-6 italic my-8">
          <strong>Regra de Ouro:</strong> Rebalanceie apenas 2 vezes por ano (junho e dezembro). Rebalancear demais 
          gera custos e impostos desnecessários.
        </blockquote>

        <hr className="my-12" />

        <h2>Aula 4: 5 ETFs Essenciais para Começar</h2>
        <p className="lead">A Lista Definitiva</p>

        <p>
          Agora que você entende o método, aqui estão os <strong>5 ETFs essenciais</strong> que todo investidor 
          brasileiro deveria considerar:
        </p>

        <div className="not-prose space-y-6 my-8">
          {/* ETF 1 */}
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-bold text-xl">1. GPUS11</h4>
                <p className="text-sm text-muted-foreground">Investo - S&P 500 (Estrutura USITS)</p>
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Ações EUA
              </span>
            </div>
            <p className="text-sm mb-3">
              Replica o S&P 500 com estrutura USITS (Irlanda), pagando apenas 15% de imposto sobre dividendos 
              americanos (vs 30% da estrutura tradicional). Economia de 0,5% a.a. no longo prazo.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Taxa de Administração</p>
                <p className="font-medium">0,17% a.a.</p>
              </div>
              <div>
                <p className="text-muted-foreground">Dividend Yield</p>
                <p className="font-medium">1,5% a.a.</p>
              </div>
            </div>
          </div>

          {/* ETF 2 */}
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-bold text-xl">2. BOVA11</h4>
                <p className="text-sm text-muted-foreground">iShares - Ibovespa</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Ações Brasil
              </span>
            </div>
            <p className="text-sm mb-3">
              Replica o Ibovespa (principais empresas brasileiras). Essencial para exposição local e dividendos em reais.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Taxa de Administração</p>
                <p className="font-medium">0,10% a.a.</p>
              </div>
              <div>
                <p className="text-muted-foreground">Dividend Yield</p>
                <p className="font-medium">3,0% a.a.</p>
              </div>
            </div>
          </div>

          {/* ETF 3 */}
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-bold text-xl">3. WRLD11</h4>
                <p className="text-sm text-muted-foreground">Investo - MSCI World</p>
              </div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Ações Globais
              </span>
            </div>
            <p className="text-sm mb-3">
              Exposição a mais de 9.500 empresas em cerca de 50 países. Diversificação global máxima em um único ETF.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Taxa de Administração</p>
                <p className="font-medium">0,20% a.a.</p>
              </div>
              <div>
                <p className="text-muted-foreground">Composição</p>
                <p className="font-medium">60% EUA, 40% Outros</p>
              </div>
            </div>
          </div>

          {/* ETF 4 */}
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-bold text-xl">4. LFTB11</h4>
                <p className="text-sm text-muted-foreground">Investo - Tesouro Selic + IPCA+</p>
              </div>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                Renda Fixa
              </span>
            </div>
            <p className="text-sm mb-3">
              Tesouro Selic (92%) + NTN-B 2060 (8%). Garante IR fixo de 15% (vs 25% do LFTS11 puro). 
              Ideal para reserva de emergência e parte conservadora da carteira.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Taxa de Administração</p>
                <p className="font-medium">0,15% a.a.</p>
              </div>
              <div>
                <p className="text-muted-foreground">Tributação</p>
                <p className="font-medium">IR fixo 15%</p>
              </div>
            </div>
          </div>

          {/* ETF 5 */}
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-bold text-xl">5. CHIP11</h4>
                <p className="text-sm text-muted-foreground">Investo - Semicondutores</p>
              </div>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Temático
              </span>
            </div>
            <p className="text-sm mb-3">
              Exposição à tese de Inteligência Artificial e semicondutores. Use como alocação pequena (5-10%) 
              para adicionar convicção estratégica.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Taxa de Administração</p>
                <p className="font-medium">0,40% a.a.</p>
              </div>
              <div>
                <p className="text-muted-foreground">Volatilidade</p>
                <p className="font-medium">Alta</p>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose bg-primary/5 border-l-4 border-primary p-6 my-8">
          <p className="font-medium">
            <strong>Conclusão do Módulo 3:</strong> Você agora tem o <strong>Método Bosio</strong> completo: 
            conhece seu perfil de risco, entende a Regra 5-3-2, sabe como rebalancear e tem a lista dos 5 ETFs 
            essenciais. No próximo módulo, vamos aprender sobre tributação e otimização fiscal!
          </p>
        </div>
      </div>
    </CourseLayout>
  );
}
