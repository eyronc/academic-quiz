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

// Question bank combining all subjects
const quizDataBank = {
    infosec: infosecQuestions,
    intprog: intprogQuestions,
    sysadmn: sysadmnQuestions
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
    
    // For multiple choice (InfoSec & IntProg), shuffle answers and store explanations
    if (category !== 'sysadmn') {
        quizData = shuffledQuestions.map(q => {
            const shuffledAnswers = q.a.map((ans, idx) => ({
                answer: ans,
                originalIndex: idx
            }));
            const randomized = shuffle(shuffledAnswers);
            return {
                q: q.q,
                a: randomized.map(item => item.answer),
                c: randomized.findIndex(item => item.originalIndex === q.c),
                exp: q.exp || "Review this topic for better understanding."
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
    
    const q = quizData[currentQuestion];
    
    // Update UI
    document.getElementById('question-count').textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    document.getElementById('q-number').textContent = currentQuestion + 1;
    document.getElementById('question-text').textContent = q.q;
    document.getElementById('current-score').textContent = score;
    document.getElementById('streak').textContent = streak;
    
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
                    onclick="submitIdentification()" 
                    class="mt-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-all w-full"
                >
                    Submit Answer
                </button>
                <div id="identification-explanation" class="explanation-box"></div>
            </div>
        `;
        
        // Focus on input
        setTimeout(() => document.getElementById('answer-input').focus(), 100);
        
        // Enter key to submit
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
                <div class="flex items-center gap-4">
                    <div class="option-letter">${letters[index]}</div>
                    <div class="flex-1 text-lg font-medium text-white">${answer}</div>
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

// Submit Identification Answer
function submitIdentification() {
    const input = document.getElementById('answer-input');
    const submitBtn = document.querySelector('button[onclick="submitIdentification()"]');
    
    // Prevent multiple submissions
    if (input.disabled) return;
    
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = quizData[currentQuestion].a.toLowerCase();
    const explanation = quizData[currentQuestion].exp || "This is a commonly used Linux command.";
    
    // Disable input and button
    input.disabled = true;
    if (submitBtn) submitBtn.disabled = true;
    
    // Check answer
    const isCorrect = userAnswer === correctAnswer;
    
    if (isCorrect) {
        score += 1; // Changed from 2 to 1
        streak++;
        input.classList.add('correct');
        
        document.getElementById('identification-explanation').innerHTML = `
            <div class="flex items-start gap-3">
                <div class="text-2xl">✅</div>
                <div>
                    <div class="font-bold text-green-400 mb-1">Correct! +1 point</div>
                    <div class="text-slate-300">The answer is: <span class="font-mono font-bold">${correctAnswer}</span></div>
                    <div class="text-slate-400 text-sm mt-2">💡 ${explanation}</div>
                </div>
            </div>
        `;
    } else {
        streak = 0;
        input.classList.add('wrong');
        
        document.getElementById('identification-explanation').innerHTML = `
            <div class="flex items-start gap-3">
                <div class="text-2xl">❌</div>
                <div>
                    <div class="font-bold text-red-400 mb-1">Incorrect</div>
                    <div class="text-slate-300">Your answer: <span class="font-mono font-bold">${userAnswer || '(empty)'}</span></div>
                    <div class="text-slate-300">Correct answer: <span class="font-mono font-bold text-green-400">${correctAnswer}</span></div>
                    <div class="text-slate-400 text-sm mt-2">💡 ${explanation}</div>
                </div>
            </div>
        `;
    }
    
    document.getElementById('identification-explanation').classList.add('show');
    
    // Store answer
    userAnswers.push({
        question: quizData[currentQuestion].q,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
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
    const q = quizData[currentQuestion];
    const correctIndex = q.c;
    const buttons = document.querySelectorAll('.option-btn');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check if correct
    const isCorrect = selectedIndex === correctIndex;
    
    if (isCorrect) {
        score += 1; // Changed from 2 to 1
        streak++;
        buttons[selectedIndex].classList.add('correct');
    } else {
        streak = 0;
        buttons[selectedIndex].classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
    }
    
    // Show explanations
    buttons[correctIndex].querySelector('.explanation-box').innerHTML = `
        <div class="flex items-start gap-3">
            <div class="text-2xl">✅</div>
            <div class="text-white">
                <div class="font-bold text-green-300 mb-1">Correct Answer ${isCorrect ? '(+1 point)' : ''}</div>
                <div>${q.a[correctIndex]}</div>
                <div class="text-slate-300 text-sm mt-2">💡 ${q.exp || "Review this topic for better understanding."}</div>
            </div>
        </div>
    `;
    buttons[correctIndex].querySelector('.explanation-box').classList.add('show');
    
    if (!isCorrect) {
        buttons[selectedIndex].querySelector('.explanation-box').innerHTML = `
            <div class="flex items-start gap-3">
                <div class="text-2xl">❌</div>
                <div class="text-white">
                    <div class="font-bold text-red-300 mb-1">Your Answer</div>
                    <div>${q.a[selectedIndex]}</div>
                </div>
            </div>
        `;
        buttons[selectedIndex].querySelector('.explanation-box').classList.add('show');
    }
    
    // Store answer
    userAnswers.push({
        question: q.q,
        options: q.a,
        userAnswer: selectedIndex,
        correctAnswer: correctIndex,
        isCorrect: isCorrect,
        explanation: q.exp || "Review this topic for better understanding."
    });
    
    // Stop timer
    clearInterval(timerInterval);
    
    // Show next button
    document.getElementById('next-button-container').classList.remove('hidden');
    
    // Update displays
    document.getElementById('current-score').textContent = score;
    document.getElementById('streak').textContent = streak;
}

// Timer
function startTimer() {
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
    if (currentCategory === 'sysadmn') {
        const input = document.getElementById('answer-input');
        if (!input.disabled) {
            submitIdentification();
        }
    } else {
        // Auto-select as wrong for multiple choice
        const buttons = document.querySelectorAll('.option-btn');
        if (!buttons[0].disabled) {
            handleAnswer(-1); // Invalid index = wrong
        }
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
    
    // Determine rank
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
    
    // Update results screen
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
    // Update active button
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
            // Identification review
            reviewItem.innerHTML = `
                <div class="flex items-start gap-4 mb-4">
                    <div class="w-12 h-12 rounded-full ${answer.isCorrect ? 'bg-green-500' : 'bg-red-500'} flex items-center justify-center text-white font-bold flex-shrink-0">
                        ${answer.isCorrect ? '✓' : '✗'}
                    </div>
                    <div class="flex-1">
                        <h3 class="text-xl font-bold text-white mb-2">${answer.question}</h3>
                        <div class="space-y-2">
                            <div class="review-option ${answer.isCorrect ? 'correct-option' : 'wrong-option'}">
                                <div class="font-semibold text-sm ${answer.isCorrect ? 'text-green-300' : 'text-red-300'}">Your Answer:</div>
                                <div class="font-mono text-lg text-white">${answer.userAnswer || '(no answer)'}</div>
                            </div>
                            ${!answer.isCorrect ? `
                                <div class="review-option correct-option">
                                    <div class="font-semibold text-sm text-green-300">Correct Answer:</div>
                                    <div class="font-mono text-lg text-white">${answer.correctAnswer}</div>
                                </div>
                            ` : ''}
                            <div class="bg-slate-700 rounded-lg p-3 mt-2">
                                <div class="text-sm text-slate-300">💡 <strong>Explanation:</strong> ${answer.explanation}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Multiple choice review
            const letters = ['A', 'B', 'C', 'D'];
            reviewItem.innerHTML = `
                <div class="flex items-start gap-4 mb-4">
                    <div class="w-12 h-12 rounded-full ${answer.isCorrect ? 'bg-green-500' : 'bg-red-500'} flex items-center justify-center text-white font-bold flex-shrink-0">
                        ${answer.isCorrect ? '✓' : '✗'}
                    </div>
                    <div class="flex-1">
                        <h3 class="text-xl font-bold text-white mb-4">${answer.question}</h3>
                        <div class="space-y-2">
                            ${answer.options.map((option, idx) => {
                                let optionClass = 'review-option';
                                if (idx === answer.correctAnswer) {
                                    optionClass += ' correct-option';
                                } else if (idx === answer.userAnswer && !answer.isCorrect) {
                                    optionClass += ' wrong-option';
                                }
                                return `
                                    <div class="${optionClass}">
                                        <div class="flex items-center gap-3">
                                            <div class="font-bold text-white">${letters[idx]}</div>
                                            <div class="flex-1 text-white">${option}</div>
                                            ${idx === answer.correctAnswer ? '<div class="text-green-300 font-bold">✓ Correct</div>' : ''}
                                            ${idx === answer.userAnswer && !answer.isCorrect ? '<div class="text-red-300 font-bold">✗ Your Answer</div>' : ''}
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <div class="bg-slate-700 rounded-lg p-3 mt-3">
                            <div class="text-sm text-slate-300">💡 <strong>Explanation:</strong> ${answer.explanation}</div>
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