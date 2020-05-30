'use strict';

var utils = require('../utils/writer.js');
var Atividade = require('../service/AtividadeService');

module.exports.addAtividade = function addAtividade (req, res, next, body) {
  Atividade.addAtividade(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.internoAtividadeGET = function internoAtividadeGET (req, res, next, firstItemPage) {
  Atividade.internoAtividadeGET(firstItemPage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAtividade = function updateAtividade (req, res, next, body) {
  Atividade.updateAtividade(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
