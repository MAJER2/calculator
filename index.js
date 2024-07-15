const newRow = `
    <tr class="teDhena">
        <td class="Kati"></td>
        <td class="ID"></td>
        <td class="Muret"></td>
        <td class="Tavani"></td>
        <td class="Dritare_Dyer_etj"></td>
        <td>
            <button class="action-btn modify" onclick="modifiko(this)">Modify</button>
            <button class="action-btn delete" onclick="deleto(this)">Delete</button>
        </td>
        <td class="Siperfaqia_Neto"></td>
    </tr>
`;

function shtoRow(a, b, c, d, e, s) {
    const tableBody = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    tableBody.insertAdjacentHTML('beforeend', newRow);
    const rreshtiRi = tableBody.lastElementChild;
    rreshtiRi.getElementsByClassName("Kati")[0].innerText = a;
    rreshtiRi.getElementsByClassName("ID")[0].innerText = b;
    rreshtiRi.getElementsByClassName("Muret")[0].innerText = c.split(" ");
    rreshtiRi.getElementsByClassName("Tavani")[0].innerText = d.split(" ");
    rreshtiRi.getElementsByClassName("Dritare_Dyer_etj")[0].innerText = e.split(" ");
    rreshtiRi.getElementsByClassName("Siperfaqia_Neto")[0].innerText = s;
}

function deleto(button) {
    const row = button.closest('.teDhena');
    row.remove();
}

function modifiko(button) {
    const row = button.closest('.teDhena');
    const a = document.querySelector("#Kati").value;
    const b = document.querySelector("#ID").value;
    const c = document.querySelector("#Muret").value;
    const d = document.querySelector("#Tavani").value;
    const e = document.querySelector("#Dritare_Dyer_etj").value;
    
    row.getElementsByClassName("Kati")[0].innerHTML = a;
    row.getElementsByClassName("ID")[0].innerHTML = b;
    row.getElementsByClassName("Muret")[0].innerHTML = c;
    row.getElementsByClassName("Tavani")[0].innerHTML = d;
    row.getElementsByClassName("Dritare_Dyer_etj")[0].innerHTML = e;
}

function shumaMureve() {
    let a = document.querySelector("#Muret").value;
    let b = a.split(",");
    let c = 0; 
    for (let i = 0; i < b.length; i += 2) {
        if (i + 1 < b.length) {
            c += (parseFloat(b[i]) * parseFloat(b[i + 1])); 
        }
    }
    return c; 
}

function shumaDritareve() {
    let a = document.querySelector("#Dritare_Dyer_etj").value;
    let b = a.split(",");
    let c = 0; 
    for (let i = 0; i < b.length; i += 2) {
        if (i + 1 < b.length) { 
            c += (parseFloat(b[i]) * parseFloat(b[i + 1])); 
        }
    }
    return c; 
}

function shumaTavaneve() {
    let a = document.querySelector("#Tavani").value;
    let b = a.split(",");
    let c = 0; 
    for (let i = 0; i < b.length; i += 2) {
        if (i + 1 < b.length) { 
            c += (parseFloat(b[i]) * parseFloat(b[i + 1])); 
        }
    }
    return c; 
}

function meTuKlikuar() {
    const a = document.getElementById("Kati").value;
    const b = document.getElementById("ID").value;
    const c = document.getElementById("Muret").value;
    const d = document.getElementById("Tavani").value;
    const e = document.getElementById("Dritare_Dyer_etj").value;
   
    // Calculate s based on the values of Muret, Tavani, and Dritareve
    const s = (shumaMureve() + shumaTavaneve()) - shumaDritareve();
   
    // Add a new row with the calculated values
    shtoRow(a, b, c, d, e, s);
}
