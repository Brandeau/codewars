String.prototype.toAlternatingCase = function () {
    const lowercase = /[a-z]/;
    const uppercase = /[A-Z]/;

    const newString = Array.from(this).map(e => lowercase.test(e)? 
                                                e.toUpperCase(): 
                                                e.toLowerCase()
    ).join("");

    return newString;
}

console.log("HeLLo WoRLD".toAlternatingCase())