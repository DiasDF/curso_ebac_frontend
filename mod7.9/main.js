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
      mensagemMsg.textContent = 'Ok: O Número B é maior';
      mensagemMsg.style.color = 'green';
   } else {
      mensagemMsg.textContent = 'Erro: O Número A deve ser menor';
      mensagemMsg.style.color = 'red';
   }
});
