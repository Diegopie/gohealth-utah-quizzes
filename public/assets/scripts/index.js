$(".chptr").click((e) => {
  e.preventDefault();
  const activeQuiz = e.target.parentElement.dataset.quiz;
  console.dir(e.target.parentElement.dataset.quiz);
  localStorage.setItem("activeQuiz", activeQuiz);
  window.location.href = "/chapterQuiz";
});

const chptrContainer = $("#target")[0].children;
for (i = 0; i < chptrContainer.length; i++) {
  const quizScores = localStorage.getItem(`chpt${i + 1}`);
  // console.log(quizScores);
  if (quizScores !== null ) {
    chptrContainer[i].children[1].text = quizScores + "%";
  } 
}
