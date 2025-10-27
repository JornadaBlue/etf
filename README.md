[README.md](https://github.com/user-attachments/files/23170979/README.md)
# A Rota da Paz Financeira - Curso de ETFs

Plataforma completa de vendas e entrega de curso online sobre investimento em ETFs, incluindo landing page de vendas, conteúdo dos 5 módulos, e integração com o Bosio Finance Club (assinatura mensal).

## 🎯 Estrutura do Projeto

- **Landing Page** (`/`): Página de vendas principal com Hero, benefícios, módulos, preço (R$197), FAQ e CTA
- **Módulo 1** (`/modulo-1`): O Fim da Ansiedade Financeira (A Mentalidade ETF)
- **Módulo 2-5**: Em desenvolvimento (conteúdo já elaborado nos arquivos `.md`)
- **Bosio Finance Club** (`/club`): Página de apresentação do upsell (assinatura mensal R$97)

## 🚀 Deploy no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em "New repository"
3. Nome sugerido: `rota-paz-financeira`
4. Deixe como **público**
5. **NÃO** inicialize com README (já temos um)
6. Clique em "Create repository"

### Passo 2: Conectar o Repositório Local

No terminal, execute os seguintes comandos:

```bash
cd /home/ubuntu/rota-paz-financeira

# Adicionar o remote do GitHub (substitua SEU_USUARIO pelo seu username)
git remote add origin https://github.com/SEU_USUARIO/rota-paz-financeira.git

# Fazer push do código
git branch -M main
git push -u origin main
```

### Passo 3: Configurar GitHub Pages

1. No repositório do GitHub, vá em **Settings** > **Pages**
2. Em "Source", selecione **GitHub Actions**
3. Crie um arquivo `.github/workflows/deploy.yml` com o seguinte conteúdo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '22'
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install
        working-directory: ./client
      
      - name: Build
        run: pnpm build
        working-directory: ./client
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./client/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Faça commit e push deste arquivo:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

5. Aguarde alguns minutos. O site estará disponível em: `https://SEU_USUARIO.github.io/rota-paz-financeira/`

### Passo 4: Configurar Domínio Personalizado (Opcional)

#### Comprar um Domínio

Sugestões de domínios:
- `rotadapazfinanceira.com.br`
- `metodobosio.com.br`
- `etfbrasil.com.br`
- `investimentoetf.com.br`

Registradores recomendados:
- [Registro.br](https://registro.br) (domínios .br)
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)

#### Configurar DNS

No painel do seu registrador de domínio, adicione os seguintes registros DNS:

**Para domínio raiz (exemplo.com):**

```
Tipo: A
Nome: @
Valor: 185.199.108.153

Tipo: A
Nome: @
Valor: 185.199.109.153

Tipo: A
Nome: @
Valor: 185.199.110.153

Tipo: A
Nome: @
Valor: 185.199.111.153
```

**Para subdomínio www:**

```
Tipo: CNAME
Nome: www
Valor: SEU_USUARIO.github.io
```

#### Configurar no GitHub

1. No repositório, vá em **Settings** > **Pages**
2. Em "Custom domain", digite seu domínio (ex: `rotadapazfinanceira.com.br`)
3. Clique em "Save"
4. Aguarde a verificação DNS (pode levar até 24 horas)
5. Após verificado, marque a opção "Enforce HTTPS"

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 22+
- pnpm 8+

### Instalação

```bash
cd client
pnpm install
```

### Executar em Desenvolvimento

```bash
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build de Produção

```bash
pnpm build
```

Os arquivos otimizados estarão em `client/dist/`

## 📝 Próximos Passos

### Conteúdo Pendente

Os arquivos Markdown com o conteúdo completo dos módulos 2-5 estão na raiz do projeto:
- `modulo_2_completo.md`
- `modulo_3_completo.md`
- `modulo_4_completo.md`
- `modulo_5_completo.md`

Para criar as páginas correspondentes, siga o modelo de `client/src/pages/Modulo1.tsx`.

### Integrações Recomendadas

1. **Sistema de Pagamento:**
   - [Stripe](https://stripe.com) para pagamentos internacionais
   - [Mercado Pago](https://www.mercadopago.com.br) para pagamentos no Brasil
   - [Hotmart](https://www.hotmart.com) para infoprodutos

2. **Plataforma de Membros (para o Club):**
   - [Memberstack](https://www.memberstack.com)
   - [Auth0](https://auth0.com)
   - Sistema customizado com backend

3. **Email Marketing:**
   - [ConvertKit](https://convertkit.com)
   - [Mailchimp](https://mailchimp.com)
   - [SendGrid](https://sendgrid.com)

4. **Analytics:**
   - Google Analytics (já configurado via variáveis de ambiente)
   - [Plausible](https://plausible.io)
   - [Fathom](https://usefathom.com)

## 🎨 Personalização

### Cores

As cores do tema estão definidas em `client/src/index.css`. Para alterar:

```css
:root {
  --primary: oklch(0.55 0.18 240); /* Azul principal */
  --accent: oklch(0.95 0.03 160);  /* Verde de destaque */
  --background: oklch(0.99 0.002 240); /* Fundo */
}
```

### Tipografia

A fonte atual é **Inter**. Para alterar, edite `client/index.html` e `client/src/index.css`.

### Logo

Adicione seu logo em `client/public/` e atualize a variável de ambiente `VITE_APP_LOGO` no arquivo `.env`.

## 📄 Licença

© 2024 Rota da Paz Financeira. Todos os direitos reservados.

Curadoria de Jhony Bosio.

## 🆘 Suporte

Para dúvidas sobre o curso ou a plataforma, entre em contato através do site ou das redes sociais.

---

**Desenvolvido com React 19, Tailwind CSS 4 e shadcn/ui**

