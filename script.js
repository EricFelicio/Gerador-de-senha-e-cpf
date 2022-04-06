//setando let do valor do input range para inputrange
let inputrange = document.querySelector("#inputrange");
//setando let da informação do botão para button
let button = document.querySelector("#button");

//setando let para campos de caracteres para alocar o valor do input range
let caracteres = document.querySelector("#caracteres");
//setando let para senha da senha que é gerada e alocando no campo senha
let senha = document.querySelector("#senha");

//setando let para campos que necessitam iniciar display:none
let esconde = document.querySelector(".hide");

//setando let para senha
let charset = "1234567890!@#$%&qwertyuiopasdfghjklçzxcvbnm";
//setando let para a nova senha que é gerada
let novasenha = "";

//mostrar os caracteres do input range
caracteres.innerHTML = inputrange.value;

//valor dos caracteres acompanhando ao vivo o input range.
inputrange.oninput = function(){
    caracteres.innerHTML = this.value;
}

//função para procesar o clique do botão
function botaoGerarSenha() {

    let pass = "";

    for(let i = 0, n = charset.length; i < inputrange.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n ));
    }

   esconde.classList.remove("hide");
    senha.innerHTML = pass;
    novasenha = pass;
}

function copiar() {
    navigator.clipboard.writeText(novasenha);
}