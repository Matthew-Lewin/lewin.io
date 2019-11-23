const mysql = require('mysql')

// Connect to the DB
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
})

db.connect((err) => {
  if (err) throw err
  console.log('Connected!')
})

module.exports = db
