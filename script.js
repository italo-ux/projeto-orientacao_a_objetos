const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
};


document.getElementById("executar").addEventListener("click", function () {
    const pessoa = {
        nome: "João",
        idade: 30,
        profissao: "Desenvolvedor",
    };
document.querySelector("#nome").innerHTML = pessoa.nome;
    document.querySelector("#idade").innerHTML = pessoa.idade
    document.querySelector("#profissao").innerHTML = pessoa.profissao;

});
document.getElementById("executar1").addEventListener("click", function () {
    const Animal = {
        nome: "Galinha",
        Especie: "Gallus gallus domesticus",
        Classe: "Aves",
        Familia: "Phasianidae",
    };
document.querySelector("#nome1").innerHTML = Animal.nome;
    document.querySelector("#idade1").innerHTML = Animal.Especie
    document.querySelector("#profissao1").innerHTML = Animal.Classe;
    document.querySelector("#profissao2").innerHTML = Animal.Familia;

});