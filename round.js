function roundToNext5(n){
    if(n % 5 === 0){
        return n;
    }
    
    const nextN = n + 1;
    return roundToNext5(n + 1)
  }