// Cotações em reais
var cotacaoDolar = 5.34;
var cotacaoEuro = 6.25;
var cotacaoLibra = 7.30;
var cotacaoBitcoin = 225974.03;

// Função de chamada
function Converter() {
  // Pega o valor digitado na caixa de texto da página e converte a string para número real (float)
  var valorElemento = document.getElementById("valor").value;
  valorElemento = parseFloat(valorElemento);
  console.log("Clicou converter");
  console.log(valorElemento);

  // Verificar se campo está vazio
  if (isNaN(valorElemento)) {
    // Esvazia o texto de resultado
    var elementoValorConvertido = document.getElementById("valorConvertido");
    // O que vai ser colocado no local designado
    elementoValorConvertido.innerHTML = "";
  } else {
    // Chamar a função de conversão da moeda correspondente
    // ConverterReal() -> Converte valor em real para outra moeda
    if (document.getElementById("real_in").checked) {
      ConverterReal(valorElemento);
    }
    if (document.getElementById("dolar_in").checked) {
      ConverterDolar(valorElemento);
    }
    if (document.getElementById("euro_in").checked) {
      ConverterEuro(valorElemento);
    }
    if (document.getElementById("libra_in").checked) {
      ConverterLibra(valorElemento);
    }
    if (document.getElementById("btc_in").checked) {
      ConverterBTC(valorElemento);
    }
  }
}

// Função converter R$ para outra moeda
function ConverterReal(valorElemento) {
  if (document.getElementById("real_out").checked) {
    // Converter o valor em real para real
    var valorReal = valorElemento;
    console.log("R$ " + valorElemento + " = R$ " + valorReal);
    valorConvertido =
      "R$ " + valorElemento.toFixed(2) + " = R$ " + valorReal.toFixed(2);
  }

  if (document.getElementById("dolar_out").checked) {
    // Converter o valor em real para dolar
    var valorDolar = valorElemento * (1 / cotacaoDolar);
    console.log("R$ " + valorElemento + " = U$ " + valorDolar);
    valorConvertido =
      "R$ " + valorElemento.toFixed(2) + " = U$ " + valorDolar.toFixed(2);
  }

  if (document.getElementById("euro_out").checked) {
    // Converter o valor em real para euro
    var valorEuro = valorElemento * (1 / cotacaoEuro);
    console.log("R$ " + valorElemento + " = € " + valorEuro);
    valorConvertido =
      "R$ " + valorElemento.toFixed(2) + " = € " + valorEuro.toFixed(2);
  }

  if (document.getElementById("libra_out").checked) {
    // Converter o valor em real para libra
    var valorLibra = valorElemento * (1 / cotacaoLibra);
    console.log("R$ " + valorElemento + " = £ " + valorLibra);
    valorConvertido =
      "R$ " + valorElemento.toFixed(2) + " = £ " + valorLibra.toFixed(2);
  }

  if (document.getElementById("btc_out").checked) {
    // Converter o valor em real para bitcoin
    var valorBTC = valorElemento * (1 / cotacaoBitcoin);
    console.log("R$ " + valorElemento + " = BTC " + valorBTC);
    valorConvertido =
      "R$ " + valorElemento.toFixed(2) + " = BTC " + valorBTC.toFixed(7);
  }

  // Jogar o número de volta para o HTML e imprimir na tela
  // Indica onde no HTML vai aparecer o texto (id="valorConvertido")
  var elementoValorConvertido = document.getElementById("valorConvertido");
  // O que vai ser colocado no local designado
  elementoValorConvertido.innerHTML = valorConvertido;
}

// Função converter U$ para outra moeda
function ConverterDolar(valorElemento) {
  if (document.getElementById("real_out").checked) {
    // Converter o valor em dolar para real
    var valorReal = valorElemento * cotacaoDolar;
    console.log("U$ " + valorElemento + " = R$ " + valorReal);
    valorConvertido =
      "U$ " + valorElemento.toFixed(2) + " = R$ " + valorReal.toFixed(2);
  }

  if (document.getElementById("dolar_out").checked) {
    // Converter o valor em dolar para dolar
    var valorDolar = valorElemento;
    console.log("U$ " + valorElemento + " = U$ " + valorDolar);
    valorConvertido =
      "U$ " + valorElemento.toFixed(2) + " = U$ " + valorDolar.toFixed(2);
  }

  if (document.getElementById("euro_out").checked) {
    // Converter o valor em dolar para euro
    var valorEuro = valorElemento * (cotacaoDolar / cotacaoEuro);
    console.log("U$ " + valorElemento + " = € " + valorEuro);
    valorConvertido =
      "U$ " + valorElemento.toFixed(2) + " = € " + valorEuro.toFixed(2);
  }

  if (document.getElementById("libra_out").checked) {
    // Converter o valor em dolar para libra
    var valorLibra = valorElemento * (cotacaoDolar / cotacaoLibra);
    console.log("U$ " + valorElemento + " = £ " + valorLibra);
    valorConvertido =
      "U$ " + valorElemento.toFixed(2) + " = £ " + valorLibra.toFixed(2);
  }

  if (document.getElementById("btc_out").checked) {
    // Converter o valor em dolar para bitcoin
    var valorBTC = valorElemento * (cotacaoDolar / cotacaoBitcoin);
    console.log("U$ " + valorElemento + " = BTC " + valorBTC);
    valorConvertido =
      "U$ " + valorElemento.toFixed(2) + " = BTC " + valorBTC.toFixed(7);
  }

  // Jogar o número de volta para o HTML e imprimir na tela
  // Indica onde no HTML vai aparecer o texto (id="valorConvertido")
  var elementoValorConvertido = document.getElementById("valorConvertido");
  // O que vai ser colocado no local designado
  elementoValorConvertido.innerHTML = valorConvertido;
}

// Função converter Euro para outra moeda
function ConverterEuro(valorElemento, valorConvertido) {
  if (document.getElementById("real_out").checked) {
    // Converter o valor em euro para real
    var valorReal = valorElemento * cotacaoEuro;
    console.log("€ " + valorElemento + " = R$ " + valorReal);
    valorConvertido =
      "€ " + valorElemento.toFixed(2) + " = R$ " + valorReal.toFixed(2);
  }

  if (document.getElementById("dolar_out").checked) {
    // Converter o valor em euro para dolar
    var valorDolar = valorElemento * (cotacaoEuro / cotacaoDolar);
    console.log("€ " + valorElemento + " = U$ " + valorDolar);
    valorConvertido =
      "€ " + valorElemento.toFixed(2) + " = U$ " + valorDolar.toFixed(2);
  }

  if (document.getElementById("euro_out").checked) {
    // Converter o valor em euro para euro
    var valorEuro = valorElemento;
    console.log("€ " + valorElemento + " = € " + valorEuro);
    valorConvertido =
      "€ " + valorElemento.toFixed(2) + " = € " + valorEuro.toFixed(2);
  }

  if (document.getElementById("libra_out").checked) {
    // Converter o valor em euro para libra
    var valorLibra = valorElemento * (cotacaoEuro / cotacaoLibra);
    console.log("€ " + valorElemento + " = £ " + valorLibra);
    valorConvertido =
      "€ " + valorElemento.toFixed(2) + " = £ " + valorLibra.toFixed(2);
  }

  if (document.getElementById("btc_out").checked) {
    // Converter o valor em euro para bitcoin
    var valorBTC = valorElemento * (cotacaoEuro / cotacaoBitcoin);
    console.log("€ " + valorElemento + " = BTC " + valorBTC);
    valorConvertido =
      "€ " + valorElemento.toFixed(2) + " = BTC " + valorBTC.toFixed(7);
  }

  // Jogar o número de volta para o HTML e imprimir na tela
  // Indica onde no HTML vai aparecer o texto (id="valorConvertido")
  var elementoValorConvertido = document.getElementById("valorConvertido");
  // O que vai ser colocado no local designado
  elementoValorConvertido.innerHTML = valorConvertido;
}

// Função converter Libra para outra moeda
function ConverterLibra(valorElemento) {
  if (document.getElementById("real_out").checked) {
    // Converter o valor em libra para real
    var valorReal = valorElemento * cotacaoLibra;
    console.log("£ " + valorElemento + " = R$ " + valorReal);
    valorConvertido =
      "£ " + valorElemento.toFixed(2) + " = R$ " + valorReal.toFixed(2);
  }

  if (document.getElementById("dolar_out").checked) {
    // Converter o valor em libra para dolar
    var valorDolar = valorElemento * (cotacaoLibra / cotacaoDolar);
    console.log("£ " + valorElemento + " = U$ " + valorDolar);
    valorConvertido =
      "£ " + valorElemento.toFixed(2) + " = U$ " + valorDolar.toFixed(2);
  }

  if (document.getElementById("euro_out").checked) {
    // Converter o valor em libra para euro
    var valorEuro = valorElemento * (cotacaoLibra / cotacaoEuro);
    console.log("£ " + valorElemento + " = € " + valorEuro);
    valorConvertido =
      "£ " + valorElemento.toFixed(2) + " = € " + valorEuro.toFixed(2);
  }

  if (document.getElementById("libra_out").checked) {
    // Converter o valor em libra para libra
    var valorLibra = valorElemento;
    console.log("£ " + valorElemento + " = £ " + valorLibra);
    valorConvertido =
      "£ " + valorElemento.toFixed(2) + " = £ " + valorLibra.toFixed(2);
  }

  if (document.getElementById("btc_out").checked) {
    // Converter o valor em libra para bitcoin
    var valorBTC = valorElemento * (cotacaoLibra / cotacaoBitcoin);
    console.log("£ " + valorElemento + " = BTC " + valorBTC);
    valorConvertido =
      "£ " + valorElemento.toFixed(2) + " = BTC " + valorBTC.toFixed(7);
  }

  // Jogar o número de volta para o HTML e imprimir na tela
  // Indica onde no HTML vai aparecer o texto (id="valorConvertido")
  var elementoValorConvertido = document.getElementById("valorConvertido");
  // O que vai ser colocado no local designado
  elementoValorConvertido.innerHTML = valorConvertido;
}

// Função converter Bitcoin para outra moeda
function ConverterBTC(valorElemento) {
  if (document.getElementById("real_out").checked) {
    // Converter o valor em bitcoin para real
    var valorReal = valorElemento * cotacaoBitcoin;
    console.log("BTC " + valorElemento + " = R$ " + valorReal);
    valorConvertido =
      "BTC " + valorElemento.toFixed(7) + " = R$ " + valorReal.toFixed(2);
  }

  if (document.getElementById("dolar_out").checked) {
    // Converter o valor em bitcoin para dolar
    var valorDolar = valorElemento * (cotacaoBitcoin / cotacaoDolar);
    console.log("BTC " + valorElemento + " = U$ " + valorDolar);
    valorConvertido =
      "BTC " + valorElemento.toFixed(7) + " = U$ " + valorDolar.toFixed(2);
  }

  if (document.getElementById("euro_out").checked) {
    // Converter o valor em bitcoin para euro
    var valorEuro = valorElemento * (cotacaoBitcoin / cotacaoEuro);
    console.log("BTC " + valorElemento + " = € " + valorEuro);
    valorConvertido =
      "BTC " + valorElemento.toFixed(7) + " = € " + valorEuro.toFixed(2);
  }

  if (document.getElementById("libra_out").checked) {
    // Converter o valor em bitcoin para libra
    var valorLibra = valorElemento * (cotacaoBitcoin / cotacaoLibra);
    console.log("BTC " + valorElemento + " = £ " + valorLibra);
    valorConvertido =
      "BTC " + valorElemento.toFixed(7) + " = £ " + valorLibra.toFixed(2);
  }

  if (document.getElementById("btc_out").checked) {
    // Converter o valor em bitcoin para bitcoin
    var valorBTC = valorElemento;
    console.log("BTC " + valorElemento + " = BTC " + valorBTC);
    valorConvertido =
      "BTC " + valorElemento.toFixed(7) + " = BTC " + valorBTC.toFixed(7);
  }

  // Jogar o número de volta para o HTML e imprimir na tela
  // Indica onde no HTML vai aparecer o texto (id="valorConvertido")
  var elementoValorConvertido = document.getElementById("valorConvertido");
  // O que vai ser colocado no local designado
  elementoValorConvertido.innerHTML = valorConvertido;
}