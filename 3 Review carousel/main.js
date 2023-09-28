const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://picsum.photos/id/237/200",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci natus quam est, exercitationem earum necessitatibus culpa reiciendis eveniet quia ipsa cumque, quod incidunt vitae quaerat ratione repellendus, in consequuntur!",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://picsum.photos/id/238/200",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat vel asperiores, quae reprehenderit, laborum expedita voluptatum, ullam ea soluta iure provident porro molestias eligendi quam nulla cumque similique illo maiores.",
  },
  {
    id: 3,
    name: "petter jones",
    job: "intern",
    img: "https://picsum.photos/id/239/200",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis, ducimus quisquam voluptas nulla qui sapiente magnam dolorum optio necessitatibus et soluta itaque tenetur recusandae expedita dignissimos tempore, eum rerum.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://picsum.photos/id/240/200",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum incidunt ratione magnam iste nisi! Labore blanditiis sequi, autem earum non veritatis est, corrupti omnis cupiditate obcaecati perspiciatis in quis ab!",
  },
];

let number = 0;

const nextReview = document.querySelector(".forward");
const previousReview = document.querySelector(".back");
const image = document.querySelector("img");
const personName = document.querySelector(".name");
const profession = document.querySelector(".profession");
const textReview = document.querySelector(".text");
const supriseMeButton = document.querySelector(".suprise_me");

const changeReview = (elem) => {
  if (elem === nextReview) {
    if (number === reviews.length - 1) {
      number = 0;
    } else {
      number++;
    }
    updateReview(number);
  } else if (elem === previousReview) {
    if (number === 0) {
      number = reviews.length - 1;
    } else {
      number--;
    }
    updateReview(number);
  }
};

const updateReview = (number) => {
  image.src = reviews[number].img;
  personName.textContent = reviews[number].name;
  profession.textContent = reviews[number].job;
  textReview.textContent = reviews[number].text;
};

document.querySelectorAll(".arrows i").forEach((elem) =>
  elem.addEventListener("click", () => {
    changeReview(elem);
  })
);
supriseMeButton.addEventListener("click", () => {
  number = Math.floor(Math.random() * reviews.length);
  updateReview(number);
});
addEventListener("DOMContentLoaded", () => {
  updateReview(number);
});
