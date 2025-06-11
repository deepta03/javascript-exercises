const findTheOldest = function(people) {

    let year= new Date().getFullYear(); 

    let result=people.reduce((oldest, currentPerson) =>{

    currentPersonAge= (currentPerson.yearOfDeath || year) - currentPerson.yearOfBirth;
    oldestAge= (oldest.yearOfDeath || year) - oldest.yearOfBirth;


    return currentPersonAge>oldestAge? currentPerson:oldest;
    


})



return result; 


};

// Do not edit below this line
module.exports = findTheOldest;
