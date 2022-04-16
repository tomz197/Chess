function canPlayMove(selected, landing) {
    const selectedclass = selected.firstChild.className;
    
    if (whiteonmove && !selectedclass.includes('w') || !whiteonmove && selectedclass.includes('w'))
        return false;
    if (landing.innerHTML != '')
        if (whiteonmove && landing.firstChild.firstChild.className.includes('w') || !whiteonmove && !landing.firstChild.firstChild.className.includes('w'))
            return false;

    //current row
    const cR = parseInt(selected.parentElement.id.split('')[1]);
    //current column
    const cC = parseInt(selected.parentElement.id.split('')[0]);
    //landing row
    const lR = parseInt(landing.id.split('')[1]);
    //landing column
    const lC = parseInt(landing.id.split('')[0]);    

    if (selectedclass == 'wp')
    {
        if (lC == cC && landing.innerHTML == ''){
            if (lR == 4 && cR == 2)
                return true;
            if (lR == cR+1)
                return true;
        }
        if (lR == cR+1 && (lC == cC-1 || lC == cC+1) && landing.innerHTML != '')
            return true;
        if (moves.length > 2)
            if (moves[moves.length-1][0] == 7 && moves[moves.length-1][2] == 5 && cR == 5 && lR == 6 && moves[moves.length-1][4].includes('p'))
                if (moves[moves.length-1][3] == cC-1 && lC == cC-1){
                    selectSquare(cC-1, cR).innerHTML = '';
                    return true;
                }else if (moves[moves.length-1][3] == cC+1 && lC == cC+1){
                    selectSquare(cC+1, cR).innerHTML = '';
                    return true;
                }
    }
    if (selectedclass == 'bp')
    {
        if (lC == cC && landing.innerHTML == ''){
            if (lR == 5 && cR == 7)
                return true;
            if (lR == cR-1)
                return true;
        }
        if (lR == cR-1 && (lC == cC-1 || lC == cC+1) && landing.innerHTML != '')
            return true;
        if (moves.length > 2)
            if (moves[moves.length-1][0] == 2 && moves[moves.length-1][2] == 4 && cR == 4 && lR == 3 && moves[moves.length-1][4].includes('p'))
                if (moves[moves.length-1][3] == cC-1 && lC == cC-1){
                    selectSquare(cC-1, cR).innerHTML = '';
                    return true;
                }else if (moves[moves.length-1][3] == cC+1 && lC == cC+1){
                    selectSquare(cC+1, cR).innerHTML = '';
                    return true;
                }
    }
    if (selectedclass == 'wb' || selectedclass == 'bb')
    {
        if (Math.abs(cR - lR) == Math.abs(cC - lC)){
            for (let i = 1; i < Math.abs(cR - lR); i++){
                if (cR>lR && cC>lC)
                    if (selectSquare(cC-i, cR-i).innerHTML != '')
                        return false;
                if (cR<lR && cC<lC)
                    if (selectSquare(cC+i, cR+i).innerHTML != '')
                        return false;
                if (cR<lR && cC>lC)
                    if (selectSquare(cC-i, cR+i).innerHTML != '')
                        return false;
                if (cR>lR && cC<lC)
                    if (selectSquare(cC+i, cR-i).innerHTML != '')
                        return false;
            }
            return true;
        }
    }
    if (selectedclass == 'wr' || selectedclass == 'br')
    {
        if (cR != lR && cC != lC)
            return false;

        if (cC == lC)
            for (let i = 1; i < Math.abs(cR - lR); i++){
                if (cR>lR)
                    if (selectSquare(cC, cR-i).innerHTML != '')
                        return false;
                if (cR<lR)
                    if (selectSquare(cC, cR+i).innerHTML != '')
                        return false;
            }
        if (cR == lR)
            for (let i = 1; i < Math.abs(cC - lC); i++){
                if (cC>lC)
                    if (selectSquare(cC-i, cR).innerHTML != '')
                        return false;
                if (cC<lC)
                    if (selectSquare(cC+i, cR).innerHTML != '')
                        return false;
            }
        return true;
    }
    if (selectedclass == 'wn' || selectedclass == 'bn')
    {
        if (!((lC == cC+2 || lC == cC-2) && (lR == cR+1 || lR == cR-1) || 
        (lC == cC+1 || lC == cC-1) && (lR == cR+2 || lR == cR-2)))
            return false;
        return true;
    }
    if (selectedclass == 'wq' || selectedclass == 'bq')
    {
        if (Math.abs(cR - lR) == Math.abs(cC - lC)){
            for (let i = 1; i < Math.abs(cR - lR); i++){
                if (cR>lR && cC>lC)
                    if (selectSquare(cC-i, cR-i).innerHTML != '')
                        return false;
                if (cR<lR && cC<lC)
                    if (selectSquare(cC+i, cR+i).innerHTML != '')
                        return false;
                if (cR<lR && cC>lC)
                    if (selectSquare(cC-i, cR+i).innerHTML != '')
                        return false;
                if (cR>lR && cC<lC)
                    if (selectSquare(cC+i, cR-i).innerHTML != '')
                        return false;
            }
            return true;
        }
        if (cR != lR && cC != lC)
            return false;

        if (cC == lC)
            for (let i = 1; i < Math.abs(cR - lR); i++){
                if (cR>lR)
                    if (selectSquare(cC, cR-i).innerHTML != '')
                        return false;
                if (cR<lR)
                    if (selectSquare(cC, cR+i).innerHTML != '')
                        return false;
            }
        if (cR == lR)
            for (let i = 1; i < Math.abs(cC - lC); i++){
                if (cC>lC)
                    if (selectSquare(cC-i, cR).innerHTML != '')
                        return false;
                if (cC<lC)
                    if (selectSquare(cC+i, cR).innerHTML != '')
                        return false;
            }
        return true;
    }
    if (selectedclass == 'wk' || selectedclass == 'bk')
    {
        if (Math.abs(cC - lC) == 2 && whiteonmove && cancastle[0][1] && lR == 1 && cC == 5){
            if (lC < cC && cancastle[0][0]){
                let cancontinue = true;
                for (let i = 1; i < 4; i++)
                    if (selectSquare(cC-i, 1).innerHTML != '')
                        cancontinue = false;

                if (cancontinue && !isCheck(true)){
                    selectSquare(4, 1).innerHTML = selected.outerHTML;
                    selectSquare(5, 1).innerHTML = '';
                    if (!isCheck(true)){
                        landing.innerHTML = selected.outerHTML;
                        selectSquare(4, 1).innerHTML = '';
                        if (!isCheck(true)){
                            selectSquare(4, 1).innerHTML = selectSquare(1, 1).innerHTML;
                            selectSquare(1, 1).innerHTML = '';
                            return true;
                        }else{
                            landing.innerHTML = '';
                            selectSquare(5, 1).innerHTML = selected.outerHTML;
                        }
                    }else{
                        selectSquare(5, 1).innerHTML = selected.outerHTML;
                        selectSquare(4, 1).innerHTML = '';
                    }
                }
            }
            if (lC > cC && cancastle[0][2]){
                let cancontinue = true;
                for (let i = 1; i < 3; i++)
                    if (selectSquare(cC+i, 1).innerHTML != '')
                        cancontinue = false;

                if (cancontinue && !isCheck(true)){
                    selectSquare(6, 1).innerHTML = selected.outerHTML;
                    selectSquare(5, 1).innerHTML = '';
                    if (!isCheck(true)){
                        landing.innerHTML = selected.outerHTML;
                        selectSquare(6, 1).innerHTML = '';
                        if (!isCheck(true)){
                            selectSquare(6, 1).innerHTML = selectSquare(8, 1).innerHTML;
                            selectSquare(8, 1).innerHTML = '';
                            return true;
                        }else{
                            landing.innerHTML = '';
                            selectSquare(5, 1).innerHTML = selected.outerHTML;
                        }
                    }else{
                        selectSquare(5, 1).innerHTML = selected.outerHTML;
                        selectSquare(6, 1).innerHTML = '';
                    }
                }
            }
        }
        if (Math.abs(cC - lC) == 2 && !whiteonmove && cancastle[1][1] && lR == 8 && cC == 5){
            if (lC < cC && cancastle[1][0]){
                let cancontinue = true;
                for (let i = 1; i < 4; i++)
                    if (selectSquare(cC-i, 8).innerHTML != '')
                        cancontinue = false;

                if (cancontinue && !isCheck(false)){
                    selectSquare(4, 8).innerHTML = selected.outerHTML;
                    selectSquare(5, 8).innerHTML = '';
                    if (!isCheck(false)){
                        landing.innerHTML = selected.outerHTML;
                        selectSquare(4, 8).innerHTML = '';
                        if (!isCheck(false)){
                            selectSquare(4, 8).innerHTML = selectSquare(1, 8).innerHTML;
                            selectSquare(1, 8).innerHTML = '';
                            return true;
                        }else{
                            landing.innerHTML = '';
                            selectSquare(5, 8).innerHTML = selected.outerHTML;
                        }
                    }else{
                        selectSquare(5, 8).innerHTML = selected.outerHTML;
                        selectSquare(4, 8).innerHTML = '';
                    }
                }
            }
            if (lC > cC && cancastle[1][2]){
                let cancontinue = true;
                for (let i = 1; i < 3; i++)
                    if (selectSquare(cC+i, 8).innerHTML != '')
                        cancontinue = false;

                if (cancontinue && !isCheck(false)){
                    selectSquare(6, 8).innerHTML = selected.outerHTML;
                    selectSquare(5, 8).innerHTML = '';
                    if (!isCheck(false)){
                        landing.innerHTML = selected.outerHTML;
                        selectSquare(6, 8).innerHTML = '';
                        if (!isCheck(false)){
                            selectSquare(6, 8).innerHTML = selectSquare(8, 8).innerHTML;
                            selectSquare(8, 8).innerHTML = '';
                            return true;
                        }else{
                            landing.innerHTML = '';
                            selectSquare(5, 8).innerHTML = selected.outerHTML;
                        }
                    }else{
                        selectSquare(5, 8).innerHTML = selected.outerHTML;
                        selectSquare(6, 8).innerHTML = '';
                    }
                }
            }
        }
        
        if (Math.abs(cR - lR) > 1 || Math.abs(cC - lC) > 1)
            return false;
        
        return true;
    }
    return false;
}

function isCheck(checkwhite) {
    if (checkwhite === undefined) console.error('undefined value');

    const localpieces = document.getElementsByClassName('piece');
    const wk = document.getElementsByClassName('wk')[0].parentElement;
    const bk = document.getElementsByClassName('bk')[0].parentElement;
    let changed = false;
    let king = checkwhite ? wk : bk;

    if (whiteonmove == checkwhite){
        whiteonmove = !checkwhite;
        changed = true;
    }

    for (let i = 0; i < localpieces.length; i++){
        if (canPlayMove(localpieces[i], king.parentElement)){
            if (changed) whiteonmove = checkwhite;
            return true;
        }
    }
    if (changed) whiteonmove = checkwhite;
    return false;
}

function selectSquare(Column, Row){ return document.getElementById(`${Column}${Row}`)}