const form = document.getElementById('form');
const button = document.getElementById('send');
const ex = document.getElementById('close');
const modal = document.getElementById('modal');

function send(object) {
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(object),
  };
  fetch('https://js2-contact-form-api.netlify.app/api/contact', fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      modal(data);
    });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(form);
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
});

funtion modal(data){
  const write = ``
}
/*button.addEventListener('click', (event) =>{
  event.preventDefault;
  modal.style.display = 'block';
});

ex.addEventListener('click', (event) =>{
  event.preventDefault;
  modal.style.display = 'none';
});*/
