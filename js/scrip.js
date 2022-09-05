document.getELementByid("botaoEnviar").addEventlistener("click",validaFormulario)

function validaFormulario() {
  if(document.getElementByid("nome").value != ""  && document.getElementByid("email").value != "")
  document.getElementByid("telefone").value != "")
  {
  alert ("Prontinho! você receberá as novidades por email.")
  }else{
  alert ("Por favor, preencha os campos nome e email.")
}




 