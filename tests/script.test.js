const { funDiasParaNiver } = require('../src/script');

describe('Testes da função funDiasParaNiver', () => {
  test('Calcula dias para aniversário que ainda não passou este ano', () => {
    // Data de referência: 1º de janeiro de 2024
    const dataReferencia = '2024-01-01';
    // Aniversário em 25 de dezembro (ainda não passou)
    const resultado = funDiasParaNiver(1990, 12, 25, dataReferencia);
    expect(resultado).toBe(359); // 359 dias até 25/12/2024
  });

  test('Calcula dias para aniversário que já passou este ano', () => {
    // Data de referência: 31 de dezembro de 2024
    const dataReferencia = '2024-12-31';
    // Aniversário em 1º de janeiro (já passou)
    const resultado = funDiasParaNiver(1990, 1, 1, dataReferencia);
    expect(resultado).toBe(1); // 1 dia até 01/01/2025
  });

  test('Calcula quando é aniversário hoje', () => {
    // Data de referência: 25 de dezembro de 2024
    const dataReferencia = '2024-12-25';
    // Aniversário em 25 de dezembro (hoje)
    const resultado = funDiasParaNiver(1990, 12, 25, dataReferencia);
    expect(resultado).toBe(0); // É hoje o aniversário
  });

  test('Calcula para aniversário amanhã', () => {
    // Data de referência: 24 de dezembro de 2024
    const dataReferencia = '2024-12-24';
    // Aniversário em 25 de dezembro (amanhã)
    const resultado = funDiasParaNiver(1990, 12, 25, dataReferencia);
    expect(resultado).toBe(2); // 2 dias até aniversário
  });

  test('Calcula para ano bissexto', () => {
    // Data de referência: 1º de janeiro de 2024 (ano bissexto)
    const dataReferencia = '2024-01-01';
    // Aniversário em 29 de fevereiro
    const resultado = funDiasParaNiver(1992, 2, 29, dataReferencia);
    expect(resultado).toBe(60); // 60 dias até 29/02/2024
  });

  test('Testa com data atual sem parâmetro de referência', () => {
    // Teste dinâmico que funciona independente da data atual
    const hoje = new Date();
    const proximoAno = hoje.getFullYear() + 1;
    const resultado = funDiasParaNiver(1990, 1, 1); // 1º de janeiro
    
    // Deve retornar um valor entre 0 e 365
    expect(resultado).toBeGreaterThanOrEqual(0);
    expect(resultado).toBeLessThanOrEqual(365);
  });
});
