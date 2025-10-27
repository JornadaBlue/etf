import CourseLayout from "@/components/CourseLayout";

export default function Modulo1() {
  return (
    <CourseLayout currentModule={1}>
      <article className="prose prose-lg max-w-none">
        <h1>Módulo 1: O Fim da Ansiedade Financeira (A Mentalidade ETF)</h1>
        
        <p className="lead text-muted-foreground">
          Quebrar mitos, apresentar a filosofia de gestão passiva e o porquê do ETF ser superior para o investidor pessoa física.
        </p>

        <hr />

        <h2>Aula 1: O Mito do Gestor Ativo</h2>

        <h3>Introdução: A Verdade Inconveniente do Mercado</h3>

        <p>
          Seja bem-vindo à primeira aula do curso "A Rota da Paz Financeira". Meu nome é Jhony Bosio, e nesta aula, vamos confrontar a maior ilusão do mercado financeiro: a crença de que é possível, consistentemente, <strong>superar o mercado</strong> através da escolha de ações ou fundos por gestores ativos.
        </p>

        <p>
          O investidor comum é bombardeado com promessas de "fundos exclusivos" e "gestores estrelas" que vão entregar retornos acima da média. No entanto, a <strong>estatística fria</strong> mostra uma verdade inconveniente: a maioria esmagadora desses profissionais falha em bater o índice de referência no longo prazo.
        </p>

        <h3>A Estatística Implacável: Por Que 92% Falham?</h3>

        <p>
          O conceito de que a gestão passiva é superior à ativa não é uma opinião, mas um fato comprovado por décadas de pesquisa. O investidor que busca fundos de gestão ativa está, na maioria das vezes, pagando mais caro para ter um desempenho inferior.
        </p>

        <p>
          No Brasil, os dados são ainda mais chocantes. Estudos mostram que <strong>92% dos fundos de ações de gestão ativa</strong> não conseguem superar o seu <em>benchmark</em> (o índice de referência, como o Ibovespa ou o S&P 500) ao longo de 10 anos. Nos Estados Unidos, a situação é similar, com cerca de 93% dos fundos ativos perdendo para o índice S&P 500 no mesmo período.
        </p>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Período</th>
                <th className="text-left p-3">% de Fundos Ativos que Perderam para o Índice (Brasil)</th>
                <th className="text-left p-3">% de Fundos Ativos que Perderam para o Índice (EUA)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">1 Ano</td>
                <td className="p-3">~50%</td>
                <td className="p-3">~60%</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">5 Anos</td>
                <td className="p-3">~80%</td>
                <td className="p-3">~85%</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-bold">10 Anos</td>
                <td className="p-3 font-bold">~92%</td>
                <td className="p-3 font-bold">~93%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O ETF se baseia exatamente nessa falha. Se a maioria dos gestores ativos não consegue superar o mercado, a estratégia mais inteligente e racional é simplesmente <strong>comprar o mercado inteiro</strong> de forma barata.
        </p>

        <h3>O Custo Invisível da Gestão Ativa</h3>

        <p>Por que os gestores ativos falham? Não é por falta de inteligência ou esforço, mas sim por dois fatores principais:</p>

        <ol>
          <li>
            <strong>O Custo:</strong> Fundos ativos cobram taxas de administração muito mais altas (geralmente acima de 2% ao ano) e, muitas vezes, taxas de performance (o famoso "2 e 20"). Esse custo elevado é um peso morto que o gestor precisa superar antes mesmo de começar a gerar lucro para o cotista.
          </li>
          <li>
            <strong>A Dificuldade de Vencer o Índice:</strong> O índice de referência (o <em>benchmark</em>) é composto pelas melhores empresas. Para um gestor ativo vencer esse índice, ele precisa não apenas escolher as empresas certas, mas também acertar o <em>timing</em> de compra e venda, o que é extremamente difícil de fazer de forma consistente.
          </li>
        </ol>

        <h3>A Filosofia dos Gigantes: Bogle e Buffett</h3>

        <p>Essa filosofia de abraçar a gestão passiva é defendida pelas maiores lendas do investimento:</p>

        <ul>
          <li>
            <strong>John Bogle (Fundador da Vanguard):</strong> Bogle, o criador do primeiro fundo de índice para investidores individuais, argumentava que o custo é o maior inimigo do investidor. Ele defendia a compra de fundos de índice (ETFs) como a única forma de garantir que o retorno do mercado ficasse com o investidor, e não com o gestor.
          </li>
          <li>
            <strong>Warren Buffett:</strong> O Oráculo de Omaha, em diversas cartas aos acionistas, recomendou que investidores comuns simplesmente aloquem a maior parte de seu dinheiro em um fundo de índice de baixo custo que siga o S&P 500.
          </li>
        </ul>

        <blockquote>
          <p>
            <strong>Citação de Warren Buffett:</strong><br />
            "O principal objetivo do investidor deve ser obter um retorno satisfatório, e não especular em busca de retornos fantásticos. Um método simples e de baixo custo é comprar um fundo de índice S&P 500. O investidor deve simplesmente manter o curso, sem se preocupar com as manchetes ou os movimentos do mercado."
          </p>
        </blockquote>

        <h3>Conclusão da Aula 1</h3>

        <p>
          Nesta aula, desvendamos o mito do gestor ativo e entendemos a base estatística e filosófica que sustenta a estratégia de investimento em ETFs: <strong>a simplicidade vence a complexidade</strong>.
        </p>

        <p>
          Na próxima aula, vamos aprofundar no que é um ETF, o que ele representa e, mais importante, o que ele <em>não é</em>, para que você possa começar a construir sua <strong>Rota da Paz Financeira</strong> com total clareza.
        </p>

        <hr />

        <h2>Aula 2: O que é um ETF (e o que ele não é)</h2>

        <p>
          Na Aula 1, entendemos que a estratégia mais racional é não tentar vencer o mercado, mas sim <strong>comprar o mercado</strong>. É aqui que entra o <strong>ETF</strong>, ou <em>Exchange Traded Fund</em> (Fundo Negociado em Bolsa), a ferramenta mais eficiente para fazer isso.
        </p>

        <p>
          O ETF é frequentemente chamado de <strong>cesta de ativos</strong>. E essa analogia é perfeita: em vez de comprar uma única maçã (uma ação), você compra uma cota de uma cesta que já contém dezenas ou centenas de maçãs, laranjas, bananas e outras frutas (diferentes ativos).
        </p>

        <h3>O ETF como Veículo, Instrumento e Filosofia</h3>

        <p>Para entender o ETF, precisamos vê-lo sob três perspectivas:</p>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Perspectiva</th>
                <th className="text-left p-3">Definição</th>
                <th className="text-left p-3">Implicação para o Investidor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">Veículo/Estrutura</td>
                <td className="p-3">É um fundo de investimento listado e negociado em bolsa como se fosse uma ação.</td>
                <td className="p-3">Permite diversificação instantânea com uma única transação e oferece alta liquidez.</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Instrumento/Função</td>
                <td className="p-3">É uma ferramenta de alocação de ativos que permite acessar mercados inteiros de forma simples.</td>
                <td className="p-3">Simplifica a construção de um portfólio global e diversificado.</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Filosofia</td>
                <td className="p-3">Adota a gestão passiva, buscando apenas replicar o desempenho de um índice de referência.</td>
                <td className="p-3">Garante que o investidor terá o retorno do mercado, sem o risco de o gestor errar.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>A Diferença Crucial: ETF vs. Fundo de Ações Tradicional</h3>

        <p>
          O maior erro é confundir um ETF com um fundo de ações tradicional (de gestão ativa). Embora ambos sejam "fundos", a filosofia e a estrutura de custos são radicalmente diferentes.
        </p>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Característica</th>
                <th className="text-left p-3">ETF (Gestão Passiva)</th>
                <th className="text-left p-3">Fundo de Ações Tradicional (Gestão Ativa)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">Objetivo</td>
                <td className="p-3">Replicar um índice (ex: S&P 500)</td>
                <td className="p-3">Superar o índice através da seleção de ativos</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Negociação</td>
                <td className="p-3">Em Bolsa (B3), como uma ação. Preço varia ao longo do dia.</td>
                <td className="p-3">Via cotas, uma vez por dia (D+x)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Custo (Taxa de Adm.)</td>
                <td className="p-3">Extremamente baixo (ex: 0,05% a 0,5% ao ano)</td>
                <td className="p-3">Alto (ex: 1,5% a 3,0% ao ano) + Taxa de Performance</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Transparência</td>
                <td className="p-3">Total. O investidor sabe exatamente o que o fundo tem.</td>
                <td className="p-3">Baixa. A carteira é revelada com atraso.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote>
          <p>
            <strong>O Mito do ETF de Preguiçoso:</strong><br />
            O investidor ativo, que passa horas analisando balanços e notícias, costuma chamar o ETF de "investimento de preguiçoso". No entanto, a preguiça aqui é <strong>inteligente</strong>. É o reconhecimento de que, estatisticamente, o esforço da gestão ativa não compensa o custo e o risco de ficar para trás.
          </p>
        </blockquote>

        <h3>Conclusão da Aula 2</h3>

        <p>
          O ETF é a ferramenta que transforma a complexidade do mercado em <strong>simplicidade eficiente</strong>. Ele permite que você invista como os grandes, sem precisar ser um.
        </p>

        <hr />

        <h2>Aula 3: Paz de Espírito e Tempo de Vida</h2>

        <p>
          O título do nosso curso é <strong>"A Rota da Paz Financeira"</strong> por um motivo. O maior benefício do ETF não é o retorno financeiro (que já é estatisticamente superior), mas sim o <strong>benefício emocional</strong> e a <strong>liberdade de tempo</strong> que ele proporciona.
        </p>

        <p>
          Se você já passou noites em claro preocupado com a queda de uma ação, ou gastou horas lendo balanços e notícias, você entende o custo da <strong>ansiedade financeira</strong>. O ETF é o antídoto contra essa ansiedade.
        </p>

        <h3>O ETF Elimina o Stock Picking e o Market Timing</h3>

        <p>Os dois maiores geradores de ansiedade e erros para o investidor pessoa física são:</p>

        <ol>
          <li><strong>Stock Picking (Escolha de Ações):</strong> A tentativa de escolher a próxima "ação da vez" ou a empresa que vai performar melhor.</li>
          <li><strong>Market Timing (Acertar o Momento):</strong> A tentativa de adivinhar o momento certo de entrar e sair do mercado.</li>
        </ol>

        <p>O ETF elimina a necessidade de fazer ambos.</p>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Estratégia</th>
                <th className="text-left p-3">O que o ETF faz</th>
                <th className="text-left p-3">Benefício Emocional</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">Stock Picking</td>
                <td className="p-3">Compra o índice inteiro. Se uma empresa do índice falhar, o impacto na sua carteira é mínimo.</td>
                <td className="p-3"><strong>Fim da Preocupação:</strong> Você não precisa mais acompanhar balanços ou notícias de empresas individuais.</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Market Timing</td>
                <td className="p-3">Incentiva o investimento de longo prazo e o aporte constante, sem a necessidade de tentar prever picos e vales.</td>
                <td className="p-3"><strong>Fim da Angústia:</strong> Você investe de forma sistemática, sabendo que no longo prazo o mercado tende a subir.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>O Custo da Ansiedade e o Valor do Seu Tempo</h3>

        <p>Pense em quanto vale o seu tempo. Se você gasta 10 horas por semana analisando o mercado, e essa análise te leva a um retorno inferior ao de um ETF que você compraria em 5 minutos, você está pagando um preço altíssimo:</p>

        <ol>
          <li><strong>Preço Financeiro:</strong> Retorno menor devido ao erro humano ou ao alto custo da gestão ativa.</li>
          <li><strong>Preço de Oportunidade:</strong> As 10 horas que você poderia estar dedicando à sua família, ao seu trabalho principal ou a um hobby.</li>
          <li><strong>Preço Emocional:</strong> O estresse e a ansiedade gerados pela tentativa de "vencer o jogo".</li>
        </ol>

        <p>O ETF, por ser um instrumento de gestão passiva, devolve o seu tempo e a sua paz.</p>

        <blockquote>
          <p>
            <strong>A Escolha de John Bogle:</strong><br />
            John Bogle, o pai dos fundos de índice, dizia que o investidor deveria ter uma vida, e não apenas uma carteira. A filosofia do ETF é a de que a sua energia deve ser gasta em coisas que você pode controlar (sua carreira, sua saúde, seus relacionamentos), e não em tentar controlar o mercado.
          </p>
        </blockquote>

        <h3>Conclusão da Aula 3</h3>

        <p>
          A <strong>Paz de Espírito</strong> é o principal dividendo que o ETF paga. Ele permite que você adote a mentalidade de longo prazo, elimine o ruído do mercado e foque no que realmente importa.
        </p>

        <hr />

        <h2>Aula 4: O Poder dos Juros Compostos e o Custo</h2>

        <p>
          Albert Einstein teria dito que os <strong>juros compostos</strong> são a oitava maravilha do mundo. No investimento, eles são o motor da sua riqueza de longo prazo. No entanto, os juros compostos têm um inimigo silencioso e implacável: <strong>o custo</strong>.
        </p>

        <p>
          Nesta aula, vamos quantificar como o baixo custo dos ETFs é o catalisador que potencializa a mágica dos juros compostos, garantindo que a maior parte do seu retorno fique no <strong>seu bolso</strong> e não no do gestor.
        </p>

        <h3>A Geração de Valor: Devolvendo o Lucro para Você</h3>

        <p>
          A principal crítica de John Bogle aos fundos de gestão ativa era que eles, através de taxas elevadas, ficavam com uma fatia desproporcional do retorno do investidor.
        </p>

        <p>Imagine que um fundo ativo e um ETF tenham o mesmo retorno bruto de 10% em um ano.</p>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Fundo</th>
                <th className="text-left p-3">Taxa de Administração</th>
                <th className="text-left p-3">Taxa de Performance</th>
                <th className="text-left p-3">Custo Total</th>
                <th className="text-left p-3">Retorno Líquido</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">Fundo Ativo</td>
                <td className="p-3">2,0%</td>
                <td className="p-3">0,5%</td>
                <td className="p-3 font-bold">2,5%</td>
                <td className="p-3">7,5%</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">ETF</td>
                <td className="p-3">0,1%</td>
                <td className="p-3">0,0%</td>
                <td className="p-3 font-bold">0,1%</td>
                <td className="p-3 font-bold">9,9%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A diferença de 2,4% no retorno líquido pode parecer pequena em um ano, mas o poder dos juros compostos transforma essa diferença em uma montanha de dinheiro ao longo de décadas.
        </p>

        <h3>O Impacto do Custo no Longo Prazo</h3>

        <p>
          Vamos simular o impacto de uma diferença de custo de apenas 2% ao ano (o que é comum entre um fundo ativo e um ETF) em um investimento de R$ 100.000 ao longo de 20 anos, considerando um retorno anual bruto de 10%.
        </p>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Cenário</th>
                <th className="text-left p-3">Retorno Anual Líquido</th>
                <th className="text-left p-3">Valor Acumulado em 20 Anos</th>
                <th className="text-left p-3">Diferença Acumulada</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">ETF (Custo 0,1%)</td>
                <td className="p-3">9,9%</td>
                <td className="p-3 font-bold">R$ 655.617,00</td>
                <td className="p-3">R$ 0,00</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Fundo Ativo (Custo 2,5%)</td>
                <td className="p-3">7,5%</td>
                <td className="p-3">R$ 424.785,00</td>
                <td className="p-3 font-bold text-destructive">-R$ 230.832,00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote>
          <p>
            <strong>Conclusão:</strong> O investidor do Fundo Ativo perdeu mais de <strong>R$ 230 mil</strong> apenas por causa da diferença de custo, mesmo que o retorno bruto tenha sido o mesmo.
          </p>
        </blockquote>

        <p>
          O custo é a única variável que o investidor pode controlar no mercado financeiro. O ETF é a ferramenta que permite maximizar esse controle.
        </p>

        <h3>A Importância de Cada 0,1%</h3>

        <p>
          No mundo dos ETFs, a concorrência é acirrada e as taxas de administração são mínimas. A diferença entre um ETF de 0,1% e um de 0,3% ao ano também tem um impacto significativo.
        </p>

        <p>
          O investidor inteligente busca o ETF com a menor taxa de administração (<em>Expense Ratio</em>), pois sabe que cada 0,1% a menos de custo é 0,1% a mais de retorno garantido no seu bolso.
        </p>

        <h3>Conclusão do Módulo 1: A Mentalidade Vencedora</h3>

        <p>Parabéns! Você concluiu o primeiro módulo e agora possui a <strong>Mentalidade ETF</strong>. Você entende:</p>

        <ol>
          <li>Que a gestão passiva é estatisticamente superior à ativa.</li>
          <li>O que é um ETF e como ele funciona como um veículo eficiente.</li>
          <li>Que o ETF te dá paz de espírito e liberdade de tempo.</li>
          <li>Como o baixo custo do ETF potencializa seus juros compostos.</li>
        </ol>

        <p>
          Você está pronto para a próxima fase: <strong>O Mapa da Rota</strong>, onde vamos aprender a selecionar os ETFs certos para construir sua carteira.
        </p>
      </article>
    </CourseLayout>
  );
}

