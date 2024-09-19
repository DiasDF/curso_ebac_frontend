const form = document.getElementById("my-form")
console.log(form)

let formEValido = false
const mensagemMsg = document.querySelector('.mensagem')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')

function validaCampo(campoA, campoB){
   let numeroA = parseFloat(campoA.value)
   let numeroB = parseFloat(campoB.value)
   return numeroB > numeroA
}

form.addEventListener('submit', function(e) {
   e.preventDefault()
   
   formEValido = validaCampo(campoA, campoB)
   
   if(formEValido){
      mensagemMsg.textContent = 'Ok número B é maior';
      mensagemMsg.style.color = 'green';
   } else {
      mensagemMsg.textContent = 'Erro: O número A é maior';
      mensagemMsg.style.color = 'red';
   }
});


/*
// Captura o formulário
// console.log(form)
// Mostra o formulário
3) Crie uma validação no JavaScript, na qual o formulário será válido caso 
o número B seja maior que o número A.

   let soma = parseFloat(numeroA) + parseFloat(numeroB);
   console.log(`${soma}`);
*/

// numeroA.addEventListener('keyup', function(e) {
//    const AlteraA = parseFloat(e.target.value);
//    console.log(`Valor A: ${AlteraA}`);
// });


