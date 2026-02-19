
const QuizState = (() => {
  let _state = _defaultState();

  function _defaultState() {
    return {
      userName:        '',
      currentCategory: '',
      quizData:        [],
      currentQuestion: 0,
      score:           0,
      streak:          0,
      userAnswers:     [],
      questionAnswered: false,
    };
  }

  return {
    get userName()         { return _state.userName; },
    get currentCategory()  { return _state.currentCategory; },
    get quizData()         { return _state.quizData; },
    get currentQuestion()  { return _state.currentQuestion; },
    get score()            { return _state.score; },
    get streak()           { return _state.streak; },
    get userAnswers()      { return _state.userAnswers; },
    get questionAnswered() { return _state.questionAnswered; },

    get currentQ()         { return _state.quizData[_state.currentQuestion]; },
    get totalQuestions()   { return _state.quizData.length; },
    get isLastQuestion()   { return _state.currentQuestion >= _state.quizData.length; },

    setUserName(name)          { _state.userName = name; },
    setCategory(cat)           { _state.currentCategory = cat; },
    setQuizData(data)          { _state.quizData = data; },
    markAnswered()             { _state.questionAnswered = true; },

    incrementQuestion()        { _state.currentQuestion++; },

    recordCorrect() {
      _state.score  += CONFIG.SCORE_PER_CORRECT;
      _state.streak += 1;
    },

    recordWrong() {
      _state.streak = 0;
    },

    pushAnswer(answerRecord) {
      _state.userAnswers.push(answerRecord);
    },

    reset() {
      _state = _defaultState();
    },
  };
})();