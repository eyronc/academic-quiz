// Quiz Application Logic
let userName = '';
let currentCategory = '';
let quizData = [];
let currentQuestion = 0;
let score = 0;
let streak = 0;
let timer = 30;
let timerInterval;
let userAnswers = [];
let questionAnswered = false; // BUG FIX: track if question was already answered

// Question bank combining all subjects
const quizDataBank = {
    infosec: infosecQuestions,
    intprog: intprogQuestions,
    sysadmn: sysadmnQuestions,
    freeel3: freeel3Questions
};

// Utility Functions
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showLoading() {
    document.getElementById('loading-screen').classList.remove('hidden');
}

function hideLoading() {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 1000);
}

// Initial page load
window.addEventListener('load', hideLoading);

// Show Category Selection
function showCategorySelection() {
    userName = document.getElementById('user-name').value.trim();
    if (!userName) {
        alert('Please enter your name');
        return;
    }
    document.getElementById('display-name').textContent = userName;
    showScreen('category-screen');
}

// Start Quiz
function startQuiz(category) {
    showLoading();
    
    currentCategory = category;
    currentQuestion = 0;
    score = 0;
    streak = 0;
    userAnswers = [];
    
    // Get all questions for the category
    const allQuestions = quizDataBank[category];
    
    // Shuffle and take 50 questions
    const shuffledQuestions = shuffle(allQuestions).slice(0, 50);
    
    // For multiple choice (InfoSec & IntProg & freeel3), shuffle answers with new whyRight/whyWrong structure
    if (category !== 'sysadmn') {
        quizData = shuffledQuestions.map(q => {
            const shuffledAnswers = q.a.map((ansObj, idx) => ({
                ...ansObj,
                originalIndex: idx
            }));
            const randomized = shuffle(shuffledAnswers);
            
            return {
                q: q.q,
                a: randomized.map(item => item.option),
                whyRight: randomized.map(item => item.whyRight || null),
                whyWrong: randomized.map(item => item.whyWrong || null),
                c: randomized.findIndex(item => item.whyRight)
            };
        });
    } else {
        quizData = shuffledQuestions;
    }
    
    setTimeout(() => {
        hideLoading();
        showScreen('quiz-screen');
        loadQuestion();
    }, 1500);
}

// Load Question
function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        showResults();
        return;
    }
    
    // BUG FIX: Reset answered flag for each new question
    questionAnswered = false;
    
    const q = quizData[currentQuestion];
    
    // Update UI
    document.getElementById('question-count').textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    document.getElementById('q-number').textContent = currentQuestion + 1;
    document.getElementById('question-text').textContent = q.q;
    document.getElementById('current-score').textContent = score;
    document.getElementById('streak').textContent = streak;
    
    // Reset timer pulse
    const timerEl = document.getElementById('timer');
    timerEl.parentElement.parentElement.classList.remove('timer-pulse');
    
    // Progress bar
    const progress = ((currentQuestion) / quizData.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    
    // Load options based on category
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    if (currentCategory === 'sysadmn') {
        // Identification type
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
                    onclick="submitIdentification()" 
                    class="mt-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-all w-full"
                >
                    Submit Answer
                </button>
                <div id="identification-explanation" class="explanation-box"></div>
            </div>
        `;
        
        setTimeout(() => document.getElementById('answer-input').focus(), 100);
        
        document.getElementById('answer-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') submitIdentification();
        });
    } else {
        // Multiple choice
        const letters = ['A', 'B', 'C', 'D'];
        q.a.forEach((answer, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.onclick = () => handleAnswer(index);
            btn.innerHTML = `
                <div class="flex items-start gap-3">
                    <div class="option-letter flex-shrink-0">${letters[index]}</div>
                    <div class="flex-1 text-base font-medium text-white leading-snug break-words min-w-0">${answer}</div>
                </div>
                <div class="explanation-box" id="exp-${index}"></div>
            `;
            container.appendChild(btn);
        });
    }
    
    // Hide next button
    document.getElementById('next-button-container').classList.add('hidden');
    
    // Start timer
    startTimer();
}

// Submit Identification Answer (for sysadmn)
function submitIdentification() {
    // BUG FIX: Prevent multiple submissions
    if (questionAnswered) return;
    
    const input = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-btn');
    
    if (!input || input.disabled) return;
    
    questionAnswered = true; // Mark as answered
    
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswers = quizData[currentQuestion].a;
    const explanation = quizData[currentQuestion].exp || "This is a commonly used Linux command.";
    
    // Disable input and button
    input.disabled = true;
    if (submitBtn) submitBtn.disabled = true;
    
    // Check answer
    let isCorrect = false;
    let correctAnswerDisplay = '';
    
    if (Array.isArray(correctAnswers)) {
        isCorrect = correctAnswers.some(ans => userAnswer === ans.toLowerCase());
        correctAnswerDisplay = correctAnswers.join(' or ');
    } else {
        isCorrect = userAnswer === correctAnswers.toLowerCase();
        correctAnswerDisplay = correctAnswers;
    }
    
    if (isCorrect) {
        score += 1;
        streak++;
        input.classList.add('correct');
        
        document.getElementById('identification-explanation').innerHTML = `
            <div class="flex items-start gap-3">
                <div class="text-2xl flex-shrink-0">✅</div>
                <div>
                    <div class="font-bold text-green-400 mb-1">Correct! +1 point</div>
                    <div class="text-slate-300 break-words">The answer is: <span class="font-mono font-bold">${correctAnswerDisplay}</span></div>
                    <div class="text-slate-400 text-sm mt-2">💡 ${explanation}</div>
                </div>
            </div>
        `;
    } else {
        streak = 0;
        input.classList.add('wrong');
        
        document.getElementById('identification-explanation').innerHTML = `
            <div class="flex items-start gap-3">
                <div class="text-2xl flex-shrink-0">❌</div>
                <div>
                    <div class="font-bold text-red-400 mb-1">Incorrect</div>
                    <div class="text-slate-300 break-words">Your answer: <span class="font-mono font-bold">${userAnswer || '(empty)'}</span></div>
                    <div class="text-slate-300 break-words">Correct answer: <span class="font-mono font-bold text-green-400">${correctAnswerDisplay}</span></div>
                    <div class="text-slate-400 text-sm mt-2 break-words">💡 ${explanation}</div>
                </div>
            </div>
        `;
    }
    
    document.getElementById('identification-explanation').classList.add('show');
    
    // Store answer
    userAnswers.push({
        question: quizData[currentQuestion].q,
        userAnswer: userAnswer,
        correctAnswer: correctAnswerDisplay,
        isCorrect: isCorrect,
        explanation: explanation
    });
    
    // Stop timer
    clearInterval(timerInterval);
    
    // Show next button
    document.getElementById('next-button-container').classList.remove('hidden');
    
    // Update score display
    document.getElementById('current-score').textContent = score;
    document.getElementById('streak').textContent = streak;
}

// Handle Multiple Choice Answer
function handleAnswer(selectedIndex) {
    // BUG FIX: Prevent multiple/double answers
    if (questionAnswered) return;
    
    const q = quizData[currentQuestion];
    const correctIndex = q.c;
    const buttons = document.querySelectorAll('.option-btn');
    
    // BUG FIX: Handle timer-expired case (selectedIndex = -1 = no answer given)
    if (selectedIndex === -1) {
        // Time's up — mark as wrong, show correct answer, store unanswered
        questionAnswered = true;
        streak = 0;
        
        buttons.forEach(btn => btn.disabled = true);
        buttons[correctIndex].classList.add('correct');
        
        buttons[correctIndex].querySelector('.explanation-box').innerHTML = `
            <div class="flex items-start gap-3">
                <div class="text-2xl flex-shrink-0">⏰</div>
                <div class="text-white min-w-0">
                    <div class="font-bold text-yellow-300 mb-1">Time's Up!</div>
                    <div class="text-sm text-slate-300 mt-1 break-words">${q.whyRight[correctIndex]}</div>
                </div>
            </div>
        `;
        buttons[correctIndex].querySelector('.explanation-box').classList.add('show');
        
        userAnswers.push({
            question: q.q,
            options: q.a,
            whyRight: q.whyRight,
            whyWrong: q.whyWrong,
            userAnswer: -1,
            correctAnswer: correctIndex,
            isCorrect: false
        });
        
        clearInterval(timerInterval);
        document.getElementById('next-button-container').classList.remove('hidden');
        document.getElementById('current-score').textContent = score;
        document.getElementById('streak').textContent = streak;
        return;
    }
    
    questionAnswered = true;
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    const isCorrect = selectedIndex === correctIndex;
    
    if (isCorrect) {
        score += 1;
        streak++;
        buttons[selectedIndex].classList.add('correct');
    } else {
        streak = 0;
        buttons[selectedIndex].classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
    }
    
    // Show explanation for correct answer
    buttons[correctIndex].querySelector('.explanation-box').innerHTML = `
        <div class="flex items-start gap-3">
            <div class="text-2xl flex-shrink-0">✅</div>
            <div class="text-white min-w-0">
                <div class="font-bold text-green-300 mb-1">Correct Answer ${isCorrect ? '(+1 point)' : ''}</div>
                <div class="text-sm text-slate-300 mt-1 break-words">${q.whyRight[correctIndex]}</div>
            </div>
        </div>
    `;
    buttons[correctIndex].querySelector('.explanation-box').classList.add('show');
    
    // Show explanation for selected wrong answer
    if (!isCorrect) {
        buttons[selectedIndex].querySelector('.explanation-box').innerHTML = `
            <div class="flex items-start gap-3">
                <div class="text-2xl flex-shrink-0">❌</div>
                <div class="text-white min-w-0">
                    <div class="font-bold text-red-300 mb-1">Your Answer</div>
                    <div class="text-sm text-slate-300 mt-1 break-words">${q.whyWrong[selectedIndex]}</div>
                </div>
            </div>
        `;
        buttons[selectedIndex].querySelector('.explanation-box').classList.add('show');
    }
    
    // Store answer
    userAnswers.push({
        question: q.q,
        options: q.a,
        whyRight: q.whyRight,
        whyWrong: q.whyWrong,
        userAnswer: selectedIndex,
        correctAnswer: correctIndex,
        isCorrect: isCorrect
    });
    
    clearInterval(timerInterval);
    document.getElementById('next-button-container').classList.remove('hidden');
    document.getElementById('current-score').textContent = score;
    document.getElementById('streak').textContent = streak;
}

// Timer
function startTimer() {
    clearInterval(timerInterval); // BUG FIX: Always clear before starting new
    timer = 30;
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timer--;
        updateTimerDisplay();
        
        if (timer <= 10) {
            document.getElementById('timer').parentElement.parentElement.classList.add('timer-pulse');
        }
        
        if (timer <= 0) {
            clearInterval(timerInterval);
            autoSubmit();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timer').textContent = timer + 's';
}

function autoSubmit() {
    // BUG FIX: Check questionAnswered guard before auto-submitting
    if (questionAnswered) return;
    
    if (currentCategory === 'sysadmn') {
        submitIdentification();
    } else {
        handleAnswer(-1); // -1 = time expired, no answer
    }
}

// Next Question
function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

// Show Results
function showResults() {
    clearInterval(timerInterval);
    
    const totalQuestions = quizData.length;
    const correctAnswers = userAnswers.filter(a => a.isCorrect).length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    let rank, rankBadge;
    if (percentage >= 90) {
        rank = 'Elite Scholar';
        rankBadge = '🏆';
    } else if (percentage >= 75) {
        rank = 'Senior Student';
        rankBadge = '🥇';
    } else if (percentage >= 60) {
        rank = 'Qualified';
        rankBadge = '🥈';
    } else {
        rank = 'Keep Studying';
        rankBadge = '📚';
    }
    
    document.getElementById('final-score').textContent = score + '/' + totalQuestions;
    document.getElementById('rank-badge').textContent = rankBadge;
    document.getElementById('rank-text').textContent = rank;
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('wrong-count').textContent = wrongAnswers;
    document.getElementById('accuracy').textContent = percentage + '%';
    
    showScreen('result-screen');
}

// Review Center
function showReviewCenter() {
    renderReview('all');
    showScreen('review-screen');
}

function filterReview(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('filter-' + filter).classList.add('active');
    renderReview(filter);
}

function renderReview(filter) {
    const container = document.getElementById('review-container');
    container.innerHTML = '';
    
    let filteredAnswers = userAnswers;
    if (filter === 'correct') {
        filteredAnswers = userAnswers.filter(a => a.isCorrect);
    } else if (filter === 'wrong') {
        filteredAnswers = userAnswers.filter(a => !a.isCorrect);
    }
    
    if (filteredAnswers.length === 0) {
        container.innerHTML = '<div class="text-center text-white text-xl">No questions to display</div>';
        return;
    }
    
    filteredAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct-answer' : 'wrong-answer'}`;
        
        if (currentCategory === 'sysadmn') {
            reviewItem.innerHTML = `
                <div class="flex items-start gap-3 mb-4">
                    <div class="w-10 h-10 rounded-full flex-shrink-0 ${answer.isCorrect ? 'bg-green-500' : 'bg-red-500'} flex items-center justify-center text-white font-bold">
                        ${answer.isCorrect ? '✓' : '✗'}
                    </div>
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg font-bold text-white mb-2 break-words">${answer.question}</h3>
                        <div class="space-y-2">
                            <div class="review-option ${answer.isCorrect ? 'correct-option' : 'wrong-option'}">
                                <div class="font-semibold text-sm ${answer.isCorrect ? 'text-green-300' : 'text-red-300'}">Your Answer:</div>
                                <div class="font-mono text-base text-white break-words">${answer.userAnswer || '(no answer / time expired)'}</div>
                            </div>
                            ${!answer.isCorrect ? `
                                <div class="review-option correct-option">
                                    <div class="font-semibold text-sm text-green-300">Correct Answer:</div>
                                    <div class="font-mono text-base text-white break-words">${answer.correctAnswer}</div>
                                </div>
                            ` : ''}
                            <div class="bg-slate-700 rounded-lg p-3 mt-2">
                                <div class="text-sm text-slate-300 break-words">💡 <strong>Explanation:</strong> ${answer.explanation}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            const letters = ['A', 'B', 'C', 'D'];
            reviewItem.innerHTML = `
                <div class="flex items-start gap-3 mb-4">
                    <div class="w-10 h-10 rounded-full flex-shrink-0 ${answer.isCorrect ? 'bg-green-500' : 'bg-red-500'} flex items-center justify-center text-white font-bold">
                        ${answer.isCorrect ? '✓' : '✗'}
                    </div>
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg font-bold text-white mb-3 break-words">${answer.question}</h3>
                        <div class="space-y-2">
                            ${answer.options.map((option, idx) => {
                                let optionClass = 'review-option';
                                let explanation = '';
                                let badge = '';
                                
                                if (idx === answer.correctAnswer) {
                                    optionClass += ' correct-option';
                                    explanation = `<div class="text-sm text-slate-300 mt-2 break-words">✅ ${answer.whyRight[idx]}</div>`;
                                    badge = '<div class="text-green-300 font-bold text-sm flex-shrink-0">✓ Correct</div>';
                                } else if (idx === answer.userAnswer && !answer.isCorrect) {
                                    optionClass += ' wrong-option';
                                    explanation = `<div class="text-sm text-slate-300 mt-2 break-words">❌ ${answer.whyWrong[idx]}</div>`;
                                    badge = '<div class="text-red-300 font-bold text-sm flex-shrink-0">✗ Your Answer</div>';
                                } else if (answer.whyWrong && answer.whyWrong[idx]) {
                                    explanation = `<div class="text-sm text-slate-400 mt-2 break-words opacity-75">❌ ${answer.whyWrong[idx]}</div>`;
                                }
                                
                                return `
                                    <div class="${optionClass}">
                                        <div class="flex items-start justify-between gap-2">
                                            <div class="flex items-start gap-2 min-w-0 flex-1">
                                                <div class="font-bold text-white flex-shrink-0">${letters[idx]}</div>
                                                <div class="min-w-0">
                                                    <div class="text-white break-words">${option}</div>
                                                    ${explanation}
                                                </div>
                                            </div>
                                            ${badge}
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                            ${answer.userAnswer === -1 ? `
                                <div class="bg-yellow-900 border border-yellow-600 rounded-lg p-3 mt-2">
                                    <div class="text-yellow-300 text-sm font-semibold">⏰ Time expired — no answer selected</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }
        
        container.appendChild(reviewItem);
    });
}

function backToResults() {
    showScreen('result-screen');
}