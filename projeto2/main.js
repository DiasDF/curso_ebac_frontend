// main.js

// REORGANIZAR O JS
const form = document.getElementById('form-atividade');

const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste" />';

// Arrays para Cálculo da Média use PUSH: atividades.push(inputNomeAtividade.value);
const atividades = [];
const notas = [];

// Respostas de Resultado Final
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

// Nota Mínima
const notaMinima = parseFloat(prompt("Digite qual a nota mínima para aprovação:"));

let gLinhas = '';

form.addEventListener('submit', function(e) {
   e.preventDefault();

   adicionarLinha();
   atualizaTabela();
   atualizaMediaFinal();

}); // Fim do addEventListener()

function adicionarLinha() {
      const inputNomeAtividade = document.getElementById('nome-atividade');
      const inputNotaAtividade = document.getElementById('nota-atividade');

      // Verificar Redundâncias nos nomes das atividades
      if (atividades.includes(inputNomeAtividade.value)) {
            alert(`A Atividade: ${inputNomeAtividade.value} já foi inserida`);
      } else {

      // Add valores aos Arrays para Cálculo da Média
      atividades.push(inputNomeAtividade.value);
      notas.push(parseFloat(inputNotaAtividade.value));

      // Cria a Tabela
      let linha = '<tr>';
      linha += `<td>${inputNomeAtividade.value}</td>`;
      linha += `<td>${inputNotaAtividade.value}</td>`;
      linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
      linha += '</tr>';
      
      gLinhas += linha;
            }
      inputNomeAtividade.value = '';
      inputNotaAtividade.value = '';
}

function atualizaTabela() {
      const corpoTabela = document.querySelector('tbody');
      corpoTabela.innerHTML = gLinhas;
}

// Função para Cálculo da Média
function atualizaMediaFinal() {
      const mediaFinal =  calculaMediaFinal();

      // Adicione um ID="valor-media-final" no HTML
      // Recupere o documento
      document.getElementById('valor-media-final').innerHTML = mediaFinal.toFixed(2);
      document.getElementById('resultado-media-final').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
      let somaDasNotas = 0;

      for (let i = 0; i < notas.length; i++) {
            somaDasNotas += notas[i];
            console.log(notas);
      }

      console.log(somaDasNotas);

      // Testa os Push "atividades e notas" L.29-30
      console.log(atividades);

      return somaDasNotas / notas.length;
}



/* FORMA ANTIGA
main.js

const form = document.getElementById('form-atividade');

const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste" />';

let gLinhas = '';

form.addEventListener('submit', function(e) {
   e.preventDefault(); // Evita o auto-reload da página e perda dos dados inseridos

      const inputNomeAtividade = document.getElementById('nome-atividade');
      const inputNotaAtividade = document.getElementById('nota-atividade');

      let linha = '<tr>';
      linha += `<td>${inputNomeAtividade.value}</td>`;
      linha += `<td>${inputNotaAtividade.value}</td>`;
      linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
      linha += '</tr>';
      
      gLinhas += linha;

      const corpoTabela = document.querySelector('tbody');
      corpoTabela.innerHTML = gLinhas;

      inputNomeAtividade.value = '';
      inputNotaAtividade.value = '';
});

*/

