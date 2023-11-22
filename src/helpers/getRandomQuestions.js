const shuffleArray = require("./shuffleArray");

const getRandomQuestions = (questionSet, count) => {
  const shuffledSet = shuffleArray(questionSet);
  let finalSet = [];
  for (let i = 0; i < shuffledSet.length; i++) {
    let item = shuffledSet[i];
    if (item.marks <= count) {
      finalSet.push(item);
      count -= item.marks;
    }
  }
  return finalSet;
};

module.exports = getRandomQuestions;
