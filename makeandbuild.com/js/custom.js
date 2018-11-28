//input field
var input = $('.usd-amount-input');

//on input change update the data in each country
input.on("change keyup", function () {
    var convert = function(data) {

        //updated input value
        var inputValue = $('.usd-amount-input').val();

        //rates from money.js
        fx.rates = data.rates

        //conversions
        var gbpRate = fx(inputValue).to("GBP");
        var eurRate = fx(inputValue).to("EUR");
        var jpyRate = fx(inputValue).to("JPY");
        var brlRate = fx(inputValue).to("BRL");

        //taking conversions and putting them into their respective spans
        $('.usd-rate').text(inputValue);
        $('.gbp-rate').text(gbpRate.toFixed(2));
        $('.eur-rate').text(eurRate.toFixed(2));
        $('.jpy-rate').text(jpyRate.toFixed(2));
        $('.brl-rate').text(brlRate.toFixed(2));
    }

    //get api using the usd as the baseline
    $.getJSON("http://api.fixer.io/latest?base=USD", convert)
});

$( document ).ready(input.trigger('change'));