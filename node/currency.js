const CC = require('currency-converter-lt')

const currencyConverter = new CC({from:"USD", to:"NPR", amount : 100})

currencyConverter.convert().then((response) => {
    console.log(response) //or do something else
})