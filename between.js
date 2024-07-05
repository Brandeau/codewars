

const between = (x, y) => x > y ? [] : [x].concat(between(x + 1, y));

  console.log(between(1,5))