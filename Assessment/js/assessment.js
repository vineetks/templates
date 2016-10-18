/***       Vineet Kumar Singh :: Assessment      ***/
/***  Version: 2.2 :: Last Modified: 02/09/2016  ***/
$(document).ready(function () {
    $(".filler-text").html( $("#loremIpsum").html() );
    var i;
    for (i = 0; i < 10; i++) { 
        $(".list-group-modified").append(   '<a href="#" class="list-group-item">Link '+ (i+1) +'</a>'  );
    }
    /*$(".btn-modified").click( function () {
        $("#move").toggleClass("div-moved");
    });*/
    var flag = 0;
    $(".btn-modified").click( function (){
        if(!flag){
            $("#move").animate({"left": "-50%"});
            flag = 1;
        } else {
            $("#move").animate({"left": "0"});
            flag = 0;
        }
    });
});