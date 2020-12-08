window.onload = function (){
  var selectedColor = document.querySelector('.black')
  selectedColor.className += ' selected'

  addEventListener('click', changeSelectedColor)

  function changeSelectedColor(event){
    selectedColor = event.target
    selectedColor.className += ' selected'

    console.log(selectedColor)
  }
}
