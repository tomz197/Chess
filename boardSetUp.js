const resetButton = document.querySelector("#boardResetButton")

resetButton.addEventListener("click", FEN)

const FENnotation = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
//const FENnotation = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQK2R";

window.onload

function FEN() {
    let notation = FENnotation.split("");
    let onSquare = 0;

    squares.forEach(square => {square.innerHTML = "";})

    notation.forEach(x => {
        if (x == "p")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "bp";
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }
        if (x == "b")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "bb";
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }
        if (x == "n")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "bn"
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }
        if (x == "r")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "br"
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }
        if (x == "q")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "bq";
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }
        if (x == "k")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "bk";
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }

        if (x == "P")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "wp";
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }
        if (x == "B")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "wb";
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }
        if (x == "N")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "wn";
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }
        if (x == "R")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "wr";
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }
        if (x == "Q")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "wq";
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }
        if (x == "K")
        {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.draggable = true;
            const whatPiece = document.createElement("div");
            whatPiece.className = "wk";
            piece.appendChild(whatPiece);
            squares[onSquare].appendChild(piece);
            onSquare++;
            return;
        }

        if (x == "/")
        {
            return;
        }else{
            onSquare += parseInt(x);
            return;
        }
    });
    resetBoard();
}