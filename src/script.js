const dataNascimento = document.getElementById("dataNascimento");
const resultado = document.getElementById("resultado");

function calcular() {
  const [ano, mes, dia] = dataNascimento.value.split("-");

  const dataFormatada = new Date(ano, mes - 1, dia);
  const dataAtual = new Date();
  const proximoNiver = new Date(dataAtual.getFullYear(), mes - 1, dia);

  console.log(proximoNiver);

  /*
  const anosDeVida =
    (dataAtual.getTime() - dataFormatada.getTime()) / 1000 / 60 / 60 / 24 / 365; // Anos de vida exatos
*/

  const diasParaNiver =
    (proximoNiver.getTime() - dataAtual.getTime()) / 1000 / 60 / 60 / 24; // Dias para o aniversário

  console.log("Dias para o níver: ", Math.ceil(diasParaNiver));

  if (dataNascimento.value == "" || dataNascimento.value == "Invalid Date") {
    resultado.innerHTML = `Por favor, insira uma data de nascimento válida!`;
  } else {
    resultado.innerHTML = `Dias para o aniversário: ${Math.ceil(
      diasParaNiver
    )}`;
  }
}

function funDiasParaNiver(ano, mes, dia) {
  const dataFormatada = new Date(ano, mes - 1, dia);
  const dataAtual = new Date();
  const proximoNiver = new Date(dataAtual.getFullYear(), mes - 1, dia);

  const diasParaNiver =
    (proximoNiver.getTime() - dataAtual.getTime()) / 1000 / 60 / 60 / 24;

    return Math.ceil(diasParaNiver);  
}

module.exports = {
  funDiasParaNiver
}


