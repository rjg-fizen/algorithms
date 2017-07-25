
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  var words = str.split(' ');
  var biggestWord = 0;
  for (var i = 0; i < words.length; i++)  
    {
      var wordLength = words[i].length;
      if (wordLength > biggestWord)
        biggestWord = wordLength;
    }
  
  return biggestWord;
}