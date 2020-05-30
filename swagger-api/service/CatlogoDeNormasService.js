'use strict';


/**
 * Recupera 10 Normas
 * Recupera uma lista paginada de 10 normas, a página é definida pelo índice do primeiro elemento da página que é indicado pela query firstItemPage
 *
 * firstItemPage Integer Índice do primeiro item da página (optional)
 * returns List
 **/
exports.api_gestao_normasCatalogoNormasGET = function(firstItemPage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nome" : "Norma 01",
  "id" : 0,
  "descricao" : "Descrição da norma 01"
}, {
  "nome" : "Norma 01",
  "id" : 0,
  "descricao" : "Descrição da norma 01"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recupera uma norma
 * Faz o download de uma norma, é um documento no formato PDF
 *
 * idNorma Integer Índice do primeiro item da página
 * returns byte[]
 **/
exports.api_gestao_normasCatalogoNormasIdNormaGET = function(idNorma) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

