window.onload = function (){
  let blackcolor = document.querySelector('.black')
  let redcolor = document.querySelector('.red')
  let bluecolor = document.querySelector('.blue')
  let greencolor = document.querySelector('.green')

  blackcolor.className += ' selected'

  addEventListener('click', changeSelectedColor)

  function changeSelectedColor(event){
    let oldselectedColor = document.querySelector('.selected')
    oldselectedColor.classList.remove('selected')

    let newselectedColor = event.target
    newselectedColor.className += ' selected'
  }
}
