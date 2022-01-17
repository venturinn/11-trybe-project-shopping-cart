require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {

  it("Testa se a fetchItem é uma função", () => {
    expect(typeof fetchItem).toBe("function");
  });

  it('Executa a função fetchItem com o argumento do item "MLB1615760527" e testa se fetch foi chamada', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  });

  it('Testa se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint correto', async () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527";
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  });

  it('Testa se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const response = await fetchItem("MLB1615760527");
    expect(response).toEqual(item);
  });

  it('Testa se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  });

  //fail('Teste vazio');
});
