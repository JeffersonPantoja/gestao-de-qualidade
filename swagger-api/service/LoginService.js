'use strict';


/**
 * Fazer login
 * Faz a autenticação no sistema,devolve um token para ser utilizado nas rotas do sistema.
 *
 * body Login Objeto Login (optional)
 * returns inline_response_200
 **/
exports.login = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoxMzIsIm5vbWUiOiJHZXN0b3IgRnVsYW5vIiwiZW1haWwiOiJnZXN0b3JAdGVzdGUuY29tIiwiY3BmIjoiOTk5Ljk5OS45OTktOTkiLCJzZXRvciI6eyJpZCI6MSwibm9tZSI6IlNldG9yIDAxIiwiZGVzY3JpY2FvIjoiRGVzY3Jpw6fDo28gMDEiLCJhdGl2byI6dHJ1ZX0sInBlcmZpbCI6IkciLCJhdGl2byI6dHJ1ZX0sImlzcyI6IlNUT1JFIiwiZXhwIjoxNTg0OTI1MzEwLCJhdWQiOiJ3ZWIiLCJqdGkiOiJ3dm4xa2ZOdlpmeUZ0QWtRSXJ1NEVnIiwiaWF0IjoxNTg0OTEyNzEwLCJuYmYiOjE1ODQ5MTI3MTAsImlkZW50aXR5IjozMjEzMjEsIm5hbWUiOiJKZWZmZXJzb24gQW50w7RuaW8gUGFudG9qYSIsInJvbGVzIjpbIlJFU1RSSVRPREVTSVNBQ0FEIl0sInBlcm1pc3Npb25zIjp7fSwicGFyYW1zIjp7ImR2IjoiMCIsInNlcnZlck5hbWUiOiJnZXN0b3ItZGUtcXVhbGlkYWRlIiwiZU1haWwiOiJnZXN0b3JAbW9jay5jb20iLCJub21lQ29tcGxldG8iOiJHZXN0b3IgRnVsYW5vIGRhIFNpbHZhIFNhdXJvIn19.l9jrBGOLEnxasqibx_kNNAHZJ_P0JSHkE6BFvL51LjA"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

