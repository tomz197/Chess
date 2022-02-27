const squares = document.querySelectorAll(".square");
let pieces = document.querySelectorAll(".piece");

let selectedpiece;
let moves = [];
let whiteonmove = true;
let cancastle = [[true, true, true], [true, true, true]]

pieces.forEach(piece => {
    piece.addEventListener("dragstart", dragStart);
    piece.addEventListener("dragend", dragEnd);
})

squares.forEach(square => {
    square.addEventListener("dragover", dragOver);
    square.addEventListener("dragenter", dragEnter);
    square.addEventListener("dragleave", dragLeave);
    square.addEventListener("drop", dragDrop);
})

function resetBoard() {
    moves = [];
    whiteonmove = true;
    cancastle = [[true, true, true], [true, true, true]]

    reloadPieces();
}

function reloadPieces() {
    pieces = document.querySelectorAll(".piece");

    pieces.forEach(piece => {
        piece.addEventListener("dragstart", dragStart);
        piece.addEventListener("dragend", dragEnd);
    })
}

function dragStart () {
    selectedpiece = this;
    this.className += " hold";
    setTimeout(() => this.className = "pickedUp", 0);
}

function dragEnd () {
    this.className = "piece";
}

function dragOver (e) {
    e.preventDefault();
}

function dragEnter (e) {
    e.preventDefault();
    this.className += " hovered";
}

function dragLeave () {
    this.className = "square";
}

function dragDrop () {
    this.className = "square";
    selectedpiece.className = "piece";
    let lastmove = [];
    let addtomoves = [parseInt(selectedpiece.parentElement.getAttribute("row")), parseInt(selectedpiece.parentElement.getAttribute("column")), 
                        parseInt(this.getAttribute("row")), parseInt(this.getAttribute("column")), selectedpiece.firstChild.className];
    
    pieces.forEach(piece => lastmove.push([piece.parentElement.getAttribute("column"), piece.parentElement.getAttribute("row")]));

    if (canPlayMove(selectedpiece, this, moves)){
        whiteonmove = !whiteonmove;
        this.innerHTML = "";
        this.append(selectedpiece);
        
        if (isCheck(!whiteonmove)){
            selectedpiece.parentElement.innerHTML = "";

            for (let i = 0; i < pieces.length; i++)
            selectSquare(lastmove[i][0], lastmove[i][1]).innerHTML = pieces[i].outerHTML;
            
            whiteonmove = !whiteonmove;
        }else{
            moves.push(addtomoves);
            reloadPieces()
            let ischeckmate = isCheck(whiteonmove) ? true : false;
            let stalemate = !ischeckmate;
            lastmove = [];

            pieces.forEach(piece => lastmove.push([piece.parentElement.getAttribute("column"), piece.parentElement.getAttribute("row")]));
            lastmove.forEach(piece => {
                let piecesquare = selectSquare(piece[0], piece[1]);
                let spiece = selectSquare(piece[0], piece[1]).innerHTML;
                squares.forEach(square => {
                    if (canPlayMove(piecesquare.firstChild, square, moves)){
                        square.innerHTML = spiece;
                        piecesquare.innerHTML = "";
                        if (!isCheck(whiteonmove)){
                            ischeckmate = false;
                            stalemate = false;
                        }
                        
                        square.innerHTML = "";
                        squares.forEach(x => x.innerHTML = "");
                        for (let i = 0; i < pieces.length; i++)
                            selectSquare(lastmove[i][0], lastmove[i][1]).innerHTML = pieces[i].outerHTML;
                    }
                })
            })
            console.log("checkamate: "+ischeckmate);
            switch(selectedpiece.firstChild.className){
                case "wr":
                    var rookssquare = selectSquare(1, 1);
                    if (rookssquare.innerHTML != ""){
                        if (rookssquare.firstChild.firstChild.className != "wr"){
                            cancastle[0][0] = false;
                        }else cancastle[0][2] = false;
                    }else cancastle[0][0] = false;
                    break;
                case "br":
                    rookssquare = selectSquare(1, 8);
                    if (rookssquare.innerHTML != ""){
                        if (rookssquare.firstChild.firstChild.className != "wr"){
                            cancastle[1][0] = false;
                        }else cancastle[1][2] = false;
                    }else cancastle[1][0] = false;
                    break;
                case "wk":
                    cancastle[0][1] = false;
                    break;
                case "bk":
                    cancastle[1][1] = false;
                    break;
            }
        }
        reloadPieces()
    }
}