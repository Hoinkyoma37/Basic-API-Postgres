const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'x',
    database: 'econ',
    port: '5432'
})

module.exports = pool