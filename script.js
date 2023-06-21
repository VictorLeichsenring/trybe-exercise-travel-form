const btnEnviar = document.getElementById('submit-btn');
const btnLimpar = document.getElementById('clear-btn');
const checkboxFotos = document.getElementById('agreement');

function submit(event) {
  event.preventDefault();
}

function changeCheckboxFotos(event) {
  if (event.target.checked === true) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}

btnEnviar.addEventListener('click', submit);
checkboxFotos.addEventListener('change', changeCheckboxFotos);
