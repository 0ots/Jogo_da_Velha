let x = window.document.querySelector(".x");
let o = window.document.querySelector(".o");
let boxes = window.document.querySelectorAll(".box");
let buttons = window.document.querySelectorAll("#buttons-container button")
let messageContainer = window.document.querySelector("#message");
let messageText = window.document.querySelector("#message p");
let secondPlayer;
let player1 = 0;
let player2 = 0;
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){
        let el = checarElemento(player1, player2);
        checarElemento(player1, player2)
        if(this.children.length == 0){
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
            if(player1 == player2){
                player1++;
                if(secondPlayer == "ai-player"){
                    executarJogadaIa();
                    player2++;
                }
            }
            else{
                player2++;
            }
            checarCondicaoVitoria();            
        }
    });
}
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        secondPlayer = this.getAttribute("id");
        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none';
        }
        setTimeout(function(){
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 350);
    });
}
function checarElemento(player1, player2){
    if(player1 == player2){

        el = x;
    }
    else{
        el = o;
    }
    return el;
}
function checarCondicaoVitoria(){
    let b1 = window.document.getElementById("block-1")
    let b2 = window.document.getElementById("block-2")
    let b3 = window.document.getElementById("block-3")
    let b4 = window.document.getElementById("block-4")
    let b5 = window.document.getElementById("block-5")
    let b6 = window.document.getElementById("block-6")
    let b7 = window.document.getElementById("block-7")
    let b8 = window.document.getElementById("block-8")
    let b9 = window.document.getElementById("block-9")
    if(b1.children.length > 0 && b2.children.length > 0 && b3.children.length > 0){
        let b1Children = b1.children[0].className;
        let b2Children = b2.children[0].className;
        let b3Children = b3.children[0].className;
        if(b1Children == 'x' && b2Children == 'x' && b3Children == 'x'){
            declararVencedor('x');
        }
        else if(b1Children == 'o' && b2Children == 'o' && b3Children == 'o'){
            declararVencedor('o');
        }
    }
    if(b4.children.length > 0 && b5.children.length > 0 && b6.children.length > 0){
        let b4Children = b4.children[0].className;
        let b5Children = b5.children[0].className;
        let b6Children = b6.children[0].className;
        if(b4Children == 'x' && b5Children == 'x' && b6Children == 'x'){
            declararVencedor('x');
        }
        else if(b4Children == 'o' && b5Children == 'o' && b6Children == 'o'){
            declararVencedor('o');
        }
    }
    if(b7.children.length > 0 && b8.children.length > 0 && b9.children.length > 0){
        let b7Children = b7.children[0].className;
        let b8Children = b8.children[0].className;
        let b9Children = b9.children[0].className;
        if(b7Children == 'x' && b8Children == 'x' && b9Children == 'x'){
            declararVencedor('x');
        }
        else if(b7Children == 'o' && b8Children == 'o' && b9Children == 'o'){
            declararVencedor('o');
        }
    }
    if(b1.children.length > 0 && b4.children.length > 0 && b7.children.length > 0){
        let b1Children = b1.children[0].className;
        let b4Children = b4.children[0].className;
        let b7Children = b7.children[0].className;
        if(b1Children == 'x' && b4Children == 'x' && b7Children == 'x'){
            declararVencedor('x');
        }
        else if(b1Children == 'o' && b4Children == 'o' && b7Children == 'o'){
            declararVencedor('o');
        }
    }
    if(b2.children.length > 0 && b5.children.length > 0 && b8.children.length > 0){
        let b2Children = b2.children[0].className;
        let b5Children = b5.children[0].className;
        let b8Children = b8.children[0].className;
        if(b2Children == 'x' && b5Children == 'x' && b8Children == 'x'){
            declararVencedor('x');
        }
        else if(b2Children == 'o' && b5Children == 'o' && b8Children == 'o'){
            declararVencedor('o');
        }
    }
    if(b3.children.length > 0 && b6.children.length > 0 && b9.children.length > 0){
        let b3Children = b3.children[0].className;
        let b6Children = b6.children[0].className;
        let b9Children = b9.children[0].className;
        if(b3Children == 'x' && b6Children == 'x' && b9Children == 'x'){
            declararVencedor('x');
        }
        else if(b3Children == 'o' && b6Children == 'o' && b9Children == 'o'){
            declararVencedor('o');
        }
    }
    if(b1.children.length > 0 && b5.children.length > 0 && b9.children.length > 0){
        let b1Children = b1.children[0].className;
        let b5Children = b5.children[0].className;
        let b9Children = b9.children[0].className;
        if(b1Children == 'x' && b5Children == 'x' && b9Children == 'x'){
            declararVencedor('x');
        }
        else if(b1Children == 'o' && b5Children == 'o' && b9Children == 'o'){
            declararVencedor('o');
        }
    }
    if(b3.children.length > 0 && b5.children.length > 0 && b7.children.length > 0){
        let b3Children = b3.children[0].className;
        let b5Children = b5.children[0].className;
        let b7Children = b7.children[0].className;
        if(b3Children == 'x' && b5Children == 'x' && b7Children == 'x'){
            declararVencedor('x');
        }
        else if(b3Children == 'o' && b5Children == 'o' && b7Children == 'o'){
            declararVencedor('o');
        }
    }
    let contador = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].children.length > 0) {
            contador++;
        }
    }
    if (contador === 9) {
        declararVencedor("Velha");
    }
}
function declararVencedor(vencedor){
    let placarX = window.document.querySelector("#scoreboard-1");
    let placarO = window.document.querySelector("#scoreboard-2");
    let mensagem = "";
    if(vencedor == "x"){
        placarX.textContent = parseInt(placarX.textContent) + 1;
        mensagem = "O jogador 1 venceu!";
        }
    else if(vencedor == "o"){
        mensagem = "O jogador 2 venceu!";
        placarO.textContent = parseInt(placarO.textContent) + 1;
    }
    else{
        mensagem = "Deu velha!";
    }
    messageText.innerHTML = mensagem;
    messageContainer.classList.remove("hide");
    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 2000)
    player1 = 0;
    player2 = 0;
    let boxesRemover = window.document.querySelectorAll(".box div");
    for(let i = 0; i < boxesRemover.length; i++){
        boxesRemover[i].parentNode.removeChild(boxesRemover[i]);
    }
}
function executarJogadaIa(){
    let cloneO = o.cloneNode(true);
    let contador = 0;
    let preenchido = 0;
    for(let i = 0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5);
        if(boxes[i].children[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                contador++;
                break;
            }
        }
        else{
            preenchido++;
        }
    }
    if(contador == 0 && preenchido < 9){
        executarJogadaIa();
    }
}