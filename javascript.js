
function realtimeClock() {
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    //Add AM and PM system
    var amPm = ( hours < 12 ) ? "AM" : "PM";

    //Convert the hours component to 12 hour format
    hour = (hours > 12) ? hours  - 12 : hours;

    //Pad the hours, minutes, seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //Display the clock
    document.getElementById("clock").innerHTML = hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
}

//Display date
var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Get the current month (0 for January, 1 for February, etc.)
var currentMonth = new Date().getMonth();

// Get the name of the current month
var currentMonthName = monthNames[currentMonth];

// Display content based on the current month
var content = currentMonthName;
document.getElementById("currentDate").textContent = content;

