const connection = require('./dbConnection');

module.exports = (table) => {
    return {
        select: () => new Promise((res, rej) => {
            connection.query(`select * from ${table}`, (err, data) => err ? rej(err) : res(data))
        }),
        selectWhere: (where) => new Promise((res, rej) => {
            connection.query(`select * from ${table} where ?`, where, (err, data) => err ? rej(err) : res(data))
        }),
        insert: (data) => new Promise((res, rej) => {
            connection.query(`insert into ${table} set ?`, data, (err) => err ? rej(err) : res(true))
        }),
        update: (data, where) => new Promise((res, rej) => {
            connection.query(`update ${table} set ? where ?`, [data, where], (err) => err ? rej(err) : res(true))
        }),
        delete: (where) => new Promise((res, rej) => {
            connection.query(`delete from ${table} where ?`, where, (err) => err ? rej(err) : res(true))
        })
    }
}