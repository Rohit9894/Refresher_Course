let globalData = JSON.parse(localStorage.getItem("archive")) || [];
function showData(data) {
  document.querySelector("tbody").innerHTML = null;
  data.forEach((element, i) => {
    let td1 = document.createElement("td");
    td1.textContent = element.title;

    let td2 = document.createElement("td");
    td2.textContent = element.priority;

    let td3 = document.createElement("td");
    td3.textContent = element.status;

    let td4 = document.createElement("td");
    let restoreButton = document.createElement("button");
    restoreButton.innerText = "Restore";
    restoreButton.addEventListener("click", () => {
      let restoredData = globalData.splice(i, 1);
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      let newData = [...todos, restoredData[0]];
      localStorage.setItem("todos", JSON.stringify(newData));
      localStorage.setItem("archive", JSON.stringify(globalData));
      showData(globalData);
    });
    td4.append(restoreButton);
    let td5 = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      globalData.splice(i, 1);
      const todos = JSON.parse(localStorage.getItem("archive")) || [];
      localStorage.setItem("archive", JSON.stringify(globalData));
      showData(globalData);
    });
    td5.append(deleteButton);

    let row = document.createElement("tr");
    row.append(td1, td2, td3, td4, td5);

    document.querySelector("tbody").append(row);
  });
}

function handleLevel(e) {
  let value = e.target.value;
  let newData = globalData.filter((item) => item.priority == value);
  showData(newData);
}
function handleStatus(e) {
  let value = e.target.value;
  let newData = globalData.filter((item) => item.status == value);

  showData(newData);
}
showData(globalData);
