// #region clickable buttons that alert the number

const buttonSectionEl = document.getElementById("button-container");

for (let i = 1; i <= 20; i++) {
  const buttonContainerEl = document.createElement("section");

  buttonContainerEl.className = "each-button";

  const buttonChild = document.createElement("button");
  buttonChild.textContent = i;
  buttonChild.onclick = () => alert(`You clicked button number ${i}`);

  buttonContainerEl.appendChild(buttonChild);
  buttonSectionEl.appendChild(buttonContainerEl);
}

// #endregion clickable buttons that alert the number

const alertClick = (i) => alert(`You clicked ${i}`);

const rawrArr = document.getElementsByClassName("rawr");

for (let i = 0; i < rawrArr.length; i++) {
  rawrArr[i].addEventListener("click", () => alertClick(i + 1));
}
