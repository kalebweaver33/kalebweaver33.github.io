// Get the form and input fields from the page.
const nameForm = document.getElementById("name_form");
const firstNameField = document.getElementById("first_name");
const middleInitialField = document.getElementById("middle_initial");
const lastNameField = document.getElementById("last_name");

// Get the greeting and output containers from the page.
const greeting = document.getElementById("greeting");
const loopOutput = document.getElementById("loop_output");
const parityOutput = document.getElementById("parity_output");

// Run the following instructions when the form is submitted.
nameForm.addEventListener("submit", function(event) {
    // Prevent the form from refreshing the page.
    event.preventDefault();

    // Get the values entered by the user.
    const firstName = firstNameField.value.trim();
    const middleInitial = middleInitialField.value.trim();
    const lastName = lastNameField.value.trim();

    // Start the full name with the first name.
    let fullName = firstName;

    // Add the middle initial and period only when one was entered.
    if (middleInitial !== "") {
        fullName += " " + middleInitial + ".";
    }

    // Add the last name.
    fullName += " " + lastName;

    // Replace the original greeting with the personalized greeting.
    greeting.textContent =
        "Welcome to Krafty Weasel Web Works, " + fullName + "!";

    // Clear the Part I output before generating new lines.
    loopOutput.innerHTML = "";

    // Generate 125 identical Krafty Weasel lines.
    for (let iCounter = 1; iCounter <= 125; iCounter++) {
        const line = document.createElement("p");
        line.textContent = iCounter + ") Krafty Weasel";
        loopOutput.appendChild(line);
    }

    // Ask the user how high they want to count.
    const countInput = prompt(
        "How high do you want to count, " + firstName + "?"
    );

    // Convert the user's answer into a number.
    let count = Number(countInput);

    // Use 10 if the user enters an invalid number.
    if (!Number.isInteger(count) || count < 1) {
        count = 10;
    }

    // Clear the Part II output before generating new results.
    parityOutput.innerHTML = "";

    // Count from 1 to the number entered by the user.
    for (let iCounter = 1; iCounter <= count; iCounter++) {
        const line = document.createElement("p");

        // Check whether the current number is even or odd.
        if (iCounter % 2 === 0) {
            line.textContent =
                iCounter + ") Krafty Weasel - the number is even";
        } else {
            line.textContent =
                iCounter + ") Krafty Weasel - the number is odd";
        }

        // Add the result to the page.
        parityOutput.appendChild(line);
    }
});

// Run the following instructions when the form is reset.
nameForm.addEventListener("reset", function() {
    // Restore the original greeting.
    greeting.textContent = "Welcome to Krafty Weasel Web Works!";

    // Clear both output sections.
    loopOutput.innerHTML = "";
    parityOutput.innerHTML = "";
});
