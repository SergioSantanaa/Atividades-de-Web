function validarNome(id) {

    var nome = document.getElementById(id).value;
    if (nome == "") {
        alert(" Campo nome não pode estar vazio");
            }
    function validarEmail(id) {

        var email = document.getElementById(id).value;
        if (email == "") {
            alert("E-mail não informado");

        }
    }



    function verificarSenha() {
        var senha = document.getElementById(id).value;

        if (senha == "") {
            document.getElementById("message").innerHTML = "** Preencha a senha, por favor!";
            return falso;
        }


        if (senha.length < 8) {
            document.getElementById("message").innerHTML = "** O comprimento da senha deve ter pelo menos 8 caracteres";
            return falso;
        }


        if (senha.length > 15) {
            document.getElementById("message").innerHTML = "** O comprimento da senha não deve exceder 15 caracteres";
            return falso;
        } else {
            alerta("Senha correta");
        }
    }
}

