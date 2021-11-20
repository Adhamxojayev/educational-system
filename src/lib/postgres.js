const {Pool} = require('pg')
const {pgConfig} = require('../config.js')

const pool = new Pool(pgConfig)

const fetch = async (SQL, ...params) => {
    const client = await pool.connect()
    try {
        const {rows: [row]} = await client.query(SQL, params.length ? params : null)
        return row
    } catch (error) {
        console.error(error);
    }finally{
        await client.release()
    }
}

const fetchAll = async (SQL, ...params) => {
    const client = await pool.connect()
    try {
        const {rows} = await client.query(SQL, params.length ? params : null)
        return rows
    } catch (error) {
        console.error(error);
    }finally{
        await client.release()
    }
}

module.exports = {fetch,fetchAll}