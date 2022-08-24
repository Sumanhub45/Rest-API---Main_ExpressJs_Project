const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const PORT = process.env.PORT || 8000;

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// // to use static website in express
// app.use(express.static(staticPath));

// // to set the view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);


// // to render dynamic page
app.get('/', (req, res) => {
    res.render('index',{ 
        name:"home"
    })
})

// // to render dynamic page
app.get('/about', (req, res) => {
    res.render('about',{ 
        name:"about"
    })
})

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/about', (req, res) => {
    res.send("Hello world about")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));