const db = require('../database')

let article_count

db.query(
  `SELECT COUNT(article_id) AS count
  FROM lewin_io.articles
  WHERE category_id = 1`,
  (err, result, fields) => {
    if (err) throw err
    article_count = result[0].count
    console.log(article_count)
  }
)

// Display blog page with list of articles
exports.blog_list = (req, res, next) => {
  const page = req.query.page * 1 || 0
  db.query(
    `SELECT article_id, title, tags, author, excerpt,
    DATE_FORMAT(time_published, "%M %D, %Y") AS time
     FROM lewin_io.articles
     WHERE category_id = 1
     ORDER BY article_id DESC
     LIMIT ${page * 5}, 5`,
    (err, result, fields) => {
      if (err) throw err
      console.log(result)
      res.render('article', {
        results: result,
        title: 'Blog',
        page: page,
        article_count: article_count,
      })
    }
  )
}

// Render individual blog page
exports.blog_detail = (req, res, next) => {
  db.query(
    `SELECT article_id, title, tags, content, author,
    DATE_FORMAT(time_published, "%M %D, %Y") AS time
     FROM lewin_io.articles
     WHERE category_id = 1 AND article_id = ${req.params.id}`,
    (err, result, fields) => {
      if (err) throw err
      console.log(result)
      res.render('article_detail', { result: result[0] })
    }
  )
}
