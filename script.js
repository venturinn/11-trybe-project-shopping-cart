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
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

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

function removeItem(item) {
  if (item.parentElement !== null) { // Verificar essa linha 
  item.parentElement.removeChild(item);
  saveCartItems(item.parentElement);
  }
  }
  
  function cartItensClickMonitor() {
  const cartItems = document.querySelectorAll('.cart__item');
  
  cartItems.forEach((item) => {
    item.addEventListener('click', function () { removeItem(item); });
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
const cartItems = document.querySelector('.cart__items');
cartItems.appendChild(cartItem);

saveCartItems(cartItems);

cartItensClickMonitor();
};

function buttonsAddMonitor() {
const buttonsAddProduct = document.querySelectorAll('.item__add');

buttonsAddProduct.forEach((button) => {
button.addEventListener('click', function () { addProduct(button.parentElement.firstElementChild.innerText); });
});
}

// Requisito 04:

function restoreCartItems() {
  const objectStorage = JSON.parse(localStorage.getItem(0));

  if (objectStorage !== null) {
  objectStorage.sku.forEach((sku) => {
    addProduct(sku);
  });
}
}

window.onload = async () => { await products(); buttonsAddMonitor(); restoreCartItems(); };
