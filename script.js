var color;
document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', event => {
        verifiedClass()
        item.classList.add("selected")
        color = item.id
})})

function verifiedClass(){
    let element = document.querySelector('.selected')
    element.classList.remove("selected")
}

    document.querySelectorAll('.pixel').forEach(itemPixel => {
        itemPixel.addEventListener('click', event => {
        
            event.preventDefault()
       
            if(color == 'black'){
                itemPixel.style.backgroundColor = 'black';
        
            } else if(color == 'red'){
                itemPixel.style.backgroundColor = 'red';
        
            }
            else if(color == 'yellow'){
                itemPixel.style.backgroundColor = 'yellow';
        
            }else if(color == 'purple'){
                itemPixel.style.backgroundColor = 'purple';
        
            }
        
        })})