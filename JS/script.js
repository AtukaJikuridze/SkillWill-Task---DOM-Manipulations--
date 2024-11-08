const visibilityButton = document.querySelector(".visibilityButton");
const visibilityText = document.querySelector(".visibilityText");
let isVisible = true;

visibilityButton.addEventListener("click", () => {
  if (isVisible === true) {
    visibilityText.style.opacity = "0";
    isVisible = false;
    console.log(true);
    visibilityButton.innerText = "Show Text !!";
  } else {
    visibilityText.style.opacity = "1";
    isVisible = true;
    visibilityButton.innerText = "Hide Text !!";
  }
});

// ------------------------ 2 ----------------- //

const jsElementMain = document.querySelector(".jsElementMain");

const card = document.createElement("div");
const h2Tag = document.createElement("h2");
const aTag = document.createElement("a");
h2Tag.innerText = "Gandalf";
aTag.innerText = "Go to profile";
card.setAttribute("id", "card");
aTag.setAttribute("href", "#");

card.appendChild(h2Tag);
card.appendChild(aTag);

jsElementMain.appendChild(card);

// ------------------------ 3 ----------------- //

const quizQuestions = [
  {
    questionTitle: "რამდენია 2 + 2",
    answers: [
      { title: "4", isCorrect: true },
      { title: "3", isCorrect: false },
      { title: "5", isCorrect: false },
      { title: "1", isCorrect: false },
    ],
  },
  {
    questionTitle: "სად ვსწავლობთ",
    answers: [
      { title: "BlaBlu", isCorrect: false },
      { title: "skillWill", isCorrect: true },
      { title: "SasmiTv", isCorrect: false },
      { title: "BitTv", isCorrect: false },
    ],
  },
  {
    questionTitle: "არის თუარა რუსეთი ოკუპანტი",
    answers: [
      { title: "რათქმაუნდა არის", isCorrect: true },
      { title: "არ არის ", isCorrect: false },
    ],
  },
];

let quizMain = document.querySelector(".QuizMain");
let questionId = 0;
let score = 0;

function renderQuestion() {
  if (questionId < quizQuestions.length) {
    quizMain.innerHTML = `
      <h1>${quizQuestions[questionId].questionTitle}</h1>
      <div class="answers">
        ${quizQuestions[questionId].answers
          .map((e) => `<div class="answer">${e.title}</div>`)
          .join("")}
      </div>
    `;

    let answers = document.querySelectorAll(".answer");
    answers.forEach((answer) => {
      answer.addEventListener("click", (event) => {
        answers.forEach((ans) => {
          ans.style.pointerEvents = "none";
        });

        if (
          event.target.innerText ===
          quizQuestions[questionId].answers.filter(
            (e) => e.isCorrect === true
          )[0].title
        ) {
          event.target.classList.add("correct");
          score += 1;
        } else {
          event.target.classList.add("incorrect");
        }

        console.log(event.target.classList);

        setTimeout(() => {
          questionId += 1;
          renderQuestion();

          answers.forEach((ans) => {
            ans.style.pointerEvents = "auto";
          });
        }, 2000);
      });
    });
  } else {
    quizMain.innerHTML = `<div>
    <h1>ქვიზი მორჩა შენ დააგროვე ${score} ქულა ! </h1>
     <button onclick="ReloadLocation()">
        ახლიდან დაწყება
    </button>
    </div>`;
  }
}

renderQuestion();
