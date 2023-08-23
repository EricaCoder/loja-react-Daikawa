# Loja React - Julia Kombucha

Loja de Kombucha, para o projeto final do curso de React da CoderHouse.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Desafio: Criar App utilizando CLI
- usando CRA
- comandos realizados
- README.md editado.

## Desafio 2: Menu e-commerce
- adicionado gh-pages [Deploying a React App* to GitHub Pages](https://github.com/gitname/react-gh-pages)
- adicionado navbar usando bootstrap

## Desafio 3: Crie sua Landing Page
- Criado componente CartWidget usando ícone (biblioteca fontAwesome). Componente importado dentro da NavBar.
- Adicionado estilos na NavBar usando Bootstrap.
- Criado compontente container ItemListContainer, contendo componentes de Título, Itens e Inputs. Componente importado dentro de App, abaixo da NavBar.

## Desafio 4: Contador com Botão
- Criado componente `ItemCount`, que aceita as props: `stock`, `initial` e `productName`.
- Criada prop `children` em `ItemListContainer`.
- `ItemCount` importado em `App.jsx`, incorporando como `children` dentro de `ItemListContainer`.

## Desafio 5 - Catálogo com maps
- Criado componente `Item` destinado a mostrar um card do produto, que deverá mostrar mais detalhes ao se clicado (a ser implementado mais à frente, conforme consta no desafio)
- Criado componente `ItemList` que serve como um agregador de `Item`, incorporado dentro de `ItemListContainer`.
- Criada uma `async mock` (promise) faz um chamado assíncrono a um mock estático de dados `items`, retornando em 2 minutos para emular adiamento da rede.

## Desafio 6 - Detalhe do Produto
- Criado componente `ItemDetailContainer` que contém a lógica para pegar o item dentro de `ItemDetail`
- Criado componente `ItemDetail` e adicionado lógica para lista de Favoritos
- Criado arquivo `data.js` para poder separar dados de lógica
- Refatorações:
  - Usando a mesma lógica acima, foi feito o refactor de `Item List`, deixando esse componente puro, e inserindo a lógica em `ItemListContainer`
  - Refactor de `Item`
  - Refactor de `ItemCount` e inserido a lógica de verificação de estoque.

## Desafio 7 - Sincronizar Counter
- [Já feito no desafio anterior] Importar o `ItemCount` no `ItemDetail`
- Configurado o evento de compra seguindo os detalhes do manual
- `ItemDetail` agora espera eventos de `ItemCount`
- Adicionado estado em `ItemDetail` para fazer `ItemCount` desaparecer
- Adicionado botão para finalizar compra. Falta a rota `/cart`

## PRIMEIRA ENTREGA - Navegabilidade (Routing)
- Instalado o `react-router-dom`
- `/` leva a <ItemListContainer />
- `/category/:category` leva a <ItemListContainer />
- `/item/:id` leva a <ItemDetailContainer />
- Criadas rotas também para o `Cart`, `Checkout`, Sobre, Contato e página de erro 404 - Not Found
- Navbar com cart presente
- Catálogo presente
- Detalhe do produto presente
- Arquivo readme.md (este arquivo)
- Responsividade mobile para os detalhes do produto
- Adicionado Breadcrumbs nas páginas de Categorias e de Detalhes do Produto.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
