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