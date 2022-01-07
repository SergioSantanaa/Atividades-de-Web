function mudaCor(id){
    document.getElementById(id).style.color = 'slateblue';
}
function voltaCor(id){
    document.getElementById(id).style.color = 'white';
}
function verificarEmailVazio(){
    conteudoEmail = document.getElementById("email").value;
    if(conteudoEmail == '' || conteudoEmail == null || conteudoEmail==' '){
        document.getElementById('emailHelp').innerHTML = "Este campo é obrigatório!";
    }else{
        document.getElementById('emailHelp').innerHTML = "";
    }
}

function validaSenhas(){
    senha = document.getElementById("senha").value;
    confirmaSenha = document.getElementById("confirmaSenha").value;
    if(senha != confirmaSenha){
        alert("As senhas não conferem!");
    }
}