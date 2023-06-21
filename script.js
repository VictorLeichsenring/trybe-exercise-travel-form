const btnEnviar = document.getElementById('submit-btn');
const btnLimpar = document.getElementById('clear-btn');

function submit(event) {
  event.preventDefault();
}

btnEnviar.addEventListener('click', submit)