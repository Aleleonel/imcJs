var pacientes = document.querySelectorAll(".paciente")


for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdImc = paciente.querySelector(".info-imc");

    var tdNome = paciente.querySelector(".info-nome");
    var nome = tdNome.textContent;

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;


    var imc = peso /(altura * altura);
    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 200){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 1 || altura >= 3.00){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido")
    }
    if(alturaEhValida && pesoEhValido) {    
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(){
    console.log("Ola cliquei aqui")
})



