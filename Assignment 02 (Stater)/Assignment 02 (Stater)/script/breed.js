"use strict";

const tbody = document.querySelector("#tbody");
const breedInput = document.querySelector("#input-breed");
const submitBtn = document.getElementById("submit-btn");
const type = document.getElementById("input-type");
let data;
const breedType = [
  "Tabby",
  "Domestic Medium Hair",
  "Mixed Breed",
  "Domestic Short Hair",
  "Terrier",
  "Greyhound Persian",
  "Rottweiler",
];
let breedArray = [];
function getNewId(arr) {
  if (arr.length > 0) {
    return arr[arr.length - 1].id + 1;
  } else {
    return 1;
  }
}
// clear func
const clearBreed = function () {
  breedInput = "";
  type = "Select Type";
};
submitBtn.addEventListener("click", function () {
  data = {
    id: getNewId(breedArray),
    breedInput: breedInput.value,
    type: type.value,
  };

  if (breedInput.value == breedType[i] && type.value != "Select Type") {
    breedArray.push(data);
    console.log(breedArray);
    renderTable(breedArray);
    clearInput();
  }
});

function deleteRow(petId) {
  if (confirm("Are you sure?")) {
    let petIndex = data.findIndex(function (element, index) {
      if (petId == element.id) {
        return index;
      } else {
        return null;
      }
    });
    breedArray.splice(petIndex, 1);
  }
  renderTable(breedArray);
}

const renderTable = function (breedArray) {
  for (let pet = 0; pet < breedArray.length; pet++) {
    const row = document.createElement("tr");
    row.innerHTML = `<th scope="col">${breedArray.id}</th>
<th scope="col">${breedArray.breedInput}</th>
<th scope="col">${breedArray.type}</th>
<th scope="col">
<button
  type="button"
  class="btn btn-danger"
  onclick="deleteRow('${breedArray.id}')"
>
  Delete
</button>
</th>`;
    tbody.appendChild(row);
  }
};

/* <option>Select Breed</option>
<option>Tabby</option>
<option>Domestic Medium Hair</option>
<option>Mixed Breed</option>
<option>Domestic Short Hair</option>
<option>Terrier</option>
<option>Greyhound</option>
<option>Persian</option>
<option>Rottweiler</option>' */
// let renderTableData = function (data) {
//   tbody.innerHTML = "";
//   for (let pet = 0; pet < data.length; pet++) {
//     const row = document.createElement("tr");
