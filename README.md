# MaxFit Treinos

É um sistema simples de registro e visualização de treinos e atividades físicas, construído com React e armazenando os dados localmente no navegador.

## Funcionalidades

- Registro de treinos com:
  - Nome do exercício
  - Repetições
  - Peso (kg)
  - Duração (minutos)
- Visualização de todos os treinos registrados
- Exclusão de atividades
- Armazenamento com localStorage
- Layout responsivo e estilizado com styled-components

## Tecnologias Utilizadas

- React;
- React Router DOM;
- Styled-Components;
- HTML, CSS(styled-components) e JavaScript;

## Estrutura do Projeto

```
src/
├── App.jsx             # Configuração de rotas e layout global
├── Home.jsx            # Página com lista dos treinos
└── Register.jsx        # Formulário de registro de treino
```

## Lógica e Armazenamento

- Os treinos são armazenados em localStorage como JSON.
- Ao cadastrar, os dados são validados.
- O estado da lista de treinos é atualizado com React useState e useEffect.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Luis-Estevam/ProjetoFinal_MaxFitTreinos.git
cd ProjetoFinal_MaxFitTreinos
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm run dev
```
