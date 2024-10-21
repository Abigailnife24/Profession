const Ali = {
    name: "Ali",
    Profession: "Student",
    Age: 29,
    goal: "Become a football star",
    requiredHours: 8,
    requiredYears: 10,
    totalHoursRequired: 0,
     daysInAYear : 365,
     yearSpentInSchool: 15,
    calculateTotalHours: function () {
        this.totalHoursRequired = this.requiredHours * this.daysInAYear * this.requiredYears;
    },

    successOrFailure: function (hours) {

        this.calculateTotalHours(); // calculate required hours
        // validate that it is a number
        if (isNaN(hours)) {
            return "Numbers only please!";
        } else if (hours >= this.totalHoursRequired) {
            return "Awesome! You will succeed";
        }
        else {
            return "Oops! You will fail";
        };
    }



};


let hours = prompt("How many hours do you think you need to get that dream of yours?");


const result = Ali.successOrFailure(hours);

alert(result);

const counselAli = (hoursWorked, yearSpentInSchool) =>{
    const requiredHours = 8 * 365 * 10; // Assuming 8 hours/day, 365 days/year, 10 years
    const isSuccessful = hoursWorked >= requiredHours;

    if(yearSpentInSchool > 20) {
        if (isSuccessful) {
            return"Congratulations! Your perseverance has paid off. Keep shining!"
        }
        else{
            return"Don't hesitate - reach out for support now!"
        }
    }

    else{
        if(isSuccesful) {
            return"You did it! Prioritize your well-being now."
        }
        else{
            return "You're doing great, keep going!"
        }
    }
}