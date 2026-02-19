const QuizScreens = (() => {
  const LOADING_DELAY_MS = 1000;

  function _hideLoading() {
    setTimeout(() => {
      document.getElementById('loading-screen').classList.add('hidden');
    }, LOADING_DELAY_MS);
  }

  return {
    init() {
      window.addEventListener('load', _hideLoading);
    },

    show(screenId) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById(screenId).classList.add('active');
    },

    showLoading() {
      document.getElementById('loading-screen').classList.remove('hidden');
    },

    hideLoading: _hideLoading,

    goToCategorySelection() {
      const nameInput = document.getElementById('user-name');
      const name = nameInput.value.trim();

      if (!name) {
        nameInput.classList.add('input-error');
        nameInput.placeholder = 'Please enter your name first!';
        nameInput.focus();
        return;
      }

      nameInput.classList.remove('input-error');
      QuizState.setUserName(name);
      document.getElementById('display-name').textContent = name;
      QuizScreens.show('category-screen');
    },

    startQuizWithLoading(category) {
      QuizScreens.showLoading();
      setTimeout(() => {
        QuizScreens.hideLoading();
        QuizEngine.startQuiz(category);
      }, LOADING_DELAY_MS + 500);
    },

    showReviewCenter() {
      QuizReview.render('all');
      QuizScreens.show('review-screen');
    },

    backToResults() {
      QuizScreens.show('result-screen');
    },
  };
})();