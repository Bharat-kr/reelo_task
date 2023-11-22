//utils
const logger = require("../utils/logger");
const {
  serverErrorResponse,
  successResponse,
  unprocessableEntityResponse,
} = require("../utils/response");
const {
  easy_questions,
  medium_questions,
  hard_questions,
} = require("../utils/sample_questions");

//helpers
const getRandomQuestions = require("../helpers/getRandomQuestions");
const shuffleArray = require("../helpers/shuffleArray");

const generatePaper = (req, res) => {
  try {
    const {
      marks,
      difficulty: { easy, medium, hard },
    } = req.body;

    if (easy + medium + hard != 100)
      return unprocessableEntityResponse(res, "Wrong Percentage distribution");

    if (!marks)
      return unprocessableEntityResponse(
        res,
        "Please provide total marks for question paper"
      );

    let marks_alloted_easy = (marks * easy) / 100;
    let marks_alloted_medium = (marks * medium) / 100;
    let marks_alloted_hard = (marks * hard) / 100;

    const selectedQuestions = [
      ...getRandomQuestions(easy_questions, marks_alloted_easy),
      ...getRandomQuestions(medium_questions, marks_alloted_medium),
      ...getRandomQuestions(hard_questions, marks_alloted_hard),
    ];
    //trying to get metdata to check whether working correctly
    let metadata = {
      total: 0,
      easy: 0,
      medium: 0,
      hard: 0,
    };

    selectedQuestions.forEach((item) => {
      metadata.total += item.marks;
      switch (item.difficulty) {
        case "Easy":
          metadata.easy += item.marks;
          break;
        case "Medium":
          metadata.medium += item.marks;
          break;
        case "Hard":
          metadata.hard += item.marks;
          break;
        default:
          break;
      }
    });
    // Shuffle the final question paper
    const questionPaper = shuffleArray(selectedQuestions);
    return successResponse(res, "Paper Generated Successfully", {
      metadata,
      questions: questionPaper,
    });
  } catch (error) {
    logger.error(error.message);
    return serverErrorResponse(res, error.message);
  }
};

const searchController = {
  generatePaper,
};

module.exports = searchController;
