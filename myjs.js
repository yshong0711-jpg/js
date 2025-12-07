const input= document.getElementById("todoInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

btn.addEventListener("click",addTodo);

function addTodo(){

    const li = document.createElement("Li");
    li.innerText = input.value;

    const del = document.createElement("button");
    del.innerText = "삭제"; 
    del.onclick = function(){
        list.removeChild(li);
    }

    li.appendChild(del);
    list.appendChild(li);

    input.value="";
}