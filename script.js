var color;
document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
        verifiedClass()
        item.classList.add("selected")
        color = item.id
})})

function verifiedClass(){
    let element = document.querySelector('.selected')
    element.classList.remove("selected")
}

console.log(color)
    document.querySelectorAll('.pixel').forEach(itemPixel => {
        itemPixel.addEventListener('click', event => {
        event.preventDefault()
        console.log(color)
        itemPixel.classList.add(color)
        // se tiver diferente de pixel e tr excluir 
        if(itemPixel.classList.contains('black') || itemPixel.classList.contains('red')){
            // itemPixel.classList.remove('black') 
            // itemPixel.classList.remove('red') 

        } 
        else {
            // itemPixel.classList.remove('black') && itemPixel.classList.remove('red') || itemPixel.classList.remove('yellow') 
            itemPixel.classList.add(color)

        }
        // if(itemPixel.classList.contains(color) || itemPixel.classList.contains(color) !== undefined){
        //     itemPixel.classList.remove(color)
        // }
    
        
        })
    })  

   
// se tiver a classe que esta, remover