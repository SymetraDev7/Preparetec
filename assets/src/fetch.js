let formLogin = document.querySelector(".form-login");

//login
function Login() {
  fetch("http://localhost:3333/api/admin/login", {
    body: new FormData(formLogin),
    headers: {
        "Content-Type": "application/json",
    },
    method: "GET",
  }
  )
    .then((Response) => Response.json())
    .then((json) => console.log(json.data));
}

let response = fetch('http://localhost:3333/api/admin/professores/')

fetch('http://localhost:3333/api/admin/professores/')
    .then(response => response.json())
    .then((json) => {
      let professores = (json.data)

      console.log(professores)

    }) .catch(err => console.error('Erro de solicitação', err));

    

