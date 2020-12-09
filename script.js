function setColors(){
    let color1 = document.querySelector('.black')
    let color2 = document.querySelector('.red')
    let color3 = document.querySelector('.cyan')
    let color4 = document.querySelector('.purple')

color1.style.background = 'black';
color2.style.background = 'red';
color3.style.background = 'cyan';
color4.style.background = 'purple';

}
setColors();

let basePixels = document.querySelectorAll(".pixel");;
let numberOfLines = (basePixels);
let columnPixels = numberOfLines
let pixel = document.querySelectorAll(".pixel");

fillPixelBoard(pixel);

function createPixel(className) {
    let pixel = document.createElement('div');
    pixel.className = className;
    return pixel;
}

function fillPixelBoard (pixel){
    for (let index = 0; index <= pixel.length; index +=1){
        fillPixel(pixel[index]);
 }
}

function fillPixel(divPixel){
    const maxPixels = 8;
    for(let index = 4; index <= maxPixels; index +=1){
        if(index < maxPixels){
        let pixel = createPixel("pixel");
        divPixel.appendChild(pixel);
    } else {
        divPixel.appendChild(createPixel("pixel"));
  }
 }
}