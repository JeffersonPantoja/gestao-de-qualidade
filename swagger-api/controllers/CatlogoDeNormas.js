'use strict';

var utils = require('../utils/writer.js');
var CatlogoDeNormas = require('../service/CatlogoDeNormasService');

module.exports.api_gestao_normasCatalogoNormasGET = function api_gestao_normasCatalogoNormasGET (req, res, next, firstItemPage) {
  CatlogoDeNormas.api_gestao_normasCatalogoNormasGET(firstItemPage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.api_gestao_normasCatalogoNormasIdNormaGET = function api_gestao_normasCatalogoNormasIdNormaGET (req, res, next, idNorma) {
  CatlogoDeNormas.api_gestao_normasCatalogoNormasIdNormaGET(idNorma)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
