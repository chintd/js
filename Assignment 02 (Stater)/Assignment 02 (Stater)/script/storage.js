"use strict";
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}
function getFromStorage(key) {
  return localStorage.getItem(key);
}

// localStorage.setItem("listname", "[]");
// Retrieve

// function render() {}

// function add() {
//   var name = document.getElementById("name").value;
//   var listname = JSON.parse(localStorage.getItem("listname"));
//   listname.push(name);
//   localStorage.setItem("listname", JSON.stringify(listname));
//   console.log(listname);
// }
// function isJsonString(str) {
//   try {
//     JSON.parse(str);
//   } catch (e) {
//     return false;
//   }
//   return true;
// }
