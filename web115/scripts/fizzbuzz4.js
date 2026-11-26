// Function that checks whether one number is evenly divisible by another.
function checkDivision(number, divisor) {
    return number % divisor === 0;
}

const nameForm = document.getElementById("name-form");
const firstNameField = document.getElementById("first-name");
const middleInitialField = document.getElementById("middle-name");
const lastNameField = document.getElementById("last-name");

const greeting = document.getElementById("greeting");
const loopOutput = document.getElementById("loop-output");

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

    // Divisors and their corresponding words, read from the form.
    const divisors = [
        {
            number: parseInt(document.getElementById("number-1").value, 10),
            word: document.getElementById("word-1").value.trim()
        },
        {
            number: parseInt(document.getElementById("number-2").value, 10),
            word: document.getElementById("word-2").value.trim()
        },
        {
            number: parseInt(document.getElementById("number-3").value, 10),
            word: document.getElementById("word-3").value.trim()
        }
    ];

    // Word for numbers not divisible by any divisor (blank by default).
    const noMatchWord = document.getElementById("word-none").value.trim();

    // Number to start counting from and number to count up to.
    const start = parseInt(document.getElementById("start").value, 10);
    const total = parseInt(document.getElementById("total").value, 10);

    loopOutput.innerHTML = "";

    // Generate the FizzBuzz list from the start number through the chosen total.
    for (let iCounter = start; iCounter <= total; iCounter++) {
        const line = document.createElement("p");
        const results = [];

        // Check every divisor in the array.
        for (const divisor of divisors) {
            if (checkDivision(iCounter, divisor.number)) {
                results.push(divisor.word);
            }
        }

        // If the number is not divisible by any divisor,
        // use the no-match word (blank unless the user filled it in).
        if (results.length === 0) {
            line.textContent = iCounter + ") " + noMatchWord;
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
