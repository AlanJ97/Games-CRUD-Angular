
// import mysql from 'promise-mysql'; ESTA LINEA DE CODIGO NO FUNCIONA Y ES REEMPLAZADA POR LA SIGUIENTE
import mysql from 'mysql';
import keys from './keys';
mysql.createPool(keys.database);

const pool = mysql.createPool(keys.database);
pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB is connected');
});
export default pool;