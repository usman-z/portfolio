const title = document.getElementById("title");
const darkMode = document.getElementById("darkMode");
let darkModeOn = false;


darkMode.addEventListener("click", function () {
  if(!darkModeOn){
    darkModeOn = true;
    document.body.style.color = "white";
    document.getElementById("header").style.borderBottomColor = "white";
    document.body.style.backgroundColor = "black";
    darkMode.style.color = "greenyellow";
  }
  else{
    darkModeOn = false;
    document.body.style.backgroundColor = "white";
    document.getElementById("header").style.borderBottomColor = "black";
    document.body.style.color = "black";
    darkMode.style.color = "red";
  }
});

// Begin title changing // 
function animate(){
  Change();
  
  setTimeout(animate, 1400);
}

animate();

function Change() {
  switch(title.innerText){
    case "Software Programmer":
      title.innerText = "Software Developer";
      break;
    case "Software Developer":
      title.innerText = "Software Engineer";
      break;     
    case "Software Engineer":
      title.innerText = "Software Programmer";
      break;
  }
};
// End title changing // 
