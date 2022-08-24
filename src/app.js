const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

const staticPath = path.join(__dirname, '../public')

// // to use static website in express
// app.use(express.static(staticPath));

// // to set the view engine
app.set("view engine", "hbs");




// // to render dynamic page
app.get('/', (req, res) => {
    res.render('index',{ 
        name:"home"
    })
})

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/about', (req, res) => {
    res.send("Hello world about")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));