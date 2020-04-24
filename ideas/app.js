const express = require('express');
const exphbs = require('express-handlebars');

// initialize application
const app = express();

//Handlebars Minddlewere
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine','handlebars');


//  How middleware works
// app.use(function(req,res, next){
//    // console.log(Date.now());
//     req.name = 'Diana Banana';
//     next();
// });

// Index Route
app.get(`/`, (req, res) => {
    // console.log(req.name);
    res.render('index');
});

// About Route
app.get(`/about`, (req, res) => {
    res.send('ABOUT');
});


const port = 5000;

app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
    
});