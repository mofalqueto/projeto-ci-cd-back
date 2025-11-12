const express = require("express");
const cors = require("cors");

// Cria o app Express
const app = express();

// 🟢 Libera o acesso apenas para o front hospedado na Vercel
app.use(cors({
  origin: "https://projeto-ci-cd-front-gatos.vercel.app/" // 🔹 coloque aqui o link exato do seu front quando ele estiver publicado
}));

// Rota principal da API
app.get("/", (req, res) => {
  res.json({
    mensagem: "🐱💬 A Gatossaura API está online e pronta pra ronronar com CI/CD!🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱"
  });
});

// Define a porta (Render usa process.env.PORT automaticamente)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
