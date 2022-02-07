[<img alt="Deployed with FTP Deploy Action" src="https://img.shields.io/badge/Deployed With-FTP DEPLOY ACTION-%3CCOLOR%3E?style=for-the-badge&color=2b9348">](https://github.com/modestoartur/ilegra-desafio-front/blob/master/.github/workflows/main.yml)
[![Heroku CI Status](https://ilegra-desafio-front.herokuapp.com/last.svg)](https://dashboard.heroku.com/pipelines/596e53a6-7f59-434a-a34c-42954bb5bee3/tests)

# ILEGRA DESAFIO FRONT

## CI-1: https://ilegra-desafio-front.herokuapp.com/

## CI-2: https://ilegra.000webhostapp.com/

## Inicio rapido

Execute `npm run start` automaticamente abrirá o `http://localhost:4200/`.

## Docker

Execute `make buildrun` e em seguida `make run`.

## Build

Execute `npm run build` para buildar o projeto. Artefatos ficarão na pasta `dist/`.

## Buildando com estasticas dos artefatos

Execute `npm run build:stats` os artefatos ficarão na pasta `dist/` e as estasticas serao exibidas no console

## Setup de ambiente de desenvolvimento

```shell
  % apt-get install -y nodejs npm
  % npm install
  % npm run start
```

## Geracao de scaffold

Execute `ng generate component nome-do-component` tambem pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Executando testes unitarios

Execute `npm run test:unit` para executar os testes.

## Executando testes unitarios e relatorios de cobertura

Execute `npm run test:cov` para executar os testes e gerar os relatorios.

## Executando testes de ponta a ponta (E2E)

Execute `npm run test:e2e` para executar os testes.
