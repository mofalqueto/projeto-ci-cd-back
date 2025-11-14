const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "https://projeto-ci-cd-front-gatos.vercel.app" 
}));

// Rota principal da API
app.get("/", (req, res) => {
  res.json({
    mensagem: " Ruf Ruf Ruf.🐶🐶🐶🐶🐶🐶🐶 Um doginho invadiu a API..."
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
