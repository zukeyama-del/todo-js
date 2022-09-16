import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  //liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

  //完了ボタンと削除ボタンの追加
  const completebButton = document.createElement("button");
  completebButton.innerText = "完了";
  completebButton.addEventListener("click", () => {
    //押された完了ボタンを完了したTodoに移動

    //要素の削除
    deleteFromIncompleteList(completebButton.parentNode);

    const addTarget = completebButton.parentNode;

    const text = addTarget.firstElementChild.innerText;

    //div以下の初期化
    addTarget.textContent = null;

    //liタグ作成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //戻すボタンを押したときに未完了Todoに移動させる
      const backTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);

      //テキストの取得
      const text = backTarget.firstElementChild.innerText;
      const li = document.createElement("li");
      li.innerText = text;

      backTarget.textContent = null;

      backTarget.appendChild(li);
      backTarget.appendChild(completebButton);
      backTarget.appendChild(deleteButton);
      console.log(backTarget);
      document.getElementById("incomplete-list").appendChild(backTarget);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素の設定
  div.appendChild(li);
  div.appendChild(completebButton);
  div.appendChild(deleteButton);

  //未完了Todoの要素が消える関数
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
