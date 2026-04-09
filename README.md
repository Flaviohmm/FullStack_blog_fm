# 🚀 Fullstack App — React (Vite) + Spring Boot

Aplicação fullstack moderna com frontend em **React + Vite** e backend em **Java Spring Boot**, focada em performance, organização e escalabilidade.

---

## 📸 Visão Geral

Este projeto é um blog/plataforma pessoal com foco em:

* 🐧 Linux & Open Source
* 💻 Tecnologia & Desenvolvimento
* 📈 Economia & Bitcoin
* 🔐 Privacidade Digital
* 🌍 Liberdade & Política

---

## 🧱 Stack Tecnológica

### Frontend

* React
* Vite
* TailwindCSS
* shadcn/ui
* React Router DOM
* Lucide Icons

### Backend

* Java 17+
* Spring Boot
* Spring Web
* Spring Data JPA
* Banco de dados (PostgreSQL ou H2)

---

## 📁 Estrutura do Projeto

```
project-root/
│
├── frontend/         # React + Vite
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── backend/          # Spring Boot
│   ├── src/main/java/
│   ├── src/main/resources/
│   └── pom.xml
│
└── README.md
```

---

## ⚙️ Como rodar o projeto

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

---

### 🔹 2. Rodar o Backend (Spring Boot)

```bash
cd backend

# usando Maven Wrapper
./mvnw spring-boot:run

# ou
mvn spring-boot:run
```

📍 O backend estará disponível em:

```
http://localhost:8080
```

---

### 🔹 3. Rodar o Frontend (Vite)

```bash
cd frontend

npm install
npm run dev
```

📍 O frontend estará disponível em:

```
http://localhost:5173
```

---

## 🔌 Integração Frontend ↔ Backend

Configure a URL da API no frontend:

Exemplo (`.env` no Vite):

```
VITE_API_URL=http://localhost:8080/api
```

Uso no código:

```js
fetch(`${import.meta.env.VITE_API_URL}/posts`)
```

---

## 📡 Exemplo de API (Spring Boot)

### Controller

```java
@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {

    @GetMapping
    public List<Post> getAllPosts() {
        return List.of(
            new Post("Título 1", "Conteúdo..."),
            new Post("Título 2", "Conteúdo...")
        );
    }
}
```

---

## 🎨 Funcionalidades do Frontend

* Página inicial com hero section
* Listagem de tópicos
* Posts em destaque
* Navegação com React Router
* UI moderna com Tailwind + animações

---

## 🧠 Boas práticas aplicadas

* Separação clara frontend/backend
* Componentização no React
* Uso de variáveis de ambiente
* API REST padronizada
* Design responsivo

---

## 🚀 Melhorias futuras

* 🔐 Autenticação (JWT)
* 📝 CRUD completo de posts
* 💬 Comentários
* 🌙 Dark mode persistente
* 📊 Dashboard admin
* ☁️ Deploy (Docker + CI/CD)

---

## 🐳 (Opcional) Rodar com Docker

```bash
docker-compose up --build
```

---

## 📄 Licença

MIT License — use livremente.

---

## ✍️ Autor

Flavio Macedo
Entusiasta de tecnologia, liberdade e sistemas open source.
