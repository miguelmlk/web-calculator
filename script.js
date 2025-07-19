const output = document.querySelector("#output");
document.querySelectorAll(".digit").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (output.innerHTML === "0" && value === "0") {
        output.innerHTML = "0";
    } else if (output.innerHTML === "0") {
        output.innerHTML = value;
    } else {
        output.innerHTML += value;
    }
})});