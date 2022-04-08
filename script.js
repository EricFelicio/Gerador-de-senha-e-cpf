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

function botaoGerarSenha() {

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