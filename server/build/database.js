"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mysql from 'promise-mysql'; ESTA LINEA DE CODIGO NO FUNCIONA Y ES REEMPLAZADA POR LA SIGUIENTE
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
mysql_1.default.createPool(keys_1.default.database);
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection((err, connection) => {
    if (err)
        throw err;
    connection.release();
    console.log('DB is connected');
});
exports.default = pool;
