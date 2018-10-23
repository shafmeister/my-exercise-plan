const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const daysOfWeekShort = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const months = ["Janruary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];


const calDays = [[null, null, null, null, 1, 2, 3], [4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30, 31]];

//Workout testing data structure
/**
let workout =
    {
        "id": 1,
        "name": "Back and Bis",
        "exercises": [
            {
                "id": 50,
                "name": "Lateral Pulls",
                "sets": [
                    {
                        "id": 5000,
                        "weight": 25,
                        "reps": 15
                    },
                    {
                        "id": 5001,
                        "weight": 40,
                        "reps": 10
                    },
                    {
                        "id": 5002,
                        "weight": 40,
                        "reps": 10
                    },
                    {
                        "id": 5003,
                        "weight": 40,
                        "reps": 10
                    }
                ]
            },
            {
                "id": 51,
                "name": "Bicep Curls",
                "sets": [
                    {
                        "id": 5004,
                        "weight": 35,
                        "reps": 15
                    },
                    {
                        "id": 5005,
                        "weight": 45,
                        "reps": 10
                    },
                    {
                        "id": 5006,
                        "weight": 45,
                        "reps": 10
                    },
                    {
                        "id": 5007,
                        "weight": 45,
                        "reps": 10
                    }
                ]
            }
        ]
    };
**/

let workout =
    {
        "id": 1,
        "name": "Back and Bis",
        "totalExercises": 6,
        "type": "Strength",
        "lastCompleted": "2012-04-23T18:25:43.511Z",
        "currentlyUsed": true
    };

export {
    months, daysOfWeek, daysOfWeekShort, workout, calDays
};