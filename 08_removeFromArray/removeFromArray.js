const removeFromArray = function(arr, ...moreArgs) {

    
    

    for(let i=0; i<arr.length; i++){

        for(let j=0; j<moreArgs.length; j++)
        {

            if(arr[i]===moreArgs[j])
            {

                arr.splice(i, 1);
                i=0;
            }


        }

        
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
