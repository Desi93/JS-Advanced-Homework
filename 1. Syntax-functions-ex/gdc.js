function gdc(firstNum, secondNum){
    if(!secondNum){
        return firstNum;
    }

    return gdc(secondNum, firstNum % secondNum);
}

gdc(15, 5);