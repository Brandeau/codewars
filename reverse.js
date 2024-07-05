const reverseSeq = n => {

    if(n === 1){
        return [1];
    }

    return [n].concat([reverseSeq(n - 1)]).flat();
  };

  console.log(reverseSeq(5000))