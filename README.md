Olá,

Nesse repositório está armazenado o meu projeto avaliativo de número 11, realizado durante o meu período de estudos na Trybe.

Importante: o intuito desse repositório é manter um histórico da minha evolução como Desenvolvedor Web, dessa forma, deve-se considerar que parte das soluções presentes no projeto foram realizadas durante a fase de aprendizado e podem não refletir as melhores práticas de desenvolvimento.

---

Projeto proposto pela Trybe:

---

## Habilidades

Nesse projeto, você será capaz de:

- Fazer requisições a uma API *(Application Programming Interface)* do Mercado Livre;
- Utilizar os seus conhecimentos sobre JavaScript, CSS e HTML;
- Trabalhar com funções assíncronas;
- Implementar testes unitários.

---

# Requisitos do projeto

## API Shopping Cart

O [manual da API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) contém muitas informações sobre ela. Utilizaremos alguns dos _endpoints_, e a forma de uso está detalhada no primeiro requisito.

---

### 1. Crie uma listagem de produtos

Este requisito pode ser feito em conjunto com o [requisito 8](#8-desenvolva-testes-de-no-mínimo-25-de-cobertura-total-e-100-da-função-fetchproducts) se você optar por aplicar TDD, para isso basta olhar as orientações do requisito 8 e aplicar o que é solicitado em conjunto.

Você deve criar uma listagem de produtos que devem ser consultados através da API do Mercado Livre.

Para isso, você terá de implementar a função `fetchProducts` que já está criada no arquivo `fetchProducts.js` que se encontra dentro da pasta `helpers`. Mas atenção, dentro do arquivo `fetchProducts.js` deve ser implementada **apenas** a função `fetchProducts`.

A função `fetchProducts` que você irá implementar, deve consumir o seguinte _endpoint_:

```javascript
"https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"
```

Onde `$QUERY` deve ser o valor da sua busca. Para este trabalho, a busca deve ser **obrigatoriamente** o termo `computador`.

O retorno desse _endpoint_ será algo no formato `json`. Por exemplo, se for pesquisado "computador":

---

**Observações técnicas:**

- O arquivo `fetchProducts.js` já está importado na estrutura do seu arquivo _HTML_;
- Para executar sua função `fetchProducts` basta chamar no seu arquivo `script.js`;
- Você **deve** utilizar a função `createProductItemElement()` para criar os componentes _HTML_ referentes a um produto.
- Adicione o elemento retornado da função `createProductItemElement(product)` como filho do elemento `<section class="items">`.
- **Obs:** as variáveis `sku`, no código fornecido, se referem aos campos `id` retornados pela API.

---

### 2. Adicione o produto ao carrinho de compras

Este requisito pode ser feito em conjunto com o [requisito 9](#9-desenvolva-testes-de-no-mínimo-50-de-cobertura-total-e-100-da-função-fetchitem) se você optar por aplicar TDD, para isso basta olhar as orientações do requisito 9 e aplicar o que é solicitado em conjunto.

Cada produto na página _HTML_ possui um botão com o nome `Adicionar ao carrinho`.

Ao clicar nesse botão você deve realizar uma requisição que irá retornar todos os dados específicos de um produto.

Para isso, você terá de implementar a função `fetchItem` que já está criada no arquivo `fetchItem.js`, que se encontra dentro da pasta `helpers`. Lá, você deverá implementar **apenas** a função `fetchItem`.

A função `fetchItem` que você irá implementar, deve consumir o seguinte _endpoint_:

```javascript
"https://api.mercadolibre.com/items/$ItemID"
```

onde `$ItemID` deve ser o valor `id` do item selecionado.

**Observações técnicas:**

- O arquivo `fetchItem.js` já está importado na estrutura do seu arquivo _HTML_;
- Para executar sua função `fetchItem` basta chamar no seu arquivo `script.js`;
- Você **deve** utilizar a função `createCartItemElement()` para criar os componentes _HTML_ referentes a um item do carrinho.
- Adicione o elemento retornado da função `createCartItemElement(product)` como filho do elemento `<ol class="cart__items">`.

---

### 3. Remova o item do carrinho de compras ao clicar nele

Ao clicar no **produto no carrinho de compra**, ele deve ser removido da lista.
Para isso, dentro do arquivo `script.js` você deve procurar pela função `cartItemClickListener(event)` e implementar a lógica necessária para realizar a remoção.

---

### 4. Carregue o carrinho de compras através do **LocalStorage** ao iniciar a página

Este requisito pode ser feito em conjunto com os requisitos [10](#10-desenvolva-testes-de-no-mínimo-75-de-cobertura-total-e-100-da-função-savecartitems) e [11](#11-desenvolva-testes-para-atingir-100-de-cobertura-total-e-100-da-função-getsavedcartitems), se você optar por aplicar TDD, para isso basta olhar as orientações dos requisitos 10 e 11 e aplicar o que é solicitado em conjunto.

Ao carregar a página, o estado atual do carrinho de compras deve ser carregado do **LocalStorage**. Para que isso funcione, o carrinho de compras deve ser salvo no **LocalStorage**, ou seja, todas as **adições** e **remoções** devem ser abordadas para que a lista esteja sempre atualizada.

Para isso, você terá de implementar as funções `saveCartItems` e `getSavedCartItems` que já estão criadas com o nome `saveCartItems.js` e `getSavedCartItems.js`, respectivamente, dentro da pasta `helpers`.

**Observações técnicas:**

- Os arquivos `saveCartItems.js` e `getSavedCartItems.js` já estão importados na estrutura do seu arquivo _HTML_;
- Para executar suas funções `saveCartItems` e `getSavedCartItems`, basta chamar no seu arquivo `script.js`;
- A função `saveCartItems` deve salvar os itens do carrinho de compras no `localStorage`, em uma chave denominada `cartItems`.
- A função `getSavedCartItems` deve recuperar os itens do carrinho de compras do `localStorage` quando carregamos a página.

---

### 5. Some o valor total dos itens do carrinho de compras

Cada vez que se adicionar um item ao carrinho de compras, será necessário somar seus valores e apresentá-los na página principal do projeto. O elemento que tem como filho o preço total dos itens do carrinho deve ter, **obrigatoriamente**, a classe `total-price`.

Obs: Devemos tomar cuidado, pois estamos buscando os dados do produto em uma API. Portanto, é necessário garantir que a API já retornou as informações para somente depois realizar o cálculo da soma.

**Atenção:** ao criar novas funções para resolver este requisito, faça as implementações **sempre** dentro do arquivo `script.js`.

---

### 6. Implemente a lógica no botão `Esvaziar carrinho` para limpar o carrinho de compras

Implemente nesse botão a lógica para remover todos os itens do carrinho de compras. O botão deve **obrigatoriamente**, ter a classe `empty-cart`.

**Atenção:** ao criar novas funções para resolver este requisito, faça as implementações **sempre** dentro do arquivo `script.js`.

---

### 7. Adicione um texto de "carregando" durante uma requisição à API

Uma requisição à API gasta um tempo e durante ele, ficamos sem saber se está tudo certo ou se algo deu errado.
Normalmente é utilizada alguma forma para mostrar a pessoa usuária que a requisição está em andamento.

* Crie um elemento que contenha o texto "carregando...", que deve ser exibido em algum lugar da página;
* Este elemento deve ser mostrado **apenas durante** a requisição à API;
* Este elemento deve **obrigatoriamente** ter a classe `loading`;

***spoiler-alert***: você pode criar uma função que adicione ao DOM o elemento com o texto "carregando" e outra para retirá-lo, o que acha?

**Atenção:** ao criar novas funções para resolver este requisito, faça as implementações **sempre** dentro do arquivo `script.js`.

---

### 8. Desenvolva testes de no mínimo 25% de cobertura total e 100% da função `fetchProducts`

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

**Observações técnicas:**

- Use o comando `npm test` para verificar se seus testes estão passando;
- **OBS:** Você deve implementar os 5 requisitos, independente do que for suficiente para a cobertura de testes.
- **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.
- Lembre-se de ler com bastante atenção o que está sendo solicitado e implemente um teste de cada vez!
- **A cobertura irá checar apenas as funções destacadas e não toda a aplicação!**

**O que você deve testar**

> Dentro da pasta `tests`, abra o arquivo `fetchProducts.test.js` e faça o solicitado:

1. Teste se `fetchProducts` é uma função;

2. Execute a função `fetchProducts` com o argumento "computador" e teste se `fetch` foi chamada;

3. Teste se, ao chamar a função `fetchProducts` com o argumento "computador", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";

4. Teste se o retorno da função `fetchProducts` com o argumento "computador" é uma estrutura de dados igual ao objeto `computadorSearch`, que já está importado no arquivo.

5. Teste se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: `You must provide an url`. **Dica:** Lembre-se de usar o `new Error('mensagem esperada aqui')` para comparar com o objeto retornado da API.

---

### 9. Desenvolva testes de no mínimo 50% de cobertura total e 100% da função `fetchItem`

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

**Observações técnicas:**

- Use o comando `npm test` para verificar se seus testes estão passando;
- **OBS:** Você deve implementar os 5 requisitos, independente do que for suficiente para a cobertura de testes.
- **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.
- Lembre-se de ler com bastante atenção o que está sendo solicitado e implemente um teste de cada vez!
- **A cobertura de testes irá checar apenas as funções que estão sendo testadas, e não toda a aplicação!**

**O que você deve testar**

> Dentro da pasta `tests`, abra o arquivo `fetchItem.test.js` e faça o solicitado:

1. Teste se `fetchItem` é uma função;

2. Execute a função `fetchItem` com o argumento do item "MLB1615760527" e teste se `fetch` foi chamada;

3. Teste se, ao chamar a função `fetchItem` com o argumento do item "MLB1615760527", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";

4. Teste se o retorno da função `fetchItem` com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto `item` que já está importado no arquivo.

5. Teste se, ao chamar a função `fetchItem` sem argumento, retorna um erro com a mensagem: `You must provide an url`. **Dica:** Lembre-se de usar o `new Error('mensagem esperada aqui')` para comparar com o objeto retornado da API.

---

### 10. Desenvolva testes de no mínimo 75% de cobertura total e 100% da função `saveCartItems`

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

**Observações técnicas:**

- Use o comando `npm test` para verificar se seus testes estão passando;
- **OBS:** Você deve implementar os 2 requisitos, independente do que for suficiente para a cobertura de testes.
- **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.
- Lembre-se de ler com bastante atenção o que está sendo solicitado e implemente um teste de cada vez!
- **A cobertura de testes irá checar apenas as funções que estão sendo testadas, e não toda a aplicação!**

**O que você deve testar**

> Dentro da pasta `tests`, abra o arquivo `saveCartItems.test.js` e faça o solicitado:

1. Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado;

2. Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado com dois parâmetros, sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento para `saveCartItems`.

---

### 11. Desenvolva testes para atingir 100% de cobertura total e 100% da função `getSavedCartItems`

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

**Observações técnicas:**

- Use o comando `npm test` para verificar se seus testes estão passando.
- **OBS:** Você deve implementar os 2 requisitos, independente do que for suficiente para a cobertura de testes.
- **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.
- Lembre-se de ler com bastante atenção o que está sendo solicitado e implemente um teste de cada vez!
- **A cobertura de testes irá checar apenas as funções que estão sendo testadas, e não toda a aplicação!**


**O que você deve testar**

> Dentro da pasta `tests`, abra o arquivo `getSavedCartItems.test.js` e faça o solicitado:

1. Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado;
2. Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado com o 'cartItems' como parâmetro.
