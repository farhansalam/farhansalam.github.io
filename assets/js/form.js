$(document).ready(function(){
    submitForm = function(){
        console.log('asdasd');
        $.ajax({
            url: "http://formspree.io/faaann@gmail.com", 
            method: "POST",
            data: {message: "hello!"},
            dataType: "json",
            crossDomain: true
            
        });
    }


});