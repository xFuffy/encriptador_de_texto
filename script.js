const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// a --> ai
// e --> enter
// i --> imes
// o --> ober
// u --> ufat

const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function btnEncriptar(){
    const encriptacion = encriptar(textArea.value);
    if(isValid(encriptacion)){
        mensaje.value = encriptacion;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
    else{
        //VER QUE HACER PARA QUE RESALTE LA PARTE DE QUE NO SE PUEDEN PONER CARACTERES ESPECIALES NI ACENTOS
    }
}

function encriptar(textoEncriptado){
    textoEncriptado = textoEncriptado.toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncriptado;
}

function btnDesencriptar(){
    const desencriptacion = desencriptar(textArea.value);
    mensaje.value = desencriptacion;
    textArea.value = "";
}   

function desencriptar(textoDesencriptado){
    textoDesencriptado = textoDesencriptado.toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDesencriptado;
}

function isValid(texto) {
    return texto ? !/[^a-z\sñ]/.test(texto) : true;
}
