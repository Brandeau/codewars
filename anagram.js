const isAnagram = function(string1, string2) {

    const str1 = string1.toLowerCase();
    const str2 = string2.toLowerCase();
    
    if(str1.length !== str2.length) return false;

    if(str1.length === 0 && str2.length === 0) return true;

    const [newString1, newString2] = filterChar(str1, str2);

    return isAnagram(newString1, newString2)

}

function filterChar(string1, string2){

    const array = Array.from(string1);
    const char = string2[0];

    const index = string1.indexOf(char);

    const newString1 = array.filter((e,i) => i !== index).join("");
    const newString2 = string2.substring(1, string2.length);
    
    return [newString1, newString2]
}

