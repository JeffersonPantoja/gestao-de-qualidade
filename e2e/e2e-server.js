var express = require("express");
const fs = require('fs');
const app = express();

const sign = require("jsonwebtoken").sign;

const baseUrl = "/api/v1/";

app.listen(7777);
app.use(express.json());

console.log("================================");
console.log("WEB-SERVICES MOCK INICIALIZADOS");
console.log("================================");

var produtos = [
  {
    "id": 1,
    "nome": "Produto 01",
    "descricao": "Descrição 01",
    "ativo": true
  },
  {
    "id": 2,
    "nome": "Produto 02",
    "descricao": "Descrição 02",
    "ativo": true
  },
  {
    "id": 3,
    "nome": "Produto 03",
    "descricao": "Descrição 03",
    "ativo": true
  },
  {
    "id": 4,
    "nome": "Produto 04",
    "descricao": "Descrição 04",
    "ativo": true
  },
  {
    "id": 5,
    "nome": "Produto 05",
    "descricao": "Descrição 05",
    "ativo": true
  },
  {
    "id": 6,
    "nome": "Produto 06",
    "descricao": "Descrição 06",
    "ativo": true
  },
  {
    "id": 7,
    "nome": "Produto 07",
    "descricao": "Descrição 07",
    "ativo": true
  },
  {
    "id": 8,
    "nome": "Produto 08",
    "descricao": "Descrição 08",
    "ativo": true
  },
  {
    "id": 9,
    "nome": "Produto 09",
    "descricao": "Descrição 09",
    "ativo": true
  },
  {
    "id": 10,
    "nome": "Produto 10",
    "descricao": "Descrição 10",
    "ativo": true
  },
];

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

let usuarios = [
  {
    "id": 132,
    "nome": 'Gestor Fulano',
    "email": 'gestor@teste.com',
    "cpf": '999.999.999-99',
    "setor": setores[0],
    "perfil": 'G',
    "ativo": true
  },
  {
    "id": 1,
    "nome": 'João 01',
    "email": 'joao@teste.com',
    "cpf": '999.999.999-99',
    "setor": setores[0],
    "perfil": 'C',
    "ativo": true
  },
  {
    "id": 2,
    "nome": 'Maria 01',
    "email": 'maria@teste.com',
    "cpf": '999.999.999-99',
    "setor": setores[0],
    "perfil": 'C',
    "ativo": true
  },
  {
    "id": 3,
    "nome": 'Antônio 01',
    "email": 'antonio@teste.com',
    "cpf": '999.999.999-99',
    "setor": setores[0],
    "perfil": 'C',
    "ativo": true
  }
]

app.post(baseUrl + "login/enter", (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  let tokenOn;

  setTimeout(() => {

    usuarios.forEach((usuario) => {
      if (email === usuario.email && password === "321321") {
        const segundosAtuais = Math.floor((new Date()).getTime() / 1000);
        console.log(usuario);
        tokenOn = sign({
          "usuario": usuario,
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
    })

    if (tokenOn !== undefined) {
      res.json({
        "token": tokenOn
      });
    } else {
      res.status(401).send("Email ou senha inválido");
    }
  }, 1500);
});

app.get(baseUrl + "interno/setor?", (req, res) => {
  const firstItemPage = parseInt(req.query.firstItemPage, 10);
  setTimeout(() => {
    res.json({
      totalRecords: setores.length,
      setores: setores.slice(firstItemPage, firstItemPage+ 10)
    });
  }, 1500);
})

app.get(baseUrl + "interno/setor/lista", (req, res) => {
  setTimeout(() => {
    res.json(setores);
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

app.get(baseUrl + "interno/produto?", (req, res) => {
  const firstItemPage = parseInt(req.query.firstItemPage, 10);
  setTimeout(() => {
    res.json({
      totalRecords: produtos.length,
      produtos: produtos.slice(firstItemPage, firstItemPage+ 10)
    });
  }, 1500);
})

app.get(baseUrl + "interno/produto/lista", (req, res) => {
  setTimeout(() => {
    res.json(produtos);
  }, 1500);
})

app.post(baseUrl + "interno/produto", (req, res) => {
  setTimeout(() => {
    req.body.id = (new Date()).getTime();
    produtos.push(req.body)
    res.json();
  }, 1500);
})

app.put(baseUrl + "interno/produto", (req, res) => {
  setTimeout(() => {
    produtos = produtos.map((produto) => {
      if (produto.id === req.body.id) {
        produto = req.body;
      }
      return produto;
    })
    res.json();
  }, 1500);
})


// ---
app.get(baseUrl + "interno/usuario?", (req, res) => {
  const firstItemPage = parseInt(req.query.firstItemPage, 10);
  setTimeout(() => {
    res.json({
      totalRecords: usuarios.length,
      usuarios: usuarios.slice(firstItemPage, firstItemPage+ 10)
    });
  }, 1500);
})

// recebe a query idSetor
app.get(baseUrl + "interno/usuario/lista?", (req, res) => {
  setTimeout(() => {
    res.json(usuarios);
  }, 1500);
})

app.post(baseUrl + "interno/usuario", (req, res) => {
  setTimeout(() => {
    req.body.id = (new Date()).getTime();
    usuarios.push(req.body)
    res.json();
  }, 1500);
})

app.put(baseUrl + "interno/usuario", (req, res) => {
  setTimeout(() => {
    usuarios = usuarios.map((usuario) => {
      if (usuario.id === req.body.id) {
        usuario = req.body;
      }
      return usuario;
    })
    res.json();
  }, 1500);
})

var atividades = [
  {
    id: 1,
    titulo: 'Atividade 01',
    descricao: 'descrição 01',
    produto: produtos[0],
    setor: setores[0],
    responsaveis: [{
      id: 1,
      nome: 'Fulano 01',
      email: 'fulano01@teste.com',
      cpf: '999.999.999-99',
      setor: setores[0],
      perfil: 'G'
    }],
    dataInicio: '2020-03-13T05:05:53.171Z',
    dataFim: '2020-03-13T05:05:53.171Z',
  },
  {
    id: 2,
    titulo: 'Atividade 02',
    descricao: 'descrição 02',
    produto: produtos[0],
    setor: setores[0],
    responsaveis: [{
      id: 1,
      nome: 'Fulano 01',
      email: 'fulano01@teste.com',
      cpf: '999.999.999-99',
      setor: setores[0],
      perfil: 'G'
    }],
    dataInicio: '2020-03-13T05:05:53.171Z',
    dataFim: '2020-03-13T05:05:53.171Z',
  }
]

app.get(baseUrl + "interno/atividade?", (req, res) => {
  const firstItemPage = parseInt(req.query.firstItemPage, 10);
  setTimeout(() => {
    res.json({
      totalRecords: atividades.length,
      atividades: atividades.slice(firstItemPage, firstItemPage + 10)
    });
  }, 1500);
})

app.post(baseUrl + "interno/atividade", (req, res) => {
  setTimeout(() => {
    req.body.id = (new Date()).getTime();
    atividades.push(req.body);
    res.json();
  }, 1500);
})

app.put(baseUrl + "interno/atividade", (req, res) => {
  setTimeout(() => {
    atividades = atividades.map((atividade) => {
      if (atividade.id === req.body.id) {
        atividade = req.body;
      }
      return atividade;
    })
    res.json();
  }, 1500);
})

var normas = [
  {
    "id": 1,
    "nome": "Noma 01",
    "descricao": "Descrição da norma"
  },
  {
    "id": 2,
    "nome": "Noma 02",
    "descricao": "Descrição da norma"
  },
  {
    "id": 3,
    "nome": "Noma 03",
    "descricao": "Descrição da norma"
  },
  {
    "id": 4,
    "nome": "Noma 04",
    "descricao": "Descrição da norma"
  },
  {
    "id": 5,
    "nome": "Noma 05",
    "descricao": "Descrição da norma"
  },
]

app.get(baseUrl + "api-gestao-normas/catalago/normas?", (req, res) => {
  const firstItemPage = parseInt(req.query.firstItemPage, 10);
  setTimeout(() => {
    res.json({
      totalRecords: normas.length,
      normas: normas.slice(firstItemPage, firstItemPage + 10)
    });
  }, 1500);
})

app.get(baseUrl + "api-gestao-normas/catalago/normas/:idNorma", (req, res) => {
  setTimeout(() => {
    var file = fs.createReadStream('e2e/coretools.pdf');
    var stat = fs.statSync('e2e/coretools.pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=coretools.pdf');
    file.pipe(res);
  }, 1500);
})

function return401(res) {
  setTimeout(() => {
    res.status(401).send("Autenticação inválida, faça o login novamente");
  }, 1500);
}

