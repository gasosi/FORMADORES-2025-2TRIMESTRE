function inserirNome(){
    let nomeUsuario = prompt('qual é o seu nome?');
    let elemento = document.querySelector('#nome-usuario');
    console.log(elemento);
    elemento.textContent = nomeUsuario;
}

inserirNome();
let linguagens = ["JavaScript", "Phyton", "C"];
console.log (linguagens [0]) //javascript
console.log (linguagens[1]) //phyton
console.log (linguagens [2]) // C

const lista = document.querySelector ("#lista");
lista.textContent =  linguagens [2];
lista.textContent =  linguagens [1];
lista.textContent =  linguagens [0];

console.log(aluno1.nome); 
console.log(aluno1.idade); 
console.log(aluno1.anoLetivo);

console.log(aluno1.materiasFavoritas[1]);



let aluno = {
 nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ºsérie",
  materiasFavoritas: ["Geografia","Programação","Arte"]
};
  

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;