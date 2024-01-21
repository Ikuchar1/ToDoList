const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//adds task
function addTask(){
    if(inputBox.value === ""){
        alert("Must enter task first");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        inputBox.value = "";
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
}

document.getElementById("input-box").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the default Enter key behavior (e.g., form submission)
      addTask();
    }
  });

//deletes task
listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);


//saves data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();