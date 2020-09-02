// Identify all combinations where one words can be composed of two or more words of the same list, and
// print them.

// Problem

// You are given a (potentially large) List of words. Some of these are compounds, where all parts are also in

// the List.

// Example List:

// [rockstar, rock, star, rocks, tar, star, rockstars, super, highway, high, way, superhighway]

// The task is to identify all combinations where one word is a composite of two or more words from the same
// list and print or return them.

/// rockstar

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

for (var a = 0, len = words.length; a < len; a++) {
  const word = words[a];

  // console.log(`a: ${word}`);

  for (var b = 0; b < len; b++) {
    let testWord = words[b];

    // console.log(`b - testing ${word}`);

    if (testWord !== word) {
      for (var c = 0; c < len; c++) {
        // console.log(`c - testing ${word} against ${testWord}`);

        if (testWord !== word) {
          let innerTestWord = testWord + words[c];

          if (word.indexOf(innerTestWord) !== -1) {
            console.log(
              `Found combination for '${words[b]}': ${words[c]} creates ${word}`
            );
          }
        }
      }
    }
  }
}

// rockstar = rock star
// rockstart = rocks tar
// superhighway = super, highway
// highway = high, way
