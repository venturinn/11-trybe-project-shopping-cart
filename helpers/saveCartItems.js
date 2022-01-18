const saveCartItems = (memoryCartItems) => {
localStorage.setItem('cartItems', JSON.stringify(memoryCartItems));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
