const form = document.getElementById('form');
const modal = document.getElementById('modal');
const preModal = document.getElementById('preModal');

function writeModal(data) {
  const write = `
  <div class="insideModal">
    <h2>Su mensaje ha sido recibidio:</h2>
    <ul>
      <li>NOMBRE: ${data.name}</li>
      <li>EMAIL: ${data.email}</li>
      <li>TELEFONO: ${data.phone}</li>
      <li>ASUNTO: ${data.subject}</li>
      <li>MENSAJE: ${data.message}</li>
    </ul>
    <p>¡Muchas gracias!<br>Pronto nos comunicaremos con usted.</p>
    <button type="submit" id="ok">ok</button>
  </div>`;
  modal.innerHTML = write;
  const ex = document.getElementById('ok');
  ex.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'none';
    preModal.style.display = 'none';
    form.elements[0].value = '';
    form.elements[1].value = '';
    form.elements[2].value = '';
    form.elements[3].value = '';
    form.elements[4].value = '';
  });
}

function send(object) {
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(object),
  };
  fetch('https://js2-contact-form-api.netlify.app/api/contact', fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      writeModal(data);
    });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements[0].value;
  const email = form.elements[1].value;
  const numero = form.elements[2].value;
  const asunto = form.elements[3].value;
  const msj = form.elements[4].value;
  if (!numero) {
    const object = {
      name: `${name}`,
      email: `${email}`,
      phone: 'No fue proporcionado',
      subject: `${asunto}`,
      message: `${msj}`,
    };
    send(object);
  } else {
    const object = {
      name: `${name}`,
      email: `${email}`,
      phone: `${numero}`,
      subject: `${asunto}`,
      message: `${msj}`,
    };
    send(object);
  }
  modal.style.display = 'block';
  preModal.style.display = 'block';
});
