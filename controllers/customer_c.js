import { client_services } from '../service/client-service.js';

const form = document.querySelector("[data-form]");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector('[data-name]').value
    const email = document.querySelector('[data-email]').value

    client_services.create_client(name, email).then(response => {
        window.location.href = '../screens/registro_completado.html'
        console.log(response)
    }).catch(err => console.log(err));
});