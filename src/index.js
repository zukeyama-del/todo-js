import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
