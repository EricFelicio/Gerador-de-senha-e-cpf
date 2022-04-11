let inputrange = document.querySelector("#inputrange"); //setando let do valor do input range para inputrange
let button = document.querySelector("#button"); //setando let da informação do botão para button

let caracteres = document.querySelector("#caracteres");//setando let para campos de caracteres para alocar o valor do input range
let senha = document.querySelector("#senha");//setando let para senha da senha que é gerada e alocando no campo senha

let esconde = document.querySelector(".hide");//setando let para campos que necessitam iniciar display:none

let charset = "1234567890!@#$%&qwertyuiopasdfghjklçzxcvbnm";//setando let para senha
let novasenha = "";//setando let para a nova senha que é gerada

caracteres.innerHTML = inputrange.value;//mostrar os caracteres do input range

inputrange.oninput = function(){
    caracteres.innerHTML = this.value;
}//valor dos caracteres acompanhando ao vivo o input range.

function GerarSenha() {

    let pass = "";

    for(let i = 0, n = charset.length; i < inputrange.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n ));
    }//para numero gerar até os caracteres informados pelo input range

   esconde.classList.remove("hide");//excluir o .hide com display:none do css
    senha.innerHTML = pass;//alocar a senha gerada no html

    novasenha = pass;//alocar senha na let nova senha

}//função para procesar o clique do botão

function copiar() {
    navigator.clipboard.writeText(novasenha);
} //função para copiar a novasenha


let create_array = (total, numero) => Array.from(Array(total), () => number_random(numero));
let number_random = (number) => (Math.round(Math.random() * number));
let mod = (dividendo, divisor) => Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));

let esconde2 = document.querySelector(".esconde2");

function cpf(){

  let total_array = 9;
  let n = 9;
  let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = create_array(total_array, n);
  let ccc = "";

  let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  d1 = 11 - (mod(d1, 11));
  if (d1 >= 10) d1 = 0;

  let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  d2 = 11 - (mod(d2, 11));
  if (d2 >= 10) d2 = 0;

  esconde2.classList.remove("hide");

    if (mascara.checked)
        return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
    else
        return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;    
}

function gera() {
    numero.innerHTML = cpf();
}

function copiar2() {
    navigator.clipboard.writeText(novocpf);
} //função para copiar a novasenha
