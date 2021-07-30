//String
console.log("Exemplos de string:");
var nome ="Gabriel Aguiar";
var idade = 20;
var idade2 = 10;
alert(idade + idade2);

var frase = "Japão é o melhor time do mundo";
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())

//Array
console.log("Exemplos de Array:")
var lista = ["maçã", "pêra", "laranja"]
console.log(lista);
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
lista.push("uva");
console.log(lista)
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log(lista[3]);
lista.pop();
console.log(lista);
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log(lista[3]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

//Dicionário
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
//lista de dicionários
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome);

//Condicionais
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
}

//While (repetição)
console.log("Repetição")
var count = 0;

while(count <= 5){
    console.log("count: " + count);
    count = count+1;
}

//For (repetição)

console.log("For")
var count2;
for(count2=0; count2<=5; count2++){
    console.log("count2: " + count2);
}

//Data
var data = new Date();
console.log(data);
console.log(data.getMonth() + 1);
console.log(data.getFullYear());
console.log(data.getDay());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());

//Função
console.log("FUNÇÃO")

function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
console.log("vai Japão")
console.log(setReplace("vai Japão", "Japão", "Brasil"));

var validar;
function validaIdade(idade){
    validar;
    if(idade >= 18){
        validar = true;
    }
    else{
        validar=false
    }
    return validar;
}

var idade = prompt("qual a sua idade");
validaIdade(idade);
console.log(validar);

//Botão (injetando elemento html5 na pagina web)

function botao(){
 alert("Obrigado por clicar");
 document.getElementById("agradecimento");
 console.log(document.getElementById("agradecimento").innerHTML = "Obrigado por clicar")
}

//Botão (abre uma nova janela para outro site)

function google(){
    window.open("https://www.google.com/");
}

//Botão (abre outro site na mesma pagina)

function youtube(){
    window.location.href = "https://www.youtube.com/";
}

//Interações com o passar do maouse
function trocar(){
    document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse"
    alert("Trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}