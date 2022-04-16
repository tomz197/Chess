const resetButton = document.querySelector("#boardResetButton")

resetButton.addEventListener("click", FEN)

const FENnotation = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
//const FENnotation = "4k3/4q3/8/8/8/8/4Q3/4K3";

window.onload

function FEN() {
    let notation = FENnotation.split("");
    let onSquare = 0;

    squares.forEach(square => square.innerHTML = "")

    notation.forEach(x => {
        const piece = document.createElement("div");
        const whatPiece = document.createElement("div");
        piece.appendChild(whatPiece);
        piece.className = "piece";
        piece.draggable = true;
        switch (x) {
            case 'p':
                whatPiece.className = "bp";
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;
            case 'b':
                whatPiece.className = "bb";
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;
            case 'n':
                whatPiece.className = "bn"
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;
            case 'r':
                whatPiece.className = "br"
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;
            case 'q':
                whatPiece.className = "bq";
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;
            case 'k':
                whatPiece.className = "bk";
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;
            case 'P':
                whatPiece.className = "wp";
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;
            case 'B':
                whatPiece.className = "wb";
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;
            case 'N':
                whatPiece.className = "wn";
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;
            case 'R':
                whatPiece.className = "wr";
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;
            case 'Q':
                whatPiece.className = "wq";
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;
            case 'K':
                whatPiece.className = "wk";
                squares[onSquare].appendChild(piece);
                onSquare++;
                break;

            case '/':
                break;
            default:
                onSquare += parseInt(x);
        }
    });
    resetBoard();
}