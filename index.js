const buttonSectionEl = document.getElementById("button-container");

for (let i = 1; i <= 20; i++) {
  const buttonChild = document.createElement("button");
  buttonChild.textContent = i;
  buttonChild.onclick = () => alert(`You clicked button number ${i}`);
  buttonSectionEl.appendChild(buttonChild);
}
