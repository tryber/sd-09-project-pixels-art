window.onload= function(){
  caneta ="black"
  let valor= document.getElementsByClassName("generate-board")[0];
  let tamanho= document.getElementsByClassName("board-size")[0];
  
  function apagaTabela(){
     let tabela=document.querySelectorAll(".tabela")
     tabela.forEach(i =>{
        i.innerHTML=""
     })
  }
  valor.addEventListener("click", apagaTabela)