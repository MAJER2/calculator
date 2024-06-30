export function shtoRow(a, b, c) {
    const tableBody = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    tableBody.insertAdjacentHTML('beforeend', newRow);
    const rreshtiRi = tableBody.lastElementChild;

 
    rreshtiRi.getElementsByClassName("Emri")[0].innerText = a;
    rreshtiRi.getElementsByClassName("Cmimi")[0].innerText = b;
    rreshtiRi.getElementsByClassName("Ngjyra")[0].innerText = c;
}

 export function deleto(){
    for (let i = 0; i < document.querySelectorAll(".delete").length; i++) {
        document.querySelectorAll(".delete")[i].addEventListener("click", function() {
            
            document.querySelectorAll(".teDhena")[i].innerHTML = "";
           
        });
    }
}



export function modifiko() {
    for (let i = 0; i < document.querySelectorAll(".modify").length; i++) {
        document.querySelectorAll(".modify")[i].addEventListener("click", function() {
            const a = document.querySelector("#Name").value;
            const b = document.querySelector("#Price").value;
            const c = document.querySelector("#Color").value;
            
            document.querySelectorAll(".Emri")[i].innerHTML = a;
            document.querySelectorAll(".Cmimi")[i].innerHTML = b;
            document.querySelectorAll(".Ngjyra")[i].innerHTML = c;
        });
    }
}
export function meTuKlikuar() {
   
    const a = document.getElementById("Name").value;
    const b = document.getElementById("Price").value;
    const c = document.getElementById("Color").value;
    shtoRow(a, b, c);
}