let input = document.querySelector(".search");
let item = document.querySelectorAll(".list_item");

let searchFun = () => {
  item.forEach((element) => {
    if (element.textContent.toLowerCase().includes(input.value.toLowerCase())) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
};

input.addEventListener("keyup", searchFun);
