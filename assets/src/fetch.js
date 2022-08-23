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
