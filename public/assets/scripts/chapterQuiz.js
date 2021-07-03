// console.log(chapterQuizzes);

// * Global Variables
// ** score-cont
let score = 0;
let maxScore;
let curQuest = 0;
let renderScore = 0;
// ** Store User Selection for API Req

// ** Store API Res
let selectedQuiz;
const parsedQuiz = [];

// * Functions
// ** Use Switch Statement to Load in and Render Appropriate Quiz 
const createQuiz = (quiz) => {
  switch (quiz) {
    case "chptOne":
      $("#title").text("Chapter One");
      selectedQuiz = chapterQuizzes.chptOne;
      maxScore = chapterQuizzes.chptOne.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    case "chptTwo":
      $("#title").text("Chapter Two");
      selectedQuiz = chapterQuizzes.chptTwo;
      maxScore = chapterQuizzes.chptTwo.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    case "chptThree":
      $("#title").text("Chapter Three");
      selectedQuiz = chapterQuizzes.chptThree;
      maxScore = chapterQuizzes.chptThree.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    case "chptFour":
      $("#title").text("Chapter Four");
      selectedQuiz = chapterQuizzes.chptFour;
      maxScore = chapterQuizzes.chptFour.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    case "chptFive":
      $("#title").text("Chapter Five");
      selectedQuiz = chapterQuizzes.chptFive;
      maxScore = chapterQuizzes.chptFive.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    case "chptSix":
      $("#title").text("Chapter Six");
      selectedQuiz = chapterQuizzes.chptSix;
      maxScore = chapterQuizzes.chptSix.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    case "chptSeven":
      $("#title").text("Chapter Seven");
      selectedQuiz = chapterQuizzes.chptSeven;
      maxScore = chapterQuizzes.chptSeven.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    case "chptEight":
      $("#title").text("Chapter Eight");
      selectedQuiz = chapterQuizzes.chptEight;
      maxScore = chapterQuizzes.chptEight.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    case "chptNine":
      $("#title").text("Chapter Nine");
      selectedQuiz = chapterQuizzes.chptNine;
      maxScore = chapterQuizzes.chptNine.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    case "chptTen":
      $("#title").text("Chapter Ten");
      selectedQuiz = chapterQuizzes.chptTen;
      maxScore = chapterQuizzes.chptTen.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    case "chptEleven":
      $("#title").text("Chapter Eleven");
      selectedQuiz = chapterQuizzes.chptEleven;
      maxScore = chapterQuizzes.chptEleven.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    case "chptTwelve":
      $("#title").text("Chapter Twelve");
      selectedQuiz = chapterQuizzes.chptTwelve;
      maxScore = chapterQuizzes.chptTwelve.length;
      console.log(maxScore);
      console.log(selectedQuiz);
      parseRes();
      break;
    default:
      console.log("butts");
  }
};

// ** Check Local Storage For User Selected Quiz
(function checkLocal() {
  const localQuiz = localStorage.getItem("activeQuiz");
  // Display Settings elements if local storage is empty
  if (localQuiz === undefined) {
    window.location.href = "/";
    return;
  }
  console.log(localQuiz);
  // localStorage.removeItem("activeQuiz");
  localStorage.removeItem("activeQuiz");
  createQuiz(localQuiz);
  
})();


// ** parse text to make nonsense readable (not really need in this cae but it's still cool 😅)
function decode(text) {
  const el = document.createElement("div");
  el.innerHTML = text;
  text = el.innerText;
  return text;
}

// ** Parse API Res To Work Better With Updating the DOM and Store in parsedQuiz { note: wholly unnecessary since I have full control on how to input the data, but it does the job 🤷‍♀️ }
function parseRes() {
  // *** Loop Through All Questions in selectedQuiz
  for (let i = 0; i < selectedQuiz.length; i++) {
    // *** Variables
    const curQ = selectedQuiz[i];
    const curA = [];
    let correctA;
    // *** Sort Questions into a Single Array of curA
    curA.push(decode(curQ.correct_answer));
    // Loop through incorrect_answers res to add each index to curA;
    for (let j = 0; j < curQ.incorrect_answers.length; j++) {
      curA.push(decode(curQ.incorrect_answers[j]));
    }
    // *** Randomize the all questions array
    shuffleArray(curA);
    // *** Check Where Correct Answer is in the Array
    curA.forEach((item, v) => {
      if (item === curQ.correct_answer) {
        correctA = v;
        return v;
      }
    });

    // *** Create Parsed Object and Push to parsedQuiz
    const curObj = {
      question: decode(curQ.question),
      answers: curA,
      correct: correctA,
    };
    parsedQuiz.push(curObj);
  }
  // *** With parsedQuiz Fully Populated, render data to DOM
  renderQuizBetter();
}

// ** Render Quiz to DOM
function renderQuizBetter() {
  // *** Bring in Updated Value of curQuest, This Will Be Used for parsedQuiz Index
  curQuest;
  // console.log("current question index: ", curQuest);
  // *** Check If No More Questions Remain then Display UI Prompt in saveQuiz()
  if (curQuest === parsedQuiz.length) {
    saveQuiz();
    return;
  }
  // *** Variables to Create Quiz DOM
  const curQaArr = parsedQuiz[curQuest];
  console.log(curQaArr);
  const contain = $("<article>").addClass("row cont qa");
  const queAnsCont = $("<article>").addClass("col-12");
  const question = $("<h3>").text(curQaArr.question);
  const ansCont = $("<div>").addClass("row");
  const answers = $("<ul>").addClass("check").attr("id", "answers");
  // *** This Will Be Sent to makeButt to display the correct answer if the user is wrong
  const correctAns = curQaArr.answers[curQaArr.correct];
  // *** Append Elements to Each Other then to DOM
  ansCont.append(answers);
  queAnsCont.append(question, ansCont);
  contain.append(queAnsCont);
  // *** Loop Through Length of Questions to Create Appropriate Amount of Containers
  for (let i = 0; i < curQaArr.answers.length; i++) {
    const curAns = $("<li>")
      // .text(curQaArr.answers[i])
      .attr("value", i)
      .addClass("ans");
    const aTag = $("<a>")
      .attr({
        value: i,
        href: "#nxtBtn",
      })
      .text(curQaArr.answers[i]);
    curAns.append(aTag);
    answers.append(curAns);
  }
  $("#quiz").append(contain);
  $("#quiz").removeClass("hide");
  // *** Click Listener to Check Correct Answer
  // console.log("Correct", curQaArr.correct);
  $(".ans").click((event) => {
    // disable click listener if user has already clicked
    if ($("#answers").hasClass("check")) {
      // check correct/wrong answer and display appropriate response in makeButt()
      const userSelect = event.target.attributes[0].value;
      if (parseInt(userSelect) === curQaArr.correct) {
        $(event.target).css("background-color", "green");
        $("#answers").removeClass("check");
        makeButt("Correct!", null);
        score = score + 1;
        console.log({score});
        const scoreDivided = score / maxScore;
        console.log({scoreDivided});
        const scorePercentage = scoreDivided * 100;
        
        console.log({scorePercentage});
        
        
        const scoreString = scorePercentage.toString();
        if (scoreDivided < 1 ) {
          renderScore = scoreString.substring(0,2);
        } else {
          renderScore = scoreString.substring(0,3);
        }
        $("#score")[0].innerText = renderScore + "%";
      } else {
        $(event.target).css("background-color", "red");
        $("#answers").removeClass("check");
        makeButt("Wrong!", correctAns);
      }
    } else {
      return;
    }
  });
}

// ** Creates a Button That Shows Users Info and Can Load the Next Question
function makeButt(value, answ) {
  // *** Append A Button To DOM
  const betterNextContainer = `
    <article class="col-7 col-md-4 id="nxtBtn>
        <h3>${value}</h3>
        <div class="row">
            <button class="button nxt"> Next </button>
        </div>
    <article>
  `;

  $(".qa").append(betterNextContainer);
  // *** If User is Wrong, Display the Correct Answer
  if (answ !== null) {
    const betterCorrectContainer = `
      <article class="col-7 col-md-4">
        <h4 class="spacer"> Correct Answer: </h4>
        <div class="row">
          <h5 class="col cor-ans">${answ}</h5>
        </div>
      </article>
    `;
    $(".qa").append(betterCorrectContainer);
  }
  // Increase the Value of curQuest So Next Question Will Load When User Clicks
  curQuest++;
  $(".nxt").click((event) => {
    event.preventDefault();
    $(".qa").remove();
    renderQuizBetter();
  });
}
// console.dir($("#score-cont")[0].children[0]);

// ** Prompt User If They WAnt to Play Again or Save the Quiz
function saveQuiz() {
  // Update Final Score
  $("#score-cont")[0].children[0].textContent = "Final Score: " + renderScore + "%";
  $("#score-cont").removeClass("hide");

  // *** Save Score to Local Storage
  localStorage.setItem("chpt1", renderScore);
  // *** Create Container for User Options
  const saveCont = $("<section>").addClass("row cont sv-cont");
  // *** Containers for Text and Append to saveCont
  const titlesCont = $("<article>").addClass("col-12");
  const title = $("<h3>").text("Would you like to try again?");
  titlesCont.append(title);
  saveCont.append(titlesCont);
  // *** Create Container for Buttons and Append to saveCont
  const submCont = $("<article>").addClass("row");
  const butYes = $("<button>").addClass("button sv-home").text("Go Home");
  const butNo = $("<button>").addClass("button sv-again").text("Try Again");
  submCont.append(butYes, butNo);
  saveCont.append(submCont);
  // *** Append New Elements to DOM
  $("#quiz").append(saveCont);
  // *** Click Listeners for New Button
  // ?? Save Quiz Will Either Require a Login or Creating Account, data can be saved to local storage or sent to the db
  $(".sv-home").click((event) => {
    event.preventDefault();
    window.location.href = "/";
  });
  // Quiz Is Stored In Local Storage to Play Again
  $(".sv-again").click((event) => {
    event.preventDefault();
    location.reload();
  });
}

// ** Randomize array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// * Click Listeners

