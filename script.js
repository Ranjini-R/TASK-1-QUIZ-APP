const quizData = [
    {
      question: 'What is the capital of France?',
      answers: [
        { text: 'Paris', correct: true },
        { text: 'Madrid', correct: false },
        { text: 'Berlin', correct: false },
        { text: 'Rome', correct: false }
      ]
    },
    {
      question: 'Which planet is known as the Red Planet?',
      answers: [
        { text: 'Venus', correct: false },
        { text: 'Mars', correct: true },
        { text: 'Jupiter', correct: false },
        { text: 'Saturn', correct: false }
      ]
    },
    // Add more questions and answers as needed
  ];
  
  let currentQuestion = 0;
  const questionContainer = document.getElementById('question-container');
  const answerButtons = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-button');
  
  function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer.correct));
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(isCorrect) {
    if (isCorrect) {
      // Handle correct answer
      // For example, increment score
      console.log('Correct!');
    } else {
      // Handle wrong answer
      console.log('Wrong!');
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion(quizData[currentQuestion]);
    } else {
      // Display quiz completion message or score
      console.log('Quiz completed!');
      nextButton.innerText = 'Restart';
      currentQuestion = 0;
    }
  }
  
  nextButton.addEventListener('click', () => {
    if (nextButton.innerText === 'Restart') {
      nextButton.innerText = 'Next';
    }
    showQuestion(quizData[currentQuestion]);
  });
  
  showQuestion(quizData[currentQuestion]);
  