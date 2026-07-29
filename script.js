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
const reading = document.getElementById("reading");
const sports = document.getElementById("sports");
const music = document.getElementById("music");
const coding = document.getElementById("coding");

const readingFields = document.getElementById("readingFields");
const sportsFields = document.getElementById("sportsFields");
const musicFields = document.getElementById("musicFields");
const codingFields = document.getElementById("codingFields");

reading.addEventListener("change", function () {

    readingFields.style.display =
        reading.checked ? "block" : "none";

});

sports.addEventListener("change", function () {

    sportsFields.style.display =
        sports.checked ? "block" : "none";

});

music.addEventListener("change", function () {

    musicFields.style.display =
        music.checked ? "block" : "none";

});

coding.addEventListener("change", function () {

    codingFields.style.display =
        coding.checked ? "block" : "none";

});
