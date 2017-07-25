// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  	var words = str.split(' ').map(function(word){
  	word = word.toLowerCase();
    word = word[0].toUpperCase() + word.substring(1);
    return word;
  });
  return words.join(' ');
}
