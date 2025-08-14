const cor = document.getElementById("cor");


console.log('ué')

cor.addEventListener("input", (e) => {
    console.log(cor.value);
    document.body.style.backgroundColor = cor.value;
});





