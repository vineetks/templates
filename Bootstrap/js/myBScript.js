/*** Vineet Kumar Singh :: Bootstrap Assignment  ***/
/***  Version: 3.2 :: Last Modified: 01/09/2016  ***/
$(document).ready(function () {
    $("#myNavbar>ul>li>a, .navbar-header>a").click(function () {
        var linkValue = $(this).attr('href');
        $('html, body').animate({
            'scrollTop' : $(linkValue).position().top - 50
        });
        return false;
    });
    
    var navigation = $('#navigation'), pos = navigation.offset();
    $(window).scroll(function(){
        if($(this).scrollTop() > pos.top){
            $("#navigation").addClass("affix");
         } 
        else{
            $("#navigation").removeClass("affix");
        }
    });
    
    $(".dropdown").click(function () {
        if( $(".dropdown").hasClass('active')){
            $(".dropdown").removeClass('active');
        } else{
            $("#myNavbar>ul>li").removeClass('active');
            $(".dropdown").addClass('active');
        }
    });
    
    $(".red-text").on("click", ".glyphicon-remove-modified", function (){
        var elementID = $(this).attr("data-input");
        console.log(elementID);
        $(elementID).val("");
    });
    
    $(".filler-text").html($("#loremIpsum").html());
    $("#mobile").blur( function (){         checkMobileNumber();    });
    $("#creditCard").blur( function (){     checkCardNumber();      });
    $(".check-empty").blur( function (){    checkEmpty(this);       });
    $("#mobile").keyup( function (){        checkMobileNumber();    });
    $("#creditCard").keyup( function (){    checkCardNumber();      });
    $(".check-empty").keyup( function (){    checkEmpty(this);      });
    $("#submit").click( function (){        validateRequired();     });
});

var notOK = function removeIcon(message, dataInput){
    var response = '<span class="glyphicon glyphicon-remove-sign glyphicon-remove-modified" data-input=' +
        dataInput + '></span><div class="error-message" >'+message+'</div>';
    return response;
}

function checkEmpty(x){
    var displayElement, displayID, inputValue;
    displayID = "#" + $(x).attr("id");
    displayElement = displayID + "Message";
    $(displayElement).html("");
    inputValue = $(x).val();
    console.log(x);
    try { 
        if( !(/([^\s])/.test(inputValue)) ) {throw notOK("Can't leave this empty!", displayID); return false;}
        else if ( (inputValue == $("#age").val()) && !(inputValue < 121 && inputValue > 0) ) { throw notOK("Age not in range, 0-120 years", displayID); return false; }
        else {
            $(displayElement).html("<span class='glyphicon glyphicon-ok-sign glyphicon-ok-modified'></span>");
            return true;
        }
    }
    catch(err) {
        $(displayElement).html(err);
    }
}

function checkMobileNumber() {
    var inputValue = $("#mobile").val();
    $("#mobileMessage").html("");
    try { 
        if(inputValue == "" || inputValue == null) {throw notOK("Can't be empty!", "#mobile"); return false;}
        if(isNaN(inputValue)) {throw notOK("Not a number", "#mobile"); return false;}
        inputValue = Number(inputValue);
        var length = inputValue.toString().length;
        if(inputValue < 1000000000) {throw notOK(length + " digits, should be 10 digits", "#mobile"); return false;}
        if(inputValue > 9999999999) {throw notOK(length + " digits, should be 10 digits", "#mobile"); return false;}
        else {
            $("#mobileMessage").html("<span class='glyphicon glyphicon-ok-sign glyphicon-ok-modified'></span>");
            return true;
        }
    }
    catch(err) {
        $("#mobileMessage").html(err);
    }
}

function checkCardNumber(){
    var inputValue = $("#creditCard").val();
    $("#creditCardMessage").html("");
    try { 
        if(inputValue == "" || inputValue == null) {throw notOK("Can't be empty!", "#creditCard"); return false;}
        if(isNaN(inputValue)) {throw notOK("Not a number", "#creditCard"); return false;}
        inputValue = Number(inputValue);
        var length = inputValue.toString().length;
        if((inputValue < 1000000000000000) || (inputValue > 9999999999999999)) {throw notOK("Not a valid Card Number... " + length + "/16 digits", "#creditCard"); return false;}
        else {
            $("#creditCardMessage").html("<span class='glyphicon glyphicon-ok-sign glyphicon-ok-modified'></span>");
            return true;
        }
    }
    catch(err) {
        $("#creditCardMessage").html(err);
    }
}

function createFormdata(){
    var formData1 = {};                                  // One way of creating JS Object
        formData1.name = $('#name').val();
        formData1.mobile = $('#mobile').val();
        formData1.altMobile = $('#altMobile').val();
        formData1.gender = $('#gender').val();
        formData1.age = $('#age').val();
        formData1.date = $('#date').val();
        formData1.creditCard = $('#creditCard').val();
        
    var formData2 = '{' + 
        '"name":' + '"' + $('#name').val() + '" ,' +
        '"mobile":' + '"' + $('#mobile').val() + '" ,' +
        '"altMobile":' + '"' + $('#altMobile').val() + '" ,' +
        '"gender":' + '"' + $('#gender').val() + '" ,' +
        '"age":' + '"' + $('#age').val() + '" ,' +
        '"date":' + '"' + $('#date').val() + '" ,' +
        '"creditCard":' + '"' + $('#creditCard').val() + '"' +
    '}';
    var formData3 = JSON.parse(formData2);              // Another way of creating JS Object
    console.log(formData1);
    //console.log(formData2);
    //console.log(formData3);
    return formData1;
}

function setCookie(key, value){
    document.cookie =  key + "=" + value + "; " ;
}

function createCookie(formData1){
    $.each(formData1,function(key,value){
        setCookie(key,value);
    });
    console.log(document.cookie);
}

function validateRequired(){
    checkMobileNumber();
    checkCardNumber();
    checkEmpty( $("#name") );
    checkEmpty( $("#age") ); 
    checkEmpty( $("#date") );
    if( checkMobileNumber() && checkCardNumber() && checkEmpty($("#name")) && checkEmpty($("#age")) && checkEmpty($("#date")) ){
        createCookie( createFormdata() );
        $("#myModal").modal('hide');
        $('input').val("");
        $('.red-text').html("");
        $("#incorrectSubmission").css('visibility','hidden');
    }
    else{
        $("#incorrectSubmission").css('visibility','visible');
    }
}