export function exercise(sentence, n) {
  if (n === 0 || sentence === '')
    return [];
  
  let dict = {};
  let splittedSentence = sentence.split(" ");
  let result = [];

  splittedSentence.forEach(element => {
    if (!dict[element])
      dict[element] = 1;
    else
      dict[element]++;
  });

  for (let pair in dict) {
    result.push([pair, dict[pair]]);
  }

  result.sort();
  result.sort((pair1, pair2) => pair2[1] - pair1[1]);
  result = result.slice(0, n);

  return result;
}