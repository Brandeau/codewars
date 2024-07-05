function alphabetPosition(string) {
    const alphabet = "0abcdefghijklmnopqrstuvwxyz";
    const lowerString = string.toLowerCase();
    const regex = /\s|[^a-z]/g;
    const onlyLetters = lowerString.replaceAll(regex, "");

    return Array.from(onlyLetters).map(e => alphabet.indexOf(e)).join(" ");
}

function toPosition(string){

const alphabet = [null, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

return Array.from(string.toLowerCase()).map((c) => alphabet.includes(c) ? alphabet.indexOf(c) : null).filter(Boolean).join("");

}

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))
  console.log(toPosition("The sunset sets at twelve o' clock."))