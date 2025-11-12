const express = require("express");
const cors = require("cors");

const app = express();

// Configura o CORS para permitir requisições do front-end específico
app.use(cors({
  origin: "https://projeto-ci-cd-front-gatos.vercel.app" 
}));

// Rota principal da API
app.get("/", (req, res) => {
  res.json({
    mensagem: "Oooopss.🐶🐶🐶🐶🐶🐶🐶 Um doginho invadiu a API..."
  });
});

// Define a porta (Render usa process.env.PORT automaticamente)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
