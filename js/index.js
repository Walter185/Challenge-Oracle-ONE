// Dicionario para encriptar
const diccionario = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
const textArea = document.querySelector(".form_textarea");
const mensaje = document.querySelector(".contenedorToy");
const informacion = document.querySelector(".info");

function encriptar(textoEncriptado) {
    for (let i=0; i<diccionario.length; i++) {
        if (textoEncriptado.includes(diccionario[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(diccionario[i][0], diccionario[i][1]);
        }
    }
    return textoEncriptado;
}


function ocultar(elemento) {
    document.querySelector(elemento).style.display="none";
}

function mostrar(elemento) {
    document.querySelector(elemento).style.display="block";
}



function btnEncriptar() {
    const encriptacion = encriptar(textArea.value);
    if(isLowerCaseWithSpaces(encriptacion) && encriptacion != "") {
        mensaje.innerHTML = encriptacion;
        textArea.value = "";
        informacion.style.color = "blue";
        mostrar(".copiar");
    }
    else {
        informacion.style.color = "red";
    }
}

function desencriptar(textoDesencriptado){
    textoDesencriptado = textoDesencriptado.toLowerCase();
    for(let i=0; i<diccionario.length; i++){
        if(textoDesencriptado.includes(diccionario[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(diccionario[i][1], diccionario[i][0]);
        }
    }
    return textoDesencriptado;
}

function btnDesencriptar() {
    const desencriptacion = desencriptar(textArea.value);
    if(isLowerCaseWithSpaces(desencriptacion) && desencriptacion != "") {
        mensaje.innerHTML = desencriptacion;
        textArea.value = "";
        informacion.style.color = "blue";
    }
    else {
        informacion.style.color = "red";
    }
}

function copiarTexto() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    navigator.mensaje.writeText(mensaje.value);
}

function isLowerCaseWithSpaces(input) {
    const allowedCharsRegex = /^[a-z]/;
    return allowedCharsRegex.test(input);
  }

