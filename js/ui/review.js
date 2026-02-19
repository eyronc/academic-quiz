const QuizReview = (() => {
  const LETTERS = CONFIG.OPTION_LETTERS;

  function _statusCircle(isCorrect) {
    const color = isCorrect ? 'bg-green-500' : 'bg-red-500';
    const mark  = isCorrect ? '✓' : '✗';
    return `<div class="w-10 h-10 rounded-full flex-shrink-0 ${color} flex items-center justify-center text-white font-bold">${mark}</div>`;
  }

  function _renderMCQItem(answer) {
    const optionsHTML = answer.options.map((option, idx) => {
      const isCorrect  = idx === answer.correctAnswer;
      const isSelected = idx === answer.userAnswer && !answer.isCorrect;

      let cls         = 'review-option';
      let explanation = '';
      let badge       = '';

      if (isCorrect) {
        cls         += ' correct-option';
        explanation  = `<div class="text-sm text-slate-300 mt-2 break-words">✅ ${answer.whyRight[idx]}</div>`;
        badge        = '<div class="text-green-300 font-bold text-sm flex-shrink-0">✓ Correct</div>';
      } else if (isSelected) {
        cls         += ' wrong-option';
        explanation  = `<div class="text-sm text-slate-300 mt-2 break-words">❌ ${answer.whyWrong[idx]}</div>`;
        badge        = '<div class="text-red-300 font-bold text-sm flex-shrink-0">✗ Your Answer</div>';
      } else if (answer.whyWrong?.[idx]) {
        explanation  = `<div class="text-sm text-slate-400 mt-2 break-words opacity-75">❌ ${answer.whyWrong[idx]}</div>`;
      }

      return `
        <div class="${cls}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-start gap-2 min-w-0 flex-1">
              <div class="font-bold text-white flex-shrink-0">${LETTERS[idx]}</div>
              <div class="min-w-0">
                <div class="text-white break-words">${option}</div>
                ${explanation}
              </div>
            </div>
            ${badge}
          </div>
        </div>`;
    }).join('');

    const timedOutBanner = answer.timedOut
      ? `<div class="bg-yellow-900 border border-yellow-600 rounded-lg p-3 mt-2">
           <div class="text-yellow-300 text-sm font-semibold">⏰ Time expired — no answer selected</div>
         </div>`
      : '';

    return `
      <div class="flex items-start gap-3 mb-4">
        ${_statusCircle(answer.isCorrect)}
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-bold text-white mb-3 break-words">${answer.question}</h3>
          <div class="space-y-2">${optionsHTML}${timedOutBanner}</div>
        </div>
      </div>`;
  }

  function _renderIdentificationItem(answer) {
    const wrongExtra = !answer.isCorrect ? `
      <div class="review-option correct-option">
        <div class="font-semibold text-sm text-green-300">Correct Answer:</div>
        <div class="font-mono text-base text-white break-words">${answer.correctAnswer}</div>
      </div>` : '';

    return `
      <div class="flex items-start gap-3 mb-4">
        ${_statusCircle(answer.isCorrect)}
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-bold text-white mb-2 break-words">${answer.question}</h3>
          <div class="space-y-2">
            <div class="review-option ${answer.isCorrect ? 'correct-option' : 'wrong-option'}">
              <div class="font-semibold text-sm ${answer.isCorrect ? 'text-green-300' : 'text-red-300'}">Your Answer:</div>
              <div class="font-mono text-base text-white break-words">${answer.userAnswer || '(no answer / time expired)'}</div>
            </div>
            ${wrongExtra}
            <div class="bg-slate-700 rounded-lg p-3 mt-2">
              <div class="text-sm text-slate-300 break-words">💡 <strong>Explanation:</strong> ${answer.explanation}</div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function _buildItem(answer) {
    const isCorrectClass = answer.isCorrect ? 'correct-answer' : 'wrong-answer';
    const innerHTML = answer.type === CONFIG.QUESTION_TYPES.MCQ
      ? _renderMCQItem(answer)
      : _renderIdentificationItem(answer);

    const el = document.createElement('div');
    el.className = `review-item ${isCorrectClass}`;
    el.innerHTML = innerHTML;
    return el;
  }

  return {
    render(filter) {
      const container = document.getElementById('review-container');
      container.innerHTML = '';

      const answers = QuizState.userAnswers;
      const filtered = filter === 'all'     ? answers
                     : filter === 'correct' ? answers.filter(a => a.isCorrect)
                     :                        answers.filter(a => !a.isCorrect);

      if (filtered.length === 0) {
        container.innerHTML = '<div class="text-center text-white text-xl py-12">No questions to display.</div>';
        return;
      }

      filtered.forEach(answer => container.appendChild(_buildItem(answer)));
    },

    setFilter(filter) {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      document.getElementById(`filter-${filter}`).classList.add('active');
      QuizReview.render(filter);
    },
  };
})();