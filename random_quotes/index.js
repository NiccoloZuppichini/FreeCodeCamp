$(document).ready(function(){

var quotes = [];

function initQuotes(){

}

function getRandomQuote(){
        $.getJSON("http://api.icndb.com/jokes/random?exclude=[explicit]", 
        function(json) { 
          $("#text").html((json.value.joke));
});
}


$("#btn").on("click", getRandomQuote)
});