"use strict";
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const deleteBtn = document.querySelector(".btn-danger");
const tbody = document.querySelector("#tbody");
const showPetBtn = document.getElementById("healthy-btn");
let petArr = [];
let data;

// asm2
const nav = document.getElementById("sidebar");
nav.addEventListener("mouseover", function () {
  nav.classList.toggle("active");
});
nav.addEventListener("mouseout", function () {
  nav.classList.add("active");
});
// tim id lon nhat

// petArr.reduce((acc, cur) => {
//   if (acc.id > cur.id) {
//     return acc.id;
//   } else {
//     return cur.id;
//   }
// });
// kiem tra id unique
// let dl1 = {
//   id: 1,
//   petName: "jjkl",
//   age: 2,
//   type: "dog",
//   weight: 1,
//   petLength: 1,
//   color: "black",
//   breed: "tabby",
//   vaccinated: true,
//   dewormed: true,
//   sterilized: true,
//   date: new Date().toLocaleDateString(),
// };
const isSameId = function (element) {
  // console.log(element.id);
  return element.id == data.id;
};

const validate = function (dataObj) {
  let check = petArr.some(isSameId);
  if (check == true) {
    // console.log(check, typeof check);
    alert("ID must unique!");
    return false;
  } else if (dataObj.id == "" || dataObj.petName == "") {
    alert("Please fill the form!");
    return false;
  } else if (dataObj.age < 1 || dataObj.age > 15 || isNaN(dataObj.age)) {
    alert("Age must be between 1 and 15!");
    return false;
  } else if (
    dataObj.weight < 1 ||
    dataObj.weight > 15 ||
    isNaN(dataObj.weight)
  ) {
    alert("Weight must be between 1 and 15!");
    return false;
  } else if (
    dataObj.petLength < 1 ||
    dataObj.petLength > 100 ||
    isNaN(dataObj.petLength)
  ) {
    alert("Length must be between 1 and 100!");
    return false;
  } else if (dataObj.type === "Select Type") {
    alert("Please select Type!");
    return false;
  } else if (dataObj.breed === "Select Breed") {
    alert("Please select Breed!");
    return false;
  } else {
    return true;
  }
};
submitBtn.addEventListener("click", function (e) {
  data = {
    id: idInput.value,
    petName: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    petLength: parseInt(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    date: new Date().toLocaleDateString(),
  };
  if (validate(data)) {
    petArr.push(data);
    renderTableData(petArr);
    clearInput();
  } else {
    console.log(data);
  }
});
// ham lam moi lai form input
function clearInput() {
  idInput.value = "";
  typeInput.value = "Select Type";
  vaccinatedInput.checked = false;
  nameInput.value = "";
  ageInput.value = "";
  weightInput.value = "";
  lengthInput.value = "";
  breedInput.value = "Select Breed";
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
}
// ham hien tdi pet
function renderTableData(array) {
  tbody.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <tr>
    <th scope="col">P0${array[i].id}</th>
    <td scope="col">${array[i].petName}</td>
    <td scope="col">${array[i].age}</td>
    <td scope="col">${array[i].type}</td>
    <td scope="col">${array[i].weight}</td>
    <td scope="col">${array[i].petLength}</td>
    <td scope="col">${array[i].breed}</td>
    <td scope="col">${array[i].color}</td>
    <td scope="col" ><i class="bi ${
      array[i].vaccinated == true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    } "></i></td>
    <td><i class="bi ${
      array[i].dewormed == true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    } "></i></td>
    <td scope="col" ><i class="bi ${
      array[i].sterilized == true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    } "></i></td>
   
    <td style="min-widtd: 115px">${array[i].date}</td>
    <td scope="col">
    <button type ="button" class="btn btn-danger" onclick ="deletePet(${
      array[i].id
    })">
    Delete</button>
    </td>
  </tr>`;
    tbody.appendChild(row);
  }
}
// ham xoa pet
function deletePet(id) {
  if (confirm("Are you sure?")) {
    petArr.splice(
      petArr.findIndex((element) => {
        console.log(element.id, id);
        return element.id == id;
      }),
      1
    );
    renderTableData(petArr);
  }
}
let healthyPetArr = [];
let healthyCheck = false;

// tao eventHandler show heathypet
showPetBtn.addEventListener("click", function () {
  if (healthyCheck == false) {
    showPetBtn.textContent = "Show Heathy Pet";
    renderTableData(petArr);
    healthyCheck = true;
  } else if (healthyCheck == true) {
    showPetBtn.textContent = "Show All Pet";
    healthyPetArr = petArr.filter((el) => el.vaccinated);
    renderTableData(healthyPetArr);
    healthyCheck = false;
  }
});

// tao btn tinh BMI
// const BmiEl = document.querySelector("#bmi");
// const calBmiBtn = document.getElementById("bmi-btn");

// calBmiBtn.addEventListener("click", function () {
//   console.log("calBmiBtn");
//   let dog = petArr
//     .filter((el) => el.type == "Dog")
//     .map((el) => {
//       el.bmi = (el.weight * 703) / el.petLength ** 2;
//       el.bmi = +el.bmi.toFixed(2);
//       console.log(el);
//       return el;
//     });
//   let cat = petArr
//     .filter((el) => el.type == "Cat")
//     .map((el) => {
//       el.bmi = (el.weight * 886) / el.petLength ** 2;
//       el.bmi = +el.bmi.toFixed(2);
//       console.log(el);
//       return el;
//     });
//   console.log(dog);

//   let petCalBmiArr = dog.concat(cat);
//   console.log(petCalBmiArr);
//   renderTableData(petCalBmiArr);
// });
