# 🍬 Doce Mix - Site de Doces

Um projeto full-stack para uma loja de doces com **Node.js/Express** no backend e **React/Vite** no frontend.

## 📋 Pré-requisitos

- **Node.js** v18+ e **npm** v10+
- **PostgreSQL** ou **MySQL** instalado localmente ou em um servidor

## 🚀 Instalação

### 1. Clonar e Instalar Dependências

```bash
# Instalar dependências do backend
npm install

# Instalar dependências do frontend
cd frontend
npm install
cd ..
```

### 2. Configurar o Banco de Dados

Edite `src/config/config.json` com suas credenciais:

```json
{
  "development": {
    "username": "seu_usuario",
    "password": "sua_senha",
    "database": "docemix_db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

### 3. Executar Migrações

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

## 🛠️ Desenvolvimento

### Opção 1: Rodar Frontend e Backend Separadamente

**Terminal 1 - Backend:**
```bash
npm run dev
```
O servidor estará disponível em `http://localhost:3000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
A aplicação React estará disponível em `http://localhost:5173`

### Opção 2: Rodar Tudo Junto (com concurrently)

```bash
npm install -D concurrently npm-run-all
```

Adicione ao `package.json` raiz:
```json
"scripts": {
  "dev": "concurrently \"npm:server\" \"npm:client\"",
  "server": "nodemon src/index.js",
  "client": "cd frontend && npm run dev"
}
```

Depois execute:
```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
Doce-Mix/
├── src/
│   ├── config/          # Configuração do banco
│   ├── models/          # Modelos Sequelize
│   ├── controllers/     # Lógica de negócio
│   ├── routes/          # Rotas da API
│   └── index.js         # Entrada do servidor
├── frontend/
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── pages/       # Páginas
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── package.json
```

## 🍫 Funcionalidades Planejadas

- [x] Estrutura base backend/frontend
- [ ] Modelo `Candy` com listagem
- [ ] CRUD completo de doces
- [ ] Página de produtos
- [ ] Carrinho de compras
- [ ] Autenticação de admin
- [ ] Upload de imagens
- [ ] Busca e filtros

## 🔗 Endpoints da API (Planejados)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/candies` | Lista todos os doces |
| GET | `/api/candies/:id` | Detalhe de um doce |
| POST | `/api/candies` | Criar novo doce |
| PUT | `/api/candies/:id` | Atualizar doce |
| DELETE | `/api/candies/:id` | Deletar doce |

## 📦 Scripts Disponíveis

**Backend:**
- `npm run dev` - Inicia servidor com nodemon
- `npm test` - Executa testes

**Frontend:**
- `npm run dev` - Inicia Vite dev server
- `npm run build` - Build para produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Rodaeeslint

## 🐛 Troubleshooting

**Erro de conexão com banco:**
- Verifique `src/config/config.json` com suas credenciais
- Certifique-se que o banco está rodando

**Porta 3000/5173 já em uso:**
```bash
# Mude a porta no código ou encerre o processo anterior
lsof -i :3000  # Linux/Mac
netstat -ano | findstr :3000  # Windows
```

## 📝 Licença

ISC

---

**Desenvolvido com ❤️ para os amantes de doces!** 🍭
