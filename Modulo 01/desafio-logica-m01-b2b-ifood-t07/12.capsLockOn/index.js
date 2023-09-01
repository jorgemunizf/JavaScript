function processData(input) {
  const palavra = input.trim();

  if (
    palavra[0] === palavra[0].toLowerCase() &&
    palavra.slice(1) === palavra.slice(1).toUpperCase()
  ) {
    console.log(
      palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
    );
  } else if (palavra === palavra.toUpperCase()) {
    console.log(palavra.toLowerCase());
  } else {
    console.log(palavra);
  }
}
