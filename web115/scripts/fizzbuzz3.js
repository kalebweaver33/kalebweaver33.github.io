// Function that checks whether one number is evenly divisible by another.
function checkDivision(number, divisor) {
    return number % divisor === 0;
}

// Divisors and their corresponding FizzBuzz words.
const divisors = [
    { number: 3, word: "Weasel" },
    { number: 5, word: "Krafty" },
    { number: 7, word: "BANG!" }
];

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
        const results = [];

        // Check every divisor in the array.
        for (const divisor of divisors) {
            if (checkDivision(iCounter, divisor.number)) {
                results.push(divisor.word);
            }
        }

        // If the number is not divisible by any divisor,
        // use the default Krafty Weasel message.
        if (results.length === 0) {
            line.textContent = iCounter + ") Krafty Weasel";
        } else {
            line.textContent =
                iCounter + ") " + results.join(" ");
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
