function addBinary(a,b) {
    const sum = a + b;

    return toBinary(sum);
}

function toBinary(num){

    if(num === 1){
        return 1;
    }

    const remainder = num % 2;
    const nextInteger = (num - (num % 2)) / 2;
    return String(toBinary(nextInteger)) + remainder;
}

console.log(addBinary(10, 10))