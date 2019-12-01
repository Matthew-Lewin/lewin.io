const mysql = require('mysql')

// Connect to the DB
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
})

pool.getConnection((err, connection) => {
  if (err) throw err
  connection.query(
    `SELECT COUNT(*) FROM lewin_io.articles`,
    (err, result, fields) => {
      connection.release()

      if (err) throw err
    }
  )
})

module.exports = pool
