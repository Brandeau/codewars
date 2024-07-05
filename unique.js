function findUniq(arr) {

    return arr.filter((e, i, a) => {
        return i == 0 ? a[i] !== a[i + 1] && a[i] !== a[i + 2]
                : i == arr.length - 1 ? a[i] !== a[i - 1] && a[i] !== a[i - 2]
                : a[i] !== a[i + 1] && a[i] !== a[i - 1]
                
    }).pop()
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 1, 0, 0 ]))
console.log(findUniq([ 0, 1, 0 ]))
console.log(findUniq([ 0, 0, 1 ]))