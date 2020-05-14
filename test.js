document.addEventListener("DOMContentLoaded", start);

const url = "http://ddalby.dk/kea/tue_volder/wordpress/wp-json/wp/v2/painting";

let paintings;
let filter = "alle";

function start() {
    hentJson();
}

async function hentJson() {
    const response = await fetch(url);
    paintings = await response.json();
    visPaintings();
}

function visPaintings() {
    const container = document.querySelector("#shop");
    container.innerHTML = "";
    const shopTemplate = document.querySelector("template");
    paintings.forEach(painting => {

        let klon = shopTemplate.cloneNode(true).content;
        klon.querySelector("img").src = painting.billede.guid;
        klon.querySelector("img").alt = painting.billede.post_title;
        klon.querySelector("h2").textContent = painting.title.rendered;


        container.appendChild(klon);

    })
}




window.addEventListener("scroll", fillBar)


function fillBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector("#myBar").style.width = scrolled + "%";
}



//
//function visKaffer() {
//    console.log(alleKaffer)
//    const container = document.querySelector("#index");
//    container.innerHTML = "";
//    const kafferTemplate = document.querySelector("template");
//    alleKaffer.feed.entry.forEach(kaffe => {
//        if (filter == "alle" || filter == kaffe.gsx$kategori.$t) {
//            let klon = kafferTemplate.cloneNode(true).content;
//            klon.querySelector("img").src = `billeder/small/${kaffe.gsx$billede.$t}-sm.jpg`;
//            klon.querySelector("img").alt = kaffe.gsx$billede.$t;
//            klon.querySelector("h2").textContent = `${kaffe.gsx$navn.$t}`;
//            klon.querySelector("p").textContent += `${kaffe.gsx$kort.$t}`;
//            klon.querySelector("article").addEventListener("click", () => visDetail(kaffe))
//            klon.querySelector("article").addEventListener("click", fjernClass);
//
//            container.appendChild(klon);
//        }
//    })
//}
