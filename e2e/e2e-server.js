var express = require("express");
const app = express();

const sign = require("jsonwebtoken").sign;

const baseUrl = "/api/v1/";

app.listen(7777);
app.use(express.json());

console.log("================================");
console.log("WEB-SERVICES MOCK INICIALIZADOS");
console.log("================================");

app.post(baseUrl + "login/enter", (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  let tokenOn;

  setTimeout(() => {

    if (email === "desenvolvedorjefferson@gmail.com" && password === "321321") {
      const segundosAtuais = Math.floor((new Date()).getTime() / 1000);
      tokenOn = sign({
        "usuario": {},
        "iss": "STORE",
        "exp": Math.floor(segundosAtuais + 60*60*3.5),
        "aud": "web",
        "jti": "wvn1kfNvZfyFtAkQIru4Eg",
        "iat": segundosAtuais,
        "nbf": segundosAtuais,
        "identity": 321321,
        "name": "Jefferson Antônio Pantoja",
        "roles": [
          "RESTRITODESISACAD"
        ],
        "permissions": {},
        "params": {
            "dv": "0",
            "serverName": "gestor-de-qualidade",
            "eMail": "gestor@mock.com",
            "nomeCompleto": "Gestor Fulano da Silva Sauro"
        }
      }, "aB0bOR4_$4l9adA");
    }

    if (tokenOn !== undefined) {
      res.json({
        "token": tokenOn
      });
    } else {
      res.status(401).send("Email ou senha inválido");
    }
  }, 1500);
});

var setores = [
  {
    "id": 1,
    "nome": "Setor 01",
    "descricao": "Descrição 01",
    "ativo": true
  },
  {
    "id": 2,
    "nome": "Setor 02",
    "descricao": "Descrição 02",
    "ativo": true
  },
  {
    "id": 3,
    "nome": "Setor 03",
    "descricao": "Descrição 03",
    "ativo": true
  },
  {
    "id": 4,
    "nome": "Setor 04",
    "descricao": "Descrição 04",
    "ativo": true
  },
  {
    "id": 5,
    "nome": "Setor 05",
    "descricao": "Descrição 05",
    "ativo": true
  },
  {
    "id": 6,
    "nome": "Setor 06",
    "descricao": "Descrição 06",
    "ativo": true
  },
  {
    "id": 7,
    "nome": "Setor 07",
    "descricao": "Descrição 07",
    "ativo": true
  },
  {
    "id": 8,
    "nome": "Setor 08",
    "descricao": "Descrição 08",
    "ativo": true
  },
  {
    "id": 9,
    "nome": "Setor 09",
    "descricao": "Descrição 09",
    "ativo": true
  },
  {
    "id": 10,
    "nome": "Setor 10",
    "descricao": "Descrição 10",
    "ativo": true
  },
];

app.get(baseUrl + "interno/setor?", (req, res) => {
  const firstItemPage = parseInt(req.query.firstItemPage, 10);
  setTimeout(() => {
    res.json({
      totalRecords: setores.length,
      setores: setores.slice(firstItemPage, firstItemPage+ 10)
    });
  }, 1500);
})

app.post(baseUrl + "interno/setor", (req, res) => {
  setTimeout(() => {
    req.body.id = (new Date()).getTime();
    setores.push(req.body)
    res.json();
  }, 1500);
})

app.put(baseUrl + "interno/setor", (req, res) => {
  setTimeout(() => {
    setores = setores.map((setor) => {
      if (setor.id === req.body.id) {
        setor = req.body;
      }
      return setor;
    })
    res.json();
  }, 1500);
})

function return401(res) {
  setTimeout(() => {
    res.status(401).send("Autenticação inválida, faça o login novamente");
  }, 1500);
}

