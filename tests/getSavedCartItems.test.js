const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {

  it('Testa se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    //const localStorage = jest.fn();
    getSavedCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    const localStorage = jest.fn();
    getSavedCartItems();;
    expect(localStorage).toHaveBeenCalledWith("cartItems");
  });
  
  //fail('Teste vazio');
});
