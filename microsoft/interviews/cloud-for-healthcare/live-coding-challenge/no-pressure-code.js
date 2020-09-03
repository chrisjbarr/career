// Problem
// You are given a (potentially large) list of words. Some of these are compounds, where all parts are also in the List.

// Example List:
// [rockstar, rock, star, rocks, tar, star, rockstars, super, highway, high, way, superhighway]

// The task is to identify all combinations where one word is a composite of two or more words from the same list and print or return them.

const words = [
  "rockstar",
  "rock",
  "star",
  "rocks",
  "tar",
  "star",
  "rockstars",
  "super",
  "highway",
  "high",
  "way",
  "superhighway",
];

for (let a = 0, wordsLength = words.length; a < wordsLength; a++) {
  const compoundWord = words[a];

  for (let b = 0; b < wordsLength; b++) {
    const firstWordPart = words[b];

    if (compoundWord !== firstWordPart) {
      if (compoundWord.indexOf(firstWordPart) !== -1) {
        for (let c = 0; c < wordsLength; c++) {
          const secondWordPart = words[c];

          if (
            compoundWord !== secondWordPart &&
            firstWordPart !== secondWordPart &&
            compoundWord === `${firstWordPart}${secondWordPart}`
          ) {
            console.log(
              `${compoundWord}: ${firstWordPart} - ${secondWordPart}`
            );
          }
        }
      }
    }
  }
}

// rockstar = rock star
// highway = high, way
// superhighway = super, highway
