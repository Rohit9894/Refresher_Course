function handleAdd() {
  const title = document.getElementById("title").value;
  const level = document.getElementById("level").value;
  if (title == "") {
    alert("Todo Cannot Be Empty");
  } else {
    let todo = {
      title,
      priority: level,
      status: "Pending",
    };
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const newTodos = [...todos, todo];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    showData();
  }
}

function showData() {
  let data = JSON.parse(localStorage.getItem("todos")) || [];
  document.querySelector("tbody").innerHTML = null;
  data.forEach((element, i) => {
    let td1 = document.createElement("td");
    td1.textContent = element.title;

    let td2 = document.createElement("td");
    td2.textContent = element.priority;

    let td3 = document.createElement("td");
    td3.textContent = element.status;
    let button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", () => {
      let deletedData = data.splice(i, 1);
      const archive = JSON.parse(localStorage.getItem("archive")) || [];
      let newData = [...archive, deletedData[0]];
      localStorage.setItem("archive", JSON.stringify(newData));
      localStorage.setItem("todos", JSON.stringify(data));
      showData();
    });
    button.setAttribute("class", "delete");
    let td4 = document.createElement("td");
    td4.append(button);

    let row = document.createElement("tr");
    row.append(td1, td2, td3, td4);

    document.querySelector("tbody").append(row);
  });
}

showData();
