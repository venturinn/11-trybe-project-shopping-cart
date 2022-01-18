const getSavedCartItems = () => {
  // seu código aqui

  return JSON.parse(localStorage.getItem(0));
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
