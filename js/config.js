const CONFIG = {
  QUESTIONS_PER_QUIZ: 50,
  TIMER_SECONDS: 30,
  TIMER_WARNING_THRESHOLD: 10,
  SCORE_PER_CORRECT: 1,

  QUESTION_TYPES: {
    MCQ: 'mcq',
    IDENTIFICATION: 'identification',
  },

  CATEGORIES: {
    infosec:  { label: 'Information Security',    type: 'mcq',            emoji: '🛡️' },
    intprog:  { label: 'Integrative Programming', type: 'mcq',            emoji: '💻' },
    sysadmn:  { label: 'System Administration',   type: 'identification', emoji: '⚙️' },
    freeel3:  { label: 'Data Representation',     type: 'mcq',            emoji: '🐼' },
  },

  RANKS: [
    { min: 90, label: 'Elite Scholar',  badge: '🏆' },
    { min: 75, label: 'Senior Student', badge: '🥇' },
    { min: 60, label: 'Qualified',      badge: '🥈' },
    { min: 0,  label: 'Keep Studying',  badge: '📚' },
  ],

  OPTION_LETTERS: ['A', 'B', 'C', 'D'],
};