const { funDiasParaNiver } = require("../src/script");

test("Diferença de dias até o próximo aniversário", () => {
  expect(funDiasParaNiver(2005, 9, 27)).toBe(44);
});
