// MENU GRUDADO AO TOPO QUE SEGUE O SCROLL E VOLTA AO PADRÃO QUANDO ESTÁ NO DESKTOP
var menu = document.querySelector(".menu-nav-topo");
var navOri = document.querySelector(".section-nav");
var nav = document.querySelector("nav");
var fundoMenu = menu.children[0];
var line01 = menu.children[1];
var line02 = menu.children[2];
var line03 = menu.children[3];
var aberto = 0;
var brasaoNav = document.querySelector(".brasao-nav");
var brasaoTopo = document.querySelectorAll(".brasao-topo-img")[1];
corrigirMenu();

if (window.innerWidth < 768){
    brasaoNav.style.display = "block";
    brasaoTopo.style.display = "none";
    menu.style.display = "flex";
}
else{
    brasaoNav.style.display = "none";
    brasaoTopo.style.display = "block";
    menu.style.display = "none";
};

function openMenu(){
    if (aberto == 0){
        line01.style = "rotate: 45deg; translate: 0 5px;";
        line02.style.display = "none";
        line03.style = "rotate: 135deg;";
        for (i=0;i<3;i++){menu.children[i].setAttribute('onclick', "closeMenu()");};
        menu.appendChild(nav); 
        nav.style = "position: absolute; padding-top: 50px; top: 0; background: var(--secundary-light); z-index: 9998; line-height: 35px;";
        aberto = 1;
        corrigirMenu()
    }
};
function closeMenu(){
    if (aberto == 1){
        line01.style = "rotate: 0deg; translate: 0 0px;";
        line02.style.display = "block";
        line03.style = "rotate: 0deg;";
        for (i=0;i<3;i++){menu.children[i].setAttribute('onclick', "openMenu()");};
        navOri.appendChild(nav); 
        nav.style = "position: relative; top: auto; background: none; z-index: 9998; line-height: 5px;";
        aberto = 0;
        corrigirMenu()
    }
};
var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st != lastScrollTop){
        if (window.innerWidth < 768){
            scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            if (scrollTop > 29) {
                menu.style = "position: sticky; background: var(--secundary-light); border-bottom: 2px solid #5c413b;";
            }
            else{
                menu.style = "position: absolute; background: transparent; border-bottom: none;";
            };
        }
        else{
            closeMenu();
            nav.style = "position: relative; top: auto; background: #f8b529; z-index: 9998; line-height: auto;"
        };
    }
    corrigirMenu();
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

function corrigirMenu() {
    if (nav.parentElement != menu){
        if (window.innerWidth < 768 || aberto == 1){
            menu.style.display = "flex";
            nav.style.display = "none";
            if (aberto == 1){
                openMenu();
            }
        }
        else{
            closeMenu();
            menu.style.display = "none";
        }
    }
    if (nav.parentElement == menu){
        if (aberto == 0 && window.innerWidth > 768){
            menu.style.display = "none";
            nav.style.display = "flex";
        }
    }
    if (aberto == 1 && window.innerWidth > 768){
        closeMenu();
    }
    if (window.innerWidth > 768 && nav.parentElement != menu){
        nav.style.display = "flex";
    }
    else{
        menu.style.display = "flex";
    }
};

window.addEventListener("resize", function(){
    window.location.reload();
});