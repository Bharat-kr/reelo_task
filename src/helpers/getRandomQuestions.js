const shuffleArray = require("./shuffleArray");

const getRandomQuestions = (questionSet, total_marks) => {
  const shuffledSet = shuffleArray(questionSet);
  let finalSet = [];
  for (let i = 0; i < shuffledSet.length; i++) {
    let item = shuffledSet[i];
    if (item.marks <= total_marks) {
      finalSet.push(item);
      total_marks -= item.marks;
    }
  }
  return finalSet;
};

module.exports = getRandomQuestions;
