import { client_services } from '../service/client-service.js';

const form = document.querySelector("[data-form]")

const get_information = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        window.location.href = "/screens/error.html"
    }

    const name = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    try {
        const perfil = await client_services.detail_client(id);
        if (perfil.name && perfil.email) {
            name.value = perfil.name;
            email.value = perfil.email;
        } else {
            throw new Error();
        }

    } catch (error) {
        console.log("catch--->", err);
        alert("Hubo un error");
        window.location.href = "/screens/error.html";
    }
};

get_information();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const name = document.querySelector("[data-nombre]").value
    const email = document.querySelector("[data-email]").value

    client_services
        .update_c(name, email, id).then(() => {
            window.location.href = "../screens/edicion_concluida.html"
        });
});