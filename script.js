function realizarOperacao() {
  const textoEntrada = document.getElementById("inputText").value;
  const operacao = document.getElementById("operation").value;
  let textoResultado = "";

  if (contemMaiusculas(textoEntrada)) {
    alert("Por favor, digite apenas letras minúsculas.");
    return;
  }

  if (operacao === "encrypt") {
    textoResultado = criptografarTexto(textoEntrada);
  } else if (operacao === "decrypt") {
    textoResultado = descriptografarTexto(textoEntrada);
  }

  document.getElementById("outputText").innerText = textoResultado;
}

function contemMaiusculas(texto) {
  return /[A-Z]/.test(texto);
}

function criptografarTexto(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function descriptografarTexto(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function copiarParaAreaTransferencia() {
  const textoResultado = document.getElementById("outputText").innerText;

  navigator.clipboard
    .writeText(textoResultado)
    .then(() => alert("Texto copiado para a área de transferência!"))
    .catch((err) => console.error("Erro ao copiar texto: ", err));
}
