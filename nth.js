function twoArraysNthElement(array1, array2, n) {
    return array1.concat(array2).sort((x, y) => x - y)[n]
    
}

console.log(twoArraysNthElement([6,19,21,30,34,35,44,48],[3,4,5,9,14,16,25,32,36,37,41,53],11))