function disemvowel(str) {
    const regex = /[aeiouAEIOU]/g;
    return str.replaceAll(regex, "");
  }

  console.log(disemvowel("This website is for losers LOL!"))