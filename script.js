let color1 = document.getElementsByClassName('first-color')[0];
let color2 = document.getElementsByClassName('second-color')[0];
let color3 = document.getElementsByClassName('third-color')[0];
let color4 = document.getElementsByClassName('fourth-color')[0];

/*color1.addEventListener("click",selectingColor)
color2.addEventListener("click",selectingColor)
color3.addEventListener("click",selectingColor)
color4.addEventListener("click",selectingColor)*/

//let selectedColor = selectingColor();
//color1.classList.add("selected");  
//console.log(color1);



function paintPixel () {    
  let textToPrint = document.getElementById('teste');
  textToPrint.innerText = 'Hora da verdade. Acho que funcionou!';
}

let clickButton = document.getElementById('clear-board');
clickButton.addEventListener('click', paintPixel)
