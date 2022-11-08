const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'juzzokygzuvzuj',
        password:'27f3ae39e980d770ddd86900bb4a39e87447e9917692fc4fa5217e8c2f838300',
        host:'ec2-35-170-146-54.compute-1.amazonaws.com',
        database:'dci5o1ukbu2ibk',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    }
);
module.exports = pg_conn;