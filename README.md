# 🐱 API Gatossaura --- Backend

Backend do projeto **API Gatossaura**, desenvolvido para a disciplina de
**Integração Contínua e Entrega Contínua (CI/CD)**.\
Este servidor utiliza **Node.js + Express**, com deploy automatizado via
**GitHub Actions** integrando diretamente com a **API da Render**
(usando `RENDER_API_KEY` e `SERVICE_ID`).

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

-   **Node.js**
-   **Express.js**
-   **Nodemon**
-   **Git / GitHub**
-   **GitHub Actions**
-   **Render (API Deploy)**

------------------------------------------------------------------------

## 🧩 Estrutura do Projeto

    📂 backend/
     ├── server.js
     ├── package.json
     ├── .gitignore
     ├── .github/workflows/
     │     └── deploy.yml
     └── README.md

------------------------------------------------------------------------

# 🔄 Fluxo CI/CD --- Como Funciona

O pipeline do projeto funciona assim:

## ✔️ 1. Alterações no código

Você desenvolve localmente e testa:

``` bash
npm run dev
```

## ✔️ 2. Commit e push para a branch `main`

``` bash
git add .
git commit -m "feat(api): nova funcionalidade"
git push origin main
```

## ✔️ 3. GitHub Actions inicia o workflow automaticamente

O arquivo `deploy.yml`:

1.  Faz checkout do repositório\
2.  Instala Node\
3.  Instala dependências\
4.  Valida o projeto\
5.  Acessa a API da **Render** usando sua `RENDER_API_KEY`\
6.  Solicita um deploy para o serviço usando o `SERVICE_ID`

## ✔️ 4. A Render recebe o comando da API

-   Baixa o repositório
-   Instala dependências
-   Gera build
-   Sobe nova versão automaticamente

## ✔️ 5. A API é atualizada em produção 🎉

------------------------------------------------------------------------

# 🛠️ Arquivo do CI/CD (deploy.yml)

``` yml
name: Deploy Backend to Render

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout do repositório
        uses: actions/checkout@v4

      - name: Instalar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Instalar dependências
        run: npm install

      - name: Disparar deploy via API da Render
        run: |
          curl -X POST             -H "Accept: application/json"             -H "Authorization: Bearer ${{ secrets.RENDER_API_KEY }}"             -H "Content-Type: application/json"             -d '{"serviceId": "${{ secrets.SERVICE_ID }}"}'             https://api.render.com/v1/services/${{ secrets.SERVICE_ID }}/deploys
```

------------------------------------------------------------------------

# 🔐 Secrets necessários no GitHub

  Nome                 Descrição
  -------------------- -----------------------------------
  **RENDER_API_KEY**   Chave da API da Render
  **SERVICE_ID**       ID do serviço hospedado na Render

Para configurar:

1.  Vá em **GitHub → Settings → Secrets → Actions**
2.  Adicione:
    -   `RENDER_API_KEY`
    -   `SERVICE_ID`

------------------------------------------------------------------------

# ⚙️ Executando Localmente

``` bash
git clone https://github.com/seu-usuario/projeto-ci-cd-back.git
cd projeto-ci-cd-back
npm install
npm run dev
```

API disponível em:

    http://localhost:3000

------------------------------------------------------------------------

# 🌐 Deploy em Produção

-   Render: https://projeto-ci-cd-back-6w47.onrender.com\
-   Deploy automático via GitHub Actions + Render API

------------------------------------------------------------------------

# 🔄 Endpoints

  Método   Rota                 Descrição
  -------- -------------------- ------------------------
  GET      `/`                  Mensagem padrão
  GET      `/status`            Verifica funcionamento
  Outros   Em desenvolvimento   

------------------------------------------------------------------------

# 🧠 Aprendizados

-   Criação de API com Express\
-   Automação CI/CD com GitHub Actions\
-   Deploy profissional via API da Render\
-   Boas práticas de versionamento

------------------------------------------------------------------------

# 🐾 Autora

**Monica Falqueto**\
GitHub: https://github.com/mofalqueto\
FATEC Franca --- DSM4
