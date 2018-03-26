// JavaScript source code
// Used to toggle the menu on small screens when clicking on the menu button

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('navDemo');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var slideIndex = 0;
carousel();


function carousel() {
	slideIndex++;
	showDivs(slideIndex);
    setTimeout(carousel, 8000);    
}

function showDivs(n) {

  var header = document.getElementById("home");
  if (n > 3) {slideIndex = 1}  
  
  switch(slideIndex){
 	 case 1:
	 header.style.backgroundImage = "url(slide1.jpg)";
	 break;
	 case 2:
	 header.style.backgroundImage = "url(slide2.jpg)";
	 break;
	 case 3:
	 header.style.backgroundImage = "url(slide3.jpg)";
	 break;
	}
 }
