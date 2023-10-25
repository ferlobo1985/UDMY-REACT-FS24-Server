const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(`
        <html>
            <body>
                <h1>Hello !!</h1>
            </body>
        </html>
    `)
});

app.get('/api/:user/:id',(req,res)=>{
    let id = req.params.id;
    let username = req.params.user;
     res.send(`
        <html>
            <body>
                <h1>THE USER ID IS ${id} AND THE USERNAME ${username}</h1>
            </body>
        </html>
    `)
});


///  /car?brand=ford&year=2023
app.get('/api/car',(req,res)=>{
    let brand =  req.query.brand;
    let year = req.query.year;

    res.send({
        brand,
        year
    })
})


const port = process.env.PORT || 3000;
app.listen(port);