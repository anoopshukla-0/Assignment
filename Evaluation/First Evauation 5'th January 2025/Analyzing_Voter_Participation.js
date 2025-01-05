function analyzeVoterData (voters) {
    const result = {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0,
    };
    voters.forEach(voter => {
        const {age, voted} = voter;
        if(age >= 18 && age <= 25) {
            result.numYoungPeople++;
            if(voted) result.numYoungVotes++;
        }
        else if(age >= 26 && age <= 35){
            result.numMidPeople++;
            if (voted) result.numMidVotesPeople++;
        }
        else if(age >= 36) {
            result.numOldsPeople++;
            if(voted) result.numOldVotesPeople++;
        }
    });
    return result;
}



const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

console.log(analyzeVoterData(voters));