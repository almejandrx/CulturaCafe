function Enviar(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre.trim() !== '' && email.trim() !== '' && mensaje.trim() !== '') {
    const overlay = document.querySelector('.overlay');
    const spinner = document.querySelector('.spinner');
    overlay.style.display = 'flex';
    spinner.style.display = 'flex';

    setTimeout(function() {
      overlay.style.display = 'none';
      spinner.style.display = 'none';
      alert('El correo se envió correctamente, gracias por contactarnos');
      document.getElementById('formulariocontacto').submit();
    }, 2000); // 1500 milisegundos = 1.5 segundos
  } else {
    alert('Por favor rellena todos los campos antes de enviar el correo.');
  }
}