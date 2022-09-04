require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
require("./db/conn");
const hbs = require('hbs');
const PORT = process.env.PORT || 8000;
const eduRouter = require('../src/routers/eduRouter');


const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.use(express.json());
app.use(eduRouter);

// // to use static website in express
// app.use(express.static(staticPath));

// // to set the view engine
app.set("view engine", "hbs");
// // to change views folder for more page nad partials
app.set("views", templatePath);
// // to register partials path
hbs.registerPartials(partialPath);


 
app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));
