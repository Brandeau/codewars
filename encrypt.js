function encrypt(text, n) {

    if(n <= 0){
        return text;
    }

    if(text === null){
        return null;
    }

    if(n === 1){
        const arr = Array.from(text);
        const oddNumbers = arr.filter((e, i) => i % 2 === 0);
        const evenNumbers = arr.filter((e, i) => i % 2 !== 0);

        return evenNumbers.concat(oddNumbers).join("");
    }

    const result = encrypt(text, 1);
    return encrypt(result, n - 1)
    
}

function decrypt(encryptedText, n) {

    
    if(n === 0) return encryptedText;

    if(encryptedText === null) return null;

    if(n <= 0) return encryptedText;

    if(n === 1){
        const arr = Array.from(encryptedText);
        const evenNumbers = arr.slice(Math.floor(arr.length / 2), arr.length );
        const oddNumbers = arr.slice(0, Math.ceil(arr.length / 2));

        return [...evenNumbers.flatMap((_, i) => [evenNumbers[i], oddNumbers[i]]).slice(0, arr.length)].join("");
    }

    const result = decrypt(encryptedText, 1);
    return decrypt(result, n - 1)
}

