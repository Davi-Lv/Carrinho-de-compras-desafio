
# Carrinho de compras - Desafio
![image](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/assets/85120918/89a6e095-f745-48b4-b118-b5f23bcf9c56)


[![React Native](https://img.shields.io/badge/React%20Native-0.66.3-blue)](https://reactnative.dev/)
[![Context API](https://img.shields.io/badge/Context%20API-17.0.2-green)](https://pt-br.reactjs.org/docs/context.html)

Este é um aplicativo para listar produtos e adicionar no carrinho de compra, desenvolvido em React Native. Ele foi criado como um desafio para avaliar o meu potencial como desenvolvedor.

## Introdução

O aplicativo consiste em tres telas: uma que mostra a lista de produtos disponíveis, uma que mostra o produto com mais detalhes e outra que mostra o carrinho de compra com os produtos selecionados. O usuário pode navegar entre as telas, adicionar ou remover produtos do carrinho, e ver o valor e quantidade total da compra.

O aplicativo usa a Context API para gerenciar o estado global dos produtos e do carrinho, permitindo o acesso e a atualização dessas informações em qualquer componente. Os dados dos produtos são armazenados em um array, mas podem ser facilmente substituídos por uma fonte externa, como uma API.

O layout do aplicativo foi inspirado no mockup em anexo, buscando fidelidade e responsividade.

## Instalação

Para instalar e executar o aplicativo, você precisa ter o [Node.js](https://nodejs.org/en/) e o [Expo](https://expo.dev/) instalados na sua máquina. Em seguida, siga os passos abaixo:

1. Clone o repositório do GitHub:

```bash
git clone https://github.com/Davi-Lv/Carrinho-de-compras-desafio.git
```

2. Entre na pasta do projeto:

```bash
cd Carrinho-de-compras-desafio
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o Expo:

```bash
expo start
```

5. Abra o aplicativo no seu dispositivo ou web, usando o QR code ou o link fornecidos pelo Expo.

## Uso

Para usar o aplicativo, basta seguir os passos abaixo:

- Na tela inicial, você verá a lista de produtos disponíveis, com o nome, a imagem e preço de cada um.
- Para adicionar um produto ao carrinho, clique no produto para ver mais detalhes e toque no botão "+" logo a baixo do produto, logo apois clicar em "adicionar ao carrinho" Você verá o número de itens no carrinho aumentar no canto superior direito da tela.
- Para remover um produto do carrinho, toque no botão "-" ao lado do produto. Você verá o número de itens no carrinho diminuir no canto superior direito da tela.
- Para ver o carrinho de compra, toque no ícone do carrinho no canto superior direito da tela. Você será levado para a tela do carrinho, onde você verá os produtos que você adicionou, com o nome, a imagem, o preço e o subtotal de cada um.
- Para remover um produto do carrinho, deslize o produto para a esquerda e toque no botão "Remover". Você verá o produto desaparecer da lista e o total da compra se atualizar.
- Para voltar para a tela inicial, toque no botão "Voltar" no canto superior esquerdo da tela. Você será levado para a tela de produtos, onde você poderá continuar adicionando ou removendo produtos do carrinho.

## Documentação

Para mais detalhes sobre o projeto, consulte os seguintes arquivos e páginas:

- [App.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/App.js): o arquivo principal do aplicativo, que contém a navegação entre as telas e o provedor do contexto global.
- [src/context/ProductsContext.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/context/ProductsContext.js): o arquivo que define o contexto global dos produtos e do carrinho, com as funções para adicionar, remover e atualizar os itens.
- [src/screens/ProductsScreen.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/screens/ProductsScreen.js): o arquivo que define a tela de produtos, com a lista de produtos.
- [src/screens/ProductsScreen.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/screens/ProductDetails.js): o arquivo que contem mais detalhes do produto selecionado com os botões para adicionar ou remover do carrinho.
- [src/screens/CartScreen.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/screens/CartScreen.js): o arquivo que define a tela do carrinho, com a lista de produtos no carrinho e o valor total da compra.
- [src/components/ProductItem.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/components/ProductItem.js): o arquivo que define o componente de um produto, com o nome, a imagem= e preço.
- [src/components/CartItem.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/components/CartItem.js): o arquivo que define o componente de um item no carrinho, com o nome, a imagem, o preço, a quantidade e o subtotal.
- [src/data/products.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/data/products.js): o arquivo que contém o array com os dados dos produtos, como o id, o nome, a imagem e preço.
- [src/styles/styles.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/styles/styles.js): o arquivo que contém os estilos globais do aplicativo, como as cores, as fontes e as dimensões.
