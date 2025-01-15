async function handleCaloriesInput(adverb) {
  const input = document.getElementById(`calories-${adverb}`);
  console.log("input :>> ", input);
  const calories = input?.value;

  console.log("calories :>> ", calories);

  const response = await fetch("http://localhost:3000/add-calories-entry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ calories, operator: adverb === "in" ? "+" : "-" }),
  });

  if (response.ok) {
    const data = await response.json();

    // Update the DOM with the total calories
    document.getElementById("total-calories").textContent = data.totalCalories;
    input.value = "";
  }
}

async function getTotalCalories() {
  const response = await fetch("http://localhost:3000/get-total-calories");

  if (response.ok) {
    const data = await response.json();

    document.getElementById("total-calories").textContent = data.totalCalories;
  }
}

getTotalCalories();

// Disable submit button if input is empty on page load
document.querySelectorAll("input[type='text']").forEach((input) => {
  const submitButton = input.nextElementSibling;
  submitButton.disabled = !input.value;
});

// Enable submit button if input is not empty
document.querySelectorAll("input[type='text']").forEach((input) => {
  input.addEventListener("input", () => {
    const submitButton = input.nextElementSibling;
    submitButton.disabled = !input.value;
  });
});
