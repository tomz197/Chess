function canPlayMove(selected, landing, moves) {
    let currentRow = parseInt(selected.parentElement.getAttribute("row"));
    let currentColumn = parseInt(selected.parentElement.getAttribute("column"));
    let landingRow = parseInt(landing.getAttribute("row"));
    let landingColumn = parseInt(landing.getAttribute("column"));    
    let returnValue = false;

    if (selected.firstChild.className == "wp")
    {
        if (landingRow == 4 && currentRow < 4 && document.querySelector("[column=\""+currentColumn+"\"][row=\""+ (currentRow+1) +"\"]").innerHTML == "" && landingColumn == currentColumn && landing.innerHTML == "")
            return true;
        if (landingRow == currentRow+1 && landingColumn == currentColumn && landing.innerHTML == "")
            return true;
        if (landingRow == currentRow+1 && (landingColumn == currentColumn-1 || landingColumn == currentColumn+1) && landing.innerHTML != "")
            if (!landing.firstChild.firstChild.className.includes("w"))
                return true;
        if (moves.length > 2)
            if (moves[moves.length-1][0] == 7 && moves[moves.length-1][2] == 5 && currentRow == 5 && landingRow == 6 && moves[moves.length-1][4].includes("p"))
                if (moves[moves.length-1][3] == currentColumn-1 && landingColumn == currentColumn-1){
                    document.querySelector("[column=\""+ (currentColumn-1) +"\"][row=\""+ currentRow +"\"]").innerHTML = "";
                    return true;
                }else if (moves[moves.length-1][3] == currentColumn+1 && landingColumn == currentColumn+1){
                    document.querySelector("[column=\""+ (currentColumn+1) +"\"][row=\""+ currentRow +"\"]").innerHTML = "";
                    return true;
                }
    }
    if (selected.firstChild.className == "bp")
    {
        if (landingRow == 5 && currentRow > 5 && document.querySelector("[column=\""+currentColumn+"\"][row=\""+ (currentRow-1) +"\"]").innerHTML == "" && landingColumn == currentColumn && landing.innerHTML == "")
            return true;
        if (landingRow == currentRow-1 && landingColumn == currentColumn && landing.innerHTML == "")
            return true;
        if (landingRow == currentRow-1 && (landingColumn == currentColumn-1 || landingColumn == currentColumn+1) && landing.innerHTML != "")
            if (landing.firstChild.firstChild.className.includes("w"))
                return true;
        if (moves.length > 2)
            if (moves[moves.length-1][0] == 2 && moves[moves.length-1][2] == 4 && currentRow == 4 && landingRow == 3 && moves[moves.length-1][4].includes("p"))
                if (moves[moves.length-1][3] == currentColumn-1 && landingColumn == currentColumn-1){
                    document.querySelector("[column=\""+ (currentColumn-1) +"\"][row=\""+ currentRow +"\"]").innerHTML = "";
                    return true;
                }else if (moves[moves.length-1][3] == currentColumn+1 && landingColumn == currentColumn+1){
                    document.querySelector("[column=\""+ (currentColumn+1) +"\"][row=\""+ currentRow +"\"]").innerHTML = "";
                    return true;
                }
    }
    if (selected.firstChild.className == "wb" || selected.firstChild.className == "bb" )
    {
        if (Math.abs(currentRow - landingRow) == Math.abs(currentColumn - landingColumn)){
            for (let i = 1; i < Math.abs(currentRow - landingRow); i++){
                if (currentRow>landingRow && currentColumn>landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn-i) +"\"][row=\""+ (currentRow-i) +"\"]").innerHTML != "")
                        return false;
                }
                if (currentRow<landingRow && currentColumn<landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn+i) +"\"][row=\""+ (currentRow+i) +"\"]").innerHTML != "")
                        return false;
                }
                if (currentRow<landingRow && currentColumn>landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn-i) +"\"][row=\""+ (currentRow+i) +"\"]").innerHTML != "")
                        return false;
                }
                if (currentRow>landingRow && currentColumn<landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn+i) +"\"][row=\""+ (currentRow-i) +"\"]").innerHTML != "")
                        return false;
                }
            }

            if (landing.innerHTML != "" && selected.firstChild.className == "wb")
                if (!landing.firstChild.firstChild.className.includes("w"))
                    return true;
            if (landing.innerHTML != "" && selected.firstChild.className == "bb")
                if (landing.firstChild.firstChild.className.includes("w"))
                    return true;
            if (landing.innerHTML == "")
                return true;
        }
    }
    if (selected.firstChild.className == "wr" || selected.firstChild.className == "br" )
    {
        if (currentRow != landingRow && currentColumn != landingColumn)
            return false;

        if (currentColumn == landingColumn)
            for (let i = 1; i < Math.abs(currentRow - landingRow); i++){
                if (currentRow>landingRow){
                    if (document.querySelector("[column=\""+ (currentColumn) +"\"][row=\""+ (currentRow-i) +"\"]").innerHTML != "")
                        return false;
                }
                if (currentRow<landingRow){
                    if (document.querySelector("[column=\""+ (currentColumn) +"\"][row=\""+ (currentRow+i) +"\"]").innerHTML != "")
                        return false;
                }
            }
        if (currentRow == landingRow)
            for (let i = 1; i < Math.abs(currentColumn - landingColumn); i++){
                if (currentColumn>landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn-i) +"\"][row=\""+ (currentRow) +"\"]").innerHTML != "")
                        return false;
                }
                if (currentColumn<landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn+i) +"\"][row=\""+ (currentRow) +"\"]").innerHTML != "")
                        return false;
                }
            }
        
        if (landing.innerHTML != "" && selected.firstChild.className == "wr")
            if (!landing.firstChild.firstChild.className.includes("w"))
                return true;
        if (landing.innerHTML != "" && selected.firstChild.className == "br")
            if (landing.firstChild.firstChild.className.includes("w"))
                return true;
        if (landing.innerHTML == "")
            return true;
    }
    if (selected.firstChild.className == "wn" || selected.firstChild.className == "bn" )
    {
        if (!((landingColumn == currentColumn+2 || landingColumn == currentColumn-2) && (landingRow == currentRow+1 || landingRow == currentRow-1) || 
        (landingColumn == currentColumn+1 || landingColumn == currentColumn-1) && (landingRow == currentRow+2 || landingRow == currentRow-2)))
            return false;

        if (landing.innerHTML != "" && selected.firstChild.className == "wn")
            if (!landing.firstChild.firstChild.className.includes("w"))
                return true;
        if (landing.innerHTML != "" && selected.firstChild.className == "bn")
            if (landing.firstChild.firstChild.className.includes("w"))
                return true;
        if (landing.innerHTML == "")
            return true;
    }
    if (selected.firstChild.className == "wq" || selected.firstChild.className == "bq" )
    {
        if (Math.abs(currentRow - landingRow) == Math.abs(currentColumn - landingColumn)){
            for (let i = 1; i < Math.abs(currentRow - landingRow); i++){
                if (currentRow>landingRow && currentColumn>landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn-i) +"\"][row=\""+ (currentRow-i) +"\"]").innerHTML != "")
                        return false;
                }
                if (currentRow<landingRow && currentColumn<landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn+i) +"\"][row=\""+ (currentRow+i) +"\"]").innerHTML != "")
                        return false;
                }
                if (currentRow<landingRow && currentColumn>landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn-i) +"\"][row=\""+ (currentRow+i) +"\"]").innerHTML != "")
                        return false;
                }
                if (currentRow>landingRow && currentColumn<landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn+i) +"\"][row=\""+ (currentRow-i) +"\"]").innerHTML != "")
                        return false;
                }
            }
            if (landing.innerHTML != "" && selected.firstChild.className == "wq")
                if (!landing.firstChild.firstChild.className.includes("w"))
                    return true;
            if (landing.innerHTML != "" && selected.firstChild.className == "bq")
                if (landing.firstChild.firstChild.className.includes("w"))
                    return true;
            if (landing.innerHTML == "")
                return true;
        }
        if (currentRow != landingRow && currentColumn != landingColumn)
            return false;

        if (currentColumn == landingColumn)
            for (let i = 1; i < Math.abs(currentRow - landingRow); i++){
                if (currentRow>landingRow){
                    if (document.querySelector("[column=\""+ (currentColumn) +"\"][row=\""+ (currentRow-i) +"\"]").innerHTML != "")
                        return false;
                }
                if (currentRow<landingRow){
                    if (document.querySelector("[column=\""+ (currentColumn) +"\"][row=\""+ (currentRow+i) +"\"]").innerHTML != "")
                        return false;
                }
            }
        if (currentRow == landingRow)
            for (let i = 1; i < Math.abs(currentColumn - landingColumn); i++){
                if (currentColumn>landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn-i) +"\"][row=\""+ (currentRow) +"\"]").innerHTML != "")
                        return false;
                }
                if (currentColumn<landingColumn){
                    if (document.querySelector("[column=\""+ (currentColumn+i) +"\"][row=\""+ (currentRow) +"\"]").innerHTML != "")
                        return false;
                }
            }

        if (landing.innerHTML != "" && selected.firstChild.className == "wq")
            if (!landing.firstChild.firstChild.className.includes("w"))
                return true;
        if (landing.innerHTML != "" && selected.firstChild.className == "bq")
            if (landing.firstChild.firstChild.className.includes("w"))
                return true;
        if (landing.innerHTML == "")
            return true;
    }
    if (selected.firstChild.className == "wk" || selected.firstChild.className == "bk" )
    {
        if (Math.abs(currentRow - landingRow) > 1 || Math.abs(currentColumn - landingColumn) > 1)
            return false;

        if (landing.innerHTML != "" && selected.firstChild.className == "wk")
            if (!landing.firstChild.firstChild.className.includes("w"))
                return true;
        if (landing.innerHTML != "" && selected.firstChild.className == "bk")
            if (landing.firstChild.firstChild.className.includes("w"))
                return true;
        if (landing.innerHTML == "")
            return true;

    }
    return false;
}

function isCheck() {
    const wk = document.querySelector(".wk").parentElement;
    const bk = document.querySelector(".bk").parentElement;
    const localpieces = document.querySelectorAll(".piece");

    let king;
    if (!whiteonmove){
        king = wk;
    }else king = bk;
    
    for (let i = 0; i < localpieces.length; i++){
        if (canPlayMove(localpieces[i], king.parentElement, moves))
        return true;
    }
    return false;
}