const quizDataBank = {
  infosec:  infosecQuestions,
  intprog:  intprogQuestions,
  sysadmn:  sysadmnQuestions,
  freeel3:  freeel3Questions,
};

QuizScreens.init();

function showCategorySelection() {
  QuizScreens.goToCategorySelection();
}

function startQuiz(category) {
  QuizScreens.startQuizWithLoading(category);
}

function nextQuestion() {
  QuizEngine.nextQuestion();
}

function showReviewCenter() {
  QuizScreens.showReviewCenter();
}

function filterReview(filter) {
  QuizReview.setFilter(filter);
}

function backToResults() {
  QuizScreens.backToResults();
}