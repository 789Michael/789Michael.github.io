$(document).ready(function(){
var images=new Array('slide5.jpg','slide6.jpg','slide7.jpg','slide8.jpg');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.bgimg')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(4000,function(){
        setTimeout(doSlideshow, 10000);
    });
}
});