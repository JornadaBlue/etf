import CourseLayout from "@/components/CourseLayout";

export default function Modulo4() {
  return (
    <CourseLayout currentModule={4}>
      <div className="prose prose-lg max-w-none">
        <h1>Módulo 4: Otimização e Tributação</h1>
        <p className="lead text-xl text-muted-foreground">
          O Segredo dos Profissionais
        </p>

        <div className="not-prose bg-accent/20 border-l-4 border-primary p-6 my-8">
          <p className="text-lg font-medium">
            <strong>Foco do Módulo:</strong> Entender a tributação de ETFs no Brasil e aprender estratégias de 
            otimização fiscal para maximizar seus retornos líquidos.
          </p>
        </div>

        <hr className="my-12" />

        <h2>Aula 1: O Segredo dos 15%</h2>
        <p className="lead">Tributação de ETFs de Renda Fixa</p>

        <p>
          A tributação é um dos fatores mais importantes (e ignorados) na escolha de investimentos. No caso dos ETFs 
          de renda fixa, existe uma <strong>diferença brutal</strong> que pode economizar 10% de imposto.
        </p>

        <h3>A Diferença Entre LFTS11 e LFTB11</h3>

        <p>
          Ambos são ETFs da Investo que investem em Tesouro Selic, mas a tributação é completamente diferente:
        </p>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="border p-3 text-left">Característica</th>
                <th className="border p-3 text-left">LFTS11</th>
                <th className="border p-3 text-left">LFTB11</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Composição</td>
                <td className="border p-3">100% Tesouro Selic (LFT)</td>
                <td className="border p-3">92% Tesouro Selic + 8% NTN-B 2060</td>
              </tr>
              <tr className="bg-accent/5">
                <td className="border p-3 font-semibold">PMRC (Prazo Médio)</td>
                <td className="border p-3">Curto (menos de 180 dias)</td>
                <td className="border p-3">Longo (acima de 720 dias)</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Alíquota de IR</td>
                <td className="border p-3 text-red-600 font-bold">25%</td>
                <td className="border p-3 text-green-600 font-bold">15%</td>
              </tr>
              <tr className="bg-accent/5">
                <td className="border p-3 font-semibold">Come-Cotas</td>
                <td className="border p-3">Isento</td>
                <td className="border p-3">Isento</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">IOF</td>
                <td className="border p-3">Isento</td>
                <td className="border p-3">Isento</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Exemplo Prático: Quanto Você Economiza?</h3>

        <p>
          Suponha que você invista R$ 100.000 e tenha um ganho de R$ 10.000 (10% de rentabilidade):
        </p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <h5 className="font-semibold text-lg mb-4">Comparação de Imposto:</h5>
          <div className="space-y-4">
            <div>
              <p className="font-medium">LFTS11 (IR 25%):</p>
              <p className="text-2xl font-bold text-red-600">R$ 2.500 de imposto</p>
              <p className="text-sm text-muted-foreground">Você fica com R$ 7.500 líquidos</p>
            </div>
            <div className="pt-4 border-t">
              <p className="font-medium">LFTB11 (IR 15%):</p>
              <p className="text-2xl font-bold text-green-600">R$ 1.500 de imposto</p>
              <p className="text-sm text-muted-foreground">Você fica com R$ 8.500 líquidos</p>
            </div>
            <div className="pt-4 border-t">
              <p className="font-bold text-primary text-xl">Economia: R$ 1.000 (10% a mais no bolso!)</p>
            </div>
          </div>
        </div>

        <blockquote className="border-l-4 border-primary pl-6 italic my-8">
          <strong>Regra de Ouro:</strong> Para renda fixa em ETFs, sempre prefira fundos com PMRC acima de 720 dias 
          (como o LFTB11) para garantir IR de 15% em vez de 25%.
        </blockquote>

        <hr className="my-12" />

        <h2>Aula 2: Tributação de ETFs de Ações</h2>
        <p className="lead">O Que Você Precisa Saber</p>

        <p>
          ETFs de ações têm uma tributação diferente da renda fixa. Aqui está o que você precisa saber:
        </p>

        <h3>Regras Básicas</h3>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <ul className="space-y-3">
            <li>
              <strong>Alíquota:</strong> 15% sobre o ganho de capital (20% em day trade)
            </li>
            <li>
              <strong>Isenção:</strong> NÃO há isenção para vendas de até R$ 20 mil/mês (diferente de ações individuais)
            </li>
            <li>
              <strong>Apuração:</strong> Mensal, você mesmo calcula e paga via DARF
            </li>
            <li>
              <strong>Prazo:</strong> Até o último dia útil do mês seguinte
            </li>
          </ul>
        </div>

        <h3>Dividendos de ETFs Internacionais</h3>

        <p>
          Um ponto importante: ETFs que investem em ações americanas pagam dividendos, e esses dividendos são 
          tributados na fonte nos EUA.
        </p>

        <div className="not-prose my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="border p-3 text-left">ETF</th>
                <th className="border p-3 text-left">Estrutura</th>
                <th className="border p-3 text-left">Imposto sobre Dividendos (EUA)</th>
                <th className="border p-3 text-left">Vantagem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">IVVB11</td>
                <td className="border p-3">Direta (EUA)</td>
                <td className="border p-3 text-red-600 font-bold">30%</td>
                <td className="border p-3">-</td>
              </tr>
              <tr className="bg-accent/5">
                <td className="border p-3">GPUS11</td>
                <td className="border p-3">USITS (Irlanda)</td>
                <td className="border p-3 text-green-600 font-bold">15%</td>
                <td className="border p-3">Economia de 0,5% a.a. no longo prazo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O GPUS11 (Investo) usa uma estrutura USITS (Irlanda/Luxemburgo) que se beneficia de acordos tributários, 
          reduzindo o imposto retido sobre dividendos de 30% para 15%. Isso pode gerar uma economia de 0,5% ao ano 
          no longo prazo, potencializada pelos juros compostos.
        </p>

        <hr className="my-12" />

        <h2>Aula 3: Como Declarar no Imposto de Renda</h2>
        <p className="lead">Passo a Passo Simplificado</p>

        <p>
          Declarar ETFs no IR é mais simples do que parece. Vou te mostrar o passo a passo:
        </p>

        <h3>1. Declaração de Bens e Direitos</h3>

        <p>
          Você deve declarar seus ETFs na ficha <strong>"Bens e Direitos"</strong>, usando o código:
        </p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <p className="font-medium mb-2">Código: <strong>73 - Fundo de Índice de Renda Variável (ETF)</strong></p>
          <p className="text-sm text-muted-foreground">
            Para cada ETF, informe:
          </p>
          <ul className="text-sm space-y-1 mt-2">
            <li>• Nome do ETF (ex: GPUS11)</li>
            <li>• CNPJ do fundo</li>
            <li>• Quantidade de cotas</li>
            <li>• Valor total investido (custo de aquisição)</li>
          </ul>
        </div>

        <h3>2. Apuração de Ganho de Capital</h3>

        <p>
          Quando você vende um ETF com lucro, deve:
        </p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <ol className="space-y-3">
            <li>
              <strong>1. Calcular o ganho:</strong> Preço de venda - Preço de compra - Custos (corretagem)
            </li>
            <li>
              <strong>2. Pagar o DARF:</strong> 15% sobre o ganho, até o último dia útil do mês seguinte
            </li>
            <li>
              <strong>3. Declarar na ficha "Renda Variável":</strong> Informar as operações e o imposto pago
            </li>
          </ol>
        </div>

        <h3>3. Ferramentas que Facilitam</h3>

        <p>
          Algumas corretoras e gestoras oferecem ferramentas para facilitar:
        </p>

        <div className="not-prose bg-card p-6 rounded-lg border my-6">
          <ul className="space-y-2">
            <li>
              <strong>Investo App:</strong> Gera DARF automaticamente e compensa lucros/prejuízos
            </li>
            <li>
              <strong>Informe de Rendimentos:</strong> Todas as corretoras fornecem o informe anual com os dados 
              necessários para a declaração
            </li>
            <li>
              <strong>Planilhas de Controle:</strong> Mantenha uma planilha simples com suas operações (compra, 
              venda, lucro/prejuízo)
            </li>
          </ul>
        </div>

        <blockquote className="border-l-4 border-primary pl-6 italic my-8">
          <strong>Dica Profissional:</strong> Guarde todos os informes de rendimentos e comprovantes de DARF pagos. 
          Em caso de malha fina, você terá tudo documentado.
        </blockquote>

        <div className="not-prose bg-primary/5 border-l-4 border-primary p-6 my-8">
          <p className="font-medium">
            <strong>Conclusão do Módulo 4:</strong> Você agora entende a tributação de ETFs de renda fixa e ações, 
            sabe como economizar impostos escolhendo os fundos certos (como LFTB11 e GPUS11), e tem o passo a passo 
            para declarar no IR. No próximo módulo, vamos falar sobre o <strong>Bosio Finance Club</strong> e como 
            você pode ter carteiras prontas todo mês!
          </p>
        </div>
      </div>
    </CourseLayout>
  );
}
