const pool = require('../database')

let article_count

pool.getConnection((err, connection) => {
  if (err) throw err

  connection.query(
    `SELECT COUNT(article_id) AS count
  FROM lewin_io.articles
  WHERE category_id = 0 AND is_displayed = 1`,
    (err, result, fields) => {
      if (err) throw err
      article_count = result[0].count
      console.log(article_count)
    }
  )
})

// Display blog page with list of articles
exports.project_list = (req, res, next) => {
  const page = req.query.page * 1 || 0

  pool.getConnection((err, connection) => {
    if (err) throw err

    connection.query(
      `SELECT article_id, title, tags, author, excerpt,
    DATE_FORMAT(time_published, "%M %D, %Y") AS time,
    git_repo, url
     FROM lewin_io.articles
     WHERE category_id = 0 AND is_displayed = 1
     ORDER BY article_id DESC
     LIMIT ${page * 5}, 5`,
      (err, result, fields) => {
        if (err) throw err
        console.log(result)
        res.render('project', {
          results: result,
          title: 'Projects',
          page: page,
          article_count: article_count,
        })
        connection.release()
        if (err) throw err
      }
    )
  })
}

// Render individual blog page
exports.project_detail = (req, res, next) => {
  pool.getConnection((err, connection) => {
    if (err) throw err

    connection.query(
      `SELECT article_id, title, tags, content, author,
    DATE_FORMAT(time_published, "%M %D, %Y") AS time,
    git_repo, url
     FROM lewin_io.articles
     WHERE category_id = 0 AND article_id = ${req.params.id}`,
      (err, result, fields) => {
        if (err) throw err
        console.log(result)
        res.render('project_detail', {
          result: result[0],
          title: result[0].title,
        })
        connection.release()
        if (err) throw err
      }
    )
  })
}
