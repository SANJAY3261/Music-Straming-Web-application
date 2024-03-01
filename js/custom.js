
function myFunction1() {
    var txt;
    if (confirm("Click OK button to PLAY song!")) {
      txt = "You pressed OK!";
    } else {
      txt = " ";
    }
    document.getElementById("demo").innerHTML = txt;
    
  }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  // Example starter JavaScript for disabling form submissions if there are invalid fields

