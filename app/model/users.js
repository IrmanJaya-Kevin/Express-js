const pool=require('../../config/db');

module.exports={
    async get(page=1,limit=10){
        const result =await pool.query("Select * from users limit $1 offset $2",[limit,(page-1)*limit])
        // const result =await pool.query(`Select * from users limit ${page} offset ${limit}`)
        return result.rows;
    },
    async getById(){
        const result =await pool.query("Select * from users where id=$1",[id])
        return result.rows;
    }
}