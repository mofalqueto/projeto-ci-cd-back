# 🐱 API Gatossaura --- Backend

Backend do projeto **API Gatossaura**, desenvolvido para a disciplina de
**Integração Contínua e Entrega Contínua (CI/CD)**.\
Este servidor utiliza **Node.js + Express**, com deploy hospedado na
**Render**, e pipeline CI/CD configurado via **GitHub Actions + Render
Deploy Hook**.

------------------------------------------------------------------------

##  Tecnologias Utilizadas

-   **Node.js**
-   **Express.js**
-   **Nodemon** (ambiente local)
-   **Git / GitHub**
-   **GitHub Actions** (CI/CD)
-   **Render** (deploy da API)
-   **Deploy Hook** (integração automática do repositório → Render)

------------------------------------------------------------------------

##  Estrutura do Projeto

     backend/
     ├── server.js               # Servidor principal com Express
     ├── package.json            # Dependências e scripts
     ├── .gitignore              # Arquivos ignorados pelo Git
     ├── .github/workflows/      # Pipelines CI/CD
     │    └── deploy.yml         # Arquivo de automação CI/CD
     └── README.md               # Documentação do backend

------------------------------------------------------------------------

#  Fluxo CI/CD --- Como Funciona

O projeto utiliza **CI/CD automatizado** para garantir um fluxo
profissional:

##  1. Desenvolve localmente

Você altera o código no seu VS Code → testa usando:

``` bash
npm run dev
```

##  2. Commit + Push para a branch `main`

Cada alteração que você envia dispara o CI/CD:

``` bash
git add .
git commit -m "feat(api): adiciona novo endpoint"
git push origin main
```

##  3. GitHub Actions roda o workflow

Arquivo: `.github/workflows/deploy.yml`

O workflow faz:

1.  Faz checkout do código\
2.  Instala Node\
3.  Instala dependências\
4.  Executa testes (caso existam)\
5.  Chama o **Deploy Hook da Render**\
    → isso dispara o deploy automaticamente

##  4. Render recebe o Deploy Hook

Render vai:

-   Baixar o código atualizado
-   Instalar dependências
-   Buildar o container
-   Subir nova versão da API

##  5. API atualizada está no ar!

Seu front já pode consumir a nova versão 

------------------------------------------------------------------------

#  Arquivo do CI/CD (deploy.yml)

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

      - name: Trigger Deploy Hook na Render
        run: |
          curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }}
```

### Secrets necessários no GitHub:

  Nome                     Descrição
  ------------------------ ---------------------------------------------
  **RENDER_DEPLOY_HOOK**   URL gerada pela Render para disparar deploy

------------------------------------------------------------------------

# 🔌 Como Obter o Deploy Hook no Render

1.  Acesse o seu serviço no Render\

2.  Vá em **Settings**\

3.  Role até a seção **Deploy Hooks**\

4.  Copie a URL\

5.  No GitHub \> Settings \> Secrets \> Actions → crie:

        RENDER_DEPLOY_HOOK = https://api.render.com/deploy/... 

------------------------------------------------------------------------

# ⚙️ Como Executar Localmente

1.  Clone este repositório:

    ``` bash
    git clone https://github.com/seu-usuario/projeto-ci-cd-back.git
    ```

2.  Entre na pasta:

    ``` bash
    cd projeto-ci-cd-back
    ```

3.  Instale:

    ``` bash
    npm install
    ```

4.  Inicie:

    ``` bash
    npm start
    ```

    Ou em dev:

    ``` bash
    npm run dev
    ```

API disponível em:

    http://localhost:3000

------------------------------------------------------------------------

#  Deploy em Produção

-   **Render:** https://projeto-ci-cd-back-6w47.onrender.com\
-   CI/CD via **GitHub Actions + Deploy Hook**

------------------------------------------------------------------------

#  Endpoints

  Método                Rota         Descrição
  --------------------- ------------ -------------------------------
  **GET**               `/`          Retorna mensagem padrão
  **GET**               `/status`    Verifica funcionamento
  **GET/POST/DELETE**   *Em breve*   Novas rotas da API Gatossaura

------------------------------------------------------------------------

#  Aprendizados

-   Criação de API com Express\
-   Ambiente local com Nodemon\
-   Hospedagem na Render\
-   CI/CD automatizado com GitHub Actions\
-   Deploy via Deploy Hook\
-   Boas práticas de versionamento semântico

------------------------------------------------------------------------

# 🐾 Autora

**Monica Falqueto**\
 GitHub: https://github.com/mofalqueto\
 FATEC Franca --- DSM4\
 Projeto desenvolvido para fins acadêmicos (CI/CD)
