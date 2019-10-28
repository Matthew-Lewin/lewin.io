const fs = require('fs')
const path = require('path')

// Load in content for homepage
const indexData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `../index-content.json`),
    'utf8',
    (err, data) => {
      if (err) console.log(err)
      return data
    }
  )
)

const controller = (req, res, next) => {
  res.status(200).render('index', indexData)
}

module.exports = controller
