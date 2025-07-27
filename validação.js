document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio automático

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const status = document.getElementById('mensagem-status');

  if (nome === '' || email === '' || mensagem === '') {
    status.textContent = 'Por favor, preencha todos os campos.';
    status.style.color = 'red';
  } else if (!email.includes('@') || !email.includes('.')) {
    status.textContent = 'Email inválido.';
    status.style.color = 'red';
  } else {
    status.textContent = 'Mensagem enviada com sucesso!';
    status.style.color = 'green';
    this.reset(); // limpa o formulário
  }
});
