#  🐱 API Backend

Backend do projeto **API Gatossaura**, desenvolvido como parte da disciplina de **Integração Contínua e Entrega Contínua (CI/CD)**.  
Este servidor foi criado utilizando **Node.js** e **Express**, com deploy na plataforma **Render**.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Nodemon** (para desenvolvimento local)
- **Git / GitHub**
- **Render** (hospedagem da API)
- **CI/CD** (Integração e Entrega Contínua)

---

## 🧩 Estrutura do Projeto

```
📂 backend/
 ├── server.js          # Servidor principal com Express
 ├── package.json       # Dependências e scripts
 ├── .gitignore         # Arquivos ignorados pelo Git
 └── README.md          # Documentação do backend
```

---

## ⚙️ Como Executar Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/projeto-ci-cd-back.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd projeto-ci-cd-back
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor localmente:
   ```bash
   npm start
   ```
   ou, em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

5. A API ficará disponível em:
   ```
   http://localhost:3000
   ```

---

## 🌐 Deploy

- **Render:** [https://projeto-ci-cd-back-6w47.onrender.com](https://projeto-ci-cd-back-6w47.onrender.com)

> 💡 Dica: o deploy automático foi desativado, sendo realizado manualmente após testes locais e commits verificados.

---

## 🔄 Endpoints

| Método | Rota | Descrição |
|--------|------|------------|
| **GET** | `/` | Retorna mensagem padrão do servidor |
| **GET** | `/status` | Verifica se o servidor está online |
| **Outros (futuros)** | ... | A serem implementados conforme expansão do projeto |

---

## 🧠 Aprendizados

Durante o desenvolvimento deste backend foram aplicados conceitos de:

- Criação e configuração de servidor Node.js com Express
- Testes locais com nodemon
- Versionamento com Git
- Deploy e CI/CD com Render
- Comunicação com frontend via requisições HTTP (fetch)

---

## 🐾 Autora

**Mô (Moniquinha / Monikita)**  
💌 [Perfil no GitHub](https://github.com/mofalqueto)  
🎓 FATEC Franca — DSM4  
💻 Projeto desenvolvido para fins acadêmicos.


