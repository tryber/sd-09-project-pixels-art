let pixels = document.querySelectorAll(".pixel");
let palette = document.querySelectorAll(".color");

let paletteColors = ["black", "purple", "blue", "green"];
for (let index = 0; index < palette.length; index++) {
    palette[index].style.backgroundColor = paletteColors[index];
}
for( let i = 0; i < palette.length; i++) {
    palette[i].addEventListener("click", function() {
    let color = sessionStorage.setItem("color", event.target.innerHTML);
    for ( let e = 0; e < pixels.length; e++) {
        pixels[e].addEventListener("click", function(){
            pixels[e].style.backgroundColor = sessionStorage.color;
        })
    }
})
} 
