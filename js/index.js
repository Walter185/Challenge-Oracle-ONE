// Dicionario para encriptar
const diccionario = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar(text){
    let resultado = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (diccionario[char]) {
            resultado += diccionario[char];
        } else {
            resultado += char;
        }
    }
    return resultado;
}
const pattern = /^[a-z\s]*$/;

function handleEncryption() {
    const inputText = document.getElementById('message').value.toLowerCase();

    if (!pattern.test(inputText)) {
        document.getElementById('error').textContent = 'Ingrese solo letras minúsculas y sin acentos';
        document.getElementById('resultado').textContent = '';
        return;
    }
    const textoEncriptado = encriptar(inputText);

    document.getElementById('resultado').textContent = textoEncriptado;
    document.getElementById('error').textContent = '';

}

function desencriptar(textoEncriptado){
    let resultado = '';

    //Reemplazamos cada caracter encriptado por su letra original
    for (let i = 0; i < textoEncriptado.length;) {
        const substring = textoEncriptado.substring(i);
        const match = substring.match(/^(enter|imes|ai|ober|ufat)/);
    
    if (match) {
        resultado += Object.keys(diccionario)
        .find(key => diccionario[key] === match[0]);
        i += match[0].length;
    } else {
        resultado += substring[0];
        i++;
    }
    


// Probando si funciona 
// const textoEncriptado = encriptar('hola');
// console.log(textoEncriptado);
// const textoDesencriptado = desencriptar(textoEncriptado);
// console.log(textoDesencriptado);
    }}
// Copiando resultado en el portapapeles
async function copiarEnPortapapeles() {
    let text = document.getElementById('texto').innerHTML;
    try {
        await navigator.clipboard.writeText(text);
        // mostrar mensaje de copiado
        console.log("Texto copiado al portapapeles" + text);
    } catch (err) {
        // mostrar mensaje de no copiado
        console.error("Error al copiar texto al portapapeles:", err);
    }

// let resultadoCopiado = document.getElementById('resultado');

// resultadoCopiado.value = resultado;
// resultadoCopiado.style.display = 'block';

// navigator.clipboard.writeText(resultado)
// .then(() => console.log('Texto copiado'))
// .catch(err => console.log('Error al copiar el texto: ', err));
//     }
// return resultado;
}


