const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/pingce/config/aratworld_ylt_config.json', (req, res) => {
    res.json({
        status: "success",
        mensagem: "Servidor a funcionar pelo telemóvel!"
    });
});

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`);
});
