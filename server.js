//Set Variables
const express = require('express');
const app = express();
const budget = require('./models/budget');

//Set PORT Variable
const PORT= 3000;

//Set Listener
app.listen(PORT, () =>{
    console.log("Application is working on: ", PORT);
})

//Set up CSS Links
app.use('/public', express.static('public'))

//Set up Index
app.get('/budget', (req,res) => {
    res.render('index.ejs', {budget});
})

//Set up New
app.get('/budget/new', (req,res) => {
    res.render('new.ejs');
})
//Run Middleware
app.use(express.urlencoded({extended: false}))

//Set up Post (Create)
app.post('/budget', (req, res) => {
    budget.push(req.body);
    console.log(budget);
    res.redirect('http://localhost:3000/budget');
})

//Set up Show
app.get('/budget/:id', (req,res) => {
    res.render('show.ejs', {budget: budget[req.params.id]});
})