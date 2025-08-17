# Starting-CI-CD

Projeto didático para configurar um pipeline simples de Integração Contínua (CI) e Entrega Contínua (CD) usando GitHub Actions e Vercel.

## Workflows (em .github/workflows)

- CI (ci.yml)
  - Quando roda: em todo `push` e `pull_request`.
  - Objetivo: validar o código e empacotar o build do projeto.
  - O que faz (passos principais):
    - Checkout do repositório.
    - Configura Node.js 22 (com cache do npm).
    - Instala dependências (`npm install`).
    - Executa os testes (`npm test`).
    - Gera um build simples criando a pasta `dist/` e copiando `src/` e `index.html`.
    - Publica o artifact `dist` (para ser usado pelo CD).
  - Observação: define `TZ=America/Sao_Paulo` para evitar variações de fuso horário nos testes.

- CD - Deploy Vercel (cd.yml)
  - Quando roda: após a conclusão do workflow "CI" (gatilho `workflow_run`), somente se o CI finalizar com sucesso.
  - Objetivo: fazer o deploy exatamente do artifact gerado no CI.
  - O que faz (passos principais):
    - Baixa o artifact `dist` do run do CI que acionou o CD.
    - Deploy de Preview na Vercel para PRs e branches diferentes de `main`.
    - Deploy de Produção na Vercel quando a branch é `main`.
  - Requisitos (GitHub Secrets): `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
  - Por que usar artifact? Garante que o mesmo pacote que passou nos testes (CI) é o que vai para produção (CD).
