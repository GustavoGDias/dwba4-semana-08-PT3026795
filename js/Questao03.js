// Dados dos alunos
let aluno1 = {
    nome: "Fernado Gonçalves",
    nota1: 7,
    nota2: 9,
  };
  
  let aluno2 = {
    nome: "Julio Nataniel",
    nota1: 6,
    nota2: 9,
  };
  
  let aluno3 = {
    nome: "Julia Rodrigues",
    nota1: 8,
    nota2: 7.5,
  };
  
  // Função para calcular a nota total
  function calcularNotaTotal(aluno) {
    let nota1Ponderada = aluno.nota1 * 0.6;
    let nota2Ponderada = aluno.nota2 * 0.4;
    let notaTotal = nota1Ponderada + nota2Ponderada;
  
    // Arredondar a nota total para duas casas decimais
    notaTotal = notaTotal.toFixed(2);
  
    alert(`Nome do aluno: ${aluno.nome}\nNota 1: ${aluno.nota1}\nNota 2: ${aluno.nota2}`);
    alert(`Nome do aluno: ${aluno.nome}\nNota final: ${notaTotal}`)
  
    return notaTotal;
  }
  
  // Calcular e mostrar as notas dos alunos
  calcularNotaTotal(aluno1);
  calcularNotaTotal(aluno2);
  calcularNotaTotal(aluno3);
  