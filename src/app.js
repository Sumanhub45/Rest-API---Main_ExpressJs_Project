const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/about', (req, res) => {
    res.send("Hello world about")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));