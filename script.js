const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const formData = new FormData(form);

    const student = Object.fromEntries(formData.entries());

    console.log(student);

    alert(
`Registration Successful!

Thank you ${student["first-name"]}.

Your registration has been received successfully.`
    );

    form.reset();

});
