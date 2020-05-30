'use strict';


/**
 * Cadastrar Atividade
 *
 * body Atividade Objeto Atividade para ser cadastrado (optional)
 * no response value expected for this operation
 **/
exports.addAtividade = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recupera 10 Atividades
 * Recupera uma lista paginada de 10 atividades, a página é definida pelo índice do primeiro elemento da página que é indicado pela query firstItemPage
 *
 * firstItemPage Integer Índice do primeiro item da página (optional)
 * returns List
 **/
exports.internoAtividadeGET = function(firstItemPage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "setor" : {
    "ativo" : true,
    "nome" : "Setor 01",
    "id" : 0,
    "descricao" : "Descrição do Setor 01"
  },
  "ativo" : true,
  "produto" : {
    "ativo" : true,
    "nome" : "Produto 01",
    "id" : 0,
    "descricao" : "Descrição do Produto 01"
  },
  "dataFim" : "{}",
  "titulo" : "Atividade 01",
  "responsaveis" : [ {
    "setor" : {
      "ativo" : true,
      "nome" : "Setor 01",
      "id" : 0,
      "descricao" : "Descrição do Setor 01"
    },
    "ativo" : true,
    "cpf" : "999.999.999-45",
    "nome" : "Jefferson Antônio Pantoja Silva",
    "id" : 0,
    "email" : "desenvolvedorjefferson@gmail.com",
    "perfil" : "G"
  }, {
    "setor" : {
      "ativo" : true,
      "nome" : "Setor 01",
      "id" : 0,
      "descricao" : "Descrição do Setor 01"
    },
    "ativo" : true,
    "cpf" : "999.999.999-45",
    "nome" : "Jefferson Antônio Pantoja Silva",
    "id" : 0,
    "email" : "desenvolvedorjefferson@gmail.com",
    "perfil" : "G"
  } ],
  "id" : 0,
  "dataInicio" : "{}",
  "descricao" : "Descrição da atividade 01"
}, {
  "setor" : {
    "ativo" : true,
    "nome" : "Setor 01",
    "id" : 0,
    "descricao" : "Descrição do Setor 01"
  },
  "ativo" : true,
  "produto" : {
    "ativo" : true,
    "nome" : "Produto 01",
    "id" : 0,
    "descricao" : "Descrição do Produto 01"
  },
  "dataFim" : "{}",
  "titulo" : "Atividade 01",
  "responsaveis" : [ {
    "setor" : {
      "ativo" : true,
      "nome" : "Setor 01",
      "id" : 0,
      "descricao" : "Descrição do Setor 01"
    },
    "ativo" : true,
    "cpf" : "999.999.999-45",
    "nome" : "Jefferson Antônio Pantoja Silva",
    "id" : 0,
    "email" : "desenvolvedorjefferson@gmail.com",
    "perfil" : "G"
  }, {
    "setor" : {
      "ativo" : true,
      "nome" : "Setor 01",
      "id" : 0,
      "descricao" : "Descrição do Setor 01"
    },
    "ativo" : true,
    "cpf" : "999.999.999-45",
    "nome" : "Jefferson Antônio Pantoja Silva",
    "id" : 0,
    "email" : "desenvolvedorjefferson@gmail.com",
    "perfil" : "G"
  } ],
  "id" : 0,
  "dataInicio" : "{}",
  "descricao" : "Descrição da atividade 01"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar Atividade
 *
 * body Atividade Objeto Atividade para ser atualizado (optional)
 * no response value expected for this operation
 **/
exports.updateAtividade = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

