const QuizTimer = (() => {
  let _intervalId = null;
  let _remaining  = 0;

  function _onTick(onExpire) {
    _remaining--;
    _updateDisplay();

    if (_remaining <= CONFIG.TIMER_WARNING_THRESHOLD) {
      document.getElementById('timer')
        .closest('.timer-card')
        .classList.add('timer-pulse');
    }

    if (_remaining <= 0) {
      stop();
      onExpire();
    }
  }

  function _updateDisplay() {
    const el = document.getElementById('timer');
    if (el) el.textContent = _remaining + 's';
  }

  return {
    start(onExpire) {
      stop();
      _remaining = CONFIG.TIMER_SECONDS;
      _updateDisplay();

      const card = document.getElementById('timer')?.closest('.timer-card');
      if (card) card.classList.remove('timer-pulse');

      _intervalId = setInterval(() => _onTick(onExpire), 1000);
    },

    stop() {
      if (_intervalId !== null) {
        clearInterval(_intervalId);
        _intervalId = null;
      }
    },

    get remaining() { return _remaining; },
  };
})();