# Teachy Frontend Challenge

Este projeto consiste no desenvolvimento de uma aplicação web para exibição de informações sobre os personagens do universo Star Wars, utilizando a [API oficial](https://swapi.dev/). A aplicação implementa **paginações infinitas**.

## Funcionalidades

- Exibição dos personagens de Star Wars com dados como nome, gênero, altura, e muito mais.
- Implementação de **paginações infinitas** para carregar mais personagens à medida que o usuário rola a página.
- Interface interativa e responsiva, projetada para proporcionar uma experiência de usuário fluida e sem interrupções.

## Layout

O layout da aplicação segue o seguinte design:

![Layout Referência](https://github.com/user-attachments/assets/96bfbf45-66fe-4dfd-98a1-d65e9c9b91fc)

## Tecnologias Utilizadas

- [Next.Js v15.1.6](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)

## Requisitos

- Node.js
- pnpm

## Iniciando o Projeto

Siga os passos abaixo para rodar o projeto no seu ambiente local:

1. Clone o repositório:

```sh
git clone https://github.com/enyasantos/teachy-challenge
cd ./front
```

2. Instale as dependências do projeto:

```sh
pnpm install
```

3. Crie um arquivo .env.local com os dados do arquivo .env.example

```
SWAPI_URL="https://swapi.dev/api"
```

4. Para rodar o projeto em modo de desenvolvimento com recarga ao vivo, execute:

```sh
pnpm dev
```

5. Abra http://localhost:3000 no seu navegador favorito para visualizar o projeto.

## Executando com Docker

### Pré-requisitos

Antes de começar, você precisa ter o seguinte instalado na sua máquina:

- [Docker](https://www.docker.com/get-started) - Para executar o aplicativo dentro de um contêiner.
- [Docker Compose](https://docs.docker.com/compose/) - Para orquestrar múltiplos contêineres.

### Executando o Docker

1. Construção da Imagem Docker

Para construir a imagem Docker do projeto, execute o seguinte comando:

```sh
docker build -t teachy-app .
```

2. Iniciando o Aplicativo com Docker Compose

Para iniciar o aplicativo e seus serviços usando Docker Compose, execute o comando abaixo:

```sh
 docker compose up
```
