var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  console.log(this.value);
  var paciente = document.querySelectorAll(".paciente");
  for(var i = 0; i < paciente.length; i ++){
    var pacientes = paciente[i];
    var tdNome = paciente.querySelector(".info-nome")
    var nome = paciente.textContent;

  }
});
