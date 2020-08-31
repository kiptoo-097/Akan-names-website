function getAkanName() {
    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var myBirthday = document.getElementById("bdate").value;
    var gender = document.querySelector('input[name = "genders"]:checked').value;

    // var btn = gender;

    var CC = parseInt(myBirthday.substr(0, 2));
    var YY = parseInt(myBirthday.substr(2, 4));
    var MM = parseInt(myBirthday.substr(5, 7));
    var DD = parseInt(myBirthday.substr(8, 9));

    var dateOfBirth = parseInt((CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7);


    if (gender === "Male") {
        alert("Akan name: " + maleAkanNames[dateOfBirth]);
    }
    else if (gender === "Female") {
        alert("Akan name: " + femaleAkanNames[dateOfBirth]);
    }

}