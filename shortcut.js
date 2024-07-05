function shortcut (string) {
    const regex = /[aeiou]/g;
    return string.replaceAll(regex, "");
  }

  console.log(shortcut("hello"))