import mysql from 'promise-mysql';
import keys from './keys';
mysql.createPool(keys.database);

const pool = mysql.createPool(keys.database);
pool.getConnection().then(connection =>{
    pool.releaseConnection(connection)
})