# 💜 Habit Tracker (Em Desenvolvimento)

Um gerenciador de hábitos e tarefas minimalista, focado em produtividade e consistência. O projeto conta com um design limpo, interações sonoras e uma interface agradável para o usuário acompanhar sua rotina.

> ⚠️ **Nota:** Este projeto está atualmente **em desenvolvimento**. Novas funcionalidades, refatorações de código e migrações de tecnologia estão sendo implementadas ativamente.

---

## 🎨 O Projeto
O design foi desenvolvido com uma temática **roxa em tons pastéis**, buscando transmitir tranquilidade e foco. As interações nos botões contam com **efeitos sonoros minimalistas** para dar um feedback auditivo satisfatório ao concluir ou remover tarefas.

### 🚀 Funcionalidades Já Implementadas
*   **Adicionar Tarefas:** Botão dedicado "Add new task" que gera novos itens na lista de forma dinâmica.
*   **Conclusão de Hábitos:** Botão integrado para marcar tarefas concluídas.
*   **Remoção Dinâmica:** Botão de lixeira (com efeito visual de abrir/fechar no hover) para deletar tarefas.
*   **Efeitos Sonoros:** Sons minimalistas ativados pelas ações dos botões da lista.
*   **Persistência local:** Salvamento do estado da lista para que as tarefas não sumam ao atualizar a página.

---

## 🛠️ Tecnologias Utilizadas

Atualmente, o projeto é construído com a base pura da web (**Vanilla JS**):

*   **HTML5:** Estruturação dos elementos e containers.
*   **CSS3:** Estilização baseada em variáveis de cores pastéis, efeitos de `hover` e responsividade com `Media Queries`.
*   **JavaScript (ES6):** Manipulação de arrays, eventos do DOM e integração com o `localStorage`.

---

## 📅 Próximos Passos (Roadmap de Evolução)

Como o projeto está em desenvolvimento contínuo, as próximas metas de implementação são:

1.  **Filtros Avançados:** Criação de um separador de tarefas completas e incompletas utilizando os métodos `.filter()`, `.map()` e `.forEach()`.
2.  **Estruturação de Dados:** Mudança da lógica interna para gerenciar as tarefas como um Array de Objetos com IDs únicos (`dataset.id`).
3.  **Lógica Semanal:** Adição de botões para os dias da semana (S, T, Q, Q, S, S, D).
4.  **Refatoração para React:** Migração completa da arquitetura do projeto de Vanilla JS para React, visando um gerenciamento de estado mais performático.

---

## 🔧 Como Rodar o Projeto Localmente

1. Faça o clone deste repositório:
   ```bash
   git clone https://github.com/RN08128/HabitTracker.git
