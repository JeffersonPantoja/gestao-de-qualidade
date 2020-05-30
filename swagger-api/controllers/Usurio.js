'use strict';

var utils = require('../utils/writer.js');
var Usurio = require('../service/UsurioService');

module.exports.addUsuario = function addUsuario (req, res, next, body) {
  Usurio.addUsuario(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.internoUsuarioGET = function internoUsuarioGET (req, res, next, firstItemPage) {
  Usurio.internoUsuarioGET(firstItemPage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.internoUsuarioListaGET = function internoUsuarioListaGET (req, res, next, idSetor) {
  Usurio.internoUsuarioListaGET(idSetor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUsuario = function updateUsuario (req, res, next, body) {
  Usurio.updateUsuario(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
