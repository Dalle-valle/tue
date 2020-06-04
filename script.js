window.addEventListener("scroll", fillBar)


function fillBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";

}




document.querySelector(".burger_menu").addEventListener("click", burger);


function burger() {
    const bmenu = document.querySelector(".mylinks");
    fade();


    if (bmenu.style.display === "flex") {
        bmenu.style.display = "none";
        document.querySelector(".menu_wrapper").classList.add("fadein");
        document.querySelector(".menu_wrapper").classList.remove("fadein");


        document.querySelector(".burger_menu img").src = "billeder/burger.svg";
        document.querySelector(".c_baskin").style.visibility = "visible";
        document.querySelector("#progress").style.visibility = "visible";
        document.querySelector(".logo").style.visibility = "visible";



    } else {
        bmenu.style.display = "flex";
        document.querySelector(".burger_menu img").src = "billeder/kryds.svg";
        document.querySelector(".c_baskin").style.visibility = "hidden";
        document.querySelector("#progress").style.visibility = "hidden";
        document.querySelector(".logo").style.visibility = "hidden";

        fade();







    }
}

function fade() {
    if (document.querySelector(".menu_wrapper").classList.contains("fadeout")) {
        document.querySelector(".menu_wrapper").classList.add("fadein")
    } else {
        document.querySelector(".menu_wrapper").classList.add("fadein");
    }

}
