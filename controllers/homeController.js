const controller = (req, res, next) => {
  res.status(200).render('home');
};

module.exports = controller;
