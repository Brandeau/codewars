function sum(...args) {

    let head, rest;

    [head, ...rest] = args.flat();

    return args.length === undefined ? 0
            : rest.length === 0 ? head
            : head +  sum(rest)
}

console.log(sum(1, 2, 3))