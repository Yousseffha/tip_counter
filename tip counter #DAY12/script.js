let tipBtns = document.querySelectorAll(".choices button");
let bill = document.getElementById("bill");
let numberOfPeople = document.getElementById("num-of-p");
let result = document.querySelectorAll("#amount");
let message = document.querySelectorAll("#message");
let custom = document.getElementById("custom");
let reset = document.getElementById("reset");
let people = document.getElementById("people");
let dollor = document.getElementById("$");

tipBtns.forEach((e) => {
  e.onclick = function () {
    result[0].innerHTML = "0.00";
    result[1].innerHTML = "0.00";

    let billValue = Number(bill.value);
    let tip = (billValue / 100) * e.innerHTML.replace("%", "");
    let numberOfPeopleValue = Number(numberOfPeople.value);

    if (billValue > 0 && numberOfPeopleValue > 0) {
      result[0].innerHTML = tip / numberOfPeopleValue;
      result[1].innerHTML = (billValue + tip) / numberOfPeopleValue;
    }
    if (bill.value === "") {
      bill.classList.add("error");
      message[0].classList.add("message");
    }
    if (numberOfPeople.value === "") {
      numberOfPeople.classList.add("error");
      message[1].classList.add("message");
    }
    if (result[0].innerHTML.length > 5) {
      result[0].innerHTML = result[0].innerHTML.slice(0, 4);
    }
    if (result[1].innerHTML.length > 5) {
      result[1].innerHTML = result[1].innerHTML.slice(0, 4);
    }
  };
});

bill.oninput = function () {
  message[0].classList.remove("message");
  bill.classList.remove("error");
};
numberOfPeople.oninput = function () {
  message[1].classList.remove("message");
  numberOfPeople.classList.remove("error");
};
bill.onfocus = function () {
  dollor.style.opacity = "0";
};
numberOfPeople.onfocus = function () {
  people.style.opacity = "0";
};
bill.onblur = function () {
  if (bill.value === "") {
    dollor.style.opacity = "1";
  }
};
numberOfPeople.onblur = function () {
  if (numberOfPeople.value === "") {
    people.style.opacity = "1";
  }
};

custom.oninput = function () {
  let customValue = custom.value;
  let billValue = Number(bill.value);
  let tip = (billValue / 100) * customValue;
  let numberOfPeopleValue = Number(numberOfPeople.value);

  if (billValue > 0 && numberOfPeopleValue > 0) {
    result[0].innerHTML = tip / numberOfPeopleValue;
    result[1].innerHTML = (billValue + tip) / numberOfPeopleValue;
  }
  if (bill.value === "") {
    bill.classList.add("error");
    message[0].classList.add("message");
  }
  if (numberOfPeople.value === "") {
    numberOfPeople.classList.add("error");
    message[1].classList.add("message");
  }
  if (result[0].innerHTML.length > 5) {
    result[0].innerHTML = result[0].innerHTML.slice(0, 4);
  }
  if (result[1].innerHTML.length > 5) {
    result[1].innerHTML = result[1].innerHTML.slice(0, 4);
  }
  if (customValue === "") {
    result[0].innerHTML = "0.00";
    result[1].innerHTML = "0.00";
  }
};

reset.onclick = function () {
  bill.value = "";
  numberOfPeople.value = "";
  custom.value = "";
  result[0].innerHTML = "0.00";
  result[1].innerHTML = "0.00";
  people.style.opacity = "1";
  dollor.style.opacity = "1";
};
