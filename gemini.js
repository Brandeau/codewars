function alternateIndexes(arr1, arr2) {

  
    if (arr1.length !== arr2.length) {
      throw new Error("Input arrays must have the same length");
    }
  
    // Utilize spread syntax and destructuring to achieve alternation
    return [...arr1.flatMap((_, i) => [arr1[i], arr2[i]])];
  }
  
  // Example usage
  const colors = ["red", "green", "blue"];
  const numbers = [1, 2, 3];
  
  const mixedArray = alternateIndexes(colors, numbers);
  console.log(mixedArray); // Output: ["red", 1, "green", 2, "blue", 3]