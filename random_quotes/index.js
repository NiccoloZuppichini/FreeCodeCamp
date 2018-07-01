$(document).ready(function(){

//get first random img
get_img();

var quotes = [];


function get_img(keyword){
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
{
  tags: keyword,
  tagmode: "any",
  format: "json"
},
(data)=>{
  var random = Math.floor(Math.random() * data.items.length);
  var img = data.items[random]['media']['m'].replace("_m", "_b");
  $("#chuck-img").attr("src", img)
}
)
}


function getRandomQuote(){
        $.getJSON("http://api.icndb.com/jokes/random?exclude=[explicit]",
        function(json) {
          $("#text").html((json.value.joke));
});
}





$("#btn").on("click", ()=>{
  get_img('chuck norris');
  getRandomQuote();
})
});
