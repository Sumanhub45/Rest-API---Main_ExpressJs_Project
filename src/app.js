require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
require("./db/conn");
const hbs = require('hbs');
const PORT = process.env.PORT || 8000;
const Education = require("./models/education")

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.use(express.json());

// // to use static website in express
// app.use(express.static(staticPath));

// // to set the view engine
app.set("view engine", "hbs");
// // to change views folder for more page nad partials
app.set("views", templatePath);
// // to register partials path
hbs.registerPartials(partialPath);

// // to render dynamic page
app.get('/', (req, res) => {
    res.render('index',{ 
        name:"home"
    })
})

// GET /api/educations
app.get('/education-history', async(req, res) => {
    try {
        const education = await Education.find();
        res.json(education);
    } catch (err) {
        res.json({ message: err });
    }
} );

// POST /api/educations  
app.post("/education-history", async (req, res) => {
    const education = new Education(req.body);  
    try {
        await education.save();
        res.status(201).send(education);
    } catch (error) {
        res.status(400).send(error);
    }
});

// // to render dynamic page
app.get('/about', (req, res) => {
    res.render('about',{ 
        name:"about"
    })
})

app.post('/suman',(req, res) =>{
    res.send("hi suman")
})

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/about', (req, res) => {
    res.send("Hello world about")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
