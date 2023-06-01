var urls = ["coxinha-sem-gluten-zero-proteina-do-leite-sem-ovos-e-sem-contaminacao-cruzada", "coxinha-com-catupiry-de-verdade", "coxinha-massa-pura-de-mandioca-e-carne-moida", "mini-coxinha", "coxinha-de-frango", "coxinha-franbacon", "coxinha-de-mandioca-com-carne-seca", "a-bebezinha-com-catupiry", "coxinha-gourmet-100-mandioca-frango-catupiry", "coxinha-de-carne-louca", "coxinha-de-caramelo-e-bacon", "coxinha-gourmet-de-frango-cheddar-e-bacon", "coxinha-tradicional-de-frango", "coxinha-gourmet-de-costela-bovina-com-queijo-massa-com-batata", "coxinha-de-chocolate-recheio-de-doce-leite-e-cobertura-de-leite-ninho-com-acucar", "coxinha-artesanal-de-brigadeiro-com-morango", "coxinha-real-massa-de-batata", "churrinha", "coxinha-mix-tradicional-de-frango", "coxinha-de-frango-com-quatro-queijos", "coxinha-calabresa-com-requeijao"];
var nomes = ["Coxinha sem Glúten, zero proteína do leite, sem ovos e sem contaminação cruzada", "Coxinha com Catupiry de Verdade", "Coxinha massa pura de mandioca e carne moída", "Mini Coxinha", "Coxinha de Frango", "Coxinha Franbacon", "Coxinha de Mandioca com Frango", "A bebezinha com Catupiry", "Coxinha Gourmet 100% Mandioca Frango Catupiry", "Coxinha de Carne Louca", "Coxinha de Caramelo e Bacon", "Coxinha Gourmet de Frango, Cheddar e Bacon", "Coxinha Tradicional de Frango", "Coxinha Gourmet de Costela Bovina com Queijo, massa com batata", "Coxinha de Chocolate, recheio de doce leite e cobertura de leite ninho com açúcar", "Coxinha Artesanal de Brigadeiro com Morango", "Coxinha Real - Massa de Batata", "Churrinha", "Coxinha Mix – Tradicional de Frango", "Coxinha de Frango com quatro queijos", "Coxinha Calabresa com requeijão"];
var descricoes = ["Coxinharia sem glúten - Antônia Cestaro<br>Valor final: R$ 10,00<br>Gramatura Final: 75g<br>","Fabiana Moran Ateliê<br>Valor final: R$ 9,00<br>Gramatura Final: 180g<br>","Amigas da Coxinha<br>Valor final: R$ 9,00<br>Gramatura Final: 120g <br>","Ki Mania Salgados<br>Valor final: R$ 9,00<br>Gramatura Final: 12g – copo com 25 unidades<br>","Dri Salgados<br>Valor final: R$ 9,00<br>Gramatura Final: 10g – copo com 20 unidades<br>","Salgados Mania<br>Valor final: R$ 9,00<br>Gramatura Final: 35g - porção com 5 unidades<br>","Ouro da Terra Alimentos<br>Valor final: R$ 9,00<br>Gramatura Final: 20g – porção com 8 unidades<br>","Golden Salgateria<br>Valor final: R$ 9,00 – Porção com 4 unidades<br>Gramatura Final: 60 g<br>", "Quiosque da Praça<br>Valor final: R$ 10,00<br>Gramatura Final: 160g<br>","Churrasco do Gordinho Buffet<br>Valor final: R$ 9,00<br>Gramatura Final: 120g<br>", "Lilla Confeitaria<br>Valor final: R$ 8,00<br>Gramatura Final: 60g<br>","Croquant’s Salgados<br>Valor final: R$ 10,00<br>Gramatura Final: 20g – porção com 10 unidades<br>","Sabores da Vera<br>Valor final: R$ 8,00<br>Gramatura Final: 140g<br>","Imperial Salgados e Cia<br>Valor final: R$ 9,00  - porção com 6 unidades<br>Gramatura Final: 20g – 25g<br>","Imperial Salgados e Cia<br>Valor final: R$ 9,00<br>Gramatura Final: 15g – porção com 6 unidades<br>","Silvia Camargo<br>Valor final: R$ 9,00<br>Gramatura Final: 70g<br>","Guilherme e Rayssa<br>Valor final: R$ 9,00<br>Gramatura Final: 150g<br>","O Caldeirão de Mel<br>Valor final: R$ 9,00<br>Gramatura Final: 20g - Porção com 6 unidades<br>","Mix Salgados<br>Valor final: R$ 9,00<br>Gramatura Final: 35g – Porção com 6 unidades<br>","Kentinha Marmitaria e Salgaderia<br>Valor final: R$ 9,00<br>Gramatura Final: 140g<br>","Kentinha Marmitaria e Salgaderia<br>Valor final: R$ 9,00<br>Gramatura Final: 140g<br>"];
var sliderWrapper = document.querySelector(".slider-wrapper");
document.querySelector(".slider-wrapper").style.width = window.innerWidth + "px";
var translate = 0;
var indice = 0; 

for(i=0;i<document.styleSheets.length;i++){
    if (document.styleSheets[i].title == "CSS Sliders"){var css = document.styleSheets[i]};
}

if(window.innerWidth >= 1200){
    document.querySelector(".slider-wrapper").style.width = "1200px";
    document.querySelector(".slider-wrapper").style.margin = "unset";
}
if(window.innerWidth > 768 && window.innerWidth < 1200){
    document.querySelector(".slider-wrapper").style.width = (window.innerWidth * .6) + "px";
    document.querySelector(".slider-wrapper").style.margin = "auto";
}
if(window.innerWidth < 769){
    document.querySelector(".slider-wrapper").style.width = (window.innerWidth * .9) + "px";
    document.querySelector(".slider-wrapper").style.margin = "auto";
}

document.body.onload = criarCard;
if (document.querySelector(".slider-wrapper") != null){
    function criarCard(n){
        var divImg = document.createElement("div");
        sliderWrapper.appendChild(divImg);
        sliderWrapper.children[n].setAttribute("class", "slider-item slider-img-" + n);
        sliderWrapper.children[n].setAttribute('style', "width: " + sliderWrapper.offsetWidth + "px");

        var divImg2 = document.createElement("div");
        sliderWrapper.children[n].appendChild(divImg2);
        sliderWrapper.children[n].children[0].setAttribute("class", "slider-item-img");

        var divH3 = document.createElement("div");
        sliderWrapper.children[n].appendChild(divH3);
        sliderWrapper.children[n].children[1].setAttribute("class", "slider-item-h3")

        var divP = document.createElement("div");
        sliderWrapper.children[n].appendChild(divP);
        sliderWrapper.children[n].children[2].setAttribute("class", "slider-item-p")

        if(n<=20){
            var imgNova = document.createElement("img");
            var imgPai = "slider-img-" + n;
            var sliderImg = document.querySelector("." + imgPai).children[0]
            sliderImg.appendChild(imgNova);
            imgNova.setAttribute('src', "./Imagens/coxinhas/" + urls[n] + ".jpg");

            var h3Nova = document.createElement("h3");
            var sliderH3 = document.querySelector("." + imgPai).children[1]
            sliderH3.appendChild(h3Nova);
            h3Nova.innerText = nomes[n];

            var pNovo = document.createElement("p");
            var sliderP = document.querySelector("." + imgPai).children[2]
            sliderP.appendChild(pNovo);
            pNovo.innerHTML = descricoes[n];
        }
    }
    for(i=0;i<=20;i++){
        criarCard(i);
    }
};
var primeiroClick = 1;
document.querySelector(".slider-img-1").style.opacity = "0";

function nextCard(op) {
    if (primeiroClick == 1){
        document.querySelector(".slider-img-1").style.opacity = "100";
        primeiroClick = 0;
    }
    else{
        css.removeRule(27);
        css.removeRule(27);
    }
    if (op == "-"){
        translate -= sliderWrapper.offsetWidth;
        indice += 1;
        if(indice > 20){
            translate = (0);
            document.querySelector(".slider-wrapper").style.translate = translate + "px";
            indice = 0
        }
    }
    else{
        translate += sliderWrapper.offsetWidth;
        indice -= 1;
        if(indice < 0){
            translate = sliderWrapper.offsetWidth * (-19);
            indice = 20
        }
    }
    css.addRule(".slider-wrapper::after", "translate: calc(200px - (" + translate + "px)) 0;");
    css.addRule(".slider-wrapper::before", "translate: calc(-200px - (" + translate + "px)) 0;");
    document.querySelector(".slider-wrapper").style.translate = translate + "px";
};