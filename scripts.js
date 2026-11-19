document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".newsletter form");
    var emailInput = document.querySelector(".newsletter input[type='email']");
    var message = document.querySelector(".message");

    form.noValidate = true;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var email = emailInput.value.trim();

        if (email === "") {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.textContent =
            "Thank you! Your email address " + email +
            " has been added to our mailing list!";
        emailInput.value = "";
    });
});