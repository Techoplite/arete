async function handleCaloriesInput(adverb) {
  const calories = document.getElementById(`calories-${adverb}`)?.value;

  const response = await fetch("http://localhost:3000/add-calories-entry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ calories, operator: adverb === "in" ? "+" : "-" }),
  });

  console.log("response :>> ", response);

  if (response.ok) {
    console.log("response :>> ", response);
    const data = await response.json();

    console.log("data :>> ", data);

    // Update the DOM with the total calories
    document.getElementById("total-calories").textContent = data.totalCalories;
  }
}
