// const btnMenu = document.getElementById('btnMenu');

// function toggleMenu() {
//     const nav = document.getElementById('nav');
//     nav.classList.toggle('active');
// }

// btnMenu.addEventListener('click', toggleMenu());

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