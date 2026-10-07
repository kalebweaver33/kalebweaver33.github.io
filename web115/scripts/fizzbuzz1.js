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

    for (let iCounter = 1; iCounter <= 140; iCounter++) {
        const line = document.createElement("p");

        if (
            iCounter % 3 === 0 &&
            iCounter % 5 === 0
        ) {
            line.textContent =
                iCounter + ") Weasel Krafty";
        }
        else if (iCounter % 3 === 0) {
            line.textContent =
                iCounter + ") Weasel";
        }
        else if (iCounter % 5 === 0) {
            line.textContent =
                iCounter + ") Krafty";
        }
        else {
            line.textContent =
                iCounter + ") Krafty Weasel";
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
