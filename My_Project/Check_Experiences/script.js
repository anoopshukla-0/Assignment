function calculateExperience() {
    let doj = document.getElementById("doj").value;
    let result = document.getElementById("result");

    if (!doj) {
        result.innerHTML = "Please enter a valid date!";
        return;
    }

    let joiningDate = new Date(doj);
    let today = new Date();
    let experience = today.getFullYear() - joiningDate.getFullYear();

    if (today.getMonth() < joiningDate.getMonth() || 
       (today.getMonth() === joiningDate.getMonth() && today.getDate() < joiningDate.getDate())) {
        experience--; // Adjust for months and days
    }

    result.innerHTML = `You have been working for <span style="color:#ff4757">${experience} years</span>`;

    // Celebration animation if more than 5 years
    if (experience >= 5) {
        result.innerHTML += " 🎉 Congratulations!";
    }
}
