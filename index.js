var pieces = document.querySelectorAll(".piece");
const squares = document.querySelectorAll(".square");

let selectedpiece;
let moves = [];
let whiteonmove = true;

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
    this.className = "square"
}

function dragDrop () {
    this.className = "square";
    
    
    if (canPlayMove(selectedpiece, this, moves)){
        let lastmove = [];
        let lastonmovewhite = whiteonmove;
        
        for (let i = 0; i <pieces.length; i++) {
            lastmove.push([pieces[i].parentElement.getAttribute("column"), pieces[i].parentElement.getAttribute("row")])
        }
        
        if (whiteonmove){
            if (!selectedpiece.firstChild.className.includes("w")){
                return false;
            }else whiteonmove = false;
        }else if (selectedpiece.firstChild.className.includes("w")){
            return false;
        }else whiteonmove = true;

        moves.push([parseInt(selectedpiece.parentElement.getAttribute("row")), parseInt(selectedpiece.parentElement.getAttribute("column")), 
                    parseInt(this.getAttribute("row")), parseInt(this.getAttribute("column")), selectedpiece.firstChild.className]);
        this.innerHTML = "";
        this.append(selectedpiece);
        selectedpiece.className = "piece";
        
        if (isCheck()){
            moves.pop();
            selectedpiece.parentElement.innerHTML = "";
            for (var i = 0; i < pieces.length; i++){
                
                document.querySelector("[column=\""+lastmove[i][0]+"\"][row=\""+lastmove[i][1]+"\"]").innerHTML = pieces[i].outerHTML;
            }
            whiteonmove = lastonmovewhite;
        }
        reloadPieces()
    }else selectedpiece.className = "piece";
}