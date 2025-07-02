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
