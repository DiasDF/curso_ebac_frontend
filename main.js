const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste" />';


let gLinhas = '';

form.addEventListener('submit', function(e) {
   e.preventDefault();

      const inputNomeAtividade = document.getElementById('nome-atividade');
      const inputNotaAtividade = document.getElementById('nota-atividade');

      // Adiciona os dados
      let linha = '<tr>';
      linha += `<td>${inputNomeAtividade.value}</td>`;
      linha += `<td>${inputNotaAtividade.value}</td>`;
      linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
      linha += '</tr>';
      
      // Adiciona os dados a variável global "linhas"
      gLinhas += linha;

      // Adiciona os dados no HTML
      const corpoTabela = document.querySelector('tbody');
      corpoTabela.innerHTML = gLinhas;

      // limpa os campos do input
      inputNomeAtividade.value = '';
      inputNotaAtividade.value = '';

      // alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);
});
