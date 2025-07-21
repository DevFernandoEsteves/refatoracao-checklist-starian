# 📘 Relatório de Progresso - Projeto Laravel + Angular com Docker

## ✅ Atividades Realizadas

### 🐛 Correção de Problemas
- Corrigido o problema de `CSRF Token` que impedia o envio de formulários corretamente via Angular/Laravel.
- Solucionado o problema de conexão com o banco de dados no Docker, com ajuste na configuração de rede e credenciais.

### 🧱 Estrutura de Backend (Laravel)
- Criado o arquivo `.env` com as configurações adequadas para o ambiente de desenvolvimento.
- Configuração e criação do banco de dados MySQL.
- Criação de migrations para estruturação do banco.
- Criação do `Model` e `Controller` para a entidade `Todo`.
- Implementação de rotas RESTful organizadas com `Route::prefix` e `Route::resource`.
- Requisições do Angular agora conectam corretamente com o backend Laravel.

### 🖥️ Estrutura de Frontend (Angular)
- Criadas tipagens apropriadas para manipulação de dados (`TodosResponse`, `ErrorResponse`, etc).
- Aplicadas boas práticas de organização de código e reutilização de interfaces.
- Tratamento de erros via `subscribe`, com checagem de propriedades para validação.
- Criação de `service` podendo ser reutilizado e centralizado a comunicação com o backend.
- Estilização e estruturação de templates organizados.
- Remoção de usos indevidos de `any[]`, substituindo por tipagens explícitas e seguras.

### 🐳 Docker
- Ajustado `docker-compose.yml` para rodar Laravel, MySQL e Angular simultaneamente.
- Projeto está funcional tanto via Docker quanto em ambiente local utilizando XAMPP, `php artisan serve` ou `ng serve`.

---

## 🚀 Resultado Final

O sistema `Todo` está 100% funcional:

- **Backend:** Laravel com banco MySQL (Docker ou local)
- **Frontend:** Angular com integração completa ao backend
- **Tipagens, validações e tratamento de erros implementados**
- **Docker funcionando corretamente**

---

## 🧠 Considerações

Este teste foi uma ótima oportunidade para demonstrar como um código legado pode ser modernizado com:

- Separação clara de responsabilidades entre frontend e backend
- Padronização de tipagens e estrutura de diretórios
- Adoção de práticas modernas de desenvolvimento
- Foco em performance, legibilidade e escalabilidade

---

_Refatorado por: Fernando Esteves_
