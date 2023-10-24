const express=require('express')
const app = new express()
const port=3000;
const routers=require('./router')

app.use(express.json())

app.use(routers)

app.listen(port, () => 
    console.log(`Server runs at http://localhost:${port}`))