const QuizRenderer = (() => {
  function _el(id) { return document.getElementById(id); }

  function _feedbackHTML(icon, titleColor, title, lines) {
    return `
      <div class="flex items-start gap-3">
        <div class="text-2xl flex-shrink-0">${icon}</div>
        <div class="min-w-0 flex-1">
          <div class="font-bold ${titleColor} mb-1">${title}</div>
          ${lines.map(l => `<div class="text-sm text-slate-300 mt-1 break-words">${l}</div>`).join('')}
        </div>
      </div>`;
  }

  function _showExplanationBox(boxEl, html) {
    boxEl.innerHTML = html;
    boxEl.classList.add('show');
  }

  function _renderHeader(qIndex, total) {
    _el('question-count').textContent = `Question ${qIndex + 1} of ${total}`;
    _el('q-number').textContent = qIndex + 1;
    _el('progress-bar').style.width = `${(qIndex / total) * 100}%`;
  }

  function _renderMCQOptions(q) {
    const container = _el('options-container');
    container.innerHTML = '';

    q.options.forEach((optionText, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.index = index;
      btn.onclick = () => QuizEngine.handleMCQAnswer(index);
      btn.innerHTML = `
        <div class="flex items-start gap-3">
          <div class="option-letter flex-shrink-0">${CONFIG.OPTION_LETTERS[index]}</div>
          <div class="flex-1 text-base font-medium text-white leading-snug break-words min-w-0">${optionText}</div>
        </div>
        <div class="explanation-box" id="exp-${index}"></div>
      `;
      container.appendChild(btn);
    });
  }

  function _renderIdentificationInput() {
    const container = _el('options-container');
    container.innerHTML = `
      <div class="bg-slate-800 rounded-lg p-5 shadow-xl">
        <label class="block text-sm font-semibold text-slate-300 mb-3">Type the command name:</label>
        <input
          type="text"
          id="answer-input"
          class="answer-input"
          placeholder="Enter command here..."
          autocomplete="off"
        >
        <button
          id="submit-btn"
          class="mt-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-all w-full"
          onclick="QuizEngine.handleIdentificationAnswer(document.getElementById('answer-input').value)"
        >
          Submit Answer
        </button>
        <div id="identification-explanation" class="explanation-box"></div>
      </div>
    `;

    const input = _el('answer-input');
    setTimeout(() => input && input.focus(), 100);

    input && input.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        QuizEngine.handleIdentificationAnswer(input.value);
      }
    });
  }

  return {
    renderQuestion(q, qIndex, total) {
      _renderHeader(qIndex, total);
      _el('question-text').textContent = q.q;
      _el('next-button-container').classList.add('hidden');

      if (q.type === CONFIG.QUESTION_TYPES.MCQ) {
        _renderMCQOptions(q);
      } else {
        _renderIdentificationInput();
      }
    },

    showMCQResult(selectedIndex, correctIndex, q, isCorrect, timedOut) {
      const buttons = document.querySelectorAll('.option-btn');
      buttons.forEach(btn => { btn.disabled = true; });

      buttons[correctIndex].classList.add('correct');
      _showExplanationBox(
        _el(`exp-${correctIndex}`),
        _feedbackHTML('✅', 'text-green-300',
          `Correct Answer${isCorrect ? ' (+1 point)' : ''}`,
          [q.whyRight[correctIndex]]
        )
      );

      if (!isCorrect && !timedOut) {
        buttons[selectedIndex].classList.add('wrong');
        _showExplanationBox(
          _el(`exp-${selectedIndex}`),
          _feedbackHTML('❌', 'text-red-300', 'Your Answer', [q.whyWrong[selectedIndex]])
        );
      }

      if (timedOut) {
        _showExplanationBox(
          _el(`exp-${correctIndex}`),
          _feedbackHTML('⏰', 'text-yellow-300', "Time's Up!", [q.whyRight[correctIndex]])
        );
      }
    },

    showIdentificationResult(userAnswer, correctAnswer, explanation, isCorrect) {
      const input     = _el('answer-input');
      const submitBtn = _el('submit-btn');
      const expBox    = _el('identification-explanation');

      if (input)     { input.disabled = true; input.classList.add(isCorrect ? 'correct' : 'wrong'); }
      if (submitBtn) { submitBtn.disabled = true; }

      const html = isCorrect
        ? _feedbackHTML('✅', 'text-green-400', 'Correct! +1 point', [
            `The answer is: <span class="font-mono font-bold">${correctAnswer}</span>`,
            `💡 ${explanation}`,
          ])
        : _feedbackHTML('❌', 'text-red-400', 'Incorrect', [
            `Your answer: <span class="font-mono font-bold">${userAnswer || '(empty)'}</span>`,
            `Correct answer: <span class="font-mono font-bold text-green-400">${correctAnswer}</span>`,
            `💡 ${explanation}`,
          ]);

      _showExplanationBox(expBox, html);
    },

    updateScoreStreak(score, streak) {
      _el('current-score').textContent = score;
      _el('streak').textContent        = streak;
    },

    showNextButton() {
      _el('next-button-container').classList.remove('hidden');
    },

    renderResults(userAnswers, score, total) {
      const correct    = userAnswers.filter(a => a.isCorrect).length;
      const wrong      = total - correct;
      const percentage = Math.round((correct / total) * 100);
      const rank       = CONFIG.RANKS.find(r => percentage >= r.min);

      _el('final-score').textContent  = `${score}/${total}`;
      _el('rank-badge').textContent   = rank.badge;
      _el('rank-text').textContent    = rank.label;
      _el('correct-count').textContent = correct;
      _el('wrong-count').textContent  = wrong;
      _el('accuracy').textContent     = `${percentage}%`;
    },
  };
})();