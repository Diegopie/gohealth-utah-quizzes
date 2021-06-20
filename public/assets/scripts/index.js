// for (let i = 0; i < 3; i++) {
//   const container = `
//     <article class="col-12 spacer">
//       <div class="row">
//         <h5 class="col-9">Chapter One</h5>
//         <a class="col-3 button">80%</a>
//       </div>
//     </article>`;
// }

$(".chptr").click((e) => {
  e.preventDefault();
  const activeQuiz = e.target.parentElement.dataset.quiz;
  console.dir(e.target.parentElement.dataset.quiz);
  localStorage.setItem("activeQuiz", activeQuiz);
  window.location.href = "/playRandom";
});
