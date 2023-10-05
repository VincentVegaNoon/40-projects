const content = [
  {
    id: 1,
    title: "history",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nisi non nesciunt nam minima explicabo
    quis iste iusto repellat voluptatibus.`,
  },
  {
    id: 2,
    title: "vision",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempora quisquam inventore iusto tempore nisi, id libero odio modi itaque molestiae blanditiis provident natus pariatur! Ducimus sed unde omnis dolores.`,
  },
  {
    id: 3,
    title: "goals",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi assumenda quisquam laborum, quas placeat perspiciatis labore in minus corporis nemo quos nostrum distinctio a laudantium ab quibusdam alias praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempora quisquam inventore iusto tempore nisi, id libero odio modi itaque molestiae blanditiis provident natus pariatur! Ducimus sed unde omnis dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempora quisquam inventore iusto tempore nisi, id libero odio modi itaque molestiae blanditiis provident natus pariatur! Ducimus sed unde omnis dolores.`,
  },
];

const buttons = document.querySelectorAll(".button-section button");
const contentTitle = document.querySelector(".content h2");
const contentArea = document.querySelector(".content p");

const activeButton = (item) => {
  buttons.forEach((elem) => elem.classList.remove("active"));
  item.classList.add("active");
};

const changeContent = (elem) => {
  let item = elem.getAttribute("id");
  const selectedContent = content.find((contentItem) => contentItem.title === item);

  if (selectedContent) {
    contentTitle.textContent = selectedContent.title;
    contentArea.textContent = selectedContent.desc;
  }
};

buttons.forEach((elem) => {
  elem.addEventListener("click", () => {
    activeButton(elem);
    changeContent(elem);
  });
});
