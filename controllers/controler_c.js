import { client_services } from '../service/client-service.js';

const create_new_line = (name, email, id) => {
  const line = document.createElement("tr");
  const contents = `
      <td class="td" data-td>
        ${name}
      </td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html?id=${id}"
              class="simple-button simple-button--edit"
            >
              Edit
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button" id="${id}">
              Delete
            </button>
          </li>
        </ul>
      </td>
    `;
  line.innerHTML = contents;
  const btn = line.querySelector("button")
  btn.addEventListener("click", () => {
    const id = btn.id;
    client_services
      .delete_client(id)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => alert("error"));
  });

  return line;
};

const table = document.querySelector("[data-table]");

client_services
  .list_clients()
  .then((data) => {
    data.forEach(({ name, email, id }) => {
      const new_line = create_new_line(name, email, id);
      table.appendChild(new_line);
    });
  })
  .catch((error) => alert("An error occurred"));

