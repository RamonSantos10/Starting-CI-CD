const {calculaIdade} = require("../src/script");

test("Verificar idade", () => {
  expect(calculaIdade(10)).toBe(new Date().getFullYear() - 10);
});
