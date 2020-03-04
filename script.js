const nameInput = document.getElementById("name");
const taskInput = document.getElementById("task");
const dateInput = document.getElementById("dueDate");
const submitInput = document.getElementById("submit");

const output = document.getElementById("cars");

for (var i = 0; i < localStorage.length; i++) {
        
        
    var key = localStorage.key(i);
    var dataOutput = localStorage.getItem(key);
        
        
    output.innerHTML += `<option value="${key}">${dataOutput}</option>`;

}



submitInput.onclick = function () {
    
    console.log("Hei");
    var name = nameInput.value;
    var task = taskInput.value;
    
    localStorage.setItem(name, task);
    location.reload();

}