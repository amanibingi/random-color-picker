
const colour = document.querySelector('.colour');
let urlString = window.location.href;
//console.log(urlString);
// let paramString = urlString.split('?')[1];
// let queryString = new URLSearchParams(paramString);
// let hexacode 
// for (let pair of queryString.entries()) {
// 	console.log("Key is: " + pair[0]);
// 	console.log("Value is: " + pair[1]);
//   hexacode= pair[1]
// }
//  if (hexacode){
//   document.body.style.backgroundColor = hexacode;

//  }

// console.log('loading');
//button.addEventListener('click', setColour);
colour.addEventListener('click', copy);
document.body.onkeyup = function(e){
  if(e.keyCode == 32){
let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
 window.location.href = urlString + randomColor;
 document.body.style.backgroundColor = randomColor;
 colour.innerText = randomColor;

}
}
function copy () {
let text = colour.innerText;
 let input = document.createElement('input');
 input.setAttribute('value', text);
 

 document.body.appendChild(input);
 input.select();
 
 document.execCommand('copy');
 document.body.removeChild(input);
 
 var tooltip = document.getElementById("myTooltip");
 tooltip.innerHTML = "Copied : "  + text;
}

function outFunc() {
 var tooltip = document.getElementById("myTooltip");
 tooltip.innerHTML = "Copy to clipboard";
}
 
 
 