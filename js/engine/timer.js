const QuizTimer = (() => {
  let _intervalId = null;
  let _remaining  = 0;

  function _stop() {
    if (_intervalId !== null) {
      clearInterval(_intervalId);
      _intervalId = null;
    }
  }

  function _onTick(onExpire) {
    _remaining--;
    _updateDisplay();

    if (_remaining <= CONFIG.TIMER_WARNING_THRESHOLD) {
      const card = document.getElementById('timer')?.closest('.timer-card');
      if (card) card.classList.add('timer-pulse');
    }

    if (_remaining <= 0) {
      _stop();
      onExpire();
    }
  }

  function _updateDisplay() {
    const el = document.getElementById('timer');
    if (el) el.textContent = _remaining + 's';
  }

  return {
    start(onExpire) {
      _stop(); 
      _remaining = CONFIG.TIMER_SECONDS;
      _updateDisplay();

      const card = document.getElementById('timer')?.closest('.timer-card');
      if (card) card.classList.remove('timer-pulse');

      _intervalId = setInterval(() => _onTick(onExpire), 1000);
    },

    stop() { _stop(); },

    get remaining() { return _remaining; },
  };
})();