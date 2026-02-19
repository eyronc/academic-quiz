const QuizEngine = (() => {

  function _shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function _normalizeMCQ(rawQuestions) {
    return rawQuestions.map(q => {
      const shuffled = _shuffle(q.a);
      return {
        type:     CONFIG.QUESTION_TYPES.MCQ,
        q:        q.q,
        options:  shuffled.map(item => item.option),
        whyRight: shuffled.map(item => item.whyRight || null),
        whyWrong: shuffled.map(item => item.whyWrong || null),
        correct:  shuffled.findIndex(item => item.whyRight),
      };
    });
  }

  function _normalizeIdentification(rawQuestions) {
    return rawQuestions.map(q => ({
      type:        CONFIG.QUESTION_TYPES.IDENTIFICATION,
      q:           q.q,
      answers:     Array.isArray(q.a) ? q.a : [q.a],
      explanation: q.exp || 'This is a commonly used Linux command.',
    }));
  }

  function _buildQuizData(category) {
    const raw      = quizDataBank[category];
    const sampled  = _shuffle(raw).slice(0, CONFIG.QUESTIONS_PER_QUIZ);
    const catType  = CONFIG.CATEGORIES[category].type;

    return catType === CONFIG.QUESTION_TYPES.IDENTIFICATION
      ? _normalizeIdentification(sampled)
      : _normalizeMCQ(sampled);
  }

  function handleMCQAnswer(selectedIndex) {
    if (QuizState.questionAnswered) return;
    QuizState.markAnswered();
    QuizTimer.stop();

    const q           = QuizState.currentQ;
    const correctIndex = q.correct;
    const timedOut    = selectedIndex === -1;
    const isCorrect   = !timedOut && selectedIndex === correctIndex;

    if (isCorrect) {
      QuizState.recordCorrect();
    } else {
      QuizState.recordWrong();
    }

    QuizState.pushAnswer({
      type:          CONFIG.QUESTION_TYPES.MCQ,
      question:      q.q,
      options:       q.options,
      whyRight:      q.whyRight,
      whyWrong:      q.whyWrong,
      userAnswer:    selectedIndex,
      correctAnswer: correctIndex,
      isCorrect,
      timedOut,
    });

    QuizRenderer.showMCQResult(selectedIndex, correctIndex, q, isCorrect, timedOut);
    QuizRenderer.updateScoreStreak(QuizState.score, QuizState.streak);
    QuizRenderer.showNextButton();
  }

  function handleIdentificationAnswer(rawInput) {
    if (QuizState.questionAnswered) return;
    QuizState.markAnswered();
    QuizTimer.stop();

    const q           = QuizState.currentQ;
    const userAnswer  = rawInput.trim().toLowerCase();
    const isCorrect   = q.answers.some(a => userAnswer === a.toLowerCase());
    const displayAnswer = q.answers.join(' or ');

    if (isCorrect) {
      QuizState.recordCorrect();
    } else {
      QuizState.recordWrong();
    }

    QuizState.pushAnswer({
      type:          CONFIG.QUESTION_TYPES.IDENTIFICATION,
      question:      q.q,
      userAnswer,
      correctAnswer: displayAnswer,
      explanation:   q.explanation,
      isCorrect,
    });

    QuizRenderer.showIdentificationResult(userAnswer, displayAnswer, q.explanation, isCorrect);
    QuizRenderer.updateScoreStreak(QuizState.score, QuizState.streak);
    QuizRenderer.showNextButton();
  }

  return {
    startQuiz(category) {
      QuizState.reset();
      QuizState.setCategory(category);
      QuizState.setQuizData(_buildQuizData(category));

      QuizScreens.show('quiz-screen');
      QuizEngine.loadQuestion();
    },

    loadQuestion() {
      if (QuizState.isLastQuestion) {
        QuizEngine.showResults();
        return;
      }

      const q = QuizState.currentQ;
      QuizRenderer.renderQuestion(q, QuizState.currentQuestion, QuizState.totalQuestions);

      QuizTimer.start(() => {
        if (q.type === CONFIG.QUESTION_TYPES.IDENTIFICATION) {
          const input = document.getElementById('answer-input');
          handleIdentificationAnswer(input ? input.value : '');
        } else {
          handleMCQAnswer(-1);
        }
      });
    },

    nextQuestion() {
      QuizState.incrementQuestion();
      QuizEngine.loadQuestion();
    },

    handleMCQAnswer,
    handleIdentificationAnswer,

    showResults() {
      QuizTimer.stop();
      QuizRenderer.renderResults(
        QuizState.userAnswers,
        QuizState.score,
        QuizState.totalQuestions
      );
      QuizScreens.show('result-screen');
    },
  };
})();