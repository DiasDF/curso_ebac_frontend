// main.js

// Cria o JS do formulário
const form = document.getElementById('form-atividade');

//Cria as constantes com as imagens
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste" />';

// Cria Array de Linhas
let gLinhas = '';

// Evento de SUBMIT para o formulário
form.addEventListener('submit', function(e) {
   e.preventDefault(); // Evita o auto-reload da página e perda dos dados inseridos

      // Pega o valor do input via ID: <input type="text" id="nome-atividade" required placeholder="Atividade" />
      const inputNomeAtividade = document.getElementById('nome-atividade');
      const inputNotaAtividade = document.getElementById('nota-atividade');

      // Adiciona os dados na Tabela pelas Linhas "tr" <Table Row> e Colunas "td" <Table Data Cells Element>
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
