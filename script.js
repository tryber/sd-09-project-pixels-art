window.onload = function () {
    let DivDad = document.querySelector('#pixel-board');
    console.log(DivDad)
  function addlines () {
      for (let index = 1; index <= 5; index += 1) {
          let divLine = document.createElement('div');
          for (let columnindex =1; columnindex <= 4; columnindex += 1) {
              let pixel = document.createElement('div');
              pixel.className = 'pixel';
              divLine.appendChild(pixel);
          }
          DivDad.appendChild(divLine)
      }
  }
  addlines()
}
