const capitalize = (input) => {
  input = input.toLowerCase();
  var words = input.split(' ');
  var CapitalizedWords = [];
  words.forEach((element) => {
    CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
  });
  return CapitalizedWords.join(' ');
};
export default capitalize;
