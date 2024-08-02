class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
      this.primeiroNome = primeiroNome;
      this.segundoNome = segundoNome;
      this.primeiraNota = primeiraNota;
      this.segundaNota = segundaNota;
    }
    
    nomeCompleto() {
      return `${this.primeiroNome} ${this.segundoNome}`;
    }
    media() {
      return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }
    situacao() {
      return this.media() >= 6 ? "Aprovado" : "Reprovado";
    }
  }
  
  //Array com 5 alunos
  let alunos = [
    new Aluno("Elias", "Prestes", 5, 6),
    new Aluno("Neymar", "Junior", 4, 5),
    new Aluno("Davi", "Felipe", 9, 8.5),
    new Aluno("Ana", "Carolina", 6, 9),
    new Aluno("Hugo", "Souza", 4.5, 7.5)
  ];
  
  function exibirInformacoes(alunos) {
    for (let i = 0; i < alunos.length; i++) {
      const aluno = alunos[i];
      const nomeCompleto = aluno.nomeCompleto();
      const media = aluno.media().toFixed(2);
      const situacao = aluno.situacao();
      
      console.log(`Nome completo: ${nomeCompleto}`);
      console.log(`Média: ${media}`);
      console.log(`Situação: ${situacao}`);
      console.log("------------------------");
  
      if (i < 5) {
        alert(`Nome completo: ${nomeCompleto}\nMédia: ${media}\nSituação: ${situacao}`);
      }
    }
  }
  
  exibirInformacoes(alunos);