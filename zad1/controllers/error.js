const errorController = {
    getNotFoundPage: (req, res) => {
      res.status(404).render('not-found', { title: 'Page Not Found' });
    }
  };
  
  module.exports = errorController;
  