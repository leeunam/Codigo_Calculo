let total = 0
const notas = [5, 7, 0, 2]
for (let i=0; i<notas.lenght; i++) {
    total += notas [i]
  }
const media = total/notas.lenght

if (media >= 7.0){
    console.log("Aluno foi Aprovado")
  }
else{
    console.log("Aluno foi Reprovado")
}
