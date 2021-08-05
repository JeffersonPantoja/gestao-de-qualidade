# Protótipo criado para apresnetação do TCC do curso de Arquitetura de Software Distribuído na PUC Minas Virtual

Instalações necessárias:
  docker-engine
  docker-compose
  docker-machine
  aws cli

para rodar no localhost:
  sudo docker build -t sgq .
  sudo docker run -d -p 4200:4200 -p 8080:8080 sgq

para rodar na aws:
  aws configure
  docker-machine env aws01
  eval $(docker-machine env aws01)
  docker-compose up -d

  eval $(docker-machine env -u)
