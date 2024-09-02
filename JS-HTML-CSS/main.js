// Milton Dias Soares
const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto) {
   const arrayNome = nomeCompleto.split(' ');
   return arrayNome.length >= 2;
}


form.addEventListener('submit', function(e) {
   let formEValido = false;
   e.preventDefault();


   const numeroContaBeneficiario = document.getElementById('numero-conta');
   const valorDeposito = document.getElementById('valor-deposito');
   const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;


   formEValido = validaNome(nomeBeneficiario.value)
   if (formEValido) {
      // Editar atributos CSS com JS:
      const containerMensagemSucesso = document.querySelector('.success-message');
      containerMensagemSucesso.innerHTML = mensagemSucesso;
      containerMensagemSucesso.style.display = 'block';
      
      // alert(mensagemSucesso) // FORMA ANTERIOR

      //  LIMPAR OS CAMPOS APÓS SUCESSO ESTADO
      nomeBeneficiario.value = '';
      numeroContaBeneficiario.value = '';
      valorDeposito.value = '';
   } else {
      nomeBeneficiario.style.border = '1px solid red';
      document.querySelector('.error-message').style.display = 'block';
      // alert('O nome não está completo') // FORMA ANTERIOR DE ERRO
   }
}) // fim form 

nomeBeneficiario.addEventListener('onKeyup', function(e) {
   console.log(e.target.value);
   // formEValido = validaNome(e.target.value);
   // // Para ver o VALUE do campo toda vez que ele for alterado

   // if (!formEValido) {
   //    nomeBeneficiario.style.border = '1px solid red';
   //    document.querySelector('.error-message').style.display = 'block';

   // } else {
   //    nomeBeneficiario.style.border = '';
   //    document.querySelector('.error-message').style.display = 'none';

   // }
})
// keyup --> mostra em tempo real as alterações

// console.log(form)



// CTRL+; -> Ignora palavras marcadas pelo Spell checker
