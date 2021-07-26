// Define recursive division of integers

// https://www.youtube.com/watch?v=-K4Qnpku9mc

// Case 1: 0/8=0 reminder 0

// Case 2: 6/2=3 reminder 0  
//   6 - 2 = 4 counter 1
//   4 - 2 = 2 counter 2
//   2 - 2 = 0 counter 3 return 3

// Case 3: 1/2=0 reminder 1
// if 1<2 return 0

// Case 4: 9/4=2 reminder 1
//   9 - 4 = 5 counter 1
//   5 - 4 = 1 counter 1
//   1 - 4 = -3 base case

function rec(nom, denom) { 
    let counter = 0
    if (nom < denom) return counter
    counter += 1
    return rec(nom-denom,denom)+counter
}


// Returns reminder
function rec1(nom, denom) { 
    
    if (nom < denom) return nom
    
    return rec1(nom-denom,denom)
}

    
