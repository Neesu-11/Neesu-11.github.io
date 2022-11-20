$(document).ready(function(){

    $("#email").keyup(function () {

        var regx_email = /^([a-zA-Z]+)([0-9]+)?(@)([a-zA-z]{5,10}(.)([a-zA-z]+))$/i;
        var email_inp = $(this).val();

        if (regx_email.test(email_inp)) {
            $("#email_status").text("valid");
            $("#email_status").removeClass("text-danger");
        }
        else {
            $("#email_status").addClass("text-danger");
            $("#email_status").text("invalid");

        }
    }); 
        
        
 

    $("#pass").keyup(function () {
        
        var regx_pass = /^([a-zA-z]+)([0-9]+)([$&+,:;+?@#|'<>.^*()%!-]+))$/i;
        var pass = $(this).val();

        if (regx_pass.test(pass)) {
            $("#pass_status").text("valid");
            $("#pass_status").removeClass("text-danger");
        }
        else {
            $("#pass_status").addClass("text-danger");
            $("#pass_status").text("invalid");

        } 
    });
    
    });
