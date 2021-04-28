import "./styles.css";

const onClickAdd = () => {
  // inputタグの値を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ生成
  const div = document.createElement("div");
  const p = document.createElement("p");

  // liタグに入力内容を入れる
  const li = document.createElement("li");
  li.className = "list";
  p.innerText = inputText;

  // ulタグの最後に要素を追加
  const ul = document.getElementById("imc-ul");

  // 完了ボタンもつける
  const comBtn = document.createElement("button");
  comBtn.innerText = "完了";
  comBtn.addEventListener("click", () => {
    delTodoFromImcompleteArea(comBtn.closest(".list"));

    const newDiv = document.createElement("div");
    const newLi = document.createElement("li");
    const newText = comBtn.parentElement.firstChild.textContent;
    const newBtn = document.createElement("button");
    const newP = document.createElement("p");
    console.log(newText);
    newBtn.innerText = "もどす";
    newLi.className = "list";
    newP.innerText = newText;
    newDiv.appendChild(newP);
    newDiv.appendChild(newBtn);
    newLi.appendChild(newDiv);

    document.getElementById("c-ul").appendChild(newLi);

    newBtn.addEventListener("click", () => {
      delTodoFromImcompleteArea(newBtn.closest(".list"));
    });
  });

  const delBtn = document.createElement("button");
  delBtn.innerText = "削除";
  delBtn.addEventListener("click", (e) => {
    // 押された削除ボタンの親要素を未完了リストに移動
    delTodoFromImcompleteArea(delBtn.closest(".list"));
  });

  const delTodoFromImcompleteArea = (target) => {
    const pId =
      target.closest(".list").parentElement.id === "imc-ul" ? "imc-ul" : "c-ul";
    document.getElementById(pId).removeChild(target);
  };

  div.appendChild(p);
  div.appendChild(comBtn);
  div.appendChild(delBtn);
  li.appendChild(div);
  ul.appendChild(li);

  console.log(div);
};

document.getElementById("add").addEventListener("click", () => onClickAdd());
