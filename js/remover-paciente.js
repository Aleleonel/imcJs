var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");
// remove elemento da lista com delay
tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function(){
      event.target.parentNode.remove();
  }, 500);

});
