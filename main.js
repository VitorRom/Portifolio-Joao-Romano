var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // Lógica para exibir mais informações sobre o projeto
    console.log("Clicou no botão Ver mais");
  });
}

const chk = document.getElementById('chk')

chk.addEventListener('change', () =>{
  document.body.classList.toggle('dark')
})