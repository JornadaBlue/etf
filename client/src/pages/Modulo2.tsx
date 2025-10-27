import CourseLayout from "@/components/CourseLayout";

export default function Modulo2() {
  return (
    <CourseLayout currentModule={2}>
      <div className="prose prose-lg max-w-none">
        <h1>Módulo 2: O Mapa da Rota</h1>
        <p className="lead text-xl text-muted-foreground">
          Tipos, Índices e Seleção de ETFs
        </p>

        <div className="not-prose bg-accent/20 border-l-4 border-primary p-6 my-8">
          <p className="text-lg font-medium">
            <strong>Foco do Módulo:</strong> Ensinar o investidor a navegar no universo de ETFs disponíveis, 
            entendendo os diferentes tipos e como selecionar os melhores para sua carteira.
          </p>
        </div>

        <hr className="my-12" />

        {/* Aula 1 */}
        <h2 id="aula-1">Aula 1: ETFs de Ações vs. Renda Fixa</h2>
        <p className="lead">O Alicerce da Diversificação</p>

        <p>
          Agora que você entende a filosofia do ETF, é hora de aprender a <strong>escolher os ETFs certos</strong> para 
          construir sua carteira. A primeira decisão é fundamental: <strong>Ações ou Renda Fixa?</strong>
        </p>

        <p>
          Essa não é uma pergunta de "qual é melhor", mas sim de <strong>alocação estratégica</strong>. Uma carteira 
          bem construída combina ambos, em proporções que dependem do seu perfil de risco e horizonte de investimento.
        </p>

        <h3>O Papel de Cada Classe de Ativo</h3>

        <h4>ETFs de Ações: O Motor do Crescimento</h4>

        <p>
          Os ETFs de ações replicam índices como o S&P 500, Ibovespa ou MSCI World. Eles representam a propriedade de 
          empresas e, historicamente, oferecem os maiores retornos no longo prazo.
        </p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <h5 className="font-semibold text-lg mb-4">Características dos ETFs de Ações:</h5>
          <ul className="space-y-2">
            <li><strong>Retorno Esperado:</strong> 8-12% ao ano (historicamente)</li>
            <li><strong>Volatilidade:</strong> Alta. O preço oscila bastante no curto prazo</li>
            <li><strong>Dividendos:</strong> Muitos ETFs de ações distribuem dividendos, gerando renda passiva</li>
            <li><strong>Horizonte Ideal:</strong> 10+ anos</li>
          </ul>
          
          <h6 className="font-semibold mt-4 mb-2">Exemplos de ETFs de Ações:</h6>
          <ul className="space-y-1">
            <li><strong>IVVB11</strong> (iShares S&P 500): Replica o S&P 500 (500 maiores empresas dos EUA)</li>
            <li><strong>BOVA11</strong> (iShares Ibovespa): Replica o Ibovespa (principais empresas brasileiras)</li>
          </ul>
        </div>

        <h4>ETFs de Renda Fixa: O Amortecedor de Volatilidade</h4>

        <p>
          Os ETFs de renda fixa replicam índices de títulos de dívida, como títulos do governo ou corporativos. Eles 
          oferecem retornos mais previsíveis e menores oscilações de preço.
        </p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <h5 className="font-semibold text-lg mb-4">Características dos ETFs de Renda Fixa:</h5>
          <ul className="space-y-2">
            <li><strong>Retorno Esperado:</strong> 4-8% ao ano (dependendo da duração e risco de crédito)</li>
            <li><strong>Volatilidade:</strong> Baixa. O preço é mais estável</li>
            <li><strong>Fluxo de Renda:</strong> Geram juros regularmente</li>
            <li><strong>Horizonte Ideal:</strong> Qualquer horizonte, mas especialmente útil para reduzir risco</li>
          </ul>
          
          <h6 className="font-semibold mt-4 mb-2">Exemplos de ETFs de Renda Fixa:</h6>
          <ul className="space-y-1">
            <li><strong>LFTS11</strong> (Investo): 100% Tesouro Selic (LFT) - Cota estável</li>
            <li><strong>LFTB11</strong> (Investo): Tesouro Selic (92%) + NTN-B 2060 (8%) - IR fixo de 15%</li>
          </ul>
        </div>

        <h3>A Relação Risco-Retorno</h3>

        <p>
          A regra fundamental da alocação é: <strong>quanto maior o risco que você está disposto a correr, maior o 
          retorno esperado</strong>.
        </p>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="border p-3 text-left">Alocação</th>
                <th className="border p-3 text-left">Ações</th>
                <th className="border p-3 text-left">Renda Fixa</th>
                <th className="border p-3 text-left">Perfil de Risco</th>
                <th className="border p-3 text-left">Retorno Esperado</th>
                <th className="border p-3 text-left">Volatilidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Conservadora</td>
                <td className="border p-3">30%</td>
                <td className="border p-3">70%</td>
                <td className="border p-3">Baixo</td>
                <td className="border p-3">5-6% a.a.</td>
                <td className="border p-3">Baixa</td>
              </tr>
              <tr className="bg-accent/5">
                <td className="border p-3 font-semibold">Moderada</td>
                <td className="border p-3">60%</td>
                <td className="border p-3">40%</td>
                <td className="border p-3">Médio</td>
                <td className="border p-3">7-8% a.a.</td>
                <td className="border p-3">Média</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Agressiva</td>
                <td className="border p-3">80-100%</td>
                <td className="border p-3">0-20%</td>
                <td className="border p-3">Alto</td>
                <td className="border p-3">9-12% a.a.</td>
                <td className="border p-3">Alta</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose bg-primary/5 border-l-4 border-primary p-6 my-8">
          <p className="font-medium">
            <strong>Conclusão da Aula 1:</strong> Agora você entende que a diversificação entre ações e renda fixa 
            é a <strong>base da construção de uma carteira resiliente</strong>. Na próxima aula, vamos explorar os 
            diferentes tipos de índices que os ETFs replicam.
          </p>
        </div>

        <hr className="my-12" />

        {/* Aula 2 */}
        <h2 id="aula-2">Aula 2: Globalização Simples</h2>
        <p className="lead">Mercados Internacionais sem Complicação</p>

        <p>
          Um dos maiores mitos do investidor brasileiro é que investir no exterior é complicado e arriscado. A verdade 
          é que os ETFs tornaram isso <strong>extraordinariamente simples</strong>.
        </p>

        <h3>Por Que Investir Globalmente?</h3>

        <p>
          A economia mundial é interconectada. As maiores empresas do mundo (Apple, Microsoft, Amazon) não estão apenas 
          nos EUA; elas têm operações em todos os continentes. Ao investir globalmente, você está:
        </p>

        <div className="not-prose my-6">
          <ol className="space-y-3 list-decimal list-inside">
            <li className="text-lg"><strong>Reduzindo Risco Geográfico:</strong> Não depende apenas da economia brasileira</li>
            <li className="text-lg"><strong>Acessando Crescimento Global:</strong> Participa do crescimento de mercados emergentes e desenvolvidos</li>
            <li className="text-lg"><strong>Diversificando Moedas:</strong> Protege seu patrimônio contra desvalorizações do real</li>
          </ol>
        </div>

        <h3>Os Principais Índices Globais</h3>

        <h4>S&P 500 (EUA)</h4>

        <p>
          O índice das 500 maiores empresas dos EUA. É o mais popular entre investidores brasileiros.
        </p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <ul className="space-y-2">
            <li><strong>ETF Brasileiro que Replica:</strong> IVVB11, GPUS11 (Investo - estrutura USITS com menos imposto sobre dividendos)</li>
            <li><strong>Retorno Histórico:</strong> ~10% a.a. (desde 1950)</li>
            <li><strong>Composição:</strong> Apple, Microsoft, Amazon, Google, Tesla, etc.</li>
          </ul>
        </div>

        <h4>MSCI World (Mundo)</h4>

        <p>
          Um índice que inclui ações de 23 países desenvolvidos, com ponderação por capitalização de mercado.
        </p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <ul className="space-y-2">
            <li><strong>ETF Brasileiro que Replica:</strong> WRLD11 (Investo - exposição a mais de 9.500 empresas em ~50 países)</li>
            <li><strong>Retorno Histórico:</strong> ~9% a.a.</li>
            <li><strong>Composição:</strong> 60% EUA, 20% Europa, 20% Ásia-Pacífico</li>
          </ul>
        </div>

        <h3>A Estratégia de Globalização Simples</h3>

        <p>
          A maioria dos investidores brasileiros não precisa de complexidade. Uma abordagem simples e eficaz é:
        </p>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="border p-3 text-left">Alocação</th>
                <th className="border p-3 text-left">Foco</th>
                <th className="border p-3 text-left">ETF Recomendado</th>
                <th className="border p-3 text-left">Proporção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Brasil</td>
                <td className="border p-3">Ações Brasileiras</td>
                <td className="border p-3">BOVA11 (Ibovespa)</td>
                <td className="border p-3">30%</td>
              </tr>
              <tr className="bg-accent/5">
                <td className="border p-3 font-semibold">EUA</td>
                <td className="border p-3">Ações Americanas</td>
                <td className="border p-3">GPUS11 (S&P 500)</td>
                <td className="border p-3">50%</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Mundo</td>
                <td className="border p-3">Diversificação Global</td>
                <td className="border p-3">WRLD11 (MSCI World)</td>
                <td className="border p-3">20%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Essa alocação oferece:</p>
        <ul>
          <li><strong>Exposição ao Brasil:</strong> Aproveita oportunidades locais</li>
          <li><strong>Exposição aos EUA:</strong> Acessa o maior mercado de ações do mundo</li>
          <li><strong>Exposição Global:</strong> Reduz risco geográfico</li>
        </ul>

        <div className="not-prose bg-primary/5 border-l-4 border-primary p-6 my-8">
          <p className="font-medium">
            <strong>Conclusão da Aula 2:</strong> Globalizar seu portfólio não é complicado. Com 2-3 ETFs, você tem 
            uma carteira diversificada internacionalmente. Na próxima aula, vamos explorar ETFs temáticos e como 
            usá-los estrategicamente.
          </p>
        </div>

        <hr className="my-12" />

        {/* Aula 3 */}
        <h2 id="aula-3">Aula 3: ETFs Temáticos</h2>
        <p className="lead">Investindo em Tendências do Futuro</p>

        <p>
          Além dos ETFs tradicionais que replicam índices amplos, existem <strong>ETFs temáticos</strong> que focam 
          em setores ou tendências específicas. Eles são ferramentas poderosas para quem quer adicionar uma camada de{" "}
          <strong>convicção estratégica</strong> à sua carteira.
        </p>

        <h3>O Que São ETFs Temáticos?</h3>

        <p>
          Um ETF temático é um fundo que agrupa empresas de um setor ou tendência específica. Em vez de comprar o 
          mercado inteiro, você está apostando em um tema que acredita ser o futuro.
        </p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <h5 className="font-semibold text-lg mb-4">Exemplos de Temas Populares:</h5>
          <ul className="space-y-2">
            <li><strong>Tecnologia:</strong> Empresas de software, cloud computing, IA</li>
            <li><strong>Energia Renovável:</strong> Empresas de energia solar, eólica, baterias</li>
            <li><strong>Saúde e Biotecnologia:</strong> Farmacêuticas, empresas de genômica, telemedicina</li>
            <li><strong>E-commerce e Varejo Digital:</strong> Empresas de comércio eletrônico</li>
            <li><strong>Infraestrutura:</strong> Empresas de construção, transportes, logística</li>
            <li><strong>Semicondutores:</strong> CHIP11 (Investo) - Exposição à tese de IA e semicondutores</li>
          </ul>
        </div>

        <h3>ETFs Temáticos Disponíveis no Brasil</h3>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="border p-3 text-left">Tema</th>
                <th className="border p-3 text-left">Ticker</th>
                <th className="border p-3 text-left">Foco</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Tecnologia</td>
                <td className="border p-3">XGLD</td>
                <td className="border p-3">Empresas de tecnologia global</td>
              </tr>
              <tr className="bg-accent/5">
                <td className="border p-3 font-semibold">Semicondutores</td>
                <td className="border p-3">CHIP11</td>
                <td className="border p-3">IA e semicondutores (Investo)</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Energia Limpa</td>
                <td className="border p-3">XENE</td>
                <td className="border p-3">Energia renovável e sustentabilidade</td>
              </tr>
              <tr className="bg-accent/5">
                <td className="border p-3 font-semibold">Saúde</td>
                <td className="border p-3">XHEA</td>
                <td className="border p-3">Farmacêuticas e saúde</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Infraestrutura</td>
                <td className="border p-3">XFRA</td>
                <td className="border p-3">Infraestrutura global</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Como Usar ETFs Temáticos Estrategicamente</h3>

        <p>
          <strong>Abordagem Conservadora:</strong> Use ETFs temáticos como <strong>alocação pequena</strong> (5-10% da 
          carteira) para adicionar convicção, mantendo a maioria em ETFs amplos.
        </p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <h5 className="font-semibold text-lg mb-4">Exemplo de Carteira Conservadora com Temáticos:</h5>
          <ul className="space-y-2">
            <li>50% GPUS11 (S&P 500)</li>
            <li>30% BOVA11 (Ibovespa)</li>
            <li>15% LFTB11 (Renda Fixa)</li>
            <li>5% CHIP11 (Semicondutores/IA)</li>
          </ul>
        </div>

        <p>
          <strong>Abordagem Agressiva:</strong> Se você tem forte convicção em uma tendência, pode alocar até 20-30% 
          em temáticos.
        </p>

        <h3>O Risco dos Temáticos</h3>

        <p>
          Os ETFs temáticos são mais voláteis que os amplos, pois concentram em setores específicos. Se o tema não se 
          concretizar, você pode ter perdas significativas.
        </p>

        <blockquote className="border-l-4 border-primary pl-6 italic my-8">
          <strong>Regra de Ouro:</strong> Nunca coloque todo seu dinheiro em um único tema. Use temáticos para{" "}
          <strong>complementar</strong>, não para <strong>substituir</strong> sua alocação base.
        </blockquote>

        <div className="not-prose bg-primary/5 border-l-4 border-primary p-6 my-8">
          <p className="font-medium">
            <strong>Conclusão da Aula 3:</strong> ETFs temáticos são ferramentas poderosas para quem quer adicionar 
            convicção estratégica à sua carteira. Mas lembre-se: a maioria do seu portfólio deve estar em ETFs amplos 
            e diversificados.
          </p>
        </div>

        <hr className="my-12" />

        {/* Aula 4 */}
        <h2 id="aula-4">Aula 4: Como Ler um Fundo de Índice</h2>
        <p className="lead">Decodificando as Informações</p>

        <p>
          Agora que você conhece os tipos de ETFs, é hora de aprender a <strong>ler e entender as informações</strong>{" "}
          de um ETF antes de investir. Isso garante que você está fazendo uma escolha informada.
        </p>

        <h3>As Informações Essenciais de um ETF</h3>

        <p>
          Quando você acessa a página de um ETF (em sites como B3, Infomoney ou XP), você encontra várias informações. 
          As mais importantes são:
        </p>

        <h4>1. Expense Ratio (Taxa de Administração)</h4>

        <p>A porcentagem anual que o fundo cobra para administrar seu dinheiro.</p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <h5 className="font-semibold mb-3">Exemplos:</h5>
          <ul className="space-y-2">
            <li>IVVB11: 0,16% a.a.</li>
            <li>BOVA11: 0,10% a.a.</li>
            <li>HODL11 (Bitcoin - Investo): 0% (ou 0,2% a partir de agosto)</li>
            <li>XENE: 0,60% a.a.</li>
          </ul>
          <p className="mt-4 font-medium text-primary">
            <strong>Regra:</strong> Quanto menor, melhor. Procure ETFs com taxa abaixo de 0,5% para ações e abaixo de 
            0,3% para renda fixa.
          </p>
        </div>

        <h4>2. Patrimônio Líquido (AUM - Assets Under Management)</h4>

        <p>O total de dinheiro investido no fundo. Um AUM maior significa:</p>
        <ul>
          <li>Melhor liquidez (mais fácil comprar e vender)</li>
          <li>Menor custo por cota (economia de escala)</li>
        </ul>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <h5 className="font-semibold mb-3">Exemplos:</h5>
          <ul className="space-y-2">
            <li>IVVB11: R$ 5 bilhões (grande, muito líquido)</li>
            <li>ETF pequeno: R$ 100 milhões (menor liquidez)</li>
          </ul>
          <p className="mt-4 font-medium text-primary">
            <strong>Regra:</strong> Prefira ETFs com AUM acima de R$ 500 milhões.
          </p>
        </div>

        <h4>3. Índice de Referência (Benchmark)</h4>

        <p>Qual índice o ETF replica. Isso determina exatamente o que você está comprando.</p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <h5 className="font-semibold mb-3">Exemplos:</h5>
          <ul className="space-y-2">
            <li>IVVB11 replica o S&P 500</li>
            <li>BOVA11 replica o Ibovespa</li>
            <li>GPUS11 replica o S&P 500 (estrutura USITS)</li>
          </ul>
        </div>

        <h4>4. Composição da Carteira</h4>

        <p>Quais são os ativos dentro do fundo. Você pode ver os 10 maiores posições.</p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <h5 className="font-semibold mb-3">Exemplo (IVVB11):</h5>
          <ul className="space-y-1">
            <li>7% Apple</li>
            <li>6% Microsoft</li>
            <li>5% Amazon</li>
            <li>4% Nvidia</li>
            <li>etc.</li>
          </ul>
        </div>

        <h4>5. Dividend Yield (Rentabilidade de Dividendos)</h4>

        <p>A porcentagem anual que o fundo distribui em dividendos.</p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <h5 className="font-semibold mb-3">Exemplos:</h5>
          <ul className="space-y-2">
            <li>IVVB11: 1,5% a.a. (você recebe 1,5% do valor investido em dividendos)</li>
            <li>BOVA11: 3,0% a.a.</li>
            <li>BEST11 (Investo - Dividendos Brasil): Paga dividendos de empresas sólidas</li>
            <li>UTIL11 (Investo - Utilities): Paga dividendos mensalmente</li>
          </ul>
        </div>

        <h4>6. Variação de Preço (Performance)</h4>

        <p>Como o ETF performou em diferentes períodos.</p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <h5 className="font-semibold mb-3">Exemplo:</h5>
          <ul className="space-y-2">
            <li>Últimos 12 meses: +15%</li>
            <li>Últimos 5 anos: +45%</li>
            <li>Desde a criação: +200%</li>
          </ul>
          <p className="mt-4 font-medium text-destructive">
            <strong>Importante:</strong> Performance passada não garante resultados futuros, mas mostra a consistência 
            do fundo.
          </p>
        </div>

        <h3>Comparando Dois ETFs</h3>

        <p>
          Vamos usar um exemplo prático. Suponha que você quer investir em ações americanas e está entre IVVB11 e 
          GPUS11 (ambos replicam o S&P 500):
        </p>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="border p-3 text-left">Métrica</th>
                <th className="border p-3 text-left">IVVB11</th>
                <th className="border p-3 text-left">GPUS11 (Investo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Expense Ratio</td>
                <td className="border p-3">0,16%</td>
                <td className="border p-3">0,17%</td>
              </tr>
              <tr className="bg-accent/5">
                <td className="border p-3 font-semibold">AUM</td>
                <td className="border p-3">R$ 5 bilhões</td>
                <td className="border p-3">R$ 2 bilhões</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Dividend Yield</td>
                <td className="border p-3">1,5%</td>
                <td className="border p-3">1,5%</td>
              </tr>
              <tr className="bg-accent/5">
                <td className="border p-3 font-semibold">Benchmark</td>
                <td className="border p-3">S&P 500</td>
                <td className="border p-3">S&P 500</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Diferencial</td>
                <td className="border p-3">-</td>
                <td className="border p-3">Estrutura USITS: 15% de imposto sobre dividendos (vs 30%)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Conclusão:</strong> GPUS11 é ligeiramente melhor para quem busca eficiência tributária em dividendos 
          internacionais, economizando 0,5% a.a. no longo prazo. Ambos são excelentes escolhas.
        </p>

        <div className="not-prose bg-primary/5 border-l-4 border-primary p-6 my-8">
          <p className="font-medium">
            <strong>Conclusão do Módulo 2:</strong> Você agora sabe como navegar no universo de ETFs, entender as 
            diferenças entre ações e renda fixa, globalizar sua carteira, usar temáticos estrategicamente e ler as 
            informações essenciais de um fundo. No próximo módulo, vamos aprender o <strong>Método Bosio</strong> de 
            alocação estratégica!
          </p>
        </div>
      </div>
    </CourseLayout>
  );
}

