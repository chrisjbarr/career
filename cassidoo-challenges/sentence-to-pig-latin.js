const translateToPigLatin = function (sentence) {
  const vowels = ["a", "e", "i", "o", "u"];

  const words = sentence.split(" ");

  const translatedWords = [];

  words.forEach((word) => {
    if (word.length === 1) {
      translatedWords.push(`${word}yay`);
    } else {
      const vowelIndex = vowels.indexOf(word[1]);

      console.log(`translating ${word}`);

      if (vowelIndex !== -1) {
        if (vowelIndex === 0) {
          console.log(` to ${word}yay`);
          translatedWords.push(`${word}yay`);
        } else {
          console.log(
            ` to ${word.substr(vowelIndex)}${word[vowelIndex - 1]}yay`
          );
          translatedWords.push(`${word.substr(vowelIndex)}`);
        }
      }
    }
  });

  return translatedWords.join(" ");
};

const sentence = "I ate an apple and went to bed";

console.log(sentence);

const sentenceAsPigLatin = console.log(translateToPigLatin(sentence));
