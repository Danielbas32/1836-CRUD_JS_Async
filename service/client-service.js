//open http (method,url)
// CRUD   - methods HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE
// fetch api http
const list_clients = () =>
  fetch('http://localhost:3000/perfil').then((response) => response.json());

const create_client = (name, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name, email, id: uuid.v4() })
  })
};

const delete_client = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
  })
}
const detail_client = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((response) => response.json());
};

const update_c = (name, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ name, email })
  })
  .then((response) => response)
  .catch((err) => console.log (err));
};

export const client_services = {
  list_clients,
  create_client,
  delete_client,
  detail_client,
  update_c,
};


