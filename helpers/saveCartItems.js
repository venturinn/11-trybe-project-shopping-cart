const saveCartItems = (cartItems) => {
localStorage.clear();

const skuMemory = [];

for (let index = 0; index < cartItems.children.length; index += 1) {
const productDescribe = cartItems.children[index].innerText;
const productSku = productDescribe.substring(5, 18);
skuMemory.push(productSku);
}

const objectStorage = { sku: skuMemory };
localStorage.setItem(0, JSON.stringify(objectStorage));

};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

