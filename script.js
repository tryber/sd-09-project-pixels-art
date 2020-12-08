const colorBlack = document.querySelectorAll('.color')[0];
colorBlack.classList.add('selected')



function selectedColor() {
    let allColors = document.querySelectorAll('.color');
    for (let i = 0; i < allColors.length; i++) {
        allColors[i].addEventListener('click', () => {

            switch (allColors[i].className) {
                case 'color':
                    allColors[i].classList.add('selected')
                    break;

                case 'color selected':
                    allColors[i].classList.remove('selected')
                    break;
            
            }
        })
    }
}

// function unseletedColor() {
//     let allColors = document.querySelectorAll('.color');
//     for (let i = 0; i < allColors.length; i++) {
//       allColors[i].addEventListener('click', (event) => {
//             console.log(event.target)
//         })
    
//     }
// }

let allColors = document.querySelectorAll('.color');



selectedColor();
// unseletedColor();