function caltulateLove() {
  let name1Input = document.getElementById("name1");
  let name2Input = document.getElementById("name2");
  let resetBtn = document.getElementById("button2");
  let Btn = document.getElementById("button1");
  let results = document.getElementById("result");

  if (name1 == "" && name2 == "") {
    alert("Please enter both names!!!");
  }
  if (name1 !== "" && name2 !== "") {
    let randomValue = Math.floor(Math.random() * 101);
    results.innerHTML = randomValue + "%";
  }
  resetBtn.addEventListener(
    "click",
    () => {
      name1Input.value = ""; // Clear input field
      name2Input.value = ""; // Clear input field
      results.innerHTML = "0%"; // Reset result
    },
    { once: true } // Ensure the listener is added only once
  );
}
