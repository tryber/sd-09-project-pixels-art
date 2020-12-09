function createpixel () {
    let newpixel = document.createElement('div');
newpixel.style.backgroundColor = 'rgb(76, 164, 109)';
newpixel.style.width = '40px';
newpixel.style.height = '40px';
let line1 = document.querySelectorAll('.pixelLines')[0]
line1.appendChild(newpixel);
}
createpixel ();