'use strict';

var utils = require('../utils/writer.js');
var Setor = require('../service/SetorService');

module.exports.addSetor = function addSetor (req, res, next, body) {
  Setor.addSetor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.internoSetorGET = function internoSetorGET (req, res, next, firstItemPage) {
  Setor.internoSetorGET(firstItemPage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.internoSetorListaGET = function internoSetorListaGET (req, res, next) {
  Setor.internoSetorListaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSetor = function updateSetor (req, res, next, body) {
  Setor.updateSetor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
