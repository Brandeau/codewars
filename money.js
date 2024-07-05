function calculateYears(principal, interest, tax, desired) {
    
    let P = principal;
    let I = interest;
    let T = tax;
    let D = desired;
    let Y = 0;

    for(let i = 0; i < 1000 ;i++){
        if (P < D){
            P = P + (P * I) - ((P * I)*T);
            Y++;
        }
    }

    return Y;

}

function calculateYears2(principal, interest, tax, desired){
    let P = principal;
    let I = interest;
    let T = tax;
    let D = desired;
    let years = 0;
   
    return P >= D ? 0 : years + 1 + calculateYears2(P + (P * I) - ((P * I)*T), I, T, D);
    
}




console.log(calculateYears(1000,0.01625,0.18,1200));
console.log(calculateYears2(1000,0.01625,0.18,1200));