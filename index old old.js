// const os=require('os')
// console.log('Free Memory',os.freemem())

// const luasSegitiga = require('./segitiga')
// console.log(luasSegitiga(2,2));

const {Client} = require('pg');
const client=new Client({
    host:'localhost',
    port:5432,
    database:'article',
    user:'postgres',
    password:'7355076'
})
async function connectDB(){
    await client.connect()
    
    const res=await client.query(
        // `SELECT $1::text as message, $2::int as number`,
        // ['Hello world!',1234]
        `Select * from posts`
    )
    console.log(res.rows[0].isi)
    await client.end()
}
connectDB();