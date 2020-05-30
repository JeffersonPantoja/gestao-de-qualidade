'use strict';


/**
 * Cadastrar Produto
 *
 * body Produto Objeto Produto para ser cadastrado (optional)
 * no response value expected for this operation
 **/
exports.addProduto = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recupera 10 Produtos
 * Recupera uma lista paginada de 10 produtos, a página é definida pelo índice do primeiro elemento da página que é indicado pela query firstItemPage
 *
 * firstItemPage Integer Índice do primeiro item da página (optional)
 * returns List
 **/
exports.internoProdutoGET = function(firstItemPage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ativo" : true,
  "nome" : "Produto 01",
  "id" : 0,
  "descricao" : "Descrição do Produto 01"
}, {
  "ativo" : true,
  "nome" : "Produto 01",
  "id" : 0,
  "descricao" : "Descrição do Produto 01"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recupera todos os Produtos
 *
 * returns List
 **/
exports.internoProdutoListaGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ativo" : true,
  "nome" : "Produto 01",
  "id" : 0,
  "descricao" : "Descrição do Produto 01"
}, {
  "ativo" : true,
  "nome" : "Produto 01",
  "id" : 0,
  "descricao" : "Descrição do Produto 01"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar Produto
 *
 * body Produto Objeto Produto para ser atualizado (optional)
 * no response value expected for this operation
 **/
exports.updateProduto = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

