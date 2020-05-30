'use strict';


/**
 * Cadastrar Setor
 *
 * body Setor Objeto Setor para ser cadastrado (optional)
 * no response value expected for this operation
 **/
exports.addSetor = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recupera 10 Setores
 * Recupera uma lista paginada de 10 setores, a página é definida pelo índice do primeiro elemento da página que é indicado pela query firstItemPage
 *
 * firstItemPage Integer Índice do primeiro item da página (optional)
 * returns List
 **/
exports.internoSetorGET = function(firstItemPage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ativo" : true,
  "nome" : "Setor 01",
  "id" : 0,
  "descricao" : "Descrição do Setor 01"
}, {
  "ativo" : true,
  "nome" : "Setor 01",
  "id" : 0,
  "descricao" : "Descrição do Setor 01"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recupera todos os Setores
 *
 * returns List
 **/
exports.internoSetorListaGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ativo" : true,
  "nome" : "Setor 01",
  "id" : 0,
  "descricao" : "Descrição do Setor 01"
}, {
  "ativo" : true,
  "nome" : "Setor 01",
  "id" : 0,
  "descricao" : "Descrição do Setor 01"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar Setor
 *
 * body Setor Objeto Setor para ser atualizado (optional)
 * no response value expected for this operation
 **/
exports.updateSetor = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

