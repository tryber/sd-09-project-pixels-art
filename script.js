function selectOnLoad () {
    let onLoadVar = document.getElementsByClassName('color1')[0];
    console.log(onLoadVar);
    onLoadVar = classList.add('selected')
}
window.onload(selectOnLoad)

window.onload = function () {
    selectOnLoad
}

window.onload(
    document.getElementsByClassName('color1')[0].classList.add('selected')
)