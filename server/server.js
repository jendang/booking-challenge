var express = require('express');

const app = express();

app.post('/price', (req, res) => {
    const price = Math.random() * 200;
    res.status(200).json({ status: 'OK', price });
})

app.post('/book', (req, res) => {
    res.status(200).json({status: 'OK'})
})

app.listen(9090, () => {
    console.log('Backend started at port localhost:9090');
})