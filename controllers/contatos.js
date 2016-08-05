module.exports = function(app){

  var ContatoController = {
    index: function(res, rep){
      var usuario = req.session.usuario,
          params = {usuario: usuario};

      res.render('contato/index', params);
    }
  };

  return ContatoController;

};