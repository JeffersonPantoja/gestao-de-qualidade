'use strict';

var utils = require('../utils/writer.js');
var Produto = require('../service/ProdutoService');

module.exports.addProduto = function addProduto (req, res, next, body) {
  Produto.addProduto(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.internoProdutoGET = function internoProdutoGET (req, res, next, firstItemPage) {
  Produto.internoProdutoGET(firstItemPage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.internoProdutoListaGET = function internoProdutoListaGET (req, res, next) {
  Produto.internoProdutoListaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProduto = function updateProduto (req, res, next, body) {
  Produto.updateProduto(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
