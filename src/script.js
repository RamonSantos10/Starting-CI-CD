const idade = document.getElementById("idade");
const ano = document.getElementById("ano");

console.log(new Date().getFullYear())

function calculaIdade(i) {
    ano.innerHTML = `Você nasceu em ${new Date().getFullYear() - Number(idade.value)}`
    return new Date().getFullYear() - i;
}

module.exports = { calculaIdade };


