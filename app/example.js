module.exports = function (app, $) {

  app.use('/example/?', function(req, res) {
    res.json({
      success: true,
      title: $.settings['EXAMPLE'].title
    });
  });

}