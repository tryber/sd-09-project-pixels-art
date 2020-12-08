window.onload(document.getElementsByClassName('color1')[0].classList.add('selected'))


function changeSelected () {
    if (document.querySelector('.color2').addEventListener('onclick')) {
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('color2').classList.add('selected')
    }
}

changeSelected();