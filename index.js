//import { d, numri, perfundimi } from './calculatorModule.js';
//import { shtoRow, deleto, modifiko, meTuKlikuar } from './listaModule.js';
//import { shtoListen, fshijDetyrenVjeter, pastrojiTeGjitha } from './todoModule.js';

const newRow = `
    <tr class="teDhena">
                    <td class="Emri"></td>
                    <td class="Cmimi"></td>
                    <td class="Ngjyra"></td>
                    <td>
                        <button class="action-btn modify" onclick="modifiko()">Modify</button>
                        <button class="action-btn delete" onclick="deleto()">Delete</button>
                    </td>
                </tr>
`;

function d(){
    location.reload();
   return document.querySelector(".result").innerHTML=0;
   }

 


function perfundimi() {
    const resultElement = document.querySelector(".result");
    const resultContent = resultElement.innerHTML;

    
       
    const prodhimi = resultContent.indexOf("x");

    if (prodhimi !== -1) {
         
        const numer1 = parseFloat(resultContent.slice(0, prodhimi).trim());
        const numeri2 = parseFloat(resultContent.slice(prodhimi + 1).trim());

        
        const product = numer1 * numeri2;

    
        resultElement.innerHTML = product;
    }
    
    
    const pjestimi = resultContent.indexOf("/");
    const shuma = resultContent.indexOf("+");
    const diferenca = resultContent.indexOf("-");

    if (pjestimi !== -1) {
        const numer1 = parseFloat(resultContent.slice(0, pjestimi).trim());
        const numeri2 = parseFloat(resultContent.slice(pjestimi + 1).trim());
        const division = numer1 / numeri2;
        resultElement.innerHTML = division;
    } else if (shuma !== -1) {
        const numer1 = parseFloat(resultContent.slice(0, shuma).trim());
        const numeri2 = parseFloat(resultContent.slice(shuma + 1).trim());
        const sum = numer1 + numeri2;
        resultElement.innerHTML = sum;
    } else if (diferenca !== -1) {
        const numer1 = parseFloat(resultContent.slice(0, diferenca).trim());
        const numeri2 = parseFloat(resultContent.slice(diferenca + 1).trim());
        const difference = numer1 - numeri2;
        resultElement.innerHTML = difference;
    }
    
}


function shtoRow(a, b, c) {
    const tableBody = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    tableBody.insertAdjacentHTML('beforeend', newRow);
    const rreshtiRi = tableBody.lastElementChild;

 
    rreshtiRi.getElementsByClassName("Emri")[0].innerText = a;
    rreshtiRi.getElementsByClassName("Cmimi")[0].innerText = b;
    rreshtiRi.getElementsByClassName("Ngjyra")[0].innerText = c;
}

 function deleto(){
    for (let i = 0; i < document.querySelectorAll(".delete").length; i++) {
        document.querySelectorAll(".delete")[i].addEventListener("click", function() {
            
            document.querySelectorAll(".teDhena")[i].innerHTML = "";
           
        });
    }
}



function modifiko() {
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
function meTuKlikuar() {
   
    const a = document.getElementById("Name").value;
    const b = document.getElementById("Price").value;
    const c = document.getElementById("Color").value;
    shtoRow(a, b, c);

}

function spani(){
    var nrDetyrave=document.querySelectorAll("li").length;
    return document.querySelector("span").innerText = `You have ${nrDetyrave} pending tasks`;

}


function shtoListen() {
    var ul = document.querySelector(".todo-list");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(document.querySelector('#new-todo-input').value));
    
    
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "🗑️";
    
   
    li.appendChild(deleteBtn);
  
    ul.appendChild(li);
    spani();
    
    deleteBtn.addEventListener('click', function() {
        ul.removeChild(li);
       
    });
    
}

function fshijDetyrenVjeter(){
    
    const detyraVjeter=document.querySelectorAll("li").length;
    for( let i=0;i<detyraVjeter;i++)
    document.querySelectorAll("li")[i].addEventListener("click",function(){
document.querySelectorAll("li")[i].remove();
spani();
})


 }

function pastrojiTeGjitha() {
    
    document.querySelector("#clear-all-btn").addEventListener("click", () => {
        let ul = document.querySelector(".todo-list");
          
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        spani();
    });
    
}



document.addEventListener("DOMContentLoaded", () => {
    function numri() {
        const numbers = document.querySelectorAll(".number");
        const result = document.querySelector(".result");
        let accumulatedNumber = "";
    
        numbers.forEach((number) => {
            number.addEventListener('click', () => {
                accumulatedNumber += number.innerHTML;
                result.innerHTML = accumulatedNumber;
            });
        });
    }
    
    
    numri(); 
});




