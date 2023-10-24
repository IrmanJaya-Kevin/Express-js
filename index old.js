const express=require('express')
const app = new express()
const port=3000;

app.get('/', (req, res) => res.status(200).send('asd'))

app.get('',(req, res) => res.status(404).send('Gak Ketemu'))

app.get('/hello',(req,res) =>res.send('halo'))
app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`))