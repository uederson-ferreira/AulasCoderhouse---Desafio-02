/* 
Cálculo do ICMS

Três funções para calcular o ICMS sobre o preço de um produto. As funções serão:
getRawPrice: essa função será responsável por obter o preço bruto do produto do usuário.
calculateICMS: essa função será responsável por calcular o valor do ICMS com base no preço bruto do produto.
showCalculatedPrice: essa função será responsável por exibir o preço final do produto, já com o ICMS calculado.
*/

function getRawPrice() {
    const rawPrice = prompt('Cálculo do ICMS - Informe o preço bruto do produto:');
  
    if (isNaN(rawPrice)) {
      alert('O preço informado não é um número válido. Por favor, tente novamente.');
      return getRawPrice();
    }
  
    return parseFloat(rawPrice);
  }
  
  function calculateICMS(rawPrice) {
    const icmsRate = 0.18; // 18%
  
    const icmsValue = rawPrice * icmsRate;
  
    return icmsValue;
  }
  
  function showCalculatedPrice(rawPrice, icmsValue) {
    const finalPrice = rawPrice + icmsValue;
  
    alert(`Preço final do produto: R$ ${finalPrice.toFixed(2)}`);
  }
  
  const rawPrice = getRawPrice();
  const icmsValue = calculateICMS(rawPrice);
  showCalculatedPrice(rawPrice, icmsValue)

//##################

/* 
Determinar se dois números são múltiplos

Funções para determinar se dois números são múltiplos entre si. As funções serão:

getNumbers: essa função será responsável por obter os dois números do usuário.
checkIfMultiple: essa função será responsável por verificar se um número é múltiplo do outro.
showResult: essa função será responsável por exibir o resultado da verificação.
*/
 
function getNumbers() {
    const num1 = prompt('Informe o primeiro número:');
    const num2 = prompt('Informe o segundo número:');
  
    if (isNaN(num1) || isNaN(num2)) {
      alert('Um ou ambos os números informados não são válidos. Por favor, tente novamente.');
      return getNumbers();
    }
  
    return [parseFloat(num1), parseFloat(num2)];
  }
  
  function checkIfMultiple(num1, num2) {
    if (num1 % num2 === 0 || num2 % num1 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function showResult(isMultiple) {
    if (isMultiple) {
      alert('Os números são múltiplos entre si.');
    } else {
      alert('Os números não são múltiplos entre si.');
    }
  }
  
  const numbers = getNumbers();
  
  const isMultiple = checkIfMultiple(numbers[0], numbers[1]);
  
  showResult(isMultiple);


  //#########################

  /*
  Esta função primeiramente agrupa os produtos no carrinho de compras
  por nome da marca, assim como no exemplo anterior. Em seguida, 
  ela calcula o preço médio para cada marca somando o preço total 
  de todos os produtos dessa marca e dividindo pela quantidade 
  total desses produtos. Finalmente, ela retorna um objeto que 
  contém o preço médio para cada marca.
  Neste exemplo, utilizamos duas funções reduce para decompor o problema 
  em etapas menores, tornando o código mais fácil de entender e manter. 
  A primeira função reduce agrupa os produtos por nome da marca, 
  enquanto a segunda função reduce calcula o preço médio para cada marca. 
  Ao decompor o problema em partes menores e criar funções reutilizáveis, 
  podemos escrever um código mais conciso e modular.
  */

  const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
  ]

  function calculateAveragePriceByBrand(shoppingCart) {
    const products = shoppingCart.reduce((productGroup, product) => {
      const name = product.name;
      if (productGroup[name] == null) {
        productGroup[name] = [];
      }
      productGroup[name].push(product);
  
      return productGroup;
    }, {});

    const averagePrices = Object.entries(products).reduce((brandAverages, [name, products]) => {
      const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);
      const averagePrice = totalPrice / products.reduce((total, product) => total + product.quantity, 0);
  
      brandAverages[name] = averagePrice;
  
      return brandAverages;
    }, {});
  
    return averagePrices;
  }
  
  console.log(calculateAveragePriceByBrand(shoppingCart));