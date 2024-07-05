function increaseByOne(num, count){
    num in count? count[num]++ : count[num] = 1;
    return count[num];
}

function deleteNth(arr,n){
    const counter = {};
    return arr.filter(e => increaseByOne(e, counter) <= n)
  }



console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))
console.log(deleteNth([2,30,45,45,2,45,2,14,45,45,45,14,2,2,14,14,2,2,14,2,45,30,30,45,2,45,2,2,2,30,14,30,30,2,2,14,30,48,30,30,2,30], 3))