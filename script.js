const cartItems = document.querySelector('.cart__items');
const totalPriceChild = document.querySelector('.totalPriceChild');
const memoryCartItems = getSavedCartItems();
let totalPriceValue = 0;

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Requisito 05:

function sumTotalPrice(number) {
  totalPriceValue += number;
  totalPriceChild.innerText = `$ ${totalPriceValue.toFixed(2)}`;
  }

function subtractTotalPrice(number) {
  totalPriceValue -= number;
  totalPriceChild.innerText = `$ ${totalPriceValue.toFixed(2)}`;
  }

// Requisito 01:
const products = async () => {
  const productList = await fetchProducts('computer');

  productList.results.forEach((element) => {
    const { id, title, thumbnail } = element;

    const product = {
      sku: id,
      name: title,
      image: thumbnail,
    };

    const sectionElement = createProductItemElement(product);
    const itens = document.querySelector('.items');
    itens.appendChild(sectionElement);
  });
};

// Requisito 03:

const getProductPrice = async (sku) => {
  const productData = await fetchItem(sku);
  const { price } = productData;
  return price;
};

const removeItem = async (item, index) => {
    if (item.parentElement !== null) { // Verificar essa linha
    cartItems.removeChild(item);

    memoryCartItems.splice(index, 1);
    saveCartItems(memoryCartItems); // Atualiza o Local Storage com os produtos removidos

    const itemSku = item.innerText.substring(5, 18); // Extrai a sku do produto
    const priceProductremove = await getProductPrice(itemSku); // Busca o preço na API
    subtractTotalPrice(priceProductremove); 
  }
  };

function cartItensClickMonitor() {
  const cartItem = document.querySelectorAll('.cart__item');

  cartItem.forEach((item) => {
    item.addEventListener('click', function () {
      // Captura o index da li clicada:
      // reference: https://stackoverflow.com/questions/48977577/how-to-get-the-index-of-the-li-clicked-in-javascript
      const liArray = Array.from(cartItems.children);
      const index = liArray.indexOf(item);
      removeItem(item, index);
    });
  });
}

// Requisito 02:

const addProduct = async (ProductId) => {
  // const ProductId = parent.firstElementChild.innerText;
  const productData = await fetchItem(ProductId);
  const { id, title, price } = productData;
  const product = {
    sku: id,
    name: title,
    salePrice: price,
  };
  const cartItem = createCartItemElement(product);
  cartItems.appendChild(cartItem);

  cartItensClickMonitor(); // Atualiza itens adicionados ao carrinho que terão o 'click' monitorado

  memoryCartItems.push(product); // Adiciona cada produto selecionado ao array que será armazenado no Local Storage
  saveCartItems(memoryCartItems); // Salva array de objetos no Local Storage

  sumTotalPrice(product.salePrice);
};

function buttonsAddMonitor() {
  const buttonsAddProduct = document.querySelectorAll('.item__add');

  buttonsAddProduct.forEach((button) => {
    const productClickDescribe = button.parentElement.firstElementChild.innerText;
    button.addEventListener('click', function () {
      addProduct(productClickDescribe);
    });
  });
}

// Requisito 04:

function restoreCartItems() {
  const storage = getSavedCartItems();

  storage.forEach((product) => {
    const cartItem = createCartItemElement(product);
    cartItems.appendChild(cartItem);
    sumTotalPrice(product.salePrice); // Refaz a somatória dos preços dos produtos no carrinho
  });
}

window.onload = async () => {
  await products();
  buttonsAddMonitor();
  restoreCartItems();
  cartItensClickMonitor();
};
