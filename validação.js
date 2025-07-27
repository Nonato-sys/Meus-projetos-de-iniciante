document.getElementById('form-contato').addEventListener('submit', function(e) {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const status = document.getElementById('mensagem-status');

  if (nome === '' || email === '' || mensagem === '') {
    e.preventDefault();
    status.textContent = 'Por favor, preencha todos os campos.';
    status.style.color = 'red';
  } else if (!email.includes('@') || !email.includes('.')) {
    e.preventDefault();
    status.textContent = 'Email inválido.';
    status.style.color = 'red';
  } else {
    // Não chama e.preventDefault() aqui!
    status.textContent = '';
    // O formulário será enviado normalmente para o FormSubmit
  }
});

const btn = document.getElementById('toggle-dark');
// Aplica o modo escuro se já estiver salvo
if (localStorage.getItem('modo-escuro') === 'true') {
  document.body.classList.add('dark-mode');
  btn.textContent = '☀️';
}
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  // Salva a preferência no localStorage
  localStorage.setItem('modo-escuro', document.body.classList.contains('dark-mode'));
});
