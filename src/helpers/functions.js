let helpers = {};

helpers.capitalizeWord = function (word) {
  let wordSplit = word.split(' ');
  let firstWord = wordSplit[0];

  let secondWord = wordSplit[1];

  let firstWordCapitalized =
    firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
  let secondWordCapitalized =
    secondWord.charAt(0).toUpperCase() + secondWord.slice(1);

  return `${firstWordCapitalized} ${secondWordCapitalized}`;
};
export default helpers;
