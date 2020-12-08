window.onload = function (){
  addEventListener('click', changeSelectedColor)

  function changeSelectedColor(event){
    let oldselectedColor = document.querySelector('.selected')
    oldselectedColor.classList.remove('selected')

    let newselectedColor = event.target
    newselectedColor.className += ' selected'
  }
}
