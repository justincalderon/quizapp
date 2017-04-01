var questions = [
  {
    question: '"Finish this sentence. "Turn down for ...?"',
    answer: "what"
  },
  {
    question: "What's 10 + 10?",
    answer: 21
  },
  {
    question: "Finish this sentence. If you ain't from the Carter, then you aint from the ...?",
    answer: "hood"
  },
  {
    question: "Who likes to do Hoodrat stuff with their friends?",
    answer: "Latarian Milton"
  },
  {
    question: "Who is Andre Hicks?",
    answer: "Mac Dre"
  },
  {
    question: "Grab a juice and pop ...?",
    answer: 2
  },
  {
    question: "Who is Danny Rand?",
    answer: "Iron Fist"
  },
  {
    question: "Who is #30",
    answer: "Curry"
  },
  {
    question: "Where is the itty-city by the water?",
    answer: "Vallejo"
  },
  {
    question: "Where is platform nine and three quarters?",
    answer: "Kings Cross Station"
  }
]

for (var i = 0; i < questions.length; i++) {
  q = questions[i].question
  document.getElementById("question" + [i]).textContent = q
}

function checkScore() {
  var correct = 0;
  var incorrect = 0;
  for (var i = 0; i < questions.length; i++) {
    var answer = questions[i].answer
    var guess = document.getElementById("answer" + [i]).value
    var questionSpot = document.getElementById("question" + [i])

    if (answer == guess) {
      questionSpot.className = "correct"
      correct++
    } else {
      questionSpot.className = "incorrect"
      incorrect++
    }
  }
  document.getElementById("correct").textContent = correct
  document.getElementById("incorrect").textContent = incorrect
}
