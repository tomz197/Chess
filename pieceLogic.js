function canPlayMove(selected, landing, moves) {
    if (whiteonmove && !selected.firstChild.className.includes("w") || !whiteonmove && selected.firstChild.className.includes("w"))
        return false;

    const currentRow = parseInt(selected.parentElement.getAttribute("row"));
    const currentColumn = parseInt(selected.parentElement.getAttribute("column"));
    const landingRow = parseInt(landing.getAttribute("row"));
    const landingColumn = parseInt(landing.getAttribute("column"));    

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
        if (Math.abs(currentColumn - landingColumn) == 2 && whiteonmove && cancastle[0][1] && landingRow == 1){
            whiteonmove = false;
            if (landingColumn < currentColumn && cancastle[0][0]){
                let cancontinue = true;
                for (let i = 1; i < 4; i++)
                if (document.querySelector(`[column="${currentColumn-i}"][row="1"]`).innerHTML != "")
                cancontinue = false;

                if (cancontinue && !isCheck()){
                    document.querySelector(`[column="4"][row="1"]`).innerHTML = selected.outerHTML;
                    document.querySelector(`[column="5"][row="1"]`).innerHTML = "";
                    if (!isCheck()){
                        landing.innerHTML = selected.outerHTML;
                        document.querySelector(`[column="4"][row="1"]`).innerHTML = "";
                        if (!isCheck()){
                            document.querySelector(`[column="4"][row="1"]`).innerHTML = document.querySelector(`[column="1"][row="1"]`).innerHTML;
                            document.querySelector(`[column="1"][row="1"]`).innerHTML = "";
                            reloadPieces()
                            return true;
                        }else{
                            landing.innerHTML = "";
                            document.querySelector(`[column="5"][row="1"]`).innerHTML = selected.outerHTML;
                        }
                    }else{
                        document.querySelector(`[column="5"][row="1"]`).innerHTML = selected.outerHTML;
                        document.querySelector(`[column="4"][row="1"]`).innerHTML = "";
                    }
                    reloadPieces()
                }
            }
            if (landingColumn > currentColumn && cancastle[0][2]){
                let cancontinue = true;
                for (let i = 1; i < 3; i++)
                    if (document.querySelector(`[column="${currentColumn+i}"][row="1"]`).innerHTML != "")
                        cancontinue = false;

                if (cancontinue && !isCheck()){
                    document.querySelector(`[column="6"][row="1"]`).innerHTML = selected.outerHTML;
                    document.querySelector(`[column="5"][row="1"]`).innerHTML = "";
                    if (!isCheck()){
                        landing.innerHTML = selected.outerHTML;
                        document.querySelector(`[column="6"][row="1"]`).innerHTML = "";
                        if (!isCheck()){
                            document.querySelector(`[column="6"][row="1"]`).innerHTML = document.querySelector(`[column="8"][row="1"]`).innerHTML;
                            document.querySelector(`[column="8"][row="1"]`).innerHTML = "";
                            reloadPieces()
                            return true;
                        }else{
                            landing.innerHTML = "";
                            document.querySelector(`[column="5"][row="1"]`).innerHTML = selected.outerHTML;
                        }
                    }else{
                        document.querySelector(`[column="5"][row="1"]`).innerHTML = selected.outerHTML;
                        document.querySelector(`[column="6"][row="1"]`).innerHTML = "";
                    }
                    reloadPieces()
                }
            }
            whiteonmove = true;
        }
        if (Math.abs(currentColumn - landingColumn) == 2 && !whiteonmove && cancastle[1][1] && landingRow == 8){
            whiteonmove = true;
            if (landingColumn < currentColumn && cancastle[1][0]){
                let cancontinue = true;
                for (let i = 1; i < 4; i++)
                    if (document.querySelector(`[column="${currentColumn-i}"][row="8"]`).innerHTML != "")
                        cancontinue = false;

                if (cancontinue && !isCheck()){
                    document.querySelector(`[column="4"][row="8"]`).innerHTML = selected.outerHTML;
                    document.querySelector(`[column="5"][row="8"]`).innerHTML = "";
                    if (!isCheck()){
                        landing.innerHTML = selected.outerHTML;
                        document.querySelector(`[column="4"][row="8"]`).innerHTML = "";
                        if (!isCheck()){
                            document.querySelector(`[column="4"][row="8"]`).innerHTML = document.querySelector(`[column="1"][row="8"]`).innerHTML;
                            document.querySelector(`[column="1"][row="8"]`).innerHTML = "";
                            reloadPieces()
                            return true;
                        }else{
                            landing.innerHTML = "";
                            document.querySelector(`[column="5"][row="8"]`).innerHTML = selected.outerHTML;
                        }
                    }else{
                        document.querySelector(`[column="5"][row="8"]`).innerHTML = selected.outerHTML;
                        document.querySelector(`[column="4"][row="8"]`).innerHTML = "";
                    }
                    reloadPieces()
                }
            }
            if (landingColumn > currentColumn && cancastle[1][2]){
                let cancontinue = true;
                for (let i = 1; i < 3; i++)
                    if (document.querySelector(`[column="${currentColumn+i}"][row="8"]`).innerHTML != "")
                        cancontinue = false;

                if (cancontinue && !isCheck()){
                    document.querySelector(`[column="6"][row="8"]`).innerHTML = selected.outerHTML;
                    document.querySelector(`[column="5"][row="8"]`).innerHTML = "";
                    if (!isCheck()){
                        landing.innerHTML = selected.outerHTML;
                        document.querySelector(`[column="6"][row="8"]`).innerHTML = "";
                        if (!isCheck()){
                            document.querySelector(`[column="6"][row="8"]`).innerHTML = document.querySelector(`[column="8"][row="8"]`).innerHTML;
                            document.querySelector(`[column="8"][row="8"]`).innerHTML = "";
                            reloadPieces()
                            return true;
                        }else{
                            landing.innerHTML = "";
                            document.querySelector(`[column="5"][row="8"]`).innerHTML = selected.outerHTML;
                        }
                    }else{
                        document.querySelector(`[column="5"][row="8"]`).innerHTML = selected.outerHTML;
                        document.querySelector(`[column="6"][row="8"]`).innerHTML = "";
                    }
                    reloadPieces()
                }
            }
            whiteonmove = false;
        }

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
    const localpieces = document.querySelectorAll(".piece");
    const wk = document.querySelector(".wk").parentElement;
    const bk = document.querySelector(".bk").parentElement;

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