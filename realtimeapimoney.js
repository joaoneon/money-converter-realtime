const button = document.getElementById("convert-button")

const select = document.getElementById("currency-select")

const selectMain = document.getElementById("currency-main")


var dolar 
var euro 
var bitcoin 
var real

/*
function success() {
    var data = JSON.parse(this.responseText); //fazer o parsing da string para JSON
    //console.log(data);
    bitcoin = data.BTCBRL.ask
    euro = data.EURBRL.ask
    dolar = data.USDBRL.ask
    real = 1

}

// função para tratar o erro
function error(err) {
    console.log('Erro de solicitação', err); //os detalhes do erro estarão no objeto "err"
}

var xhr = new XMLHttpRequest(); //invocar uma nova instância de XMLHttpRequest
xhr.onload = success; // chamar a função success se a solicitação for um sucesso
xhr.onerror = error;  // chamar a função error se a solicitação der errado
xhr.open('GET', 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'); // abrir uma solicitação GET
xhr.send(); // enviar a solicitação ao servidor.
*/



const convertValues = async () => {

    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")
   
    
    //async await


    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())
   
    const dolar = data.USDBRL.ask
    const euro = data.EURBRL.ask
    const bitcoin = data.BTCBRL.ask
    const real = 1

    if (selectMain.value === "R$ Real brasileiro"){
        realValueText.innerHTML = new Intl.NumberFormat("pt-BR",
        { style: "currency", currency: "BRL"}  
        ).format(inputReais)

        
        if (select.value === "US$ Dólar americano") {
            currencyValueText.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD"}  
            ).format(inputReais / dolar)
        }
        
        if (select.value === "€ Euro") {
            currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR"}  
            ).format(inputReais / euro)
        }
        
        if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = ((inputReais / bitcoin)/1000).toFixed(2)
        }
    
        if (select.value === "R$ Real brasileiro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR",
        { style: "currency", currency: "BRL"}  
        ).format(inputReais)
        }

    }

    if (selectMain.value === "US$ Dólar americano"){
        realValueText.innerHTML = new Intl.NumberFormat("en-US",
        { style: "currency", currency: "USD"}  
        ).format(inputReais)

        
        if (select.value === "US$ Dólar americano") {
            currencyValueText.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD"}  
            ).format(inputReais)
        }
        
        if (select.value === "€ Euro") {
            currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR"}  
            ).format((inputReais * dolar) / euro)
        }
        
        if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = (((inputReais  * dolar)/1000)/ bitcoin).toFixed(2)
        }
    
        if (select.value === "R$ Real brasileiro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR",
        { style: "currency", currency: "BRL"}  
        ).format(inputReais  * dolar)
        }

    }

    if (selectMain.value === "€ Euro"){
        realValueText.innerHTML = new Intl.NumberFormat("de-DE",
        { style: "currency", currency: "EUR"}  
    ).format(inputReais)

        
        if (select.value === "US$ Dólar americano") {
            currencyValueText.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD"}  
            ).format((inputReais * euro)/ dolar)
        }
        
        if (select.value === "€ Euro") {
            currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR"}  
            ).format(inputReais)
        }
        
        if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = (((inputReais * euro) / 1000 )/ bitcoin).toFixed(2)
        }
    
     if (select.value === "R$ Real brasileiro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR",
        { style: "currency", currency: "BRL"}  
        ).format(inputReais * euro)
        }

    }

    if (selectMain.value === "Bitcoin"){
        realValueText.innerHTML = inputReais
       
        
        if (select.value === "US$ Dólar americano") {
            currencyValueText.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD"}  
            ).format(((inputReais * bitcoin) * 1000) / dolar)
        }
        
        if (select.value === "€ Euro") {
            currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR"}  
            ).format(((inputReais * bitcoin) * 1000) / euro)
        }
        
        if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = (inputReais)
        }   
    
        if (select.value === "R$ Real brasileiro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR",
        { style: "currency", currency: "BRL"}  
        ).format((inputReais * bitcoin) * 1000)
        }

    }

    
}

changeCurrencyMain = () => {
    const currencyName = document.getElementById("currency-main-name")
    const currencyImg = document.getElementById("currency-main-img")

    if(selectMain.value === "US$ Dólar americano"){
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/usa.png"
    }
     
    if(selectMain.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(selectMain.value === "Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if(selectMain.value === "R$ Real brasileiro"){
        currencyName.innerHTML = "Real"
        currencyImg.src= "./assets/brasil.png"
    }

    convertValues()
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(select.value === "US$ Dólar americano"){
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/usa.png"
    }
     
    if(select.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(select.value === "Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if(select.value === "R$ Real brasileiro"){
        currencyName.innerHTML = "Real"
        currencyImg.src= "./assets/brasil.png"
    }

    convertValues()

}

button.addEventListener("click", convertValues) 
select.addEventListener("change", changeCurrency)
selectMain.addEventListener("change", changeCurrencyMain)