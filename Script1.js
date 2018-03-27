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
function myMap()
{
  myCenter=new google.maps.LatLng(55.6738495,12.5661573);
  var mapOptions= {
    center:myCenter,
    zoom:16, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}