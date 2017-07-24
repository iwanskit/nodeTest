const express = require('express');
const hbs = require('hbs');
var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get("/", (request, response) => {
    // response.send('Hello express');
    response.send({
       name: 'Pradeep',
       likes: [
           'Tikka Masala',
           'Mule ESB'
       ]
    });
});

app.get('/about', (req, res) => {
    app.render('about.hbs', {
        pageTitle: 'Sraty pierdaty',
        currentYear: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log("up and running")
});