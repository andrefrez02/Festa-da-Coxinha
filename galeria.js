document.body.onload = createImg;
if (document.querySelector("#galeria-de-fotos") != null){
    function createImg(n){
        if(n<=25){
            var imgNova = document.createElement("img");
            imgNova.setAttribute('src', "./Imagens/galeria-de-fotos/galeriadefotos" + n + ".JPG");
            imgNova.setAttribute('id', "foto" + n);
            imgNova.setAttribute('onclick', "openImage('galeria-de-fotos/galeriadefotos" + n + ".JPG')");
            var divAtual = document.getElementById("galeria-de-fotos");
            divAtual.appendChild(imgNova);
        }
    }
    for(i=1;i<=25;i++){
        createImg(i);
    }
};

var whiteBoard = document.querySelector(".white-board");
var whiteBoardImg = whiteBoard.children[0].children[0];
var whiteBoardIframe = whiteBoard.children[0].children[1];
var imagemName = "";
if (document.querySelector(".tamanho-imagem") != null){var botaoImg = document.querySelector(".tamanho-imagem").children[0];};
function openImage(imgName){
    whiteBoard.style.display = "flex";
    whiteBoardIframe.style.display = "none";
    whiteBoardImg.style.display = "block";
    whiteBoardImg.setAttribute('src', "./Imagens/" + imgName);
    if (botaoImg != null){
        botaoImg.setAttribute('href', "./Imagens/" + imgName);
        botaoImg.innerText = "ABRIR EM TELA CHEIA";
    };
    if (document.querySelector(".previous-board") != null){
        if (imgName.includes('galeriadefotos') != true){
            document.querySelector(".previous-board").style.display = "none";
            document.querySelector(".next-board").style.display = "none";
        }
        else{
            document.querySelector(".previous-board").style.display = "flex";
            document.querySelector(".next-board").style.display = "flex";
        };
    };
    ajustarCloseImg();
    if (document.querySelector("#galeria-de-fotos") != null){
        ajustarnextnpreviousImg();
        imagemName = imgName;
        numeroAtual = imgName.split('.')[0];
        unidade = numeroAtual.slice(-2)[1];
        dezena = numeroAtual.slice(-2)[0];
        numeroAtual = 0;
        if (dezena == isNaN()){
            numeroAtual = dezena;
            numeroAtual += unidade;
        }
        else{
            numeroAtual = unidade;
        }
        parseInt(numeroAtual)
    }
};
function closeImage(){
    whiteBoard.style.display = "none";
};
function openIframe(frameName){
    whiteBoard.style.display = "flex";
    whiteBoardImg.style.display = "none";
    whiteBoardIframe.style.display = "block";
    whiteBoardIframe.setAttribute('src', "https://" + frameName);
    if (botaoImg != null){
        botaoImg.setAttribute('href', "https://maps.google.com/maps?ll=-22.563382,-47.415648&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=3787997347466095718");
        botaoImg.innerText = "VER MAPA AMPLIADO";
    };
    ajustarCloseImg();
};
function ajustarCloseImg(){
    document.querySelector(".close-board").style.right = (((document.body.offsetWidth - document.querySelector(".white-board-img").offsetWidth) / 2) - 19) + "px";
};
function ajustarnextnpreviousImg(){
    document.querySelector(".previous-board").style.left = (((document.body.offsetWidth - document.querySelector(".white-board-img").offsetWidth) / 2) - 19) + "px";
    document.querySelector(".next-board").style.right = (((document.body.offsetWidth - document.querySelector(".white-board-img").offsetWidth) / 2) - 19) + "px";
};

function previousImage(){
    numeroAtual = (parseInt(numeroAtual, 10) - 1);
    if (numeroAtual < 1){numeroAtual = 25};
    whiteBoardImg.setAttribute('src', "./Imagens/galeria-de-fotos/galeriadefotos" + numeroAtual + ".JPG");
    if (botaoImg != null){botaoImg.setAttribute('href', "./Imagens/galeria-de-fotos/galeriadefotos" + numeroAtual + ".JPG");};
}
function nextImage(){
    numeroAtual = (parseInt(numeroAtual, 10) + 1);
    if (numeroAtual > 25){numeroAtual = 1};
    whiteBoardImg.setAttribute('src', "./Imagens/galeria-de-fotos/galeriadefotos" + numeroAtual + ".JPG");
    if (botaoImg != null){botaoImg.setAttribute('href', "./Imagens/galeria-de-fotos/galeriadefotos" + numeroAtual + ".JPG");};
}