// Variáveis do DOM (apenas no browser)
const dataNascimento = typeof document !== 'undefined' ? document.getElementById("dataNascimento") : null;
const resultado = typeof document !== 'undefined' ? document.getElementById("resultado") : null;

function calcular() {
  const [ano, mes, dia] = dataNascimento.value.split("-");

  if (dataNascimento.value == "" || !ano || !mes || !dia) {
    resultado.innerHTML = `Por favor, insira uma data de nascimento válida!`;
    return;
  }

  const diasParaNiver = funDiasParaNiver(parseInt(ano), parseInt(mes), parseInt(dia));
  
  console.log("Dias para o aniversário:", diasParaNiver);

  if (diasParaNiver === 0) {
    resultado.innerHTML = `🎉 Feliz aniversário! Hoje é seu dia especial!`;
  } else if (diasParaNiver === 1) {
    resultado.innerHTML = `🎂 Seu aniversário é amanhã! Falta apenas 1 dia!`;
  } else {
    resultado.innerHTML = `Dias para o aniversário: ${diasParaNiver}`;
  }
}

function funDiasParaNiver(ano, mes, dia, dataReferencia = null) {
  const dataFormatada = new Date(ano, mes - 1, dia);
  
  // Normalizar a data atual para comparação (apenas ano, mês e dia)
  let dataAtual;
  if (dataReferencia) {
    const tempDate = new Date(dataReferencia);
    dataAtual = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
  } else {
    const tempDate = new Date();
    dataAtual = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
  }
  
  // Aniversário no ano atual
  const aniversarioEsteAno = new Date(dataAtual.getFullYear(), mes - 1, dia);
  
  // Se é hoje o aniversário
  if (dataAtual.getTime() === aniversarioEsteAno.getTime()) {
    return 0;
  }
  
  // Próximo aniversário
  let proximoNiver = aniversarioEsteAno;
  
  // Se o aniversário já passou este ano, considera o próximo ano
  if (aniversarioEsteAno < dataAtual) {
    proximoNiver = new Date(dataAtual.getFullYear() + 1, mes - 1, dia);
  }

  const diasParaNiver = Math.floor(
    (proximoNiver.getTime() - dataAtual.getTime()) / (1000 * 60 * 60 * 24)
  );

  return diasParaNiver;
}

// Export para testes em Node/Jest (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { funDiasParaNiver };
}

// Disponibiliza a função calcular no browser para o onclick do botão
if (typeof window !== 'undefined') {
  window.calcular = calcular;
}


