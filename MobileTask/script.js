//slider code starts here//
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//slider code ends here //

function changeColor(x)
{
	
   var icon = document.getElementById(x);
   if(icon.className.indexOf('red') == -1){
	    icon.classList.remove('black');
		icon.classList.add("red");
   }else{
	   icon.classList.add("black");
	   icon.classList.remove("red");
   }
   
}
