'use strict';


/**
 * Cadastrar usuário
 *
 * body Usuario Objeto Usuário para ser cadastrado (optional)
 * no response value expected for this operation
 **/
exports.addUsuario = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recupera 10 Usuários
 * Recupera uma lista paginada de 10 usuários, a página é definida pelo índice do primeiro elemento da página que é indicado pela query firstItemPage
 *
 * firstItemPage Integer Índice do primeiro item da página (optional)
 * returns List
 **/
exports.internoUsuarioGET = function(firstItemPage) {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recuperar Usuários
 * Recupera uma lista de usuários de um determinado setor definido pela query idSetor
 *
 * idSetor Integer id de um setor (optional)
 * returns List
 **/
exports.internoUsuarioListaGET = function(idSetor) {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar Usuário
 *
 * body Usuario Objeto Usuário para ser atualizado (optional)
 * no response value expected for this operation
 **/
exports.updateUsuario = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

