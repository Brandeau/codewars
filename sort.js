function twoSort(list) {
    return Array.from(list.sort().shift()).map((e, i, a) => i !== a.length - 1? e + "***" : e).join("");
}

console.log(twoSort(["take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));