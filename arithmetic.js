function arithmetic(a, b, operator){
    
        return operator === "sum"? a + b
                : operator === "substract" ? a - b
                : operator === "multiply" ? a * b
                : a / b
  }