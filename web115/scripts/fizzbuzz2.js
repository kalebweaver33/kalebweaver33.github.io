// Function that checks whether one number is evenly divisible by another.
function checkDivision(number, divisor) {
    return number % divisor === 0;
}

// Divisors used by the FizzBuzz program.
const firstDivisor = 3;
const secondDivisor = 5;

const nameForm = document.getElementById("name_form");
const firstNameField = document.getElementById("first_name");
const middleInitialField = document.getElementById("middle_initial");
const lastNameField = document.getElementById("last_name");

const greeting = document.getElementById("greeting");
const loopOutput = document.getElementById("loop_output");

nameForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = firstNameField.value.trim();
    const middleInitial = middleInitialField.value.trim();
    const lastName = lastNameField.value.trim();

    let fullName = firstName;

    if (middleInitial !== "") {
        fullName += " " + middleInitial + ".";
    }

    fullName += " " + lastName;

    greeting.textContent =
        "Welcome to Krafty Weasel Web Works, " + fullName + "!";

    loopOutput.innerHTML = "";

    // Generate the FizzBuzz list from 1 through 140.
    for (let iCounter = 1; iCounter <= 140; iCounter++) {
        const line = document.createElement("p");

        // Check if the number is divisible by both divisors.
        if (
            checkDivision(iCounter, firstDivisor) &&
            checkDivision(iCounter, secondDivisor)
        ) {
            line.textContent = iCounter + ") Weasel Krafty";
        }

        // Check if the number is divisible by the first divisor.
        else if (checkDivision(iCounter, firstDivisor)) {
            line.textContent = iCounter + ") Weasel";
        }

        // Check if the number is divisible by the second divisor.
        else if (checkDivision(iCounter, secondDivisor)) {
            line.textContent = iCounter + ") Krafty";
        }

        // Numbers not divisible by either divisor.
        else {
            line.textContent = iCounter + ") Krafty Weasel";
        }

        loopOutput.appendChild(line);
    }
});

// Run the following instructions when the form is reset.
nameForm.addEventListener("reset", function() {
    // Restore the original greeting.
    greeting.textContent = "Welcome to Krafty Weasel Web Works!";

    // Clear the FizzBuzz output.
    loopOutput.innerHTML = "";
});
