export function shtoListen() {
    var ul = document.querySelector(".todo-list");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(document.querySelector('#new-todo-input').value));
    
    
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "🗑️";
    
   
    li.appendChild(deleteBtn);
  
    ul.appendChild(li);
    
    
    deleteBtn.addEventListener('click', function() {
        ul.removeChild(li);
    });
}
export function fshijDetyrenVjeter(){
    const detyraVjeter=document.querySelectorAll("li").length;
    for( let i=0;i<detyraVjeter;i++)
    document.querySelectorAll("li")[i].addEventListener("click",function(){
document.querySelectorAll("li")[i].remove();
})
 }
export function pastrojiTeGjitha() {
    document.querySelector("#clear-all-btn").addEventListener("click", () => {
        let ul = document.querySelector(".todo-list");
        
    
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    });
}