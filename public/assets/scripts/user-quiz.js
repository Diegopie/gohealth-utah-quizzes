let quizID,quizName,highScores,score=0,curQuest=0;const quizRes=[],parsedQuiz=[];function getScores(a){$.get("/api/hiScores/"+quizID).then(b=>{if(b[0]===void 0)highScores=[{username:"Be the fist to add a score",score:""}];else{const a=[];for(let c=0;c<b.length;c++){const d={username:b[c].username,score:b[c].score};a.push(d)}highScores=a}a&&($(".high").remove(),makeHigh(!1))})}function getQuiz(a,b){$("#btns").empty(),$("#rubbish").text("'s"),$("#title").text(b+" quiz");$.get(`/api/questions/${a}`).then(a=>{quizRes.push(a),parseRes()})}function parseRes(){for(let a=0;a<quizRes[0].length;a++){const b=quizRes[0][a],c=[];let d;c.push(b.correct_answer);for(let a=0;a<b.incorrect_answers.length;a++)c.push(b.incorrect_answers[a]);shuffleArray(c),c.forEach((a,c)=>{if(a===b.correct_answer)return d=c,c});const e={question:b.question,answers:c,correct:d};parsedQuiz.push(e)}renderQuizBetter()}function renderQuizBetter(){if(curQuest,curQuest===parsedQuiz.length)return void makeHigh(!0);const a=parsedQuiz[curQuest],b=$("<article>").addClass("row cont qa"),c=$("<article>").addClass("col-7 col-md-4"),d=$("<h3>").text(a.question),e=$("<div>").addClass("row"),f=$("<ul>").addClass("check").attr("id","answers"),g=a.answers[a.correct];e.append(f),c.append(d,e),b.append(c);for(let b=0;b<a.answers.length;b++){const c=$("<li>").attr("value",b).addClass("ans"),d=$("<a>").attr({value:b,href:"#nxtBtn"}).text(a.answers[b]);c.append(d),f.append(c)}$("#quiz").append(b),$("#play-cont").removeClass("hide"),$(".ans").click(b=>{if($("#answers").hasClass("check")){const c=b.target.attributes[0].value;parseInt(c)===a.correct?($(b.target).css("background-color","green"),$("#answers").removeClass("check"),makeButt("Correct!"),score+=10,$("#score")[0].innerText=score):($(b.target).css("background-color","red"),$("#answers").removeClass("check"),makeButt("Wrong!",g))}else return})}function makeButt(a,b){const c=$("<article>").addClass("col-7 col-md-4").attr("id","nxtBtn"),d=$("<h3>").text(a),e=$("<div>").addClass("row"),f=$("<button>").addClass("button nxt").text("Next");if(e.append(f),c.append(d,e),$(".qa").append(c),void 0!==b){const a=$("<article>").addClass("col-7 col-md-4"),c=$("<h4>").addClass("spacer").text("Correct Answer:"),d=$("<div>").addClass("row"),e=$("<h5>").addClass("col cor-ans").text(b);d.append(e),a.append(c,d),$(".qa").append(a)}curQuest++,$(".nxt").click(a=>{a.preventDefault(),$(".qa").remove(),renderQuizBetter()})}function makeHigh(a){$("#score-cont")[0].children[0].textContent="Final Score: "+score;const b=$("<section>").addClass("row cont high"),c=$("<article>").addClass("col-12"),d=$("<h3>").addClass("spacer").text("High Scores"),e=$("<div>").addClass("row");c.append(d,e),b.append(c);const f=$("<ul>").addClass("");for(let b=0;b<highScores.length;b++){const a=$("<li>").text(highScores[b].username+": "+highScores[b].score);f.append(a)}if(e.append(f),a){const a=$("<article>").addClass("col-12 spacer"),c=$("<div>").addClass("row"),d=$("<input>").attr({id:"high-val",type:"text",placeholder:"Enter a name to Save!"}),e=$("<button>").addClass("button sv-high").text("Save");c.append(d,e),a.append(c),b.append(a)}const g=$("<article>").addClass("col-12 spacer"),h=$("<div>").addClass("row"),i=$("<button>").addClass("button ply-again").text("Play Again");h.append(i),g.append(h),b.append(g),$("#main").append(b),$(".ply-again").click(a=>{a.preventDefault(),location.reload()}),$(".sv-high").click(a=>{a.preventDefault();const b=$("#high-val")[0].value.trim();if(""===b)return $("#valText")[0].textContent="Please Enter a Username",void $("#validateModal").modal();const c={username:b,score:score,quizID:quizID};$.post("/api/newScore/"+quizID,c).then(()=>{getScores(!0),$("#valText")[0].textContent="Your Score Has Been Saved!",$("#validateModal").modal()})})}function shuffleArray(a){for(let b=a.length-1;0<b;b--){const c=Math.floor(Math.random()*(b+1));[a[b],a[c]]=[a[c],a[b]]}}$(".quizStart").on("click",a=>{a.preventDefault(),quizID=a.target.getAttribute("data-id"),quizName=a.target.getAttribute("data-name"),getScores(),getQuiz(quizID,quizName)}),$("#play").click(a=>{a.preventDefault(),$("#quiz").removeClass("hide"),$("#play-cont").remove()});