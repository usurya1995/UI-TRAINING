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
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

//slider code ends here //


//heart colour changer starts here//
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

//heart colour changer ends here//

//Tabs starts here
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
//Tab ends here

/*
var tab1=
`<div id="mob1" style="display:block;">
<div class="tab">
        <button class="tablinks" onclick="openCity(event, 'Overview')">Overview</button>
        <button class="tablinks" onclick="openCity(event, 'Features')">Features</button>
        <button class="tablinks" onclick="openCity(event, 'Design')">Design</button>
        <button class="tablinks" onclick="openCity(event, 'Specs')">Specs</button>
      </div>
      
      <div id="Overview" class="tabcontent">
        <h3>Overview</h3>
        <p>London is the capital city of England.</p>
      </div>
      
      <div id="Features" class="tabcontent">
        <h3>Features</h3>
        <p>Paris is the capital of France.</p> 
      </div>
      
      <div id="Design" class="tabcontent">
        <h3>Design</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      
      <div id="Specs" class="tabcontent">
        <h3>Specs</h3>
        <p>Specs is the capital of Japan.</p>
</div>
</div>
`;

var tab2=
`<div id="mob2" style="display:block;">
<div class="tab">
        <button class="tablinks" onclick="openCity(event, 'Overview')">Oveghjgrview</button>
        <button class="tablinks" onclick="openCity(event, 'Features')">Features</button>
        <button class="tablinks" onclick="openCity(event, 'Design')">Design</button>
        <button class="tablinks" onclick="openCity(event, 'Specs')">Specs</button>
      </div>
      
      <div id="Overview" class="tabcontent">
        <h3>Overview</h3>
        <p>London is the capital city of England.</p>
      </div>
      
      <div id="Features" class="tabcontent">
        <h3>Features</h3>
        <p>Paris is the capital of France.</p> 
      </div>
      
      <div id="Design" class="tabcontent">
        <h3>Design</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      
      <div id="Specs" class="tabcontent">
        <h3>Specs</h3>
        <p>Specs is the capital of Japan.</p>
</div>
</div>
`;

var tab3=
`<div id="mob3" style="display:block;">
<div class="tab">
        <button class="tablinks" onclick="openCity(event, 'Overview')">3</button>
        <button class="tablinks" onclick="openCity(event, 'Features')">Features</button>
        <button class="tablinks" onclick="openCity(event, 'Design')">Design</button>
        <button class="tablinks" onclick="openCity(event, 'Specs')">Specs</button>
      </div>
      
      <div id="Overview" class="tabcontent">
        <h3>Overview</h3>
        <p>London is the capital city of England.</p>
      </div>
      
      <div id="Features" class="tabcontent">
        <h3>Features</h3>
        <p>Paris is the capital of France.</p> 
      </div>
      
      <div id="Design" class="tabcontent">
        <h3>Design</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      
      <div id="Specs" class="tabcontent">
        <h3>Specs</h3>
        <p>Specs is the capital of Japan.</p>
</div>
</div>
`;

var tab4=
`<div id="mob4" style="display:block;">
<div class="tab">
        <button class="tablinks" onclick="openCity(event, 'Overview')">4</button>
        <button class="tablinks" onclick="openCity(event, 'Features')">Features</button>
        <button class="tablinks" onclick="openCity(event, 'Design')">Design</button>
        <button class="tablinks" onclick="openCity(event, 'Specs')">Specs</button>
      </div>
      
      <div id="Overview" class="tabcontent">
        <h3>Overview</h3>
        <p>London is the capital city of England.</p>
      </div>
      
      <div id="Features" class="tabcontent">
        <h3>Features</h3>
        <p>Paris is the capital of France.</p> 
      </div>
      
      <div id="Design" class="tabcontent">
        <h3>Design</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      
      <div id="Specs" class="tabcontent">
        <h3>Specs</h3>
        <p>Specs is the capital of Japan.</p>
</div>
</div>
`;


var y="";

function toggle(x,z) {
  y = document.getElementById(x);
  if(y.className.indexOf('shown') == -1){
    y.classList.add("shown");
    y.innerHTML += z;
 }else{
   y.classList.remove("shown");
   document.getElementById("mob1").remove();
 }

}
ends */




function toggle1() {
  var x = document.getElementById("mob1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggle2() {
  var x = document.getElementById("mob2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggle3() {
  var x = document.getElementById("mob3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggle4() {
  var x = document.getElementById("mob4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
