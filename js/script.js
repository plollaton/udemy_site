//var resposta = confirm("Deseja excluir?");
/*
console.log(resposta);
*/

const a = 10;
const b = 33;

function somar(a, b){
  return a + b;
}

//console.log(somar(a,b));

document.querySelector("#calcular").addEventListener("click", function(){
  let valorA = document.querySelector("#valorA").value;
  let valorB = document.querySelector("#valorB").value;
  if(valorA.length > 0 && valorB.length > 0){
    alert(somar(parseInt(valorA), parseInt(valorB)));
  } else {
    alert("Digite os valores para o calculo.")
  }
} );