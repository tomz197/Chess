const squares = document.querySelectorAll(".square");
var pieces = document.querySelectorAll(".piece");

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
    
    for (let i = 0; i <pieces.length; i++) {
        lastmove.push([pieces[i].parentElement.getAttribute("column"), pieces[i].parentElement.getAttribute("row")]);
    }
    
    if (canPlayMove(selectedpiece, this, moves)){
        let lastonmovewhite = whiteonmove;
        
        whiteonmove = !whiteonmove;

        moves.push([parseInt(selectedpiece.parentElement.getAttribute("row")), parseInt(selectedpiece.parentElement.getAttribute("column")), 
                    parseInt(this.getAttribute("row")), parseInt(this.getAttribute("column")), selectedpiece.firstChild.className]);
        this.innerHTML = "";
        this.append(selectedpiece);
        
        if (isCheck()){
            moves.pop();
            selectedpiece.parentElement.innerHTML = "";
            for (var i = 0; i < pieces.length; i++){
                document.querySelector(`[column="${lastmove[i][0]}"][row="${lastmove[i][1]}"]`).innerHTML = pieces[i].outerHTML;
            }
            whiteonmove = lastonmovewhite;
        }else{
            whiteonmove = !whiteonmove;
            if (isCheck()){
                let ischeckmate = true;
                whiteonmove = !whiteonmove;        
                lastmove = [];
                for (let i = 0; i <pieces.length; i++) {
                    lastmove.push([pieces[i].parentElement.getAttribute("column"), pieces[i].parentElement.getAttribute("row")]);
                }
                lastmove.forEach(piece => {
                    squares.forEach(square => {
                        if (canPlayMove(document.querySelector(`[column="${piece[0]}"][row="${piece[1]}"]`).firstChild, square, moves)){
                            square.innerHTML = document.querySelector(`[column="${piece[0]}"][row="${piece[1]}"]`).firstChild.outerHTML;
                            document.querySelector(`[column="${piece[0]}"][row="${piece[1]}"]`).innerHTML = "";
                            
                            whiteonmove = !whiteonmove;        
                            if (!isCheck())
                                ischeckmate = false;
                            whiteonmove = !whiteonmove;        

                            square.innerHTML = "";
                            for (var i = 0; i < pieces.length; i++)
                                document.querySelector(`[column="${lastmove[i][0]}"][row="${lastmove[i][1]}"]`).innerHTML = pieces[i].outerHTML;
                        }
                    })
                })
                console.log(ischeckmate)
            }else whiteonmove = !whiteonmove;
            


            switch(selectedpiece.firstChild.className){
                case "wr":
                    if (document.querySelector(`[column="1"][row="1"]`).innerHTML != ""){
                        if (document.querySelector(`[column="1"][row="1"]`).firstChild.firstChild.className != "wr"){
                            cancastle[0][0] = false;
                        }else cancastle[0][2] = false;
                    }else cancastle[0][0] = false;
                    break;
                case "br":
                    if (document.querySelector(`[column="1"][row="8"]`).innerHTML != ""){
                        if (document.querySelector(`[column="1"][row="8"]`).firstChild.firstChild.className != "wr"){
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