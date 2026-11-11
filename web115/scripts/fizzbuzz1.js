// Get the form and input fields from the page.
const nameForm = document.getElementById("name_form");
const firstNameField = document.getElementById("first_name");
const middleInitialField = document.getElementById("middle_initial");
const lastNameField = document.getElementById("last_name");

// Get the greeting and output container from the page.
const greeting = document.getElementById("greeting");
const loopOutput = document.getElementById("loop_output");

// Build the full name from the form fields, adding the middle initial only when one was entered.
function getFullName() {
    const firstName = firstNameField.value.trim();
    const middleInitial = middleInitialField.value.trim();
    const lastName = lastNameField.value.trim();

    let fullName = firstName;

    if (middleInitial !== "") {
        fullName += " " + middleInitial + ".";
    }

    fullName += " " + lastName;

    return fullName;
}

// Return the text for one number in the FizzBuzz list.
function getFizzBuzzText(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return number + ") Weasel Krafty";
    }
    else if (number % 3 === 0) {
        return number + ") Weasel";
    }
    else if (number % 5 === 0) {
        return number + ") Krafty";
    }
    else {
        return number + ") Neither Krafty nor Weasel";
    }
}

// Fill the output container with 140 FizzBuzz lines.
function buildFizzBuzzList() {
    loopOutput.innerHTML = "";

    for (let iCounter = 1; iCounter <= 140; iCounter++) {
        const line = document.createElement("p");
        line.textContent = getFizzBuzzText(iCounter);
        loopOutput.appendChild(line);
    }
}

// Run the following instructions when the form is submitted.
nameForm.addEventListener("submit", function(event) {
    // Prevent the form from refreshing the page.
    event.preventDefault();

    // Replace the original greeting with the personalized greeting.
    greeting.textContent =
        "Welcome to Krafty Weasel Web Works, " + getFullName() + "!";

    // Generate the FizzBuzz list.
    buildFizzBuzzList();
});

// Run the following instructions when the form is reset.
nameForm.addEventListener("reset", function() {
    // Restore the original greeting.
    greeting.textContent = "Welcome to Krafty Weasel Web Works!";

    // Clear the FizzBuzz output.
    loopOutput.innerHTML = "";
});
