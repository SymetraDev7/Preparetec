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



function scrollTo(x, y){
    window.scroll(x, y)
}