
## Compartilhando a lógica (baseada em Ngrx) entre o aplicativo Angular5 e Ionic3

Esta projeto compartilha as funcionalidades de lógica de negócios baseada em [@ngrx](https://github.com/ngrx/platform) entre um aplicativo Angular 5.2 e um aplicativo Ionic 3.

O projeto é baseado em uma estrutura de mono-repo do Nx Workspace (do Nrwl.io [Nx Extensions](https://github.com/nrwl/nx), um kit de ferramentas de código aberto para aplicativos corporativos Angular).

Pré-requisitos para executar do projeto:

## Configuração da API TMDB
Primeiro, você precisa obter uma conta no [TMDB](https://www.themoviedb.org) e gerar sua [chave da API](https://www.themoviedb.org/faq/api).

#### [Angular CLI](https://cli.angular.io)
```sh
$ npm install -g @angular/cli
```
#### [Ionic CLI](http://ionicframework.com/docs/cli/)

**IMPORTANTE:** `Instalar as versões abaixo:`
```sh
$ npm install -g ionic@3.19.0 cordova@7.0.1
```

### Aplicativo Angular 5.2
```sh
# Instalar dependências
$ npm i
```

```sh
# Para executar o aplicativo Angular localmente
$ ng s 
```

```sh
# Abra o navegador e acesse http://localhost:4200/
O aplicativo será recarregado automaticamente quando você alterar algum arquivo.
```

## Localhost com a flag de produção

```sh
$ ng s --env=prod
```

> **IMPORTANTE:** `Esse comando gera os arquivos utilizando o build de produção, mas não faz a minificação dos arquivos`.

## Build: PRODUÇÃO

```sh
$ ng build --env=prod
```

Os arquivos do build serão armazenados no diretório `dist/`.


### Aplicativo Ionic3

```sh
# Acesse o diretório do aplicativo móvel Ionic
$ cd ./apps/mobile
```
```sh
# Instalar dependências
$ npm i
```
# Para executar o aplicativo Ionic3 localmente
```sh
ionic serve
```
### Referências
* [Sharing (Ngrx-based) logic between Angular5 web app and Ionic3 mobile app](https://medium.com/agorapulse-stories/sharing-ngrx-based-logic-between-angular5-web-app-and-ionic3-mobile-app-77c19470cccc)

---

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 1.7.4 usando  [Nrwl Nx](https://nrwl.io/nx).
