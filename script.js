window.onload = function(){
    let arrayPixel = document.getElementsByClassName('pixel');
    
    createDivPixel();

    function createDiv(className){
        let divBox = document.createElement('div');
        divBox.className = className;
        return divBox;
    };
    
    function createDivPixel(){
        for(let indexDivPixel = 0; indexDivPixel < arrayPixel.length; indexDivPixel += 1){
            for(indexDivBoxPixel = 0; indexDivBoxPixel< arrayPixel.length; indexDivBoxPixel += 1){
                let createBox = createDiv('box-pixel');
                let x = arrayPixel[indexDivBoxPixel].appendChild(createBox);
            };
        };
    };
  };
