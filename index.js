const express = require('express');
const path = require('path');
const app = express(); 
const port = 4000;


let date = new Date()


if (date.getDay() === 0 || date.getDay() === 6 || date.getHours() < 9 || date.getHours() > 11)

{app.use((req, res, next) => {
    if (5 < 4) {next()} else {res.sendFile(__dirname +'/public/closed.html');}
})}

else { app.use('/static', express.static(__dirname + '/public'))} 


app.get('/', function (req, res) {
    res.sendFile(__dirname +'/public/index.html');
})

app.get('/service', function (req, res) {
    res.sendFile(__dirname +'/public/service.html');
})

app.get('/contact', function (req, res) {
    res.sendFile(__dirname +'/public/contact.html');
})

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname +'/public/style.css');
});

app.get('/closed', function (req, res) {
    res.sendFile(__dirname +'/public/closed.html');
})



app.listen(port, function(){
console.log('The server is running', port);
}) 



