"use strict";
const appendRowButtom = document.querySelector(".append-row");
const removeRowButtom = document.querySelector(".remove-row");
const appendColumnButtom = document.querySelector(".append-column");
const removeColumnButtom = document.querySelector(".remove-column");
const table = document.querySelector(".field");
const tableBody = table.querySelector("tbody");
const MAX_ROWS = 10;
const MAX_COLUMN = 10;
const MIN_ROWS = 2;
const MIN_COLUMN = 2;
appendRowButtom.addEventListener("click", appendRow);
removeRowButtom.addEventListener("click", removeRow);
appendColumnButtom.addEventListener("click", appendColumn);
removeColumnButtom.addEventListener("click", removeColumn);
function appendRow(e) {
    const newRow = tableBody.firstChild.cloneNode(true);
    tableBody.append(newRow);
    if (tableBody.rows.length === MAX_ROWS) e.currentTarget.setAttribute("disabled", "");
    if (tableBody.rows.length > MIN_ROWS) removeRowButtom.removeAttribute("disabled");
}
function removeRow(e) {
    const removedRow = tableBody.lastChild;
    removedRow.remove();
    if (tableBody.rows.length === MIN_ROWS) e.currentTarget.setAttribute("disabled", "");
    if (tableBody.rows.length < MAX_ROWS) appendRowButtom.removeAttribute("disabled");
}
function appendColumn(e) {
    const td = document.createElement("td");
    const tableBodyArr = [
        ...tableBody.rows
    ];
    for(let i = 0; i < tableBodyArr.length; i++){
        const newTd = td.cloneNode();
        tableBodyArr[i].append(newTd);
    }
    if (tableBody.rows[0].cells.length === MAX_COLUMN) e.currentTarget.setAttribute("disabled", "");
    if (tableBody.rows[0].cells.length > MIN_COLUMN) removeColumnButtom.removeAttribute("disabled");
}
function removeColumn(e) {
    const tableBodyArr = [
        ...tableBody.rows
    ];
    for(let i = 0; i < tableBodyArr.length; i++)tableBodyArr[i].lastChild.remove();
    if (tableBody.rows[0].cells.length === MIN_COLUMN) e.currentTarget.setAttribute("disabled", "");
    if (tableBody.rows[0].cells.length < MAX_COLUMN) appendColumnButtom.removeAttribute("disabled");
}

//# sourceMappingURL=index.f75de5e1.js.map
