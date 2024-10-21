const Ali = {
    name: "Ali",
    Profession: "Student",
    Age: 29,
    goal: "Become a football star",
    requiredHours: 8,
    requiredYears: 10,
    totalHoursRequired: 0,
     daysInAYear : 365,
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

