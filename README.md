# redux-docs

Repositório para versionamento da leitura do starter guide do redux

## Sobre

Redux é um container de estado global para aplicativos javascript. Ele ajuda a escrever aplicativos consistentes e faceis de testar. Além de fornecer uma ótima experiência para o desenvolvedor, como [edição de código ao vivo combinada com um depurador de viagem no tempo.](https://github.com/reduxjs/redux-devtools).

Você pode usar o Redux junto com o React, ou com qualquer outra biblioteca. É minusculo (2kb, incluindo dependencias), mas tem um grande ecossistema de addons disponíveis.

## Instalacao

A equipe do Redux recomenda a instalação do [Redux Toolkit](https://redux-toolkit.js.org/) para escrever lógica Redux. Ele envolve o núcleo do Redux e contém pacotes e funções que são consideradas essenciais para a construção de um aplicativo Redux. O Redux Toolkit se baseia nas melhores práticas, simplifica a maioria das tarefas do redux, evita erros comuns e torna mais fácil escrever aplicativos Redux.

Quer você seja um novo usário do Redux configurando seu primeiro projeto, ou um usuário experiente que deseja simplificar um aplicativo existente, o Redux Toolkit pode ajudá-lo faça o seu código Redux melhor.

O Redux Toolkit (RTK) está disponível como um pacote no NPM para uso com um empacotador de módulo ou em um aplicativo Node:

> npm install @reduxjs/toolkit
> yarn add @reduxjs/toolkit

### Criando um aplicativo React Redux

A maneira recomendada de iniciar novos aplicativos com React e Redux é usando os modelos oficiais de Redux + JS e Redux + TS para create-react-app, que aproveita do Redux toolkit.

    npx create-react-app my-app --template redux
    npx create-react-app my-app --template redux-typescript

## Configurando store

A função configureStore faz todo o trabalho duro para nós. Ele cria a store (estado global), combina nossos redutores e tem um bom middleware integrado.

## Conectando store ao aplicativo

Para importar e compartilhar o estado global para toda a aplicação, é necessário importar uma função da lib react-redux chamada Provider, essa função recebe como propriedade o nome da store global.

    import store from "./store/store.js;
    import {Provider} from "react-redux";
    <Provider store={store}>
        <App/>
    </Provider>

