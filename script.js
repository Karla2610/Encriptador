var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var textArea = document.querySelector(".area_texto")
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    var area_texto = recuperarTexto();
    resultado.textContent = encriptarTexto(area_texto);
    textArea.value = "";
    resultado.style.backgroundImage = "none"
}

function desencriptar(){
    var area_texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(area_texto);
    textArea.value = "";
}

function recuperarTexto(){
    var area = document.querySelector(".area_texto");
    return area.value
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    let textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }

    return textoFinal;
}

function removerAcentos(area_texto){
    const acentos = [  
    /[\300-\306]/g, /[\340-\346]/g, 
    /[\310-\313]/g, /[\350-\353]/g, 
    /[\314-\317]/g, /[\354-\357]/g,
    /[\322-\330]/g, /[\362-\370]/g, 
    /[\331-\334]/g, /[\371-\374]/g, 
    /[\321]/g, /[\361]/g, 
    /[\307]/g, /[\347]/g, 
  ];
  
  const letras = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];
  
  for (let i = 0; i < acentos.length; i++) {
    area_texto = area_texto.replace(acentos[i], letras[i]);
  }
  
  return area_texto;
}

function validandoTexto(area_texto) {
  const normalizar-area_texto = removerAcentos(area_texto);
  
  if (area_texto !== normalizar-area_texto) {
    alert('No se aceptan acentos en el texto. Por favor, remueve los acentos antes de continuar.');
  } else {
    console.log('Texto válido:', area_texto);
  }
}

const inputText = '¡Hólà!';
validateText(inputText);


let btnCopiar = document.querySelector(".btn-Copiar");
    btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    alert("¡texto copiado con exito!")
})