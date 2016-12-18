$(document).ready(function() {
    $('.div1').mouseenter(function() {
        $(this).fadeTo('fast', 1);    
    })
    $('.div1').mouseleave(function() {
        $(this).fadeTo('fast', 0.25);    
    });
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');    
    }); 
});


// var $h1 = $('<h1>Hello</h1>') creating a variable in jquery;