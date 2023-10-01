// const openButton = document.querySelectorAll(".plus-icon");
// const closeButton = document.querySelectorAll(".minus-icon");
// const questionText = document.querySelectorAll(".question-text");

// const openArticle = (questionTitle, openButton, closeButton, answer) => {
//   questionTitle.style.borderBottom = "1px solid gray";
//   openButton.style.display = "none";
//   closeButton.style.display = "block";
//   answer.style.display = "block";
// };

// const closeArticle = (questionTitle, openButton, closeButton, answer) => {
//   questionTitle.style.borderBottom = "none";
//   openButton.style.display = "block";
//   closeButton.style.display = "none";
//   answer.style.display = "none";
// };

// const getInfo = (e) => {
//   const parentQuestion = e.target.closest(".question");
//   const answer = parentQuestion.querySelector(".question-text");
//   const closeButton = parentQuestion.querySelector(".minus-icon");
//   const openButton = parentQuestion.querySelector(".plus-icon");
//   const questionTitle = parentQuestion.querySelector(".question-title");

//   if (e.target.classList.contains("fa-plus")) {
//     openArticle(questionTitle, openButton, closeButton, answer);
//   } else if (e.target.classList.contains("fa-minus")) {
//     closeArticle(questionTitle, openButton, closeButton, answer);
//   }
// };

// openButton.forEach((openButton) => {
//   openButton.addEventListener("click", getInfo);
// });

// closeButton.forEach((closeButton) => {
//   closeButton.addEventListener("click", getInfo);
// });

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const title = question.querySelector(".question-title");
  const openButton = question.querySelector(".plus-icon");
  const closeButton = question.querySelector(".minus-icon");
  const answer = question.querySelector(".question-text");

  title.addEventListener("click", () => {
    const isOpen = answer.style.display === "block";
    answer.style.display = isOpen ? "none" : "block";
    openButton.style.display = isOpen ? "block" : "none";
    closeButton.style.display = isOpen ? "none" : "block";
    title.style.borderBottom = isOpen ? "none" : "1px solid gray";
  });
});
