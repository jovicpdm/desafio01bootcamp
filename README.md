
# Desafio Bootcamp #1
Esse repositório contém um desafio do Bootcamp da RocketSea. O desafio consistia em criar um api de que fizesse o CRUD com repositórios.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/jovicpdm/desafio01bootcamp
```

Entre no diretório do projeto

```bash
  cd desafio01bootcamp
```

Instale as dependências

```bash
  npm install
```

ou

```bash
yarn
```

Inicie o servidor

```bash
  npm run dev
```

ou 

```bash
  yarn dev
```

## Documentação da API

#### Retorna todos os repositórios

```http
  GET /repositories
```

#### Adiciona um repositório

```http
  POST /repositories
```


| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O título do repositório |
| `url`      | `string` | **Obrigatório**. O link do repositório |
| `techs`      | `string` | **Obrigatório**. As tecnologias usadas no repositório



Os parâmetros são passados no body da requisição

#### Edita um repositório

```http
  PUT /repositories/:id
```


| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Opcional**. O título do repositório |
| `url`      | `string` | **Opcional**. O link do repositório |
| `techs`      | `string` | **Opcional**. As tecnologias usadas no repositório



Os parâmetros são passados no body da requisição


#### Apaga um repositório

```http
  GET /repositories/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O id do repositório |

#### Adiciona um like à um repositório

```http
  POST /repositories/:id/like
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O id do repositório |
