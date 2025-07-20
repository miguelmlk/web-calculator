const output = document.querySelector("#output");
let currentOperator = null;
let previousValue = null;
let operatorPressed = false;

document.querySelectorAll(".digit").forEach(button => {
	button.addEventListener("click", () => {
		const value = button.getAttribute("data-value");
		if (operatorPressed) {
			output.innerHTML = `${previousValue} ${currentOperator} ${value}`; // Append new number after operator
			operatorPressed = false;
		} else if (output.innerHTML === "0") {
			output.innerHTML = value;
		} else {
			output.innerHTML += value;
		}
	});
});

document.querySelectorAll(".operators button").forEach(button => {
	button.addEventListener("click", () => {
		const operator = button.innerHTML;

		// Prevent consecutive operators
		if (operatorPressed) return;

		if (currentOperator && previousValue !== null) {
			// Perform calculation
			const parts = output.innerHTML.split(" ");
			const currentValue = parseFloat(parts[2]); // Parse second number
			switch (currentOperator) {
				case "+":
					previousValue += currentValue;
					break;
				case "-":
					previousValue -= currentValue;
					break;
				case "*":
					previousValue *= currentValue;
					break;
				case "/":
					previousValue /= currentValue;
					break;
			}
			output.innerHTML = `${previousValue} ${operator}`;
		} else {
			// Store the current value
			previousValue = parseFloat(output.innerHTML);
			output.innerHTML = `${previousValue} ${operator}`;
		}

		// Set the current operator and flag
		currentOperator = operator;
		operatorPressed = true;
	});
});

document.querySelector(".operators button:nth-child(5)").addEventListener("click", () => {
	// "=" button logic
	if (currentOperator && previousValue !== null) {
		const parts = output.innerHTML.split(" ");
		const currentValue = parseFloat(parts[2]); // Parse second number
		switch (currentOperator) {
			case "+":
				previousValue += currentValue;
				break;
			case "-":
				previousValue -= currentValue;
				break;
			case "*":
				previousValue *= currentValue;
				break;
			case "/":
				previousValue /= currentValue;
				break;
		}
		output.innerHTML = `${previousValue}`; // Display solution
		currentOperator = null; // Reset operator
		operatorPressed = false; // Reset flag
		previousValue = null; // Reset previous value
	}
});

const themeButtons = document.querySelectorAll(".theme");
themeButtons.forEach(button => {
	button.addEventListener("click", () => {
		if (button.classList.contains("default")) {
			document.body.style.backgroundImage = "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)";
			document.querySelectorAll("button:not(.theme)").forEach(btn => {
				btn.style.background = "linear-gradient(to bottom, #4facfe, #00f2fe)";
				btn.style.color = "white";
			});
			document.querySelector("h1").style.background = "linear-gradient(90deg, #4facfe, #00f2fe)";
			document.querySelector("#output").style.background = "linear-gradient(to right, #e3f2fd, #bbdefb)";
			document.querySelector("#output").style.border = "2px solid #4facfe";
			document.querySelector("#output").style.color = "#000";
		} else if (button.classList.contains("green")) {
			document.body.style.backgroundImage = "linear-gradient(to right, #43cea2 0%, #185a9d 100%)";
			document.querySelectorAll("button:not(.theme)").forEach(btn => {
				btn.style.background = "linear-gradient(to bottom, #43cea2, #185a9d)";
				btn.style.color = "white";
			});
			document.querySelector("h1").style.background = "linear-gradient(90deg, #43cea2, #185a9d)";
			document.querySelector("#output").style.background = "linear-gradient(to right, #e8f5e9, #c8e6c9)";
			document.querySelector("#output").style.border = "2px solid #43cea2";
			document.querySelector("#output").style.color = "#000";
		} else if (button.classList.contains("red")) {
			document.body.style.backgroundImage = "linear-gradient(to right, #ff512f 0%, #dd2476 100%)";
			document.querySelectorAll("button:not(.theme)").forEach(btn => {
				btn.style.background = "linear-gradient(to bottom, #ff512f, #dd2476)";
				btn.style.color = "white";
			});
			document.querySelector("h1").style.background = "linear-gradient(90deg, #ff512f, #dd2476)";
			document.querySelector("#output").style.background = "linear-gradient(to right, #ffebee, #ffcdd2)";
			document.querySelector("#output").style.border = "2px solid #ff512f";
			document.querySelector("#output").style.color = "#000";
		}
	});
});
