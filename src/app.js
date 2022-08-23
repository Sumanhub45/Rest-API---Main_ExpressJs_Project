const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;
const staticPath = path.join(__dirname, '../public')

app.use(express.static(staticPath));



app.get('/about', (req, res) => {
    res.send("Hello world about")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));