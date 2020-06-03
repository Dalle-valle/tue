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

    if (bmenu.style.display === "flex") {
        bmenu.style.display = "none";
        document.querySelector(".burger_menu img").src = "billeder/burger.svg";



    } else {
        bmenu.style.display = "flex";
        document.querySelector(".burger_menu img").src = "billeder/kryds.svg";

    }
}
