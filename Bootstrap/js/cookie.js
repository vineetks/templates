/*** Vineet Kumar Singh :: Bootstrap Assignment  ***/
/***  Version: 3.1 :: Last Modified: 02/09/2016  ***/
$(document).ready(function () {
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";    
    }
    $("#printCookie tr:nth-child(1) td:nth-child(2)").html(getCookie("name"));  
    $("#printCookie tr:nth-child(2) td:nth-child(2)").html("+91-" + getCookie("mobile"));
    $("#printCookie tr:nth-child(3) td:nth-child(2)").html("+91-" + getCookie("altMobile"));
    $("#printCookie tr:nth-child(4) td:nth-child(2)").html(getCookie("gender"));
    $("#printCookie tr:nth-child(5) td:nth-child(2)").html(getCookie("age") + " years");
    $("#printCookie tr:nth-child(6) td:nth-child(2)").html(getCookie("date"));
    var ccn = getCookie("creditCard");
    $("#printCookie tr:nth-child(7) td:nth-child(2)").html(ccn.substring(0,4) + "-" + ccn.substring(4,8) + "-" + ccn.substring(8,12) + "-" + ccn.substring(12) );
    //console.log(getCookie("name"));
});