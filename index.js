function lifeInWeeks() {
    var age = prompt("Please enter your age:");
    var yearsRemaining = 100 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have "+ days +" days, "+ weeks +" weeks and "+ months +" months")
}

lifeInWeeks();