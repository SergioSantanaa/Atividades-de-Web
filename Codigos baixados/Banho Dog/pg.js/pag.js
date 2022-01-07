function exibeMsg(id){
    dog=document.getElementById(id).value;
    alert("Olá "+dog+" você vai tomar banho hoje pois se sujou na lama !");

}
function tornarMaiusculo(id){
    campoTexto = document.getElementById(id).value;
    campoTextoMaiusculo = campoTexto.toUpperCase();
    document.getElementById(id).value = campoTextoMaiusculo;
}