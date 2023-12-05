// alerta quando a conta é cirada com sucesso
function criadaSucesso(){
    alert("Conta criada com sucesso");
}
// alerta quando o login é realizado com sucesso
function loginSucesso(){
    alert("Login realizado com sucesso");
}
// mascara para o campo celular do formulário de criação de conta
function mascaraCelular(i){
    let fone = i.value;
    //(55) 51 91234-5678
    if(fone.length == 1){
        i.value = "("+i.value;
    }
    if(fone.length == 3){
        i.value = i.value+") ";
    }
    if(fone.length == 7){
        i.value = i.value+" ";
    }
    if(fone.length == 13){
        i.value = i.value+"-";
    }
}