window.onload = function(){
  let colorSelected = document.querySelector('#color-select');
  colorSelected.innerText = 'Preto'

	let colorAdd = document.querySelector('#color-palette')
	colorAdd.addEventListener('click', function(event){
		let colorName = event.target.id
		if(colorName === 'color-palette'){
			colorSelected.innerText = 'Nenhuma cor selecionada'
		}else{
			colorSelected.innerText = colorName
		}
	});

	

}

