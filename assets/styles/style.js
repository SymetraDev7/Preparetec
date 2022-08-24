const body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        sidebarAbrir = document.querySelector(".sidebarAbrir"),
        sidebarFechar = document.querySelector(".sidebarFechar");

    //função menu lateral responsivo
    sidebarAbrir.addEventListener("click" , () =>{
        nav.classList.add("ativar");
    });

    body.addEventListener("click", e =>{
        let clicarElem = e.target;

        if(!clicarElem.classList.contains("sidebarAbrir") && !clicarElem.classList.contains("menu")){
            nav.classList.remove("ativar");
        }
    });

var formProfessores = document.querySelector('.group-professores')
var formAlunos = document.querySelector('.group-alunos')
var tipoUsuario = document.querySelector('#tipoUsuario');

tipoUsuario.addEventListener("change",() => {
    if(tipoUsuario.value == "professor"){
        formProfessores.style.display = "flex";
        formAlunos.style.display = "none";
    }else if(tipoUsuario.value == 'aluno'){
        formAlunos.style.display = 'flex';
        formProfessores.style.display = "none";
    } else {
        formProfessores.style.display = "none";
        formAlunos.style.display = "none";
    }
})

function scrollTo(x, y){
    window.scroll(x, y)
}