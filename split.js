function solution(str){
   let a, b;

   [a, b, ...rest] = Array.from(str);

   if(str.length === 0){
    return []
   }

   if(str.length === 1){
    return [str] + ["_"]
   }

    return [[a + b],  solution(rest.join(""))].flat();
}

console.log(solution("abcdefghijk"))