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

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido")
    }
    if(alturaEhValida && pesoEhValido) {
        var imc = calculaimc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
  if(peso >= 2 && peso < 200){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <= 2.30){
    return true;
  }else{
    return false;
  }
}

function calculaimc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura)
    return imc.toFixed(2);
}
