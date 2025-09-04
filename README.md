# 📌 API Cache Interface (Node.js + Express)

Esta é uma API REST simples desenvolvida em **Node.js/Express**, com **cache em memória** e uma **interface web** para testar endpoints.

## 🚀 Funcionalidades
- Criar usuários (`POST /users`)
- Listar todos os usuários (`GET /users`)
- Buscar usuário por ID (`GET /users/:id`)
- Atualizar usuário (`PUT /users/:id`)
- Deletar usuário (`DELETE /users/:id`)
- Armazenamento em **cache em memória** (sem banco de dados)
- Interface web simples em `/public/index.html` para testar

---

## 📂 Estrutura do Projeto

```
api-cache-interface/
├── package.json
├── server.js
├── public/
│   ├── index.html
│   └── script.js
└── README.md
```

---

## ⚙️ Instalação e Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/Domy531-dev/api-cache-interface.git
cd api-cache-interface
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar a API
```bash
npm start
```

A API estará disponível em:  
👉 [http://localhost:3000](http://localhost:3000)

A interface web de teste estará em:  
👉 [http://localhost:3000/index.html](http://localhost:3000/index.html)

---

## 📡 Endpoints

### 🔹 Listar todos os usuários
```http
GET /users
```

### 🔹 Buscar usuário por ID
```http
GET /users/:id
```

### 🔹 Criar novo usuário
```http
POST /users
Content-Type: application/json

{
  "name": "Vinicius",
  "email": "vinicius@example.com"
}
```

### 🔹 Atualizar usuário
```http
PUT /users/:id
Content-Type: application/json

{
  "name": "Vinicius Silva",
  "email": "vinicius.silva@example.com"
}
```

### 🔹 Remover usuário
```http
DELETE /users/:id
```

---

## 🧰 Dependências
- [Express](https://www.npmjs.com/package/express) - Framework web
- [Body-parser](https://www.npmjs.com/package/body-parser) - Parser JSON
- [CORS](https://www.npmjs.com/package/cors) - Permitir acesso externo
- [UUID](https://www.npmjs.com/package/uuid) - Gerar IDs únicos

---

## 📝 Licença
Este projeto é livre para estudos e modificações.  
Sinta-se à vontade para usar, clonar e contribuir. 🚀
