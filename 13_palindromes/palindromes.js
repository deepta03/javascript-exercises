const palindromes = function (str) {


    let strToBeChecked=str.replace(/[^a-z0-9]/gi, '').toLowerCase().split('');
    let strToBeCheckedReversed=strToBeChecked.slice().reverse();

    for(let i=0; i<strToBeChecked.length; i++){

        if(strToBeChecked[i]!=strToBeCheckedReversed[i])
        {
            return false;
        }
    }

    return true;
      

};

// Do not edit below this line
module.exports = palindromes;
